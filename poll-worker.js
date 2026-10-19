// Cloudflare Worker that stores the shared city-poll tally in Workers KV.
// Endpoints: GET /results, POST /vote {"city": "Tokyo"}, POST /admin/reset (Authorization: Bearer <ADMIN_TOKEN>).

const CITIES = ["Seoul", "Tokyo", "Bangkok", "Beijing", "Shanghai", "Dubai", "Sydney", "Taipei", "Guangzhou", "Bali"];
const VOTER_ID_PATTERN = /^[0-9a-f-]{36}$/i;
const STATE_KEY = "poll";
const ONE_YEAR_SECONDS = 31536000;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Voter-Id, Authorization"
};

// Each visitor (anonymous browser id) gets one vote until the poll is reset.
function emptyState(resetId) {
  return { resetId, updated: null, votes: Object.fromEntries(CITIES.map((city) => [city, 0])) };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...CORS }
  });
}

async function loadState(env) {
  return (await env.POLL.get(STATE_KEY, "json")) ?? emptyState(1);
}

function voterKey(state, voterId) {
  return `voter:${state.resetId}:${voterId}`;
}

function publicView(state, voted) {
  return { votes: state.votes, updated: state.updated, voted };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (url.pathname === "/admin/reset" && request.method === "POST") {
      const token = (request.headers.get("Authorization") ?? "").replace(/^Bearer /, "");
      if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
        return json({ error: "unauthorized" }, 401);
      }
      const current = await loadState(env);
      // A new resetId also lets every visitor vote again.
      await env.POLL.put(STATE_KEY, JSON.stringify(emptyState(current.resetId + 1)));
      return json({ ok: true, resetId: current.resetId + 1 });
    }

    const voterId = request.headers.get("X-Voter-Id") ?? "";
    if (!VOTER_ID_PATTERN.test(voterId)) {
      return json({ error: "missing_voter_id" }, 400);
    }

    if (url.pathname === "/results" && request.method === "GET") {
      const state = await loadState(env);
      return json(publicView(state, (await env.POLL.get(voterKey(state, voterId))) ?? ""));
    }

    if (url.pathname === "/vote" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      if (!CITIES.includes(body.city)) {
        return json({ error: "invalid_city" }, 400);
      }
      const state = await loadState(env);
      if (await env.POLL.get(voterKey(state, voterId))) {
        return json({ error: "duplicate" }, 409);
      }
      state.votes[body.city] = (state.votes[body.city] ?? 0) + 1;
      state.updated = new Date().toISOString();
      // KV is not transactional: two votes in the same instant could overwrite each other. Acceptable for a small family poll.
      await Promise.all([
        env.POLL.put(STATE_KEY, JSON.stringify(state)),
        env.POLL.put(voterKey(state, voterId), body.city, { expirationTtl: ONE_YEAR_SECONDS })
      ]);
      return json(publicView(state, body.city));
    }

    return json({ error: "not_found" }, 404);
  }
};
