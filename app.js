const destinations = [
  {
    name: "Singapore",
    country: "Singapore",
    cityKey: "Singapore",
    skyscannerCode: "sin",
    budgetEstimate: { budget: 1000, midTier: 1800 },
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    strengths: { seniors: 3, mobility: 4, kids: 4, adults: 2 },
    season: "Warm year-round",
    summary: "An easy-to-navigate city break with gardens, food, and family-friendly attractions close together. Expect heat and humidity in every season.",
    tips: {
      seniors: "Plan short outings with indoor breaks and plenty of time in the air-conditioned MRT.",
      mobility: "Check step-free routes and station lift availability for each journey before heading out.",
      kids: "Gardens, the zoo, and indoor attractions offer variety; factor in heat, queues, and rest stops.",
      adults: "Mix hawker centres and neighbourhood walks with gardens and relaxed evenings."
    },
    url: "https://www.visitsingapore.com/"
  },
  {
    name: "Japan",
    country: "Japan",
    cityKey: "Tokyo",
    skyscannerCode: "tyo",
    budgetEstimate: { budget: 1800, midTier: 2800 },
    months: [3, 4, 5, 10, 11],
    strengths: { seniors: 2, mobility: 1, kids: 3, adults: 4 },
    season: "Spring or autumn",
    summary: "A rich mix of city life, gardens, and food. Popular seasons can be busy; station layouts, older buildings, and regional terrain vary significantly.",
    tips: {
      seniors: "Choose a slower itinerary with fewer hotel changes and check walking distances between sights.",
      mobility: "Contact railway operators and venues about step-free routes, lifts, and accessible facilities in advance.",
      kids: "Build in quiet breaks and choose a small number of neighbourhoods instead of rushing between sights.",
      adults: "Pair city time with a regional stay, leaving room for a slower day between travel days."
    },
    url: "https://www.japan.travel/en/"
  },
  {
    name: "Japan",
    country: "Japan",
    cityKey: "Osaka",
    skyscannerCode: "osa",
    budgetEstimate: { budget: 1700, midTier: 2700 },
    months: [3, 4, 5, 10, 11],
    strengths: { seniors: 3, mobility: 2, kids: 4, adults: 3 },
    season: "Spring or autumn",
    summary: "A lively base for food, historic sites, and family attractions. Popular areas can be crowded, so keep daily plans focused and allow time for transfers.",
    tips: {
      seniors: "Choose a central base and limit the number of neighbourhoods visited each day.",
      mobility: "Check station exits, lifts, pavement conditions, and venue access for each planned route.",
      kids: "Mix one main activity with breaks and easy meals; avoid packing the day with long transfers.",
      adults: "Explore food districts and historic sights at an unhurried pace."
    },
    url: "https://www.japan.travel/en/"
  },
  {
    name: "South Korea",
    country: "South Korea",
    cityKey: "Seoul",
    skyscannerCode: "sel",
    budgetEstimate: { budget: 1600, midTier: 2700 },
    months: [3, 4, 5, 9, 10, 11],
    strengths: { seniors: 2, mobility: 2, kids: 3, adults: 4 },
    season: "Spring or autumn",
    summary: "A mix of palaces, markets, and modern neighbourhoods. Hills, stairs, and busy transit interchanges can make some routes tiring.",
    tips: {
      seniors: "Use a convenient base and schedule one main area per outing with seated breaks.",
      mobility: "Confirm lift locations, accessible exits, and step-free routes with transit operators and venues.",
      kids: "Combine a short cultural visit with parks or indoor activities and meal breaks.",
      adults: "Balance traditional markets and palaces with relaxed evenings."
    },
    url: "https://english.visitkorea.or.kr/"
  },
  {
    name: "China",
    country: "China",
    cityKey: "Beijing",
    skyscannerCode: "bjs",
    budgetEstimate: { budget: 1500, midTier: 2500 },
    months: [3, 4, 5, 9, 10],
    strengths: { seniors: 2, mobility: 1, kids: 3, adults: 4 },
    season: "Spring or autumn",
    summary: "A history-rich capital with landmark sites and large public spaces. Distances can be substantial, and popular sights need advance planning.",
    tips: {
      seniors: "Choose fewer sights per day, stay near transport, and plan for walking distances and rest stops.",
      mobility: "Contact each site about ramps, accessible routes, toilets, and distances before booking.",
      kids: "Keep visits short and pair major historic sites with downtime and simple transfers.",
      adults: "Allow time for major historic landmarks without trying to cover the whole city at once."
    },
    url: "https://www.travelchina.org.cn/"
  },
  {
    name: "China",
    country: "China",
    cityKey: "Shanghai",
    skyscannerCode: "sha",
    budgetEstimate: { budget: 1500, midTier: 2500 },
    months: [3, 4, 5, 9, 10, 11],
    strengths: { seniors: 3, mobility: 2, kids: 3, adults: 4 },
    season: "Spring or autumn",
    summary: "A striking blend of historic lanes, riverfront architecture, and modern city sights. Crowds, heat, and long distances can affect the pace.",
    tips: {
      seniors: "Stay near a convenient metro route and leave room for breaks between neighbourhoods.",
      mobility: "Verify step-free station exits, pavements, and venue facilities for the exact itinerary.",
      kids: "Choose a few close-together sights and schedule indoor breaks during hot or rainy weather.",
      adults: "Pair classic riverfront views with a relaxed visit to an older neighbourhood."
    },
    url: "https://www.travelchina.org.cn/"
  },
  {
    name: "China",
    country: "China",
    cityKey: "Guangzhou",
    skyscannerCode: "can",
    budgetEstimate: { budget: 1300, midTier: 2200 },
    months: [10, 11, 12, 1, 2, 3, 4],
    strengths: { seniors: 3, mobility: 2, kids: 3, adults: 3 },
    season: "Autumn through spring",
    summary: "Known for Cantonese food, river scenery, and a mix of historic and modern districts. Warm, humid weather and spread-out sights call for a flexible plan.",
    tips: {
      seniors: "Stay close to transit and plan shorter outings with indoor rest stops.",
      mobility: "Check station lifts, crossings, pavements, and venue access in advance.",
      kids: "Choose a couple of nearby attractions and keep meal and nap times flexible.",
      adults: "Make time for local food and riverfront districts without overfilling each day."
    },
    url: "https://www.travelchina.org.cn/"
  },
  {
    name: "Taiwan",
    country: "Taiwan",
    cityKey: "Taipei",
    skyscannerCode: "tpe",
    budgetEstimate: { budget: 1100, midTier: 1800 },
    months: [1, 2, 3, 4, 10, 11, 12],
    strengths: { seniors: 2, mobility: 2, kids: 3, adults: 3 },
    season: "Cooler months",
    summary: "A compact mix of city culture, food, and nature. Conditions vary across the island, and rain and heat can affect outdoor plans.",
    tips: {
      seniors: "Use a city base and allow quiet time between markets, temples, and day trips.",
      mobility: "Confirm accessible station exits, pavements, and venue facilities for your specific itinerary.",
      kids: "Combine short neighbourhood visits with parks and indoor attractions for flexible days.",
      adults: "Pair time in Taipei with one slower regional stay instead of changing hotels often."
    },
    url: "https://eng.taiwan.net.tw/"
  },
  {
    name: "Thailand",
    country: "Thailand",
    cityKey: "Bangkok",
    skyscannerCode: "bkk",
    budgetEstimate: { budget: 900, midTier: 1600 },
    months: [11, 12, 1, 2],
    strengths: { seniors: 1, mobility: 1, kids: 2, adults: 3 },
    season: "Generally cooler months",
    summary: "Food, culture, and beaches offer plenty of choice, but heat, traffic, steps, and uneven footpaths can make some itineraries tiring.",
    tips: {
      seniors: "Schedule outdoor activities early, avoid rushed transfers, and prioritise accommodation with convenient transport.",
      mobility: "Ask hotels and venues about entrances, bathrooms, surfaces, and transfers rather than assuming access.",
      kids: "Plan around heat and naps, and keep travel between stops short.",
      adults: "Balance lively areas with slower days and check local conditions for each region."
    },
    url: "https://www.tourismthailand.org/"
  },
  {
    name: "France",
    country: "France",
    cityKey: "Paris",
    skyscannerCode: "cdg",
    budgetEstimate: { budget: 2600, midTier: 3900 },
    months: [4, 5, 6, 9, 10],
    strengths: { seniors: 2, mobility: 2, kids: 3, adults: 4 },
    season: "Spring or early autumn",
    summary: "Museums, gardens, and neighbourhoods offer plenty of variety. Busy streets, stairs, and long queues can make days tiring.",
    tips: {
      seniors: "Choose one or two nearby sights each day and plan seated breaks.",
      mobility: "Check step-free access at each attraction and station; older streets and metro stations vary.",
      kids: "Balance a short museum or landmark visit with parks and unstructured breaks.",
      adults: "Plan by neighbourhood and reserve popular attractions ahead where required."
    },
    url: "https://www.france.fr/en/"
  },
  {
    name: "United Kingdom",
    country: "United Kingdom",
    cityKey: "London",
    skyscannerCode: "lon",
    budgetEstimate: { budget: 2800, midTier: 4200 },
    months: [5, 6, 7, 8, 9],
    strengths: { seniors: 2, mobility: 2, kids: 3, adults: 4 },
    season: "Late spring through summer",
    summary: "Museums, parks, and historic sights are linked by public transport. The city is large, and weather can change quickly.",
    tips: {
      seniors: "Stay near an accessible transport route and keep daily sightseeing to one area.",
      mobility: "Check step-free access station by station and confirm venue access directly.",
      kids: "Use parks and free museums as flexible breaks between major sights.",
      adults: "Group visits geographically and reserve timed-entry attractions in advance."
    },
    url: "https://www.visitlondon.com/"
  },
  {
    name: "Australia",
    country: "Australia",
    cityKey: "Sydney",
    skyscannerCode: "syd",
    budgetEstimate: { budget: 2400, midTier: 3600 },
    months: [9, 10, 11, 12, 1, 2, 3, 4],
    strengths: { seniors: 3, mobility: 3, kids: 4, adults: 3 },
    season: "Spring or summer",
    summary: "Harbour views, beaches, and city attractions make a varied stay. Distances, sun exposure, and local terrain need planning.",
    tips: {
      seniors: "Choose a convenient base and allow time for ferry and public-transport connections.",
      mobility: "Confirm accessible routes and boarding arrangements for ferries, beaches, and venues.",
      kids: "Balance outdoor time with shade, water breaks, and nearby indoor options.",
      adults: "Combine harbour areas with one or two neighbourhoods rather than crossing the city repeatedly."
    },
    url: "https://www.sydney.com/"
  },
  {
    name: "United Arab Emirates",
    country: "United Arab Emirates",
    cityKey: "Dubai",
    skyscannerCode: "dxb",
    budgetEstimate: { budget: 2200, midTier: 3400 },
    months: [11, 12, 1, 2, 3],
    strengths: { seniors: 3, mobility: 3, kids: 4, adults: 3 },
    season: "Cooler months",
    summary: "Indoor attractions, shopping, and waterfront districts are varied, but heat and long distances can shape the day.",
    tips: {
      seniors: "Use air-conditioned transport and plan fewer, well-connected stops each day.",
      mobility: "Confirm accessible transfers and the distances between entrances, parking, and venues.",
      kids: "Schedule outdoor activities in cooler hours and build in downtime.",
      adults: "Pair one major attraction with a relaxed meal or waterfront visit."
    },
    url: "https://www.visitdubai.com/en/"
  },
  {
    name: "Italy",
    country: "Italy",
    cityKey: "Rome",
    skyscannerCode: "rom",
    budgetEstimate: { budget: 2500, midTier: 3800 },
    months: [4, 5, 6, 9, 10],
    strengths: { seniors: 2, mobility: 1, kids: 3, adults: 4 },
    season: "Spring or early autumn",
    summary: "Ancient landmarks, piazzas, and food make a memorable city break. Cobblestones, heat, and queues can add physical demands.",
    tips: {
      seniors: "Limit the number of major sites each day and schedule shade and seated breaks.",
      mobility: "Check cobbled surfaces, step-free routes, and accessible entrances with each site.",
      kids: "Keep visits short, carry water, and leave time for relaxed meals and breaks.",
      adults: "Book key sights ahead and leave room for slower neighbourhood exploration."
    },
    url: "https://www.italia.it/en"
  },
  {
    name: "Canada",
    country: "Canada",
    cityKey: "Vancouver",
    skyscannerCode: "yvr",
    budgetEstimate: { budget: 2800, midTier: 4200 },
    months: [6, 7, 8, 9],
    strengths: { seniors: 3, mobility: 3, kids: 4, adults: 3 },
    season: "Summer",
    summary: "A coastal city with parks, waterfront walks, and mountain views. Outdoor conditions and travel time vary by neighbourhood and excursion.",
    tips: {
      seniors: "Choose a central base and keep day trips optional to avoid long travel days.",
      mobility: "Check grades, surfaces, and accessible transport for each park and waterfront route.",
      kids: "Mix short outdoor outings with indoor attractions and rest time.",
      adults: "Use transit for city exploring and allow separate time for any out-of-town excursions."
    },
    url: "https://www.destinationvancouver.com/"
  },
  {
    name: "South Africa",
    country: "South Africa",
    cityKey: "CapeTown",
    skyscannerCode: "cpt",
    budgetEstimate: { budget: 2600, midTier: 3900 },
    months: [11, 12, 1, 2, 3],
    strengths: { seniors: 3, mobility: 2, kids: 4, adults: 4 },
    season: "Southern summer",
    summary: "Coastal scenery, gardens, and city culture offer variety. Weather, hills, and distances between attractions can shape daily plans.",
    tips: {
      seniors: "Choose a central base, allow time for transfers, and keep outdoor outings flexible.",
      mobility: "Confirm gradients, surfaces, and accessible transfers at each attraction.",
      kids: "Balance outdoor activities with rest stops and weather-flexible alternatives.",
      adults: "Choose a few nearby areas each day and check local travel advice before excursions."
    },
    url: "https://www.southafrica.net/"
  },
  {
    name: "Brazil",
    country: "Brazil",
    cityKey: "RioDeJaneiro",
    skyscannerCode: "gig",
    budgetEstimate: { budget: 2700, midTier: 4000 },
    months: [5, 6, 7, 8, 9, 10],
    strengths: { seniors: 2, mobility: 1, kids: 3, adults: 4 },
    season: "Milder, drier months",
    summary: "Beaches, city viewpoints, and cultural districts make a lively stay. Hills, heat, and local transport needs call for route planning.",
    tips: {
      seniors: "Stay near planned activities, avoid rushed transfers, and schedule shaded rest breaks.",
      mobility: "Check steep routes, surfaces, venue access, and transport arrangements in advance.",
      kids: "Plan around heat and rest, and use reputable local transport for longer trips.",
      adults: "Keep plans neighbourhood-based and check current local advice before heading out."
    },
    url: "https://visitbrasil.com/"
  }
];

