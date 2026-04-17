export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: string
  content: Section[]
}

export interface Section {
  type: 'intro' | 'h2' | 'h3' | 'p' | 'ul' | 'tip' | 'callout'
  text?: string
  items?: string[]
  label?: string
}

export const posts: BlogPost[] = [
  {
    slug: 'kelowna-market-update-spring-2026',
    title: 'Kelowna Real Estate Market Update — Spring 2026',
    excerpt: 'What buyers and sellers need to know about the current Okanagan market. Inventory levels, pricing trends, and what to expect this season.',
    date: 'April 10, 2026',
    category: 'Market Update',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'Spring is the most active season in Kelowna real estate, and 2026 is no different. After a period of rate uncertainty through 2024 and into 2025, the market has found its footing. Here\'s what buyers and sellers need to understand heading into this spring season.',
      },
      {
        type: 'h2',
        text: 'The Big Picture: A More Balanced Market',
      },
      {
        type: 'p',
        text: 'Kelowna is no longer the frenzied seller\'s market of 2021–2022, but it\'s also far from a buyer\'s market. What we have right now is a more balanced, healthier market — and that\'s actually good news for everyone.',
      },
      {
        type: 'p',
        text: 'Inventory has increased compared to the ultra-low levels of recent years, which means buyers have more choice and fewer bidding wars. But well-priced, well-presented homes in desirable neighbourhoods are still moving quickly — often within 1–2 weeks of listing.',
      },
      {
        type: 'h2',
        text: 'What\'s Moving (and What Isn\'t)',
      },
      {
        type: 'p',
        text: 'Single-family homes in the Lower Mission and Glenmore continue to see strong demand, particularly in the $700K–$1.1M range where much of the move-up buyer activity lives. These properties, when priced correctly and presented well, are generating multiple offers.',
      },
      {
        type: 'p',
        text: 'The condo and townhome market has softened slightly — there\'s more inventory, and buyers have more negotiating power. If you\'re selling a strata unit, pricing precisely and investing in presentation is more important than ever.',
      },
      {
        type: 'p',
        text: 'Luxury properties (above $2M) are a different market entirely — they move slowly, but qualified buyers are active and motivated when the right property comes along.',
      },
      {
        type: 'h2',
        text: 'For Buyers: What to Know This Spring',
      },
      {
        type: 'ul',
        items: [
          'Get pre-approved before you start looking seriously — the good properties move fast.',
          'Don\'t wait for rates to drop further. The buyers who waited in 2023 and 2024 paid more for less choice.',
          'West Kelowna and Lake Country offer strong value compared to east Kelowna neighbourhoods.',
          'Inspection subjects are back — you don\'t have to waive conditions to compete in most price ranges.',
          'Consider properties that need cosmetic work. These are undervalued and the renovation ROI is strong in this market.',
        ],
      },
      {
        type: 'h2',
        text: 'For Sellers: What to Know This Spring',
      },
      {
        type: 'ul',
        items: [
          'Overpricing is the single biggest mistake — a stale listing is harder to recover from than a properly priced one.',
          'Presentation matters more now. Professional photos, decluttered spaces, and fresh paint are essential.',
          'The first two weeks on market are when buyer interest is highest. Price it right from day one.',
          'Be realistic about your timeline. Spring activity is good, but this isn\'t 2021.',
          'Homes with suite income or development potential are still commanding premiums.',
        ],
      },
      {
        type: 'tip',
        label: 'Marki\'s Take',
        text: 'This is genuinely a good market to buy in right now — better than anything we\'ve seen in 4 years from a buyer\'s perspective. Interest rates have come down, there\'s more choice, and sellers are negotiating. If you\'ve been sitting on the fence, spring 2026 is worth taking seriously.',
      },
      {
        type: 'h2',
        text: 'The Bottom Line',
      },
      {
        type: 'p',
        text: 'Kelowna\'s real estate market remains fundamentally strong. The long-term drivers — migration from Metro Vancouver and Calgary, lifestyle appeal, tourism, and UBC Okanagan growth — haven\'t changed. What has changed is that buyers now have time to make thoughtful decisions, and sellers need to be realistic and strategic.',
      },
      {
        type: 'p',
        text: 'If you have questions about a specific neighbourhood, property type, or your own situation, reach out. I\'m always happy to give you a straight answer.',
      },
    ],
  },
  {
    slug: 'first-time-buyer-guide-kelowna',
    title: 'First-Time Buyer\'s Guide to Kelowna in 2026',
    excerpt: 'Everything you need to know before buying your first home in the Okanagan — from getting pre-approved to making your offer stand out.',
    date: 'March 22, 2026',
    category: 'Buyer Tips',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
    content: [
      {
        type: 'intro',
        text: 'Buying your first home is one of the biggest decisions of your life — and in a market like Kelowna, it can feel overwhelming. I\'ve helped dozens of first-time buyers through the process. Here\'s the straight-talk guide I wish every first-time buyer had before they started.',
      },
      {
        type: 'h2',
        text: 'Start Here: Know What You Can Actually Afford',
      },
      {
        type: 'p',
        text: 'Before you look at a single listing, get a mortgage pre-approval. Not a pre-qualification — a pre-approval with a commitment letter. This tells you exactly what you can borrow, locks in your rate for 90–120 days, and puts you in a position to act when the right home comes along.',
      },
      {
        type: 'p',
        text: 'Use a mortgage broker, not just your bank. A broker shops 20+ lenders and finds the best rate at no cost to you. In today\'s market, even a 0.1% difference in rate saves you thousands over the life of the mortgage.',
      },
      {
        type: 'tip',
        label: 'Important',
        text: 'The stress test means your mortgage is tested at your rate + 2% (or 5.25%, whichever is higher). So if you\'re offered 5.5%, you qualify at 7.5%. This significantly affects how much you can borrow — factor it in early.',
      },
      {
        type: 'h2',
        text: 'What First-Time Buyers Can Actually Afford in Kelowna',
      },
      {
        type: 'p',
        text: 'Let\'s be honest: detached homes in the Lower Mission or Glenmore are typically $700K+. For first-time buyers with a 10–20% down payment, here\'s where the opportunities are in 2026:',
      },
      {
        type: 'ul',
        items: [
          'Condos in Downtown Kelowna or Rutland: $350K–$550K. Walkable, low-maintenance, good rental income if you ever move.',
          'Townhomes in West Kelowna or Rutland: $500K–$700K. More space, some have suites for income.',
          'Detached homes in Rutland or North Kelowna: $550K–$750K. More space, room to grow, higher upside.',
          'Lake Country and Peachland: $500K–$800K for detached. Semi-rural lifestyle, 15–20 min to Kelowna.',
        ],
      },
      {
        type: 'h2',
        text: 'Government Programs You Should Know About',
      },
      {
        type: 'p',
        text: 'As a first-time buyer in BC, you have access to meaningful incentives — most people don\'t use them to their full potential.',
      },
      {
        type: 'ul',
        items: [
          'First Home Savings Account (FHSA): Contribute up to $8,000/year, $40,000 lifetime. Tax-deductible contributions, tax-free withdrawals for a first home. If you haven\'t opened one yet, do it today.',
          'Home Buyers\' Plan (RRSP): Withdraw up to $35,000 from your RRSP tax-free ($70,000 per couple).',
          'BC Property Transfer Tax Exemption: First-time buyers pay zero PTT on homes under $500,000 — up to $8,000 in savings.',
          'First-Time Buyer Tax Credit: $1,500 federal tax credit on your first home purchase.',
        ],
      },
      {
        type: 'h2',
        text: 'The Kelowna Market: What First-Timers Need to Know',
      },
      {
        type: 'p',
        text: 'Kelowna moves faster than most BC markets outside of Metro Vancouver. Here\'s what surprises first-time buyers:',
      },
      {
        type: 'ul',
        items: [
          'Good properties at the right price still sell in under 2 weeks, even in a balanced market.',
          'Strata fees are real — a $499K condo with $600/month strata fees costs more monthly than a $600K townhome with $200/month fees.',
          'West Kelowna and Rutland offer the best value for first-timers — don\'t dismiss them because of the stigma.',
          'Suites matter. A home with a legal suite can offset $1,000–$1,500/month of your mortgage.',
          'Buy what you can maintain. A fixer-upper is only a good deal if you have the time, skill, and budget.',
        ],
      },
      {
        type: 'h2',
        text: 'The Buying Process, Step by Step',
      },
      {
        type: 'ul',
        items: [
          '1. Get pre-approved by a mortgage broker.',
          '2. Define your must-haves (beds, baths, neighbourhood, price) and nice-to-haves.',
          '3. Work with a REALTOR® who sets up a custom MLS® search for your criteria.',
          '4. View homes — your agent attends every showing with you.',
          '5. Make an offer with subjects (financing + inspection).',
          '6. Complete your inspection and financing, then remove subjects.',
          '7. Sign documents with your lawyer or notary.',
          '8. Get your keys on possession day.',
        ],
      },
      {
        type: 'tip',
        label: 'Marki\'s Advice',
        text: 'Don\'t fall in love with a home before you\'ve removed subjects. I\'ve seen first-time buyers get emotionally attached before the inspection and then waive conditions they shouldn\'t. Keep your head until the deal is firm — then celebrate.',
      },
    ],
  },
  {
    slug: 'best-kelowna-neighbourhoods-2026',
    title: 'The Best Kelowna Neighbourhoods to Live In Right Now',
    excerpt: 'From the Lower Mission waterfront to the trendy Pandosy Village — a local\'s guide to Kelowna\'s most sought-after areas.',
    date: 'March 5, 2026',
    category: 'Local Guide',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'I was born and raised in Kelowna. I\'ve watched this city grow from a small orchard town into one of the most desirable places to live in Canada. Not every neighbourhood is the same — and the right choice depends entirely on your lifestyle, budget, and priorities. Here\'s my honest, local take.',
      },
      {
        type: 'h2',
        text: 'Lower Mission: The Crown Jewel',
      },
      {
        type: 'p',
        text: 'If you want the quintessential Kelowna lifestyle — beaches, walkability, top schools, great restaurants — the Lower Mission delivers it all. Rotary Beach is minutes away. Pandosy Village has the best collection of local restaurants and boutiques in the city. Summerhill and CedarCreek wineries are a short bike ride.',
      },
      {
        type: 'p',
        text: 'The trade-off? Price. Detached homes in the Lower Mission start around $850K and go well into the millions. But for families who can afford it, this is the neighbourhood that holds its value through any market cycle.',
      },
      {
        type: 'callout',
        text: 'Best for: Families, move-up buyers, anyone who wants the full Kelowna experience. Price range: $800K–$5M+',
      },
      {
        type: 'h2',
        text: 'Downtown Kelowna: The Best It\'s Ever Been',
      },
      {
        type: 'p',
        text: 'Downtown Kelowna has transformed dramatically. The waterfront, City Park, Bernard Avenue, the new UBCO downtown campus, the performing arts scene — this is a genuinely exciting urban neighbourhood now, not just an afterthought.',
      },
      {
        type: 'p',
        text: 'The housing stock is predominantly condos and townhomes. Walkability is the best in the city. For young professionals, downsizers, and investors, downtown condos offer strong rental demand and excellent quality of life.',
      },
      {
        type: 'callout',
        text: 'Best for: Young professionals, downsizers, investors. Price range: $350K–$2M+',
      },
      {
        type: 'h2',
        text: 'Glenmore: The Underrated Family Neighbourhood',
      },
      {
        type: 'p',
        text: 'Glenmore doesn\'t get the attention it deserves. It\'s established, green, close to UBC Okanagan, and more affordable than the Mission. The Kelowna Golf & Country Club is here. The schools are excellent. The streets have mature trees and a real neighbourhood feel.',
      },
      {
        type: 'p',
        text: 'For families being priced out of the Mission, Glenmore is the natural next choice — and it holds its value well.',
      },
      {
        type: 'callout',
        text: 'Best for: Families, UBC-connected households, value buyers. Price range: $550K–$1.5M',
      },
      {
        type: 'h2',
        text: 'West Kelowna: Best Value in the Valley',
      },
      {
        type: 'p',
        text: 'West Kelowna gets unfairly dismissed. Mission Hill and Quail\'s Gate are here. Bear Creek Provincial Park is here. The views from the benchlands are spectacular — and the prices are genuinely 10–20% lower than comparable Kelowna properties.',
      },
      {
        type: 'p',
        text: 'The commute to downtown Kelowna is 10–15 minutes outside of rush hour. For buyers who are more focused on space and value than postal code prestige, West Kelowna consistently overdelivers.',
      },
      {
        type: 'callout',
        text: 'Best for: Value seekers, outdoor lifestyle buyers, growing families. Price range: $500K–$2M',
      },
      {
        type: 'h2',
        text: 'Lake Country: The Hidden Gem',
      },
      {
        type: 'p',
        text: 'Lake Country sits between Wood Lake and Kalamalka Lake — one of the most beautiful lakes in BC. The Rail Trail runs right through it. The wine scene is growing. And the prices, especially for the lifestyle on offer, are still reasonable.',
      },
      {
        type: 'p',
        text: 'Carr\'s Landing is one of the most stunning places to live in the entire Okanagan. If you work from home or have flexibility, Lake Country is worth serious consideration.',
      },
      {
        type: 'callout',
        text: 'Best for: Lifestyle buyers, remote workers, semi-rural preference. Price range: $550K–$3M+',
      },
      {
        type: 'tip',
        label: 'My Bottom Line',
        text: 'There\'s no single "best" neighbourhood — it depends on you. What I always tell clients: buy in the best neighbourhood you can afford at the time. Location is the one thing you can\'t change about a home.',
      },
    ],
  },
  {
    slug: 'home-staging-tips-kelowna',
    title: 'Home Staging Tips That Help Kelowna Homes Sell Faster',
    excerpt: 'Proven staging strategies that get results in the Okanagan market — and won\'t cost you a fortune.',
    date: 'February 18, 2026',
    category: 'Seller Tips',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'The data is clear: professionally staged homes sell faster and for more money. In Kelowna\'s current market, where buyers have more choices than they did two years ago, presentation matters more than ever. Here\'s what actually works — and what\'s not worth the effort.',
      },
      {
        type: 'h2',
        text: 'Why Staging Matters More Now',
      },
      {
        type: 'p',
        text: '95% of buyers see your home online before they ever walk through the door. Your photos are your first showing. If the listing photos don\'t create an emotional response, buyers scroll past — and you never get the showing.',
      },
      {
        type: 'p',
        text: 'In a balanced market, buyers have options. They\'ll compare your home to three others in the same price range. The one that photographs and shows best wins the showing, the offer, and often a higher sale price.',
      },
      {
        type: 'h2',
        text: 'The Highest-ROI Staging Investments',
      },
      {
        type: 'h3',
        text: '1. Declutter Ruthlessly',
      },
      {
        type: 'p',
        text: 'This is free and has the highest return of anything you can do. Remove 30–50% of your furniture and belongings. Rent a storage unit if needed. Buyers need to imagine their life in your space — not see yours.',
      },
      {
        type: 'h3',
        text: '2. Paint (The Right Colours)',
      },
      {
        type: 'p',
        text: 'Fresh neutral paint — warm whites, soft greiges, light warm greys — transforms a space for $500–$2,000 and pays back many times over. Avoid anything trendy, dark, or too personal. You\'re staging for broad appeal, not personal expression.',
      },
      {
        type: 'h3',
        text: '3. Kitchen and Bathrooms',
      },
      {
        type: 'p',
        text: 'Buyers buy kitchens and bathrooms. You don\'t need a full renovation — but you do need: clean grout, no dripping taps, no broken hardware, clean appliances, and clutter-free counters. A $200 hardware update on cabinet pulls can make a kitchen feel significantly more current.',
      },
      {
        type: 'h3',
        text: '4. Curb Appeal',
      },
      {
        type: 'p',
        text: 'The front of your home is the first physical impression. Power-wash the driveway. Freshen up the garden beds. Paint or replace the front door if it\'s looking tired. Add a new doormat and some potted plants. This costs a few hundred dollars and has enormous impact on showing rates.',
      },
      {
        type: 'h2',
        text: 'What to Skip',
      },
      {
        type: 'ul',
        items: [
          'Full kitchen renovation — almost never recovers its cost before a sale.',
          'Trendy accent walls or bold wallpaper — alienates more buyers than it attracts.',
          'Furniture rental if your current furniture is fine — just thin it out.',
          'New flooring in rooms that aren\'t primary spaces.',
          'Outdoor lighting upgrades unless the home shows poorly at dusk.',
        ],
      },
      {
        type: 'h2',
        text: 'On Showing Day',
      },
      {
        type: 'ul',
        items: [
          'Open every blind and turn on every light — even during the day.',
          'Keep the temperature comfortable year-round.',
          'Fresh flowers in the kitchen and master bedroom.',
          'No pets on premises — even "friendly" ones.',
          'Bake something or diffuse a light, clean scent.',
          'Leave. Buyers need to picture themselves in your space, not feel like guests in yours.',
        ],
      },
      {
        type: 'tip',
        label: 'Marki\'s Rule',
        text: 'Spend money on things that photograph well. Everything else is secondary. Your listing photos are doing 90% of the heavy lifting in getting buyers through the door.',
      },
    ],
  },
  {
    slug: 'kelowna-okanagan-lifestyle',
    title: 'Living the Okanagan Lifestyle: Why Kelowna Keeps Drawing People In',
    excerpt: 'What makes Kelowna so special — and why more Canadians are choosing the Okanagan Valley as their forever home.',
    date: 'January 30, 2026',
    category: 'Lifestyle',
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '4 min read',
    content: [
      {
        type: 'intro',
        text: 'I was four years old the first time I went snowboarding at Big White. I\'ve hiked Knox Mountain more times than I can count, watched the Okanagan Lake change colour through every season, and celebrated slow-pitch wins at the end of long summer days. This valley isn\'t just where I work — it\'s home. Here\'s why so many people from across Canada are choosing to make it theirs.',
      },
      {
        type: 'h2',
        text: 'Four Seasons, One Valley',
      },
      {
        type: 'p',
        text: 'Kelowna\'s four seasons are genuinely distinct — and each one has its own pull. Summer means beaches, paddleboarding, wineries, and long warm evenings. Fall brings harvest season, wine tours through golden vineyards, and the kind of light that makes the whole valley glow. Winter is Big White — 55 minutes away, one of BC\'s best ski destinations, and significantly less crowded than Whistler. And spring in the Okanagan, with the orchards blooming and the lake warming up, is something photographers chase every year.',
      },
      {
        type: 'h2',
        text: 'Outdoors as a Way of Life',
      },
      {
        type: 'p',
        text: 'Kelowna isn\'t a place you move to and then watch Netflix all weekend. The city is built for people who want to be outside. The Mission Creek Greenway, Knox Mountain, the Okanagan Rail Trail — these aren\'t amenities, they\'re lifelines. Mountain biking trails weave through the benchlands. Lake launches are never more than 10 minutes away. And if you want the real Okanagan — the version the Instagram posts can\'t fully capture — it\'s even better with a dog.',
      },
      {
        type: 'h2',
        text: 'The Wine Culture',
      },
      {
        type: 'p',
        text: 'The Okanagan wine industry has grown from a regional novelty into one of the most respected wine regions in North America. Mission Hill, Quail\'s Gate, Summerhill, CedarCreek, Tantalus — these aren\'t just places to buy bottles. They\'re destinations, with restaurants, concert series, and experiences that make living here feel genuinely luxurious in a way that doesn\'t require a trust fund.',
      },
      {
        type: 'h2',
        text: 'A City That\'s Growing Up',
      },
      {
        type: 'p',
        text: 'Kelowna isn\'t the sleepy resort town it was 20 years ago. UBC Okanagan has brought a university culture. The tech sector has grown significantly — attracting young professionals who want the career opportunities of a larger city without the congestion and cost. The restaurant and arts scene has followed. Downtown is vibrant in a way that surprises first-time visitors.',
      },
      {
        type: 'h2',
        text: 'Why People Don\'t Leave',
      },
      {
        type: 'p',
        text: 'I\'ve had clients who moved here from Toronto, Calgary, and Vancouver — all planning to stay for a few years. Very few leave. Once you\'ve had your morning coffee watching the sun come up over the lake, walked to the farmers\' market on a Saturday, hiked Knox Mountain in the afternoon, and had dinner at a winery — the idea of going back to a commuter city feels genuinely incomprehensible.',
      },
      {
        type: 'tip',
        label: 'From Marki',
        text: 'I\'m biased, obviously. But I genuinely believe Kelowna offers one of the best quality-of-life packages in Canada — and I\'ve been to a lot of places. If you\'re thinking about making the move, I\'d love to show you around.',
      },
    ],
  },
  {
    slug: 'investment-property-kelowna-2026',
    title: 'Is Kelowna a Good Place to Invest in Real Estate in 2026?',
    excerpt: 'Rental demand, appreciation trends, and the best property types for investors in the current Okanagan market.',
    date: 'January 12, 2026',
    category: 'Investment',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '7 min read',
    content: [
      {
        type: 'intro',
        text: 'Kelowna has been one of the best-performing real estate markets in Canada over the past two decades. But past performance doesn\'t guarantee future returns — especially in a market that has seen significant price appreciation. Here\'s an honest look at whether Kelowna real estate makes sense as an investment in 2026.',
      },
      {
        type: 'h2',
        text: 'The Fundamentals Still Work in Kelowna\'s Favour',
      },
      {
        type: 'p',
        text: 'Several structural factors drive long-term real estate demand in Kelowna — and none of them have changed:',
      },
      {
        type: 'ul',
        items: [
          'Strong interprovincial migration: Kelowna continues to attract buyers from Metro Vancouver, Calgary, and the Lower Mainland seeking lifestyle and relative affordability.',
          'UBC Okanagan growth: The university continues to expand, driving sustained rental demand from students, faculty, and staff.',
          'Tourism economy: Short-term rentals (where permitted) in resort and lakefront properties remain a viable income strategy.',
          'Limited land supply: The valley geography and ALR (Agricultural Land Reserve) constrain how much new housing can be built, supporting long-term values.',
          'Kelowna International Airport: Growing direct connections to major cities make the valley increasingly accessible.',
        ],
      },
      {
        type: 'h2',
        text: 'Rental Market: Strong but Tight',
      },
      {
        type: 'p',
        text: 'Kelowna has a very tight long-term rental market. Vacancy rates have been below 2% for several years — meaning if you own a well-located rental property, you will have tenants. Average rents for a 2-bedroom apartment in Kelowna have exceeded $2,200/month, with newer units and those near UBC Okanagan commanding more.',
      },
      {
        type: 'p',
        text: 'The challenge for investors: BC\'s rent control rules limit annual rent increases for existing tenants. Properties with long-term tenants may be generating below-market rents. Turnover is when investors typically reset to market rates.',
      },
      {
        type: 'h2',
        text: 'Best Property Types for Investors Right Now',
      },
      {
        type: 'h3',
        text: 'Single-Family Homes with Legal Suites',
      },
      {
        type: 'p',
        text: 'A home with a legal basement or carriage house suite is one of the most versatile investments available. You can live in the main unit and rent the suite, rent both, or eventually sell to an owner-occupant. Suite income of $1,200–$1,800/month significantly improves cash flow and purchasing power.',
      },
      {
        type: 'h3',
        text: 'Condos Near UBCO or Downtown',
      },
      {
        type: 'p',
        text: 'One and two-bedroom condos priced $350K–$550K near UBC Okanagan or downtown Kelowna have strong rental demand and are attainable for first-time investors. Cap rates in this segment are modest (typically 3–5%), but appreciation upside and low maintenance make them popular entry-level investments.',
      },
      {
        type: 'h3',
        text: 'Townhomes for Mid-Range Rental Income',
      },
      {
        type: 'p',
        text: 'Townhomes in West Kelowna and Rutland, priced $500K–$700K, attract long-term family tenants with lower turnover. These balance reasonable entry price with solid rental income.',
      },
      {
        type: 'h2',
        text: 'The Honest Caveat',
      },
      {
        type: 'p',
        text: 'Kelowna is not a cash-flow market at current prices. Unless you put a significant down payment down, most Kelowna investment properties will be slightly negative or break-even on a monthly basis. The investment thesis is appreciation + equity build-up + rental income, not month-to-month cash flow. If you need positive cash flow from day one, Kelowna is not the right market for you.',
      },
      {
        type: 'tip',
        label: 'Marki\'s Perspective',
        text: 'The investors I\'ve worked with who have done best in Kelowna bought with a 10-year mindset, chose properties in strong rental locations, and weren\'t depending on the investment to cover all their expenses immediately. If that\'s your approach, Kelowna remains a strong long-term bet.',
      },
      {
        type: 'h2',
        text: 'Before You Invest: Key Questions to Ask',
      },
      {
        type: 'ul',
        items: [
          'Is the suite legal? (Illegal suites create liability and can\'t be advertised).',
          'What are the strata rules on rentals? (Some buildings restrict or prohibit them).',
          'What\'s the property tax, strata fee, and insurance cost all-in?',
          'What\'s the realistic rental income for this specific property?',
          'Are you prepared to be a landlord, or will you use a property manager?',
        ],
      },
    ],
  },
]

export const categoryColors: Record<string, string> = {
  'Market Update': 'bg-[#e4f0ed] text-[#1F6B5F]',
  'Buyer Tips': 'bg-[#f0f7ff] text-[#428bff]',
  'Seller Tips': 'bg-[#f0fff4] text-[#34a853]',
  'Local Guide': 'bg-[#f5f0ff] text-[#460479]',
  'Lifestyle': 'bg-[#fff8f0] text-[#ff9500]',
  'Investment': 'bg-[#f7f7f7] text-[#222222]',
}
