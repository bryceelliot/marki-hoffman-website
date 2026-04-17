import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, CheckCircle2 } from 'lucide-react'
import MortgageCalculator from '@/components/MortgageCalculator'

export const metadata: Metadata = {
  title: 'Mortgage Calculator & Resources — Kelowna Real Estate',
  description: 'Calculate your mortgage payment and learn about BC mortgage rules, down payment requirements, CMHC insurance, and first-time buyer incentives.',
}

const rateTypes = [
  {
    title: 'Fixed Rate',
    pros: ['Predictable payments for the term', 'Protection if rates rise', 'Easier to budget'],
    cons: ['Higher rate than variable at the outset', 'Break penalty can be substantial (Interest Rate Differential)'],
    bestFor: 'First-time buyers, risk-averse borrowers, or those on tight budgets who need certainty.',
  },
  {
    title: 'Variable Rate',
    pros: ['Usually lower starting rate', 'Typically lower break penalty (3 months interest)', 'Historically outperforms fixed over time'],
    cons: ['Payment fluctuates with prime rate', 'Harder to budget, creates uncertainty'],
    bestFor: 'Buyers with financial flexibility who can absorb rate movement, or those who plan to sell within 1–3 years.',
  },
]

const incentives = [
  {
    title: 'First Home Savings Account (FHSA)',
    description: 'Contribute up to $8,000/year, $40,000 lifetime. Contributions are tax-deductible. Withdrawals for a qualifying first home purchase are tax-free. This is the most powerful first-time buyer tool available in Canada right now.',
  },
  {
    title: 'Home Buyers\' Plan (RRSP)',
    description: 'Withdraw up to $35,000 from your RRSP ($70,000 per couple) tax-free for a first home purchase. Must be repaid over 15 years or included in income.',
  },
  {
    title: 'First-Time Home Buyers\' Tax Credit',
    description: 'A $10,000 non-refundable federal tax credit on your first home purchase, providing up to $1,500 in tax relief.',
  },
  {
    title: 'BC Property Transfer Tax Exemption',
    description: 'First-time buyers in BC are exempt from Property Transfer Tax on homes up to $500,000 (partial exemption up to $525,000). This can save up to $8,000.',
  },
  {
    title: 'GST New Home Rebate',
    description: 'If buying a newly built home, you may qualify for a partial GST rebate. Available on new builds under $450,000 (partial rebate to $500,000).',
  },
]

const downPaymentRules = [
  { down: '5%', note: 'Minimum for homes under $500K', cmhc: 'Required — 4.00% of mortgage', detail: 'Minimum for homes $500K–$999K is 5% on first $500K + 10% on remainder.' },
  { down: '10%', note: 'Reduced CMHC premium', cmhc: 'Required — 3.10% of mortgage', detail: 'Lower CMHC premium than 5% down.' },
  { down: '20%', note: 'No CMHC required', cmhc: 'Not required', detail: 'Conventional mortgage. No insurance premium. Required for homes $1M+.' },
]

export default function MortgagePage() {
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
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Mortgage Resources</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            Understand your purchasing power before you start shopping. Use the calculator below and read through the key concepts every buyer should know.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Estimate Your Payment</p>
            <h2 className="text-3xl font-bold text-[#222222] tracking-tight">Mortgage Calculator</h2>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* Down payment */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Know the Rules</p>
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Down Payment Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {downPaymentRules.map(row => (
              <div key={row.down} className="bg-white rounded-[20px] p-6" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                <div className="w-14 h-14 rounded-full bg-[#e4f0ed] flex items-center justify-center mb-4">
                  <span className="text-[#1F6B5F] font-bold text-xl">{row.down}</span>
                </div>
                <p className="font-semibold text-[#222222] mb-1">{row.note}</p>
                <p className="text-sm text-[#6a6a6a] mb-3">{row.detail}</p>
                <div className="bg-[#f7f7f7] rounded-lg px-3 py-2">
                  <p className="text-xs text-[#6a6a6a]">CMHC: <span className="font-medium text-[#222222]">{row.cmhc}</span></p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6a6a6a] mt-4">* Homes priced at $1,000,000 or more require a minimum 20% down payment — no exceptions. CMHC premiums are added to the mortgage amount.</p>
        </div>
      </section>

      {/* Fixed vs Variable */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Rate Types</p>
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Fixed vs. Variable Rate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rateTypes.map(rt => (
              <div key={rt.title} className="bg-[#f7f7f7] rounded-[20px] p-6">
                <h3 className="text-lg font-bold text-[#222222] mb-4">{rt.title}</h3>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Pros</p>
                  <ul className="space-y-1">
                    {rt.pros.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[#6a6a6a]">
                        <CheckCircle2 size={13} className="text-[#1F6B5F] shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">Considerations</p>
                  <ul className="space-y-1">
                    {rt.cons.map(c => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#6a6a6a]">
                        <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0 mt-2" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#6a6a6a]"><span className="font-semibold text-[#222222]">Best for: </span>{rt.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-time buyer incentives */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">First-Time Buyers</p>
          <h2 className="text-3xl font-bold text-[#222222] mb-8">Government Incentives & Programs</h2>
          <div className="space-y-4">
            {incentives.map(item => (
              <div key={item.title} className="bg-white rounded-[16px] p-6" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                <h3 className="font-semibold text-[#222222] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6a6a6a] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6a6a6a] mt-6">* Program rules, thresholds, and eligibility change frequently. Always verify with your lender, accountant, or lawyer before relying on any of these programs.</p>
        </div>
      </section>

      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need a Mortgage Broker Referral?</h2>
          <p className="text-white/70 mb-8">I work with several trusted local mortgage brokers in Kelowna. Get in touch and I'll connect you with the right person for your situation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors">
              Ask Marki <ArrowRight size={16} />
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