const cityNames = {
  Singapore: { zh: "新加坡", en: "Singapore" },
  Tokyo: { zh: "东京", en: "Tokyo" },
  Osaka: { zh: "大阪", en: "Osaka" },
  Seoul: { zh: "首尔", en: "Seoul" },
  Beijing: { zh: "北京", en: "Beijing" },
  Shanghai: { zh: "上海", en: "Shanghai" },
  Guangzhou: { zh: "广州", en: "Guangzhou" },
  Taipei: { zh: "台北", en: "Taipei" },
  Bangkok: { zh: "曼谷", en: "Bangkok" },
  Paris: { zh: "巴黎", en: "Paris" },
  London: { zh: "伦敦", en: "London" },
  Sydney: { zh: "悉尼", en: "Sydney" },
  Dubai: { zh: "迪拜", en: "Dubai" },
  Rome: { zh: "罗马", en: "Rome" },
  Vancouver: { zh: "温哥华", en: "Vancouver" },
  CapeTown: { zh: "开普敦", en: "Cape Town" },
  RioDeJaneiro: { zh: "里约热内卢", en: "Rio de Janeiro" }
};

const departureCities = {
  singapore: { zh: "新加坡", en: "Singapore" },
  kualaLumpur: { zh: "吉隆坡", en: "Kuala Lumpur" },
  kotaKinabalu: { zh: "亚庇", en: "Kota Kinabalu" },
  johorBahru: { zh: "新山", en: "Johor Bahru" }
};

const departureAirportCodes = {
  singapore: "sin",
  kualaLumpur: "kul",
  kotaKinabalu: "bki",
  johorBahru: "jhb"
};

