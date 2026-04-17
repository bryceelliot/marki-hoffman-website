import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kelowna Neighbourhood Guide — Real Estate',
  description: 'A local\'s guide to Kelowna\'s neighbourhoods — Lower Mission, Upper Mission, Downtown, Glenmore, West Kelowna, Lake Country, and more.',
}

const neighbourhoods = [
  {
    name: 'Lower Mission',
    tagline: 'Kelowna\'s most coveted lakeside community',
    description: `The Lower Mission is arguably the most sought-after neighbourhood in the entire Okanagan. Bordered by Okanagan Lake to the west and Mission Creek to the north, it offers the full Kelowna lifestyle: beaches, wineries, top-rated schools, and beautiful homes from character ranchers to lakefront estates.

Rotary Beach and the H2O Adventure + Fitness Centre are neighbourhood anchors. Chute Lake Road leads up to Crawford Estates in the Upper Mission. The area feels suburban but is still close to everything.`,
    priceRange: '$700K – $5M+',
    bestFor: 'Families, lakefront buyers, move-up buyers',
    highlights: ['Rotary Beach & Gyro Beach', 'KSS (Kelowna Secondary School)', 'Mission Creek Greenway trails', 'Pandosy Village boutiques & restaurants'],
    vibe: 'Established, family-oriented, prestigious',
  },
  {
    name: 'Upper Mission',
    tagline: 'Panoramic views and newer builds above the lake',
    description: `The Upper Mission sits on the benchlands above the Lower Mission, offering sweeping valley and lake views that are genuinely breathtaking. Development here accelerated in the 2000s and 2010s, so you'll find newer construction, larger lots, and a mix of executive homes and growing families.

Crawford Estates is a particularly popular pocket — newer builds, quiet streets, and mountain views. The trade-off is a longer drive to downtown and services, but many residents consider the views and lifestyle well worth it.`,
    priceRange: '$800K – $3M+',
    bestFor: 'Families wanting newer builds, view buyers, executive buyers',
    highlights: ['Panoramic lake and valley views', 'Larger lots, newer construction', 'Crawford Estates community', 'Access to hiking trails'],
    vibe: 'Quieter, newer, family-focused, executive',
  },
  {
    name: 'Downtown Kelowna',
    tagline: 'Walkable, vibrant, and right on the lake',
    description: `Downtown Kelowna has transformed dramatically over the past decade. City Park and the waterfront are world-class. Bernard Avenue is lined with restaurants, cafes, boutiques, and the Kelowna Farmers' Market. The performing arts centre, casino, and a growing cultural scene make this a genuinely exciting place to live.

The housing stock here is predominantly condos and townhomes. Walkability scores are the highest in the city. It's ideal for young professionals, downsizers, and anyone who wants to live close to the action without a car.`,
    priceRange: '$350K – $2M+ (condos to penthouses)',
    bestFor: 'Young professionals, downsizers, investors',
    highlights: ['City Park and Okanagan Lake waterfront', 'Bernard Avenue restaurants and shops', 'Kelowna Farmers\' Market', 'Walk to everything'],
    vibe: 'Urban, walkable, energetic, evolving',
  },
  {
    name: 'Glenmore',
    tagline: 'Family-friendly and central with room to breathe',
    description: `Glenmore is one of Kelowna's most established and liveable family neighbourhoods. Situated north of downtown with easy access to Highway 97, it offers a mix of older character homes, newer infill, and suburban streets with mature trees.

The Kelowna Golf & Country Club is here. UBC Okanagan is at the north end of Glenmore. The neighbourhood has a settled, community feel — long-time residents, good schools, and a great network of parks and trails. Prices are generally more accessible than the Mission.`,
    priceRange: '$550K – $1.5M',
    bestFor: 'Families, first-time buyers stepping up, UBCO proximity',
    highlights: ['Kelowna Golf & Country Club', 'Close to UBC Okanagan', 'Mature trees, established streets', 'Accessible price points'],
    vibe: 'Established, community-oriented, family-friendly',
  },
  {
    name: 'West Kelowna',
    tagline: 'Wineries, views, and more bang for your buck',
    description: `Technically its own city (incorporated 2007), West Kelowna sits across the William R. Bennett Bridge from Kelowna proper. It offers some of the best value in the Okanagan — lower prices than Kelowna for comparable homes, strong views, and a fantastic quality of life.

Mission Hill, Quail's Gate, and several boutique wineries are all here. Bear Creek Provincial Park has stunning canyon and lake views. Westbank First Nation lands are also in this area. The commute to downtown Kelowna is easy — 10–15 minutes outside of rush hour.`,
    priceRange: '$500K – $2M',
    bestFor: 'Value seekers, families, winery proximity lovers',
    highlights: ['Mission Hill & Quail\'s Gate wineries', 'Bear Creek Provincial Park', 'More affordable than east side', 'Strong views on benchlands'],
    vibe: 'Relaxed, outdoorsy, great value, growing',
  },
  {
    name: 'Lake Country',
    tagline: 'Semi-rural charm between two stunning lakes',
    description: `Lake Country sits between Wood Lake and Kalamalka Lake (one of the most beautiful lakes in BC) about 15 minutes north of Kelowna. It's a distinct municipality with a quieter, more rural feel — orchards, vineyards, beaches, and a growing wine trail.

Carr's Landing is an especially beautiful area with lakefront homes and dramatic views. Lake Country has attracted buyers looking to escape city density while staying close to Kelowna amenities. It's also the location of the Rail Trail, one of the best cycling routes in the Okanagan.`,
    priceRange: '$550K – $3M+',
    bestFor: 'Semi-rural lifestyle, lake/orchard lovers, cyclists',
    highlights: ['Kalamalka Lake (turquoise water)', 'Okanagan Rail Trail cycling', 'Carr\'s Landing views', 'Orchard country feel'],
    vibe: 'Semi-rural, serene, scenic, community-driven',
  },
  {
    name: 'Rutland & North Kelowna',
    tagline: 'Central, diverse, and more accessible',
    description: `Rutland is one of Kelowna's most affordable and centrally located neighbourhoods. It has a diverse, multicultural community, strong commercial services along Highway 33, and good access to the rest of the city.

It's popular with first-time buyers, investors, and families looking for more space at a lower price point. The neighbourhood has evolved significantly in recent years with new development and improved amenities. Close to Orchard Park Mall and easy highway access.`,
    priceRange: '$400K – $900K',
    bestFor: 'First-time buyers, investors, affordability-focused',
    highlights: ['Most affordable single-family options', 'Diverse, established community', 'Orchard Park Mall nearby', 'Good transit connections'],
    vibe: 'Diverse, accessible, up-and-coming, value-focused',
  },
]

