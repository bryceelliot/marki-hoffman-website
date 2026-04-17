import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Buyer's Guide — Kelowna Real Estate",
  description: "Step-by-step guide to buying a home in Kelowna, BC. Pre-approval, showings, offers, inspections, and closing — from REALTOR® Marki Hoffman.",
}

const steps = [
  {
    number: '01',
    title: 'Get Pre-Approved',
    content: `Before you fall in love with a home, know your budget. A mortgage pre-approval tells you exactly how much a lender will offer, locks in your rate for 90–120 days, and shows sellers you're a serious buyer.

Talk to your bank or a mortgage broker — a broker can shop multiple lenders to find the best rate. You'll need: proof of income (T4s or NOAs), 2 years of tax returns, bank statements, and a credit check.

In Kelowna's competitive market, offers without pre-approval are often ignored. Don't skip this step.`,
    tips: ['Use a mortgage broker — they shop 20+ lenders at no cost to you', 'Don\'t change jobs or take on new debt after pre-approval', 'A pre-approval is not a guaranteed mortgage — keep financials stable'],
  },
  {
    number: '02',
    title: 'Define Your Must-Haves',
    content: `Write down your non-negotiables before we start looking. Bedrooms, bathrooms, and location are obvious — but also think about: garage vs. no garage, strata vs. freehold, proximity to schools or the lake, suite potential, and renovation tolerance.

The Kelowna market moves fast. Buyers who've done this work ahead of time can act decisively when the right property comes up. Buyers who haven't lose good homes to indecision.`,
    tips: ['Separate "must-haves" from "nice-to-haves"', 'Consider resale value, not just your current lifestyle', 'Factor in commute — Kelowna traffic has grown significantly'],
  },
  {
    number: '03',
    title: 'Start Viewing Homes',
    content: `Once we're aligned on your criteria, I'll set up a custom MLS® search that alerts you the moment matching homes hit the market. We'll book showings together — and I'll be with you at every one.

During showings, look beyond staging. Check water pressure, look at the age of the roof, notice the direction of natural light, and listen for noise. I'll point out things that aren't obvious to the untrained eye.

In Kelowna, the best homes in the $700K–$1.2M range often sell in 1–2 weeks. If you love it, be ready to move.`,
    tips: ['Visit at different times of day if possible', 'Check the strata documents for condos/townhomes before getting attached', 'Look up the BC Assessment value for price context'],
  },
  {
    number: '04',
    title: 'Make an Offer',
    content: `When you've found the right home, we'll craft a strong, competitive offer together. This includes: purchase price, deposit amount (typically 5% of purchase price, due within 24 hours of acceptance), subject conditions, and completion/possession dates.

Common subjects include: financing (7 days), property inspection (7 days), and strata document review (if applicable). In a competitive situation, we'll discuss whether subjects are appropriate and how to strengthen your position.

I'll negotiate hard on your behalf — I've been doing this for over 10 years and know what works in this market.`,
    tips: ['A larger deposit signals strength to the seller', 'Flexible possession dates can be a negotiating tool', 'Never remove subjects under pressure without fully understanding what you\'re waiving'],
  },
  {
    number: '05',
    title: 'Home Inspection',
    content: `A home inspection (typically $400–$600) is one of the best investments you'll make. A qualified inspector spends 2–4 hours examining the structure, roof, electrical, plumbing, HVAC, and more.

You'll attend with the inspector and receive a detailed written report. This gives you clear information to: proceed with confidence, negotiate repairs or a price reduction, or walk away if serious issues are found.

I work with several trusted inspectors in Kelowna and can recommend one based on the property type.`,
    tips: ['Always attend the inspection in person', 'Cosmetic issues are expected — focus on structural, roof, and mechanicals', 'A report with issues isn\'t necessarily a dealbreaker — it\'s information'],
  },
  {
    number: '06',
    title: 'Remove Subjects & Close',
    content: `Once you're satisfied with your inspection, financing is confirmed, and all conditions are met, you remove subjects and the deal becomes firm. Congratulations — you've bought a home.

From here, your lawyer or notary handles the title transfer. You'll need to provide your deposit, sign documents, arrange home insurance, and set up utilities. On possession day, I'll be there to hand over the keys.

Closing costs in BC typically run 1.5–4% of purchase price and include: Property Transfer Tax, legal fees (~$1,500), title insurance, and home inspection.`,
    tips: ['Hire a real estate lawyer or notary — typically $1,200–$1,800', 'First-time buyers may be exempt from Property Transfer Tax on homes under $500K', 'Book a locksmith to re-key locks on possession day'],
  },
]

const closingCosts = [
  { item: 'Property Transfer Tax', detail: '1% on first $200K, 2% on $200K–$2M, 3% over $2M' },
  { item: 'Legal / Notary Fees', detail: 'Typically $1,200–$1,800' },
  { item: 'Home Inspection', detail: '$400–$600' },
  { item: 'Title Insurance', detail: '$200–$400' },
  { item: 'Moving Costs', detail: '$1,000–$3,000+ depending on distance' },
  { item: 'Property Tax Adjustment', detail: 'Prorated share owed to seller' },
]

export default function BuyersGuidePage() {
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
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Buyer's Guide</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            Everything you need to know about buying a home in Kelowna — from pre-approval to getting your keys.
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
            <AlertCircle size={16} className="text-[#1F6B5F]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F]">Budget For These</p>
          </div>
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Closing Costs Breakdown</h2>
          <div className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
            {closingCosts.map((row, i) => (
              <div key={row.item} className={`flex items-start justify-between gap-4 px-6 py-4 ${i < closingCosts.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}>
                <span className="font-medium text-[#222222] text-sm">{row.item}</span>
                <span className="text-sm text-[#6a6a6a] text-right">{row.detail}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6a6a6a] mt-4">* First-time buyers may be exempt from PTT on homes under $500,000 in BC. Consult your lawyer for current thresholds.</p>
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Looking?</h2>
          <p className="text-white/70 mb-8">Let's find your home in the Okanagan. I'll set up a custom MLS® search and guide you every step of the way.</p>
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
