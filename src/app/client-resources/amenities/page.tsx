import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kelowna Amenities Guide — Real Estate',
  description: 'Beaches, wineries, schools, trails, healthcare, and everything else that makes Kelowna one of the best places to live in Canada.',
}

const categories = [
  {
    title: 'Beaches & Waterfront',
    icon: '🏖️',
    items: [
      { name: 'City Park Beach', detail: 'Downtown Kelowna — the iconic central beach, sandy, family-friendly, with a floating stage' },
      { name: 'Rotary Beach', detail: 'Lower Mission — calmer water, great for families, dog-friendly sections' },
      { name: 'Gyro Beach', detail: 'South end of Pandosy — popular with young families and paddleboarders' },
      { name: 'Boyce-Gyro Beach Park', detail: 'Quiet, less crowded, nice views across the lake' },
      { name: 'Kalamalka Lake (Vernon)', detail: 'Turquoise water — arguably the most beautiful lake in BC, 30 min north' },
      { name: 'Bear Creek Provincial Park', detail: 'West Kelowna — secluded beach, canyon walks, camping' },
    ],
  },
  {
    title: 'Wineries & Dining',
    icon: '🍷',
    items: [
      { name: 'Mission Hill Family Estate', detail: 'West Kelowna — iconic architecture, world-class wines, summer concert series' },
      { name: 'Quail\'s Gate Winery', detail: 'West Kelowna — Old Vines Restaurant, stunning lakeside setting' },
      { name: 'Summerhill Pyramid Winery', detail: 'Lower Mission — certified organic, pyramid wine cellar, beautiful grounds' },
      { name: 'CedarCreek Estate Winery', detail: 'Lower Mission — elegant tasting room, excellent pinot noir' },
      { name: 'Tantalus Vineyards', detail: 'Lower Mission — boutique, exceptional Rieslings, stunning views' },
      { name: 'Bernard Ave & Pandosy St', detail: 'Dozens of excellent restaurants, cafes, breweries, and cocktail bars' },
    ],
  },
  {
    title: 'Trails & Outdoor Recreation',
    icon: '🥾',
    items: [
      { name: 'Knox Mountain Park', detail: 'City\'s largest park — hiking, mountain biking, lake views, off-leash area' },
      { name: 'Mission Creek Greenway', detail: '12km paved trail through the Mission — cycling, walking, bird watching' },
      { name: 'Okanagan Rail Trail', detail: '50km cycling/walking trail from Kelowna to Vernon along lakeshores' },
      { name: 'Myra-Bellevue Provincial Park', detail: 'Famous Myra Canyon trestles — KVR trail, stunning views' },
      { name: 'Kettle Valley Rail Trail', detail: 'Historic trail system through the mountains and canyon country' },
      { name: 'Big White Ski Resort', detail: '55 minutes from Kelowna — one of BC\'s top ski destinations, great for families' },
    ],
  },
  {
    title: 'Schools',
    icon: '🎓',
    items: [
      { name: 'Kelowna Secondary School (KSS)', detail: 'Lower Mission — large public high school, strong academics and arts programs' },
      { name: 'Okanagan Mission Secondary (OKM)', detail: 'Mission area — strong academics, IB program available' },
      { name: 'École Dr. Knox Middle School', detail: 'Glenmore — French immersion and English programs' },
      { name: 'UBC Okanagan', detail: 'Glenmore — full university, growing rapidly, research-intensive' },
      { name: 'Okanagan College', detail: 'Multiple campuses — trades, technology, health sciences, university transfer' },
      { name: 'Private Options', detail: 'Immaculata, Kelowna Christian School, and several Montessori options available' },
    ],
  },
  {
    title: 'Healthcare',
    icon: '🏥',
    items: [
      { name: 'Kelowna General Hospital (KGH)', detail: 'Interior Health\'s largest hospital — full acute care, emergency, specialist services' },
      { name: 'Interior Health Authority', detail: 'Wide network of clinics and community health centres throughout the valley' },
      { name: 'Okanagan Urgent and Primary Care Centre', detail: 'Walk-in care, reduced ER pressure — multiple locations' },
      { name: 'Kelowna Eye Care & Surgery Centre', detail: 'Specialty eye care and surgical services' },
      { name: 'BC Cancer Agency — Kelowna', detail: 'Regional cancer care centre serving the entire interior' },
      { name: 'Numerous Walk-in Clinics', detail: 'Well-served city — most areas have accessible walk-in options' },
    ],
  },
  {
    title: 'Shopping & Services',
    icon: '🛍️',
    items: [
      { name: 'Orchard Park Mall', detail: 'Kelowna\'s largest mall — over 170 stores, anchor tenants, food court' },
      { name: 'Pandosy Village', detail: 'Lower Mission boutique shopping strip — local shops, cafes, services' },
      { name: 'Bernard Avenue (Downtown)', detail: 'Mix of boutiques, galleries, and local businesses' },
      { name: 'Costco & Major Retailers', detail: 'Kelowna has full big-box retail — IKEA, Canadian Tire, Home Depot, and more' },
      { name: 'Kelowna Farmers\' Market', detail: 'Wednesday & Saturday downtown — local produce, artisans, food vendors' },
      { name: 'Airport (YLW)', detail: 'Kelowna International Airport — direct flights to major Canadian cities and select US routes' },
    ],
  },
]

export default function AmenitiesPage() {
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
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Kelowna Amenities</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            Beaches, wineries, world-class trails, top schools, and great healthcare — here's why the Okanagan is one of the best places to live in Canada.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat.title}
                className="bg-[#f7f7f7] rounded-[24px] p-7"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-lg font-bold text-[#222222]">{cat.title}</h2>
                </div>
                <ul className="space-y-4">
                  {cat.items.map(item => (
                    <li key={item.name} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F6B5F] shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-[#222222]">{item.name}</p>
                        <p className="text-xs text-[#6a6a6a] leading-relaxed mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Call the Okanagan Home?</h2>
          <p className="text-white/70 mb-8">I'd love to help you find a home that puts all of this at your doorstep. Let's talk about what matters most to you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors">
              Get in Touch <ArrowRight size={16} />
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
