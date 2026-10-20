# Tan Family Travel Tips

A small, responsive family travel-planning website. The page opens in Simplified Chinese, with an English toggle. The planner collects travel month, departing city (Singapore, Kuala Lumpur, Kota Kinabalu, or Johor Bahru), per-person SGD budget, total number of travellers (1–20), and every selected travel-group type. It filters global city ideas using month, per-person budget, and group fit, returning up to nine recommendations with no more than three cities per country. The current destination list includes cities in Asia, Europe, Australia, the Middle East, Africa, and North and South America. A no-results message appears when none qualify.

Budget options are S$500, S$600, S$700, S$800, S$900, S$1,000, S$1,100, S$1,200, S$1,300, S$1,400, S$1,500, S$1,600, S$1,800, S$2,000, S$2,200, S$2,500, and S$3,000 per person. Each city suggests a stay duration and shows budget and mid-tier per-person estimates scaled proportionally from the destination's four-day/three-night baseline. Estimated group totals multiply those per-person estimates by the entered headcount. The age mix does not change the per-person estimate; the selected travel-group types affect destination suitability only. Estimates and the budget filter still assume departure from Singapore, regardless of the selected city. International estimates include return economy airfare, lodging, meals, local transport, and some attractions; Singapore is treated as a local staycation without airfare. These are planning estimates, not sourced or live prices. Actual costs vary by dates, trip choices, and booking.

Package-based estimates: when a city has a recorded sample in `tripPackageSamples` (Flight + Hotel package prices in SGD per person from [Trip.com packages](https://sg.trip.com/packages/?sourceFrom=IBUBundle_home&locale=en-SG&curr=SGD), with the date checked), **Budget** is the average of the cheapest 10% of packages and **Mid-Tier** is the average of the 30th–50th percentile packages. Both add the average food, transport and leisure spend for the whole trip (`dailyExpenses` per person per day × suggested days; illustrative assumptions). The site does not fetch prices live; samples are snapshots recorded by the Family Travel Planner agent (which now researches prices through Google searches). Cities with no sample use the baseline estimates and say so on the card.

Recommendation matching runs locally from the destination list in `app.js`; it does not fetch or rank live inventory. Each city card links to the [Trip.com Flight + Hotel packages](https://sg.trip.com/packages/?sourceFrom=IBUBundle_home&locale=en-SG&curr=SGD) results page pre-filled with example dates, departure and arrival codes, and headcount as adults, plus a Google search link for cross-checking package prices. Trip.com may ignore the pre-filled parameters. Example dates usually start on the 15th of the selected month, or about a week from today if the 15th has passed, and use the recommended trip length. Change passenger ages and dates on the provider site. Availability, prices, route codes, and dates should be checked directly with the providers.

The **destination explorer** replaces the previous city vote poll. Its twelve bilingual buttons cover Seoul, Tokyo, Bangkok, Beijing, Shanghai, Dubai, Sydney, Taipei, Guangzhou, Bali, Paris, and London. A city lookup field also checks names against the explorer and planner's 18 built-in destination cities, including close spelling matches; it is not a worldwide city database. A match shows broad seasonal-weather notes, cultural context, everyday-life guidance, food ideas, and four attraction images/captions. This is general inspiration, not live weather or current attraction information. Check local forecasts, opening details, and any access requirements before travelling. Remote Wikipedia lead images are tried first, then configured remote image sources and local illustrations; images are illustrative and may not depict the exact attraction.

The previous poll Worker files (`poll-worker.js` and `poll-wrangler.toml`) remain in the project but are no longer used by the website; no poll is displayed, and the site does not call the poll API. Existing Cloudflare poll data is not changed by this website update.

 

Archived poll reset API example (reference only; the website no longer uses the poll):
```powershell
curl.exe -X POST https://tan-family-poll.<account>.workers.dev/admin/reset -H "Authorization: Bearer <ADMIN_TOKEN>"
```
The legacy poll configuration is kept only for reference and is not needed to run or publish the destination explorer.

The **family notice board** lets relatives post precious moments and website suggestions. Comments are saved in each visitor's own browser (`localStorage`), so they are not shared between devices. If browser storage is unavailable or full, a submitted comment remains visible for the current page session and the site explains that it cannot persist after the page closes. A shared board would need a hosted service such as GitHub Discussions (giscus).

Each recommended city card includes two different attraction themes rather than repeating the same type of stop within the city. Images are remotely hosted (a Wikipedia lead image is tried first, then Unsplash/Wikimedia fallbacks, then a local illustration) and require an internet connection; they are illustrative and may not depict the exact attraction named in the caption.

The photo-led travel journal uses all 21 images in the family's `Past Travel Photos/` album, after the travel planner and recommendations. Its Jiufen inspiration card links to the Trip.com moment shared by the family; it is an external community story, not a claim that the pictured family photos were taken in Jiufen.

## Run locally

Open `index.html` in a browser, or serve this folder with any static-file server. The site has no build step or package dependencies.

## Publish on GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys the repository root to GitHub Pages whenever code is pushed to `main`, and can also be started manually from the repository's **Actions** tab. After this folder is pushed to `https://github.com/JeremyTanTat/TanFamilyTravelTips`, check the workflow run and the repository's **Settings → Pages** page for the published URL. Publishing the repository publicly also publishes the family photos in `Past Travel Photos/`.

## Using the Copilot agent

In GitHub Copilot Chat, select **Family Travel Planner** from the agent picker. Use it to compare destinations for your family or to research and maintain the site. For current travel rules, weather, accessibility, and bookings, verify details with linked official sources and the providers concerned.

## Recommendation guide

The global destination list, broad seasonal windows, group-fit weights, budget estimates, attraction photo references, and planning notes live in `app.js`. The results are starting points—not live weather forecasts, travel advisories, visa guidance, prices, or guarantees of accessibility. Confirm current conditions, costs, and the specific needs of your group before booking.
