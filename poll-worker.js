// Cloudflare Worker that stores the shared city-poll tally in Workers KV.
// Endpoints: GET /results, POST /vote {"city": "Tokyo"}, POST /admin/reset (Authorization: Bearer <ADMIN_TOKEN>).

const DEFAULT_CITIES = ["Seoul", "Tokyo", "Bangkok", "Beijing", "Shanghai", "Dubai", "Sydney", "Taipei", "Guangzhou", "Bali"];
const MAX_VOTES_PER_VOTER_PER_DAY = 3;
const MAX_VOTES_PER_IP_PER_DAY = 30;
const MAX_CUSTOM_CITIES = 60;
const CITY_NAME_PATTERN = /^[A-Za-z][A-Za-z .'-]{1,39}$/;
const VOTER_ID_PATTERN = /^[0-9a-f-]{36}$/i;
const STATE_KEY = "poll";
const TWO_DAYS_SECONDS = 172800;

function emptyState(resetId) {
  return {
    resetId,
    updated: null,
    votes: Object.fromEntries(DEFAULT_CITIES.map((city) => [city, 0])),
    custom: []
  };
}

// Votes reset at midnight Singapore time (UTC+8).
function singaporeDay() {
  return new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors }
  });
}

async function loadState(env) {
  const saved = await env.POLL.get(STATE_KEY, "json");
  return saved ?? emptyState(1);
}

async function loadVoterVotes(env, state, day, voterId) {
  const saved = await env.POLL.get(`voter:${state.resetId}:${day}:${voterId}`, "json");
  return Array.isArray(saved) ? saved : [];
}

function publicView(state, voted) {
  return { votes: state.votes, custom: state.custom, updated: state.updated, voted };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") ?? "";
    const allowedOrigins = (env.ALLOWED_ORIGINS ?? "").split(",").map((item) => item.trim()).filter(Boolean);
    const originAllowed = allowedOrigins.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": originAllowed ? origin : (allowedOrigins[0] ?? ""),
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Voter-Id, Authorization",
      Vary: "Origin"
    };
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (origin && !originAllowed && url.pathname !== "/admin/reset") {
      return json({ error: "forbidden_origin" }, 403, cors);
    }

    if (url.pathname === "/admin/reset" && request.method === "POST") {
      const token = (request.headers.get("Authorization") ?? "").replace(/^Bearer /, "");
      if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
        return json({ error: "unauthorized" }, 401, cors);
      }
      const current = await loadState(env);
      // A new resetId also gives every visitor a fresh daily allowance.
      await env.POLL.put(STATE_KEY, JSON.stringify(emptyState(current.resetId + 1)));
      return json({ ok: true, resetId: current.resetId + 1 }, 200, cors);
    }

    const voterId = request.headers.get("X-Voter-Id") ?? "";
    if (!VOTER_ID_PATTERN.test(voterId)) {
      return json({ error: "missing_voter_id" }, 400, cors);
    }
    const day = singaporeDay();

    if (url.pathname === "/results" && request.method === "GET") {
      const state = await loadState(env);
      return json(publicView(state, await loadVoterVotes(env, state, day, voterId)), 200, cors);
    }

    if (url.pathname === "/vote" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const requested = typeof body.city === "string" ? body.city.trim().replace(/\s+/g, " ") : "";
      if (!CITY_NAME_PATTERN.test(requested)) {
        return json({ error: "invalid_city" }, 400, cors);
      }

      const state = await loadState(env);
      const known = [...DEFAULT_CITIES, ...state.custom];
      const city = known.find((name) => name.toLowerCase() === requested.toLowerCase()) ?? requested;
      const voted = await loadVoterVotes(env, state, day, voterId);
      if (voted.length >= MAX_VOTES_PER_VOTER_PER_DAY) {
        return json({ error: "limit" }, 429, cors);
      }
      if (voted.includes(city)) {
        return json({ error: "duplicate" }, 409, cors);
      }

      // Coarse per-address cap so one person cannot farm votes by clearing their browser id.
      const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
      const ipKey = `ip:${state.resetId}:${day}:${ip}`;
      const ipCount = Number(await env.POLL.get(ipKey)) || 0;
      if (ipCount >= MAX_VOTES_PER_IP_PER_DAY) {
        return json({ error: "limit" }, 429, cors);
      }

      if (!known.includes(city)) {
        if (state.custom.length >= MAX_CUSTOM_CITIES) {
          return json({ error: "too_many_cities" }, 400, cors);
        }
        state.custom.push(city);
      }
      state.votes[city] = (state.votes[city] ?? 0) + 1;
      state.updated = new Date().toISOString();
      voted.push(city);

      // KV is not transactional: two votes in the same instant could overwrite each other. Acceptable for a small family poll.
      await Promise.all([
        env.POLL.put(STATE_KEY, JSON.stringify(state)),
        env.POLL.put(`voter:${state.resetId}:${day}:${voterId}`, JSON.stringify(voted), { expirationTtl: TWO_DAYS_SECONDS }),
        env.POLL.put(ipKey, String(ipCount + 1), { expirationTtl: TWO_DAYS_SECONDS })
      ]);
      return json(publicView(state, voted), 200, cors);
    }

    return json({ error: "not_found" }, 404, cors);
  }
};
