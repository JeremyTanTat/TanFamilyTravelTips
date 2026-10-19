# Tan Family Travel Tips

A small, responsive family travel-planning website. The page opens in Simplified Chinese, with an English toggle. The planner collects travel month, departing city (Singapore, Kuala Lumpur, Kota Kinabalu, or Johor Bahru), per-person SGD budget, total number of travellers (1–20), and every selected travel-group type. It filters global city ideas using month, per-person budget, and group fit, returning up to nine recommendations with no more than three cities per country. The current destination list includes cities in Asia, Europe, Australia, the Middle East, Africa, and North and South America. A no-results message appears when none qualify.

Budget options are S$500, S$600, S$700, S$800, S$900, S$1,000, S$1,100, S$1,200, S$1,300, S$1,400, S$1,500, S$1,600, S$1,800, S$2,000, S$2,200, S$2,500, and S$3,000 per person. Each city suggests a stay duration and shows budget and mid-tier per-person estimates scaled proportionally from the destination's four-day/three-night baseline. Estimated group totals multiply those per-person estimates by the entered headcount. The age mix does not change the per-person estimate; the selected travel-group types affect destination suitability only. Estimates and the budget filter still assume departure from Singapore, regardless of the selected city. International estimates include return economy airfare, lodging, meals, local transport, and some attractions; Singapore is treated as a local staycation without airfare. These are planning estimates, not sourced or live prices. Actual costs vary by dates, trip choices, and booking.

Recommendation matching runs locally from the destination list in `app.js`; it does not fetch or rank live Trip.com or Skyscanner inventory. Each city card links to a Trip.com package search with the recommended destination, estimated per-person budget, headcount, and example dates added as query context. Trip.com may ignore these parameters; verify the search details and package price on the provider site. When a flight route exists, cards also link to a Skyscanner economy return search from the chosen departure airport, using the selected headcount as adults. Example dates usually start on the 15th of the selected month, or about a week from today if the 15th has passed, and use the recommended trip length. Change passenger ages and dates on the provider site. Availability, prices, route codes, and dates should be checked directly with the providers.

Each recommended city card includes two different attraction themes rather than repeating the same type of stop within the city. Images are remotely hosted on Unsplash and require an internet connection; they are illustrative and may not depict the exact attraction named in the caption.

The photo-led travel journal uses all 21 images in the family's `Past Travel Photos/` album, after the travel planner and recommendations. Its Jiufen inspiration card links to the Trip.com moment shared by the family; it is an external community story, not a claim that the pictured family photos were taken in Jiufen.

## Run locally

Open `index.html` in a browser, or serve this folder with any static-file server. The site has no build step or package dependencies.

## Publish on GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys the repository root to GitHub Pages whenever code is pushed to `main`, and can also be started manually from the repository's **Actions** tab. After this folder is pushed to `https://github.com/JeremyTanTat/TanFamilyTravelTips`, check the workflow run and the repository's **Settings → Pages** page for the published URL. Publishing the repository publicly also publishes the family photos in `Past Travel Photos/`.

## Using the Copilot agent

In GitHub Copilot Chat, select **Family Travel Planner** from the agent picker. Use it to compare destinations for your family or to research and maintain the site. For current travel rules, weather, accessibility, and bookings, verify details with linked official sources and the providers concerned.

## Recommendation guide

The global destination list, broad seasonal windows, group-fit weights, budget estimates, attraction photo references, and planning notes live in `app.js`. The results are starting points—not live weather forecasts, travel advisories, visa guidance, prices, or guarantees of accessibility. Confirm current conditions, costs, and the specific needs of your group before booking.
