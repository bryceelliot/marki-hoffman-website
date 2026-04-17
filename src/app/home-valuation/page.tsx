import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, TrendingUp, CheckCircle2, Clock, DollarSign, Star } from 'lucide-react'
import HomeValuationForm from '@/components/HomeValuationForm'

export const metadata: Metadata = {
  title: "What's My Home Worth? — Free Kelowna Home Valuation",
  description: "Get a free, no-obligation market evaluation for your Kelowna home from REALTOR® Marki Hoffman. Honest numbers, no pressure.",
}

const whyPoints = [
  { icon: TrendingUp, text: 'Based on real recent sales in your neighbourhood — not algorithms' },
  { icon: Clock, text: 'Typically delivered within 24 hours of your request' },
  { icon: DollarSign, text: 'Completely free with no obligation to list' },
  { icon: Star, text: '5-star rated service from a local Kelowna expert' },
]

export default function HomeValuationPage() {
  return (
    <>
      <section className="bg-[#f7f7f7] border-b border-[#e8e8e8] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px] items-center gap-0">
            <div className="py-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Seller Resources</p>
              <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">What's Your Home Worth?</h1>
              <p className="text-lg text-[#6a6a6a] max-w-xl">
                Get a free Comparative Market Analysis (CMA) for your Kelowna property. No algorithms — real data, honest numbers, from a local expert.
              </p>
            </div>
            <div className="hidden lg:block absolute inset-y-0 right-0 left-1/2">
              <Image
                src="/marki-luna-waterfront.webp"
                alt="Marki Hoffman and Luna at the Okanagan waterfront"
                fill
                className="object-cover object-top"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f7] via-[#f7f7f7]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#222222] mb-2">Request Your Free Valuation</h2>
              <p className="text-sm text-[#6a6a6a] mb-8">Fill in the details below and I'll prepare a thorough CMA for your property.</p>
              <HomeValuationForm />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="bg-[#f7f7f7] rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <h3 className="text-base font-semibold text-[#222222] mb-5">Why a CMA Beats Zillow</h3>
                <ul className="space-y-4">
                  {whyPoints.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-[#1F6B5F]" />
                      </div>
                      <p className="text-sm text-[#6a6a6a] leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-[#1F6B5F] rounded-[20px] p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">MH</div>
                  <div>
                    <p className="font-semibold text-sm">Marki Hoffman</p>
                    <p className="text-xs text-white/70">REALTOR® · Royal LePage Kelowna</p>
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-relaxed mb-5">
                  "I've been evaluating Kelowna homes for over 10 years. I'll give you an honest number — not one designed to win your listing."
                </p>
                <a
                  href="tel:2503175008"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-sm py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Phone size={14} /> (250) 317-5008
                </a>
              </div>

              <div
                className="bg-[#f7f7f7] rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <h3 className="text-base font-semibold text-[#222222] mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {[
                    'Recent comparable sales in your area',
                    'Active listings you\'re competing with',
                    'Market conditions & days on market trends',
                    'Recommended list price range',
                    'Honest assessment of your home\'s condition',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#6a6a6a]">
                      <CheckCircle2 size={14} className="text-[#1F6B5F] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