export default function NeighbourhoodGuidePage() {
  return (
    <>
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/client-resources" className="inline-flex items-center gap-2 text-sm font-medium text-[#6a6a6a] hover:text-[#1F6B5F] transition-colors">
            <ArrowLeft size={14} /> Client Resources
          </Link>
        </div>
      </div>

      <section className="bg-[#f7f7f7] py-16 border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Client Resources</p>
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Neighbourhood Guide</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            A born-and-raised local's guide to finding the right neighbourhood for your life in the Okanagan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {neighbourhoods.map(n => (
            <div key={n.name}
              className="bg-white rounded-[24px] overflow-hidden"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.08) 0px 4px 12px' }}
            >
              <div className="bg-[#e4f0ed] px-8 py-6 flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-[#1F6B5F]" />
                    <h2 className="text-2xl font-bold text-[#222222]">{n.name}</h2>
                  </div>
                  <p className="text-[#1F6B5F] font-medium text-sm">{n.tagline}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6a6a6a] uppercase tracking-widest mb-0.5">Typical Price Range</p>
                  <p className="font-bold text-[#222222]">{n.priceRange}</p>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-3">
                  {n.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[#6a6a6a] leading-relaxed text-sm">{para}</p>
                  ))}
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Highlights</p>
                    <ul className="space-y-1.5">
                      {n.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#6a6a6a]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F6B5F] shrink-0 mt-1.5" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#f7f7f7] rounded-[12px] p-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#6a6a6a]">Best For</p>
                    <p className="text-sm text-[#222222]">{n.bestFor}</p>
                    <p className="text-xs text-[#6a6a6a] italic">{n.vibe}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Not Sure Which Neighbourhood is Right for You?</h2>
          <p className="text-white/70 mb-8">I've lived here my whole life. Let's talk about your lifestyle, priorities, and budget — I'll point you in the right direction.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors">
              Let's Chat <ArrowRight size={16} />
            </Link>
            <a href="tel:2503175008" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              <Phone size={16} /> (250) 317-5008
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
