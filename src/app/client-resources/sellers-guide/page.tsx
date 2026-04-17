import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: "Seller's Guide — Kelowna Real Estate",
  description: "How to sell your Kelowna home for top dollar. Pricing, staging, marketing, and negotiating offers — from REALTOR® Marki Hoffman.",
}

const steps = [
  {
    number: '01',
    title: 'Get a Free Market Evaluation',
    content: `Before listing, you need to know what your home is actually worth — not what Zillow says, not what your neighbour got two years ago. A Comparative Market Analysis (CMA) looks at recent sales of similar homes in your neighbourhood to establish realistic pricing.

I provide this for free with no obligation. We'll walk through your home together, discuss recent sales, and I'll give you an honest opinion of value — even if it's not what you were hoping to hear. Accurate pricing from the start is the single biggest factor in a successful sale.`,
    tips: ['Overpricing is the #1 mistake sellers make — it leads to a stale listing and lower final price', 'BC Assessment value is a lagging indicator — don\'t use it for pricing', 'The right price generates competition; the wrong price kills interest'],
  },
  {
    number: '02',
    title: 'Prepare Your Home',
    content: `First impressions happen online — 95% of buyers see your home on MLS® before they ever set foot inside. Preparation matters enormously.

Start with decluttering: remove excess furniture, personal photos, and anything that makes rooms feel smaller. Deep clean everything. Address minor repairs — holes in walls, dripping faucets, broken handles — buyers notice these things and use them to justify lower offers.

Fresh neutral paint in main living areas is one of the highest-ROI improvements you can make. Outside, tidy the landscaping, power-wash the driveway, and make the front entrance inviting. Curb appeal drives showings.`,
    tips: ['Declutter ruthlessly — rent a storage unit if needed', 'Neutral paint transforms a space for $500–$1,500 and pays back many times over', 'Have carpets professionally cleaned — or replace them if they\'re badly worn'],
  },
  {
    number: '03',
    title: 'Professional Photography & Marketing',
    content: `I invest in professional photography, floor plans, and video for every listing. In Kelowna's market, the photos are your first showing — they need to be excellent.

Your listing will be on MLS®, Realtor.ca, my website, Instagram, Facebook, and targeted digital ads. I'll write compelling listing copy that highlights what makes your home unique and positions it correctly for its target buyer.

For the right properties, I use drone photography, video walkthroughs, and 3D virtual tours. We'll discuss what's appropriate for your home.`,
    tips: ['Open every blind and turn on every light before the photographer arrives', 'Fresh flowers, a made bed, and a clean kitchen make a real difference', 'Don\'t be present during showings — buyers need to picture themselves in the space'],
  },
  {
    number: '04',
    title: 'Showings & Open Houses',
    content: `Once listed, be ready for showings on short notice — especially in the first 1–2 weeks when buyer interest is highest. I'll coordinate all showings and provide feedback after each one.

I use a lockbox so buyers can view with their own agent when you're not home. Your home should always be show-ready: clean, tidy, lights on, blinds open.

We'll discuss open houses based on your property type and market conditions. Open houses work well for some properties and neighbourhoods; for others, they generate foot traffic without qualified buyers.`,
    tips: ['Have a plan for where you and pets will go during showings', 'Remove valuables, medications, and sensitive documents before showings', 'Keep the house at a comfortable temperature — this affects how buyers feel'],
  },
  {
    number: '05',
    title: 'Reviewing Offers',
    content: `When offers come in, I'll present each one thoroughly — not just the price, but the deposit amount, subjects, completion date, and any conditions. A high-price offer with shaky financing or unusual conditions may be worth less than a clean, slightly lower offer.

In multiple-offer situations, I'll advise you on the best strategy — sometimes countering is right, sometimes asking for best-and-final is better. My goal is to get you the strongest possible outcome, not just a fast close.

Once you accept an offer, the buyers typically have 5–10 days to complete their subjects. During this time, they'll do their inspection and finalize their financing.`,
    tips: ['Don\'t just look at the price — closing date, subjects, and deposit all matter', 'Counter-offering is normal and usually productive', 'If you get multiple offers, don\'t necessarily take the first one — sometimes it\'s worth waiting 24 hours'],
  },
  {
    number: '06',
    title: 'Firm Sale & Closing',
    content: `Once subjects are removed, the deal is firm. Your lawyer or notary will handle the title transfer and ensure you receive the proceeds on completion day.

You'll need to: cancel or transfer utilities, update your address, arrange movers, and vacate the property by the agreed possession time (usually 12pm). Leave the home in the condition the buyers last saw it — clean, with all included items present.

I stay involved right through to key handover and am always available if questions arise during the process.`,
    tips: ['Book your lawyer early — notaries get busy at month-end', 'Keep all appliance manuals and warranty documents for the buyers', 'Do a final walkthrough of your own before possession to make sure nothing is missed'],
  },
]

const sellerCosts = [
  { item: 'Real Estate Commission', detail: 'Negotiated — typically 3–5% of purchase price' },
  { item: 'Legal / Notary Fees', detail: 'Typically $1,000–$1,500' },
  { item: 'Mortgage Payout Penalty', detail: 'Varies — check with your lender' },
  { item: 'Home Staging (if used)', detail: '$1,500–$5,000 depending on scope' },
  { item: 'Pre-Listing Repairs', detail: 'Varies — but usually pays back in sale price' },
  { item: 'Moving Costs', detail: '$1,000–$3,000+ depending on distance' },
]

export default function SellersGuidePage() {
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
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Seller's Guide</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            How to sell your Kelowna home with confidence — and for the best possible price.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-14 h-14 rounded-full bg-[#e4f0ed] flex items-center justify-center">
                    <span className="text-[#1F6B5F] font-bold text-lg">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block w-px flex-1 bg-[#e8e8e8] mt-3" />
                  )}
                </div>
                <div className="pb-4">
                  <h2 className="text-2xl font-bold text-[#222222] mb-4">{step.title}</h2>
                  <div className="space-y-3 text-[#6a6a6a] leading-relaxed mb-6">
                    {step.content.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  <div className="bg-[#f7f7f7] rounded-[16px] p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-3">Marki's Tips</p>
                    <ul className="space-y-2">
                      {step.tips.map(tip => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-[#6a6a6a]">
                          <CheckCircle2 size={14} className="text-[#1F6B5F] shrink-0 mt-0.5" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-[#1F6B5F]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F]">Plan Ahead</p>
          </div>
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Typical Seller Costs</h2>
          <div className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
            {sellerCosts.map((row, i) => (
              <div key={row.item} className={`flex items-start justify-between gap-4 px-6 py-4 ${i < sellerCosts.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}>
                <span className="font-medium text-[#222222] text-sm">{row.item}</span>
                <span className="text-sm text-[#6a6a6a] text-right">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What's Your Home Worth?</h2>
          <p className="text-white/70 mb-8">I'll prepare a free, no-obligation market evaluation for your Kelowna property. No pressure — just honest numbers.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors">
              Book a Free Evaluation <ArrowRight size={16} />
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
