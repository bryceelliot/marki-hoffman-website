import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, TrendingUp, Calculator, MapPin, Star, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Resources',
  description: 'Buyer and seller guides, neighbourhood info, mortgage calculator, and Kelowna amenities — resources from Marki Hoffman.',
}

const resources = [
  {
    id: 'buyers',
    href: '/client-resources/buyers-guide',
    icon: Home,
    title: "Buyer's Guide",
    description: "First-time buyer or seasoned investor — here's everything you need to know about buying a home in Kelowna's market.",
    links: ['Getting Pre-Approved', 'What to Look For on Showings', 'Making an Offer', 'Home Inspection Tips', 'Closing Day Checklist'],
  },
  {
    id: 'sellers',
    href: '/client-resources/sellers-guide',
    icon: TrendingUp,
    title: "Seller's Guide",
    description: "Maximize your sale price with the right strategy. From pricing to staging to negotiating offers — I've got you covered.",
    links: ['Preparing Your Home', 'Pricing Strategy', 'Professional Photography', 'Marketing Your Listing', 'Reviewing Offers'],
  },
  {
    id: 'mortgage',
    href: '/client-resources/mortgage',
    icon: Calculator,
    title: 'Mortgage Calculator',
    description: "Estimate your payments, understand down payment rules, fixed vs. variable rates, and first-time buyer incentives.",
    links: ['Interactive Calculator', 'Down Payment Requirements', 'Fixed vs. Variable Rates', 'CMHC Insurance', 'First-Time Buyer Incentives'],
  },
  {
    id: 'neighbourhood',
    href: '/client-resources/neighbourhood-guide',
    icon: MapPin,
    title: 'Neighbourhood Guide',
    description: "Every Kelowna neighbourhood has its own character. Here's my local guide to help you find the right fit.",
    links: ['Lower Mission', 'Upper Mission', 'Downtown Kelowna', 'Glenmore', 'West Kelowna', 'Lake Country'],
  },
  {
    id: 'amenities',
    href: '/client-resources/amenities',
    icon: Star,
    title: 'Kelowna Amenities',
    description: "Beaches, wineries, trails, schools, hospitals — everything that makes the Okanagan the best place to live.",
    links: ['Top Schools', 'Parks & Beaches', 'Wineries & Dining', 'Healthcare', 'Shopping & Services'],
  },
  {
    id: 'forms',
    href: '/client-resources/forms',
    icon: FileText,
    title: 'Forms & Documents',
    description: "Plain-language explanations of the key documents in a BC real estate transaction — so nothing surprises you.",
    links: ['Purchase Contract', 'Subject Conditions', 'Strata Documents', 'Title & Title Insurance', 'Property Transfer Tax'],
  },
]

export default function ClientResourcesPage() {
  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/kelowna-marina.webp" alt="Kelowna marina and waterfront — Okanagan Valley" fill className="object-cover object-center" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Resources</p>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">Client Resources</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Everything you need to buy or sell with confidence in the Okanagan — guides, tools, and local knowledge.
          </p>
        </div>
      </section>

      {/* ── RESOURCES GRID ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(({ id, href, icon: Icon, title, description, links }) => (
              <div
                key={id}
                id={id}
                className="bg-white rounded-[20px] p-7 flex flex-col"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
              >
                <div className="w-11 h-11 rounded-full bg-[#e4f0ed] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#1F6B5F]" />
                </div>
                <h2 className="text-lg font-bold text-[#222222] mb-2">{title}</h2>
                <p className="text-sm text-[#6a6a6a] leading-relaxed mb-5 flex-1">{description}</p>
                <ul className="space-y-2 mb-5">
                  {links.map(link => (
                    <li key={link} className="flex items-center gap-2 text-sm text-[#222222]">
                      <span className="w-1 h-1 rounded-full bg-[#1F6B5F] shrink-0" />
                      {link}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6B5F] hover:gap-2.5 transition-all"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Have Questions? Just Ask.</h2>
          <p className="text-white/70 mb-8">No question is too big or small. I'm here to make the process clear and stress-free.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors"
          >
            Contact Marki <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