const cityAttractions = {
  Singapore: [
    {
      name: { zh: "滨海湾花园", en: "Gardens by the Bay" },
      alt: { zh: "新加坡滨海湾花园的城市花园景色", en: "Garden and skyline views at Gardens by the Bay in Singapore" },
      src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "鱼尾狮公园", en: "Merlion Park" },
      alt: { zh: "新加坡滨海湾附近的海滨景色", en: "A waterfront view near Singapore's Marina Bay" },
      src: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Tokyo: [
    {
      name: { zh: "东京迪士尼海洋", en: "Tokyo DisneySea" },
      alt: { zh: "东京主题乐园游览灵感", en: "Theme-park inspiration for a Tokyo visit" },
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "涩谷十字路口", en: "Shibuya Crossing" },
      alt: { zh: "东京繁忙街区的步行与城市探索灵感", en: "Urban walking and exploration inspiration in Tokyo" },
      src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Osaka: [
    {
      name: { zh: "大阪城", en: "Osaka Castle" },
      alt: { zh: "日本历史城堡与周边公园景色", en: "A historic Japanese castle and park scenery" },
      src: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "道顿堀", en: "Dotonbori" },
      alt: { zh: "大阪热闹的餐饮与运河街区", en: "A lively dining and canal-side district in Osaka" },
      src: "https://images.unsplash.com/photo-1590253230532-a67f6bc61b9e?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Seoul: [
    {
      name: { zh: "景福宫", en: "Gyeongbokgung Palace" },
      alt: { zh: "首尔宫殿建筑与历史庭院景色", en: "Palace architecture and historic courtyards in Seoul" },
      src: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "南山首尔塔", en: "N Seoul Tower" },
      alt: { zh: "首尔城市观景点与夜景灵感", en: "City-view and evening-outing inspiration in Seoul" },
      src: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Beijing: [
    {
      name: { zh: "长城", en: "Great Wall" },
      alt: { zh: "中国长城蜿蜒于山脊之上的景色", en: "The Great Wall winding along a mountain ridge in China" },
      src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "故宫", en: "Forbidden City" },
      alt: { zh: "北京历史宫殿建筑与庭院景色", en: "Historic palace architecture and courtyards in Beijing" },
      src: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Shanghai: [
    {
      name: { zh: "外滩", en: "The Bund" },
      alt: { zh: "上海外滩历史建筑与黄浦江景色", en: "Historic Bund buildings beside the Huangpu River in Shanghai" },
      src: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "豫园", en: "Yu Garden" },
      alt: { zh: "上海传统园林与亭台景色", en: "Traditional garden pavilions and scenery in Shanghai" },
      src: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Guangzhou: [
    {
      name: { zh: "广州塔", en: "Canton Tower" },
      alt: { zh: "广州现代城市天际线与高塔景色", en: "Modern skyline and tower views in Guangzhou" },
      src: "https://images.unsplash.com/photo-1537531383496-f4749b8032f2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "陈家祠", en: "Chen Clan Ancestral Hall" },
      alt: { zh: "岭南传统建筑与装饰细节灵感", en: "Traditional Lingnan architecture and decorative details" },
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Taipei: [
    {
      name: { zh: "台北101", en: "Taipei 101" },
      alt: { zh: "台北城市地标与高楼景观", en: "A landmark skyscraper and cityscape in Taipei" },
      src: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "饶河街观光夜市", en: "Raohe Street Night Market" },
      alt: { zh: "台北夜市与热闹街头美食区灵感", en: "Night-market and street-food-district inspiration in Taipei" },
      src: "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Bangkok: [
    {
      name: { zh: "曼谷寺庙", en: "Bangkok temples" },
      alt: { zh: "曼谷寺庙与城市景色", en: "A temple and city scene in Bangkok" },
      src: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "丹嫩沙多水上市场", en: "Damnoen Saduak Floating Market" },
      alt: { zh: "泰国水上市场与运河生活灵感", en: "Canal-side market and local-life inspiration in Thailand" },
      src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Paris: [
    {
      name: { zh: "埃菲尔铁塔", en: "Eiffel Tower" },
      alt: { zh: "巴黎地标与城市景观灵感", en: "Paris landmark and city-view inspiration" },
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "卢浮宫", en: "Louvre Museum" },
      alt: { zh: "巴黎博物馆建筑与文化景点灵感", en: "Museum architecture and cultural-attraction inspiration in Paris" },
      src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
    }
  ],
  London: [
    {
      name: { zh: "大本钟与威斯敏斯特", en: "Big Ben and Westminster" },
      alt: { zh: "伦敦历史地标与泰晤士河沿岸景色", en: "Historic London landmarks and River Thames scenery" },
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "伦敦眼", en: "London Eye" },
      alt: { zh: "伦敦河畔观景点与城市天际线", en: "Riverside viewpoint and city skyline in London" },
      src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Sydney: [
    {
      name: { zh: "悉尼歌剧院", en: "Sydney Opera House" },
      alt: { zh: "悉尼港湾与歌剧院城市景观", en: "Sydney Harbour and Opera House city views" },
      src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "邦迪海滩", en: "Bondi Beach" },
      alt: { zh: "悉尼海岸与沙滩景色", en: "Coastal and beach scenery in Sydney" },
      src: "https://images.unsplash.com/photo-1524293581917-04d5b6adf5d3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Dubai: [
    {
      name: { zh: "哈利法塔", en: "Burj Khalifa" },
      alt: { zh: "迪拜现代城市天际线与高楼景观", en: "Modern skyline and high-rise views in Dubai" },
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "迪拜滨海区", en: "Dubai Marina" },
      alt: { zh: "迪拜滨水步道与现代建筑景色", en: "Waterfront promenade and modern architecture in Dubai" },
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Rome: [
    {
      name: { zh: "罗马斗兽场", en: "Colosseum" },
      alt: { zh: "罗马古代地标与历史建筑景色", en: "Ancient landmark and historic architecture in Rome" },
      src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "特雷维喷泉", en: "Trevi Fountain" },
      alt: { zh: "罗马广场与巴洛克喷泉景点灵感", en: "Piazza and Baroque fountain attraction inspiration in Rome" },
      src: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Vancouver: [
    {
      name: { zh: "斯坦利公园", en: "Stanley Park" },
      alt: { zh: "温哥华海滨公园与自然景色", en: "Waterfront park and nature scenery in Vancouver" },
      src: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "加拿大广场", en: "Canada Place" },
      alt: { zh: "温哥华海港建筑与城市景色", en: "Harbour architecture and city views in Vancouver" },
      src: "https://images.unsplash.com/photo-1560814304-4f05b62b5ce4?auto=format&fit=crop&w=800&q=80"
    }
  ],
  CapeTown: [
    {
      name: { zh: "桌山", en: "Table Mountain" },
      alt: { zh: "开普敦山景与城市全景灵感", en: "Mountain and city panorama inspiration in Cape Town" },
      src: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "海滨区", en: "V&A Waterfront" },
      alt: { zh: "开普敦海港与滨水街区景色", en: "Harbour and waterfront district views in Cape Town" },
      src: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80"
    }
  ],
  RioDeJaneiro: [
    {
      name: { zh: "基督救世主像", en: "Christ the Redeemer" },
      alt: { zh: "里约热内卢山顶地标与城市景观灵感", en: "Hilltop landmark and city-view inspiration in Rio de Janeiro" },
      src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: { zh: "科帕卡巴纳海滩", en: "Copacabana Beach" },
      alt: { zh: "里约海滩与海岸线景色", en: "Beach and coastline scenery in Rio" },
      src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const translations = {
  zh: {
    brand: "Tan 家庭旅行时光",
    headerNote: "一家人，慢慢走，一起看世界",
    heroEyebrow: "下一站，一起出发",
    heroTitle: "最好的旅行，",
    heroTitleAccent: "是每个人都自在开心。",
    heroDescription: "告诉我们出行月份和同行家人，为长辈、孩子和每一位旅伴，找到更合心意的旅行灵感。",
    heroDetailOne: "适合一家老小同行",
    heroDetailTwo: "贴心又灵活的旅行灵感",
    photoKicker: "珍藏于家庭相册",
    photoTitle: "又多了一段美好故事。",
    photoMeta: "灯火中的团聚 · 2016年10月",
    photoNumber: "01 / 旅途",
    momentsEyebrow: "把旅途的小美好，收藏起来",
    momentsTitle: "我们的旅行故事",
    momentsIntro: "最珍贵的纪念，常常是沿途的新风景、一起的欢笑，还有全家人都在身边。",
    moment1Date: "2014年11月",
    moment1Title: "穿上和服的特别一天",
    moment1Text: "一家人一起准备，也成了旅行回忆的一部分。",
    moment2Date: "2015年11月",
    moment2Title: "沿着风景，慢慢走",
    moment2Text: "放慢脚步，路上的风景也值得细细欣赏。",
    moment3Date: "2018年8月",
    moment3Title: "城堡前的全家福",
    moment3Text: "停下脚步，和喜欢的人一起记住这片风景。",
    moment4Date: "2015年11月",
    moment4Title: "出发路上就很热闹",
    moment4Text: "旅程从大家坐在一起的那一刻开始。",
    moment5Date: "2016年10月",
    moment5Title: "一起玩，笑声停不下来",
    moment5Text: "旅行里最开心的活动，是大家都能参与的活动。",
    moment6Date: "2016年10月",
    moment6Title: "把全家人都装进镜头",
    moment6Text: "珍贵的城市时光，也要和家人一起分享。",
    moment7Date: "2016年10月",
    moment7Title: "把心愿写进灯火里",
    moment7Text: "夜市的热闹与一家人的笑脸，都是旅途风景。",
    moment8Date: "2018年",
    moment8Title: "童心不分年龄",
    moment8Text: "一起玩耍，让每一代人都成为主角。",
    moment9Date: "2018年8月",
    moment9Title: "旅行也要留一点留白",
    moment9Text: "找个舒服的地方坐一坐，享受安静时光。",
    moment10Date: "家庭相册",
    moment10Title: "穿上当地服饰，留下回忆",
    moment10Text: "体验一种新文化，也是一家人的共同故事。",
    moment11Date: "2015年11月",
    moment11Title: "长辈抱着小宝贝",
    moment11Text: "有家人陪伴，旅途每一站都更温暖。",
    moment12Date: "2015年12月",
    moment12Title: "车厢里的旅行时光",
    moment12Text: "坐在一起聊天，路程也变成回忆。",
    moment13Date: "2018年8月",
    moment13Title: "一家人，整装出发",
    moment13Text: "出发前集合好，旅程就从这里开始。",
    moment14Date: "家庭相册",
    moment14Title: "笑着闹着的片刻",
    moment14Text: "不经意的小插曲，最让人记得住。",
    moment15Date: "家庭相册",
    moment15Title: "人多更热闹的全家福",
    moment15Text: "把不同世代的笑脸，都留在同一张照片里。",
    moment16Date: "2014年10月",
    moment16Title: "在地球旁留下足迹",
    moment16Text: "每一次出发，都让世界变得更近一点。",
    moment17Date: "2014年10月",
    moment17Title: "长辈和小小探险家",
    moment17Text: "一起看看开阔的风景，也一起慢慢探索。",
    moment18Date: "2014年10月",
    moment18Title: "围坐一桌的好时光",
    moment18Text: "一起吃顿饭，也是旅途中很幸福的一站。",
    moment19Date: "2014年10月",
    moment19Title: "仰望城市天际线",
    moment19Text: "抬头看看建筑，也为旅程添一段城市记忆。",
    moment20Date: "家庭相册",
    moment20Title: "旅途中也要一起合张影",
    moment20Text: "休息一下，看看身边最熟悉的笑脸。",
    tripMomentKicker: "台湾旅行灵感",
    tripMomentTitle: "去九份走走，把这段旅程加入愿望清单",
    tripMomentText: "前往 Trip.com 查看旅行者分享",
    plannerEyebrow: "为你们一家，认真计划",
    plannerTitle: "这次旅行，谁会同行？",
    plannerAside: "告诉我们一些小信息，一起找到更适合你们的旅程。",
    monthLabel: "计划几月出发？",
    departingCityLabel: "从哪个城市出发？",
    departingCityPlaceholder: "请选择出发城市",
    originSingapore: "新加坡",
    originKualaLumpur: "吉隆坡",
    originKotaKinabalu: "亚庇",
    originJohorBahru: "新山",
    budgetLabel: "旅行预算（新加坡元/人）",
    travellerCountLabel: "同行人数",
    travellerCountHint: "只填写人数，不区分年龄；预订时请按实际年龄填写。",
    monthPlaceholder: "请选择月份",
    budgetPlaceholder: "请选择预算",
    groupLabel: "选择同行的家人",
    groupHint: "(可多选)",
    seniorsLabel: "长辈",
    seniorsHint: "轻松慢游",
    mobilityLabel: "行动需求",
    mobilityHint: "留意无障碍路线",
    kidsLabel: "年幼孩子",
    kidsHint: "轻松玩耍",
    adultsLabel: "纯成人同行",
    adultsHint: "大人的专属乐趣",
    formFooter: "按实际情况选择，每个家庭的旅行都不一样。",
    submitButton: "寻找适合我们的旅程",
    resultsEyebrow: "为你们一家精选灵感",
    resultsTitle: "一起去哪里玩？",
    resultsNote: "全球城市旅行灵感仅供参考；最多显示9个城市，每个国家不超过3个。",
    resultsDisclaimer: "推荐由本网站的季节、预算和同行人员资料筛选，并非实时从平台抓取。每人预算估算按建议天数相对4天3晚基准按比例调整，团体总额按人数相乘；这只是规划估算。Trip.com 与 Skyscanner 链接用于查询当前选项，示例日期通常从所选月份15日开始；若该日期已过，则改为约一周后。预算筛选仍按从新加坡出发估算，不会按所选出发城市重新计算。链接中的人数按成人示例处理，请在平台按实际年龄修改；平台也可能忽略搜索条件。预订前请核对日期、实际价格、官方信息和无障碍需求。",
    tripSearchLink: "Trip.com 搜索{city}套餐，约 S${budget}/人",
    skyscannerSearchLink: "Skyscanner 搜索{city}航班",
    noResults: "没有找到符合条件的推荐城市，请尝试调整月份、预算或同行人员。",
    noteEyebrow: "来自我们家的小提醒",
    noteTitle: "让旅程舒服一点，每个人都能玩得开心。",
    noteText: "如果同行家人使用轮椅、助行器或婴儿车，或需要较慢的步调，请提前确认路面、台阶、距离与交通接驳。细节因地点而异，预订前最好直接向场所确认。",
    footerNote: "用心记录，一家人一起出发的每段旅程。",
    footerTag: "一家人的旅行计划",
    chooseGroupError: "请选择至少一种同行人员类型。",
    chooseMonthError: "请选择出行月份。",
    chooseDepartureCityError: "请选择出发城市。",
    chooseBudgetError: "请选择每人预算。",
    chooseTravellerCountError: "请输入1至20人的同行人数。",
    tripDuration: "建议停留{days}天{nights}晚",
    groupBudgetEstimate: "同行{count}人经济型总额",
    groupMidTierEstimate: "同行{count}人中档型总额",
    estimatedPerPerson: "经济型/人",
    estimatedMidTierPerPerson: "中档型/人",
    groupBudgetNote: "团体总额按每人估算乘以人数，仅作规划参考。",
    groupDefault: "全家人",
    singleGroupSummary: "计划于{year}年{month}出行，同行人员：{group}{departure}{count}{budget}。",
    multiGroupPrefix: "计划于{year}年{month}出行，同行人员包括{group}{departure}{count}{budget}。",
    departureSummary: "，从{departure}出发",
    budgetSummary: "，每人预算 S${budget}",
    budgetDisclaimer: "参考估算按从新加坡出发，包含往返经济舱机票、住宿、餐饮、当地交通及部分门票；不是实时价格。",
    localStaycationNote: "新加坡按本地住宿度假估算，不含机票。",
    departureEstimateNote: "当前估算和预算筛选不会根据所选出发城市调整，请另行核对当地交通与机票费用。",
    attractionsTitle: "城市景点",
    photoDisclaimer: "图片仅供旅行灵感参考，可能不完全对应所列景点。",
    seasonalFit: "适合的季节",
    offSeason: "可考虑其他季节",
    tipSingle: "给旅程的小建议：",
    tipMultiple: "可以从这里开始：",
    defaultTip: "选择舒适的步调，并提前确认符合同行家人需要的细节。",
    officialLink: "查看{country}官方旅游网站"
  },
  en: {
    brand: "Tan Family Travel Tips",
    headerNote: "Making little memories, together",
    heroEyebrow: "OUR NEXT FAMILY ADVENTURE",
    heroTitle: "The best trips",
    heroTitleAccent: "make everyone feel at home.",
    heroDescription: "Choose your travel month and who's coming along. Find thoughtful ideas for the whole crew—from grandparents to little explorers.",
    heroDetailOne: "Made for multigenerational travel",
    heroDetailTwo: "Thoughtful, flexible trip ideas",
    photoKicker: "FROM OUR FAMILY ALBUM",
    photoTitle: "One more story to tell.",
    photoMeta: "Together after dark · October 2016",
    photoNumber: "01 / MANY",
    momentsEyebrow: "LITTLE MOMENTS, KEPT CLOSE",
    momentsTitle: "Our kind of travel stories.",
    momentsIntro: "The best souvenirs are often the small things: a new view, a shared laugh, and having everyone there.",
    moment1Date: "NOVEMBER 2014",
    moment1Title: "A day dressed for the occasion",
    moment1Text: "Getting everyone ready became part of the memory.",
    moment2Date: "NOVEMBER 2015",
    moment2Title: "Taking the scenic pace",
    moment2Text: "Slow down and enjoy the view along the way.",
    moment3Date: "AUGUST 2018",
    moment3Title: "A castle stop for the album",
    moment3Text: "Pause and remember the view with the people you love.",
    moment4Date: "NOVEMBER 2015",
    moment4Title: "The fun starts on the way",
    moment4Text: "The journey begins when everyone gets together.",
    moment5Date: "OCTOBER 2016",
    moment5Title: "Play together, laugh together",
    moment5Text: "The happiest activities are the ones everyone can join.",
    moment6Date: "OCTOBER 2016",
    moment6Title: "Get everyone in the frame",
    moment6Text: "Share a special city moment with the whole family.",
    moment7Date: "OCTOBER 2016",
    moment7Title: "A wish among the lanterns",
    moment7Text: "A lively night market and family smiles make a lovely memory.",
    moment8Date: "2018",
    moment8Title: "Play has no age limit",
    moment8Text: "Make every generation part of the fun.",
    moment9Date: "AUGUST 2018",
    moment9Title: "Leave a little room to rest",
    moment9Text: "Find a comfortable spot and enjoy a quiet moment.",
    moment10Date: "FROM THE FAMILY ALBUM",
    moment10Title: "Dress up and make a memory",
    moment10Text: "Trying something new becomes a story you share.",
    moment11Date: "NOVEMBER 2015",
    moment11Title: "Grandma and the little one",
    moment11Text: "Family beside you makes every stop feel warmer.",
    moment12Date: "DECEMBER 2015",
    moment12Title: "Journey time together",
    moment12Text: "A good chat can turn the ride into a memory.",
    moment13Date: "AUGUST 2018",
    moment13Title: "Everyone ready to set off",
    moment13Text: "Gather everyone together and the trip begins.",
    moment14Date: "FROM THE FAMILY ALBUM",
    moment14Title: "A playful little moment",
    moment14Text: "The unplanned moments are often the ones we remember.",
    moment15Date: "FROM THE FAMILY ALBUM",
    moment15Title: "A lively family portrait",
    moment15Text: "Keep generations of smiles together in one photo.",
    moment16Date: "OCTOBER 2014",
    moment16Title: "A little spot beside the globe",
    moment16Text: "Every trip makes the world feel a little closer.",
    moment17Date: "OCTOBER 2014",
    moment17Title: "Grandparent and little explorer",
    moment17Text: "Take in the open view and explore at your own pace.",
    moment18Date: "OCTOBER 2014",
    moment18Title: "A happy meal together",
    moment18Text: "Sharing a meal can be a favourite stop on the trip.",
    moment19Date: "OCTOBER 2014",
    moment19Title: "Looking up at the city skyline",
    moment19Text: "A moment by the buildings adds a city story to the trip.",
    moment20Date: "FROM THE FAMILY ALBUM",
    moment20Title: "One more family photo",
    moment20Text: "Take a break and enjoy the familiar smiles around you.",
    tripMomentKicker: "A LITTLE TAIWAN INSPIRATION",
    tripMomentTitle: "Dreaming of Jiufen? Add this moment to your list",
    tripMomentText: "See a traveler's story on Trip.com",
    plannerEyebrow: "LET'S PLAN AROUND YOU",
    plannerTitle: "Who's coming along?",
    plannerAside: "A few details help us find a better fit for your family.",
    monthLabel: "When are you hoping to go?",
    departingCityLabel: "Which city are you departing from?",
    departingCityPlaceholder: "Choose a departure city",
    originSingapore: "Singapore",
    originKualaLumpur: "Kuala Lumpur",
    originKotaKinabalu: "Kota Kinabalu",
    originJohorBahru: "Johor Bahru",
    budgetLabel: "Trip budget per person (Singapore dollars)",
    travellerCountLabel: "Number of travellers",
    travellerCountHint: "Enter the party size only; enter each traveller's actual age when booking.",
    monthPlaceholder: "Choose a month",
    budgetPlaceholder: "Choose a budget",
    groupLabel: "Choose everyone in your group",
    groupHint: "(select all that apply)",
    seniorsLabel: "Seniors",
    seniorsHint: "A gentler pace",
    mobilityLabel: "Mobility needs",
    mobilityHint: "Check step-free options",
    kidsLabel: "Young kids",
    kidsHint: "Room to roam",
    adultsLabel: "Adults only",
    adultsHint: "Our own kind of fun",
    formFooter: "Pick what fits—every family is different.",
    submitButton: "Find our kind of trip",
    resultsEyebrow: "A FEW IDEAS FOR YOUR CREW",
    resultsTitle: "Where could you go together?",
    resultsNote: "Global city ideas are starting points; see up to 9 cities, with no more than 3 per country.",
    resultsDisclaimer: "Recommendations are filtered from this site's seasonal, budget, and group-fit guidance; they are not fetched live from travel platforms. Per-person estimates scale the 4-day / 3-night baseline in proportion to the suggested stay; group totals multiply the estimate by traveller count. These are planning estimates only. Use Trip.com and Skyscanner links to check live options; example dates usually start on the 15th of the selected month, or about a week from today if that date has passed. Budget filtering still assumes departure from Singapore. Links treat the party size as adults; change ages on the provider site, which may also ignore search parameters. Verify dates, prices, official information, and access needs before booking.",
    tripSearchLink: "Search {city} packages on Trip.com (about S${budget}/person)",
    skyscannerSearchLink: "Search flights to {city} on Skyscanner",
    noResults: "No recommended cities found. Try changing the month, budget, or travel group.",
    noteEyebrow: "A NOTE FROM OUR FAMILY TO YOURS",
    noteTitle: "Good trips leave room for everyone.",
    noteText: "Travelling with a wheelchair, walker, or stroller—or at a gentler pace? Confirm surfaces, steps, distances, and transfers ahead of time. Details vary by venue, so check directly before booking.",
    footerNote: "Made with care for families who travel together.",
    footerTag: "A FAMILY TRAVEL PLANNER",
    chooseGroupError: "Please select at least one group type.",
    chooseMonthError: "Please choose a travel month.",
    chooseDepartureCityError: "Please choose a departure city.",
    chooseBudgetError: "Please choose a per-person budget.",
    chooseTravellerCountError: "Enter a traveller count from 1 to 20.",
    travellerCountSummary: ", {count} travellers",
    tripDuration: "Suggested stay: {days} days / {nights} nights",
    groupBudgetEstimate: "Budget total for {count} travellers",
    groupMidTierEstimate: "Mid-tier total for {count} travellers",
    estimatedPerPerson: "Budget / person",
    estimatedMidTierPerPerson: "Mid-tier / person",
    groupBudgetNote: "Group total multiplies the per-person estimate by traveller count; use as a planning guide.",
    groupDefault: "your group",
    singleGroupSummary: "Ideas for {group} travelling in {month} {year}{departure}{count}{budget}.",
    multiGroupPrefix: "Ideas for {group} travelling in {month} {year}{departure}{count}{budget}.",
    departureSummary: ", departing from {departure}",
    budgetSummary: " with a per-person budget of S${budget}",
    budgetDisclaimer: "Estimates assume departure from Singapore and are not live prices.",
    localStaycationNote: "Singapore is estimated as a local staycation; airfare is excluded.",
    departureEstimateNote: "Estimates and budget filtering are not adjusted for your selected departure city; check local transfers and airfare separately.",
    attractionsTitle: "City attractions",
    photoDisclaimer: "Images are for travel inspiration and may not depict the exact attraction listed.",
    seasonalFit: "Good seasonal fit",
    offSeason: "Consider other seasons",
    tipSingle: "A thought for your trip: ",
    tipMultiple: "A place to start: ",
    defaultTip: "Choose a comfortable pace and check the details that matter to your group.",
    officialLink: "Explore the official tourism site for {country}"
  }
};

const localizedDestinations = {
  Singapore: {
    zh: { name: "新加坡", season: "全年温暖", summary: "适合轻松城市游，花园、美食和亲子景点相对集中。全年炎热潮湿，出行时请安排室内休息。", tips: { seniors: "安排短途活动和室内休息，搭乘地铁时预留充足时间。", mobility: "出发前确认每段行程的无障碍路线和车站电梯情况。", kids: "花园、动物园和室内景点选择丰富；请预留休息时间并注意防暑。", adults: "把熟食中心、街区漫步和花园安排在轻松的行程里。" } },
    en: { name: "Singapore", season: "Warm year-round", summary: "An easy-to-navigate city break with gardens, food, and family attractions close together. Expect heat and humidity in every season.", tips: { seniors: "Plan short outings with indoor breaks and plenty of time for MRT journeys.", mobility: "Check step-free routes and station lift availability for each journey.", kids: "Gardens, the zoo, and indoor attractions offer variety; factor in heat and rest stops.", adults: "Mix hawker centres and neighbourhood walks with gardens and relaxed evenings." } }
  },
  Japan: {
    zh: { name: "日本", season: "春季或秋季", summary: "城市、庭园与美食体验丰富。热门季节可能较拥挤；车站布局、老建筑和各地地形差异较大。", tips: { seniors: "减少换酒店次数，放慢行程，并留意景点之间的步行距离。", mobility: "提前联系铁路运营方和景点，确认无台阶路线、电梯及无障碍设施。", kids: "安排安静休息时间，选择少数街区慢慢游览，不必赶场。", adults: "结合城市与周边地区，旅途中留出一天放慢脚步。" } },
    en: { name: "Japan", season: "Spring or autumn", summary: "A rich mix of city life, gardens, and food. Popular seasons can be busy; station layouts, older buildings, and regional terrain vary.", tips: { seniors: "Choose a slower itinerary with fewer hotel changes and check walking distances.", mobility: "Contact railway operators and venues about step-free routes, lifts, and access.", kids: "Build in quiet breaks and explore a few neighbourhoods rather than rushing around.", adults: "Pair city time with a regional stay and leave room for a slower day." } }
  },
  "South Korea": {
    zh: { name: "韩国", season: "春季或秋季", summary: "宫殿、市集与现代街区各有特色。部分路线有坡道、台阶或繁忙的换乘站，安排时要预留体力。", tips: { seniors: "选择交通方便的住宿地，每次外出集中游览一个区域并安排休息。", mobility: "向交通运营方和景点确认电梯位置、无台阶出口和路线。", kids: "把短途文化体验与公园或室内活动结合，并预留用餐休息时间。", adults: "在传统市集、宫殿和轻松的夜间活动之间取得平衡。" } },
    en: { name: "South Korea", season: "Spring or autumn", summary: "Palaces, markets, and modern neighbourhoods offer variety. Hills, stairs, and busy transit interchanges can make some routes tiring.", tips: { seniors: "Use a convenient base and focus each outing on one area with seated breaks.", mobility: "Confirm lift locations, accessible exits, and step-free routes with operators and venues.", kids: "Combine a short cultural visit with parks or indoor activities and meal breaks.", adults: "Balance traditional markets and palaces with relaxed evenings." } }
  },
  China: {
    zh: { name: "中国", season: "因城市而异", summary: "从历史遗迹到现代天际线，各城市风貌不同。请预先规划交通，确认景点预约和当地出行要求。", tips: { seniors: "每天安排少量重点景点，选择交通便利的住宿并预留休息时间。", mobility: "逐一向景点及交通方确认坡道、电梯、无障碍卫生间和步行距离。", kids: "减少长距离移动，每天结合一处重点景点与轻松休息活动。", adults: "按街区规划行程，预留时间体验当地美食与文化。" } },
    en: { name: "China", season: "Varies by city", summary: "Cities range from historic landmarks to modern skylines. Plan transport ahead and check attraction reservations and local travel requirements.", tips: { seniors: "Choose a small number of sights each day, stay near convenient transport, and schedule breaks.", mobility: "Confirm ramps, lifts, accessible toilets, and walking distances with each venue and transport provider.", kids: "Limit long transfers and pair one main attraction with relaxed downtime each day.", adults: "Plan by neighbourhood and leave time for local food and culture." } }
  },
  Taiwan: {
    zh: { name: "台湾", season: "较凉爽的月份", summary: "城市文化、美食与自然景观兼具。岛内各地天气不同，降雨和炎热可能影响户外行程。", tips: { seniors: "以城市为据点，在市集、庙宇和一日游之间安排安静休息时间。", mobility: "针对实际行程确认车站出口、人行道和景点设施是否适合。", kids: "穿插短途街区游、公园和室内景点，让行程更有弹性。", adults: "在台北停留后，选择一个地区慢慢体验，减少频繁换酒店。" } },
    en: { name: "Taiwan", season: "Cooler months", summary: "A compact mix of city culture, food, and nature. Conditions vary across the island, and rain and heat can affect outdoor plans.", tips: { seniors: "Use a city base and allow quiet time between markets, temples, and day trips.", mobility: "Confirm accessible station exits, pavements, and venue facilities for your itinerary.", kids: "Combine short neighbourhood visits with parks and indoor attractions.", adults: "Pair Taipei with one slower regional stay instead of changing hotels often." } }
  },
  Thailand: {
    zh: { name: "泰国", season: "通常较凉爽的月份", summary: "美食、文化和海滩选择丰富，但炎热、交通、台阶和不平整的人行道可能让行程较累。", tips: { seniors: "把户外活动安排在较凉爽时段，避免匆忙转乘，选择交通方便的住宿。", mobility: "向酒店和景点确认入口、卫生间、路面和接驳安排。", kids: "根据天气和午休安排活动，尽量缩短各站之间的交通时间。", adults: "热闹行程与休息日交替，并查询不同地区的当地情况。" } },
    en: { name: "Thailand", season: "Generally cooler months", summary: "Food, culture, and beaches offer plenty of choice, but heat, traffic, steps, and uneven footpaths can make some itineraries tiring.", tips: { seniors: "Schedule outdoor activities early, avoid rushed transfers, and choose convenient accommodation.", mobility: "Ask hotels and venues about entrances, bathrooms, surfaces, and transfers.", kids: "Plan around heat and naps, and keep travel between stops short.", adults: "Balance lively areas with slower days and check local conditions." } }
  },
  France: {
    zh: { name: "法国", season: "春季或初秋", summary: "博物馆、花园与城市街区选择丰富。繁忙街道、楼梯和排队可能让每天行程较累。", tips: { seniors: "每天安排一两个相邻景点，并预留坐下休息的时间。", mobility: "逐一确认景点和车站的无台阶通道；老街和地铁站情况各异。", kids: "把短程博物馆或地标游与公园和自由活动结合。", adults: "按街区安排路线，并提前确认热门景点是否需要预约。" } },
    en: { name: "France", season: "Spring or early autumn", summary: "Museums, gardens, and neighbourhoods offer variety. Busy streets, stairs, and queues can make days tiring.", tips: { seniors: "Choose one or two nearby sights each day and plan seated breaks.", mobility: "Check step-free access at each attraction and station; older streets and metro stations vary.", kids: "Balance a short museum or landmark visit with parks and unstructured breaks.", adults: "Plan by neighbourhood and reserve popular attractions ahead where required." } }
  },
  "United Kingdom": {
    zh: { name: "英国", season: "晚春至夏季", summary: "博物馆、公园和历史景点可搭乘公共交通前往。城市范围较大，天气也可能快速变化。", tips: { seniors: "住在交通方便的区域，每天集中游览一个片区。", mobility: "逐站确认无障碍交通，并直接向景点核实具体通行条件。", kids: "利用公园和免费博物馆，在主要景点之间弹性休息。", adults: "按地理位置安排游览，并提前预约限时入场景点。" } },
    en: { name: "United Kingdom", season: "Late spring through summer", summary: "Museums, parks, and historic sights are linked by public transport. The city is large, and weather can change quickly.", tips: { seniors: "Stay near an accessible transport route and keep daily sightseeing to one area.", mobility: "Check step-free access station by station and confirm venue access directly.", kids: "Use parks and free museums as flexible breaks between major sights.", adults: "Group visits geographically and reserve timed-entry attractions in advance." } }
  },
  Australia: {
    zh: { name: "澳大利亚", season: "春季或夏季", summary: "港湾景色、海滩和城市景点各有特色。规划时请考虑路程、日晒和不同街区的地形。", tips: { seniors: "选择交通方便的住宿点，并为渡轮和公共交通换乘留出时间。", mobility: "向渡轮、海滩和景点确认无障碍路线及上下车安排。", kids: "户外活动穿插遮阳、补水和附近室内休息点。", adults: "结合港湾区域和一两个街区游览，避免反复横穿城市。" } },
    en: { name: "Australia", season: "Spring or summer", summary: "Harbour views, beaches, and city attractions make a varied stay. Distances, sun exposure, and local terrain need planning.", tips: { seniors: "Choose a convenient base and allow time for ferry and public-transport connections.", mobility: "Confirm accessible routes and boarding arrangements for ferries, beaches, and venues.", kids: "Balance outdoor time with shade, water breaks, and nearby indoor options.", adults: "Combine harbour areas with one or two neighbourhoods rather than crossing the city repeatedly." } }
  },
  "United Arab Emirates": {
    zh: { name: "阿联酋", season: "较凉爽的月份", summary: "室内景点、购物和滨水街区选择多样，但炎热天气和较长路程会影响每日安排。", tips: { seniors: "使用有空调的交通方式，每天安排较少且衔接方便的活动。", mobility: "确认无障碍接送安排，以及停车点、入口和场馆之间的距离。", kids: "把户外活动安排在较凉爽时段，并留出休息时间。", adults: "每天安排一个重点景点，再搭配轻松用餐或滨水活动。" } },
    en: { name: "United Arab Emirates", season: "Cooler months", summary: "Indoor attractions, shopping, and waterfront districts are varied, but heat and long distances can shape the day.", tips: { seniors: "Use air-conditioned transport and plan fewer, well-connected stops each day.", mobility: "Confirm accessible transfers and the distances between entrances, parking, and venues.", kids: "Schedule outdoor activities in cooler hours and build in downtime.", adults: "Pair one major attraction with a relaxed meal or waterfront visit." } }
  },
  Italy: {
    zh: { name: "意大利", season: "春季或初秋", summary: "古迹、广场和美食让城市旅行丰富多彩。石板路、炎热天气和排队会增加体力需求。", tips: { seniors: "每天减少重点景点数量，并安排遮阴和坐下休息的时间。", mobility: "向各景点确认石板路状况、无台阶路线和无障碍入口。", kids: "缩短游览时间，带足饮水，并留出轻松用餐和休息的时间。", adults: "提前预约重点景点，并为街区慢游留出空间。" } },
    en: { name: "Italy", season: "Spring or early autumn", summary: "Ancient landmarks, piazzas, and food make a memorable city break. Cobblestones, heat, and queues can add physical demands.", tips: { seniors: "Limit the number of major sites each day and schedule shade and seated breaks.", mobility: "Check cobbled surfaces, step-free routes, and accessible entrances with each site.", kids: "Keep visits short, carry water, and leave time for relaxed meals and breaks.", adults: "Book key sights ahead and leave room for slower neighbourhood exploration." } }
  },
  Canada: {
    zh: { name: "加拿大", season: "夏季", summary: "海岸城市、公园、滨水步道和山景相结合。户外条件与不同街区、郊游路线的交通时间各有不同。", tips: { seniors: "选择市区住宿，并把郊游作为可选安排，避免连续长途出行。", mobility: "确认公园和滨水路线的坡度、路面及无障碍交通情况。", kids: "把短途户外活动与室内景点和休息时间结合。", adults: "市区探索可搭配公共交通；郊区行程另留充足时间。" } },
    en: { name: "Canada", season: "Summer", summary: "A coastal city with parks, waterfront walks, and mountain views. Outdoor conditions and travel time vary by neighbourhood and excursion.", tips: { seniors: "Choose a central base and keep day trips optional to avoid long travel days.", mobility: "Check grades, surfaces, and accessible transport for each park and waterfront route.", kids: "Mix short outdoor outings with indoor attractions and rest time.", adults: "Use transit for city exploring and allow separate time for any out-of-town excursions." } }
  },
  "South Africa": {
    zh: { name: "南非", season: "南半球夏季", summary: "海岸风光、花园与城市文化各具特色。天气、山坡和景点间距离会影响每日安排。", tips: { seniors: "选择中心位置住宿，为交通预留时间，并灵活安排户外活动。", mobility: "逐一确认景点的坡度、路面和无障碍接驳。", kids: "户外活动穿插休息，并准备适应天气变化的替代方案。", adults: "每天安排相邻区域，并在郊游前查询当地旅行建议。" } },
    en: { name: "South Africa", season: "Southern summer", summary: "Coastal scenery, gardens, and city culture offer variety. Weather, hills, and distances between attractions can shape daily plans.", tips: { seniors: "Choose a central base, allow time for transfers, and keep outdoor outings flexible.", mobility: "Confirm gradients, surfaces, and accessible transfers at each attraction.", kids: "Balance outdoor activities with rest stops and weather-flexible alternatives.", adults: "Choose a few nearby areas each day and check local travel advice before excursions." } }
  },
  Brazil: {
    zh: { name: "巴西", season: "较温和干燥的月份", summary: "海滩、城市观景点和文化街区让旅程充满活力。山坡、炎热天气和交通需要提前规划。", tips: { seniors: "住在靠近计划活动的区域，避免匆忙转乘并安排遮阴休息。", mobility: "提前确认陡坡、路面、场馆通行和交通接驳。", kids: "考虑炎热和休息时间，长途移动使用可靠的当地交通。", adults: "按街区安排活动，出行前查询最新当地建议。" } },
    en: { name: "Brazil", season: "Milder, drier months", summary: "Beaches, city viewpoints, and cultural districts make a lively stay. Hills, heat, and local transport needs call for route planning.", tips: { seniors: "Stay near planned activities, avoid rushed transfers, and schedule shaded rest breaks.", mobility: "Check steep routes, surfaces, venue access, and transport arrangements in advance.", kids: "Plan around heat and rest, and use reputable local transport for longer trips.", adults: "Keep plans neighbourhood-based and check current local advice before heading out." } }
  }
};

const monthNames = {
  zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

const monthSelect = document.querySelector("#travel-month");
const form = document.querySelector("#trip-form");
const results = document.querySelector("#results");
const resultsSummary = document.querySelector("#results-summary");
const destinationList = document.querySelector("#destination-list");
const noResults = document.querySelector("#no-results");
const budgetSelect = document.querySelector("#budget");
const departureCitySelect = document.querySelector("#departure-city");
const travellerCountInput = document.querySelector("#traveller-count");
const languageToggle = document.querySelector("#language-toggle");
let currentLanguage = "zh";
const minimumGroupFitScore = 2;

const stayDurations = {
  Singapore: { days: 4, nights: 3 },
  Tokyo: { days: 6, nights: 5 },
  Osaka: { days: 5, nights: 4 },
  Seoul: { days: 5, nights: 4 },
  Beijing: { days: 5, nights: 4 },
  Shanghai: { days: 5, nights: 4 },
  Guangzhou: { days: 4, nights: 3 },
  Taipei: { days: 4, nights: 3 },
  Bangkok: { days: 4, nights: 3 },
  Paris: { days: 6, nights: 5 },
  London: { days: 6, nights: 5 },
  Sydney: { days: 6, nights: 5 },
  Dubai: { days: 5, nights: 4 },
  Rome: { days: 5, nights: 4 },
  Vancouver: { days: 6, nights: 5 },
  CapeTown: { days: 6, nights: 5 },
  RioDeJaneiro: { days: 6, nights: 5 }
};

const main = document.querySelector("main");
const momentsSection = document.querySelector(".moments-section");
main.insertBefore(document.querySelector(".planner"), momentsSection);
main.insertBefore(results, momentsSection);

function populateUpcomingMonths() {
  const now = new Date();
  const selectedMonth = monthSelect.selectedOptions[0];
  const selectedKey = selectedMonth ? `${selectedMonth.dataset.year}-${selectedMonth.value}` : "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = translations[currentLanguage].monthPlaceholder;
  monthSelect.replaceChildren(placeholder);

  for (let offset = 0; offset < 12; offset += 1) {
    const date = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const option = document.createElement("option");
    option.value = String(month);
    option.textContent = currentLanguage === "zh"
      ? `${year}年${month}月`
      : `${monthNames[currentLanguage][month - 1]} ${year}`;
    option.dataset.year = String(year);
    monthSelect.append(option);
  }

  if (selectedKey) {
    const selectedOption = [...monthSelect.options].find((option) => `${option.dataset.year}-${option.value}` === selectedKey);
    if (selectedOption) {
      selectedOption.selected = true;
    }
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "Tan 家庭旅行时光" : "Tan Family Travel Tips";
  document.querySelector('meta[name="description"]').content = language === "zh"
    ? "记录阖家旅行的温馨瞬间，为下一次全家出游寻找贴心灵感。"
    : "Family travel memories and thoughtful destination ideas for your next trip.";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = translations[language][element.dataset.i18n];
  }

  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.placeholder = translations[language][element.dataset.i18nPlaceholder];
  }

  for (const image of document.querySelectorAll("img[data-alt-en]")) {
    if (!image.dataset.altZh) {
      image.dataset.altZh = image.alt;
    }
    if (language === "en") {
      image.alt = image.dataset.altEn;
    } else {
      image.alt = image.dataset.altZh;
    }
  }

  document.querySelector(".site-header .brand").setAttribute(
    "aria-label",
    language === "zh" ? "Tan 家庭旅行时光首页" : "Tan Family Travel Tips home"
  );
  languageToggle.textContent = language === "zh" ? "EN" : "中文";
  languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到简体中文");
  populateUpcomingMonths();
  updateTravelerValidity();

  if (lastPlan) {
    renderResults(lastPlan);
  }
}

function getSelectedTravelers() {
  return [...form.querySelectorAll('input[name="traveler"]:checked')].map((input) => input.value);
}

function updateTravelerValidity() {
  const firstTravelerInput = form.querySelector('input[name="traveler"]');
  firstTravelerInput.setCustomValidity(getSelectedTravelers().length === 0 ? translations[currentLanguage].chooseGroupError : "");
  monthSelect.setCustomValidity(monthSelect.value ? "" : translations[currentLanguage].chooseMonthError);
  budgetSelect.setCustomValidity(budgetSelect.value ? "" : translations[currentLanguage].chooseBudgetError);
  const travellerCount = Number(travellerCountInput.value);
  travellerCountInput.setCustomValidity(
    Number.isInteger(travellerCount) && travellerCount >= 1 && travellerCount <= 20
      ? ""
      : translations[currentLanguage].chooseTravellerCountError
  );
  departureCitySelect.setCustomValidity(
    departureCitySelect.value ? "" : translations[currentLanguage].chooseDepartureCityError
  );
}

function getDestinationScore(destination, month, travelers) {
  const inSeason = destination.months.includes(month);
  const groupScore = travelers.reduce((total, traveler) => total + (destination.strengths[traveler] ?? 0), 0);
  return {
    score: groupScore,
    inSeason,
    groupScore,
    fitsTravelers: travelers.every((traveler) =>
      (destination.strengths[traveler] ?? 0) >= minimumGroupFitScore
    )
  };
}

function getGroupDescription(travelers) {
  const labels = {
    zh: {
      seniors: "长辈",
      mobility: "有行动需求的家人",
      kids: "年幼孩子",
      adults: "成人"
    },
    en: {
      seniors: "seniors",
      mobility: "travellers with mobility needs",
      kids: "young kids",
      adults: "adults"
    }
  }[currentLanguage];

  if (travelers.length === 0) {
    return translations[currentLanguage].groupDefault;
  }
  return travelers.map((traveler) => labels[traveler]).join(currentLanguage === "zh" ? "、" : " and ");
}

function formatSkyscannerDate(year, month, day) {
  return `${String(year).slice(-2)}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
}

function formatTripDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getExampleStartDate(plan) {
  const startDate = new Date(plan.year, plan.month - 1, 15);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (startDate < today) {
    startDate.setTime(today.getTime());
    startDate.setDate(startDate.getDate() + 7);
  }
  return startDate;
}

function formatTripEstimate(amount) {
  return `≈ S$${Math.round(amount).toLocaleString("en-SG")}`;
}

function getTripEstimates(destination) {
  const stay = stayDurations[destination.cityKey];
  const durationMultiplier = stay.days / 4;
  return {
    stay,
    budgetPerPerson: destination.budgetEstimate.budget * durationMultiplier,
    midTierPerPerson: destination.budgetEstimate.midTier * durationMultiplier
  };
}

function makeProviderLink(href, label) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
}

function makeDestinationCard(destination, fit, travelers, plan) {
  const language = currentLanguage;
  const copy = localizedDestinations[destination.country][language];
  const text = translations[language];
  const { stay, budgetPerPerson, midTierPerPerson } = getTripEstimates(destination);
  const card = document.createElement("article");
  card.className = "destination-card";

  const top = document.createElement("div");
  top.className = "destination-card-top";
  const heading = document.createElement("h3");
  heading.textContent = destination.cityKey === "Singapore"
    ? cityNames[destination.cityKey][language]
    : `${cityNames[destination.cityKey][language]} · ${copy.name}`;
  const badge = document.createElement("span");
  badge.className = "fit-badge";
  badge.textContent = `${fit.inSeason ? text.seasonalFit : text.offSeason} · ${copy.season}`;
  top.append(heading, badge);

  const estimates = document.createElement("section");
  estimates.className = "budget-estimates";
  const estimatesTitle = document.createElement("h4");
  estimatesTitle.textContent = text.tripDuration
    .replace("{days}", String(stay.days))
    .replace("{nights}", String(stay.nights));
  const estimateList = document.createElement("dl");
  estimateList.className = "budget-estimate-list";
  for (const [label, amount] of [
    [text.estimatedPerPerson, budgetPerPerson],
    [text.estimatedMidTierPerPerson, midTierPerPerson],
    [text.groupBudgetEstimate.replace("{count}", String(plan.travellerCount)), budgetPerPerson * plan.travellerCount],
    [text.groupMidTierEstimate.replace("{count}", String(plan.travellerCount)), midTierPerPerson * plan.travellerCount]
  ]) {
    const term = document.createElement("dt");
    term.textContent = label;
    const value = document.createElement("dd");
    value.textContent = formatTripEstimate(amount);
    estimateList.append(term, value);
  }
  const estimateNote = document.createElement("p");
  estimateNote.className = "budget-estimate-note";
  estimateNote.textContent = plan.departureCity === "singapore"
    ? destination.country === "Singapore"
      ? `${text.groupBudgetNote} ${text.localStaycationNote}`
      : text.budgetDisclaimer
    : `${text.groupBudgetNote} ${text.departureEstimateNote}`;
  estimates.append(estimatesTitle, estimateList, estimateNote);

  const summary = document.createElement("p");
  summary.textContent = copy.summary;

  const attractions = document.createElement("section");
  attractions.className = "attractions";
  const attractionTitle = document.createElement("h4");
  attractionTitle.textContent = text.attractionsTitle;
  const attractionGallery = document.createElement("div");
  attractionGallery.className = "attraction-gallery";
  attractionGallery.setAttribute("aria-label", text.attractionsTitle);
  for (const attraction of cityAttractions[destination.cityKey]) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = attraction.src;
    image.alt = attraction.alt[language];
    image.loading = "lazy";
    image.decoding = "async";
    const caption = document.createElement("figcaption");
    caption.textContent = attraction.name[language];
    figure.append(image, caption);
    attractionGallery.append(figure);
  }
  attractions.append(attractionTitle, attractionGallery);
  const photoDisclaimer = document.createElement("p");
  photoDisclaimer.className = "attraction-photo-note";
  photoDisclaimer.textContent = text.photoDisclaimer;
  attractions.append(photoDisclaimer);

  const tip = document.createElement("p");
  tip.className = "trip-tip";
  const tipLabel = document.createElement("strong");
  tipLabel.textContent = travelers.length > 1 ? text.tipMultiple : text.tipSingle;
  const tipText = document.createTextNode(
    travelers.map((traveler) => copy.tips[traveler]).filter(Boolean).join(" ")
  );
  tip.append(tipLabel, tipText);

  const providerLinks = document.createElement("div");
  providerLinks.className = "provider-links";
  const tripSearchUrl = new URL("https://sg.trip.com/");
  tripSearchUrl.searchParams.set("locale", "en-SG");
  tripSearchUrl.searchParams.set("curr", "SGD");
  const cityName = cityNames[destination.cityKey][language];
  const outboundDate = getExampleStartDate(plan);
  const returnDate = new Date(outboundDate);
  returnDate.setDate(returnDate.getDate() + stay.days - 1);
  const tripPackageQuery = `${cityName} travel package`;
  tripSearchUrl.searchParams.set("q", tripPackageQuery);
  tripSearchUrl.searchParams.set("destination", cityName);
  tripSearchUrl.searchParams.set("maxPricePerPerson", String(Math.round(budgetPerPerson)));
  tripSearchUrl.searchParams.set("travellers", String(plan.travellerCount));
  tripSearchUrl.searchParams.set("startDate", formatTripDate(outboundDate));
  tripSearchUrl.searchParams.set("endDate", formatTripDate(returnDate));
  providerLinks.append(makeProviderLink(tripSearchUrl.href, text.tripSearchLink
    .replace("{city}", cityName)
    .replace("{budget}", Math.round(budgetPerPerson).toLocaleString("en-SG"))));

  const originCode = departureAirportCodes[plan.departureCity];
  if (originCode !== destination.skyscannerCode) {
    const flightSearchUrl = new URL(
      `https://www.skyscanner.com.sg/transport/flights/${originCode}/${destination.skyscannerCode}/${formatSkyscannerDate(outboundDate.getFullYear(), outboundDate.getMonth() + 1, outboundDate.getDate())}/${formatSkyscannerDate(returnDate.getFullYear(), returnDate.getMonth() + 1, returnDate.getDate())}/`
    );
    flightSearchUrl.search = new URLSearchParams({
      adults: String(plan.travellerCount),
      adultsv2: String(plan.travellerCount),
      cabinclass: "economy",
      children: "0",
      infants: "0",
      rtn: "1"
    }).toString();
    providerLinks.append(makeProviderLink(
      flightSearchUrl.href,
      text.skyscannerSearchLink.replace("{city}", cityName)
    ));
  }

  const link = document.createElement("a");
  link.href = destination.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text.officialLink.replace("{country}", copy.name);
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(arrow);

  card.append(top, estimates, summary, attractions, tip, providerLinks, link);
  return card;
}

function renderResults(plan) {
  const text = translations[currentLanguage];
  const group = getGroupDescription(plan.travelers);
  const budget = plan.budget
    ? text.budgetSummary.replace("{budget}", Number(plan.budget).toLocaleString("en-SG"))
    : "";
  const summaryTemplate = plan.travelers.length === 1 ? text.singleGroupSummary : text.multiGroupPrefix;
  const departure = text.departureSummary.replace(
    "{departure}",
    departureCities[plan.departureCity][currentLanguage]
  );
  resultsSummary.textContent = summaryTemplate
    .replace("{month}", monthNames[currentLanguage][plan.month - 1])
    .replace("{year}", String(plan.year))
    .replace("{group}", group)
    .replace("{departure}", departure)
    .replace("{count}", String(plan.travellerCount))
    .replace("{budget}", budget);

  const sorted = destinations
    .map((destination) => ({ destination, fit: getDestinationScore(destination, plan.month, plan.travelers) }))
    .filter(({ destination, fit }) =>
      fit.inSeason
      && fit.fitsTravelers
      && Number(plan.budget) >= getTripEstimates(destination).budgetPerPerson
    )
    .sort((a, b) =>
      b.fit.score - a.fit.score
      || getTripEstimates(a.destination).budgetPerPerson - getTripEstimates(b.destination).budgetPerPerson
      || a.destination.cityKey.localeCompare(b.destination.cityKey)
    );
  const countryCounts = new Map();
  const recommendations = [];
  for (const result of sorted) {
    const countryCount = countryCounts.get(result.destination.country) || 0;
    if (countryCount >= 3) {
      continue;
    }
    recommendations.push(result);
    countryCounts.set(result.destination.country, countryCount + 1);
    if (recommendations.length === 9) {
      break;
    }
  }
  destinationList.replaceChildren(
    ...recommendations.map(({ destination, fit }) => makeDestinationCard(destination, fit, plan.travelers, plan))
  );
  noResults.hidden = recommendations.length > 0;
  results.hidden = false;
}

let lastPlan = null;

form.addEventListener("change", (event) => {
  if (event.target.matches('input[name="traveler"], #travel-month, #budget, #departure-city, #traveller-count')) {
    updateTravelerValidity();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const travelers = getSelectedTravelers();
  updateTravelerValidity();
  if (!form.reportValidity()) {
    return;
  }

  const month = Number(monthSelect.value);
  const year = Number(monthSelect.selectedOptions[0].dataset.year);
  lastPlan = {
    month,
    year,
    travelers,
    departureCity: departureCitySelect.value,
    budget: budgetSelect.value,
    travellerCount: Number(travellerCountInput.value)
  };
  renderResults(lastPlan);
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

applyLanguage("zh");
