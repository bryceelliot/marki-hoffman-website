import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { listings } from '@/data/listings'

export const metadata: Metadata = {
  title: 'Listings',
  description: 'Browse current homes for sale, sold properties, and rentals by Marki Hoffman in Kelowna and the Okanagan Valley.',
}

export default function ListingsPage() {
  const forSale = listings.filter(l => l.type === 'For Sale')
  const forLease = listings.filter(l => l.type === 'For Lease')
  const sold = listings.filter(l => l.type === 'Sold')

  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-16 border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Marki Hoffman · Royal LePage Kelowna</p>
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Listings</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            From downtown condos to lakeview estates — explore current listings across Kelowna and the Okanagan Valley.
          </p>
        </div>
      </section>

      {/* ── FOR SALE ──────────────────────────────────────────── */}
      {forSale.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#222222] mb-8 flex items-center gap-3">
              For Sale
              <span className="text-sm font-semibold bg-[#e4f0ed] text-[#1F6B5F] rounded-full px-3 py-0.5">{forSale.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {forSale.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOR LEASE ─────────────────────────────────────────── */}
      {forLease.length > 0 && (
        <section className="py-16 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#222222] mb-8 flex items-center gap-3">
              For Lease
              <span className="text-sm font-semibold bg-[#f0f0ff] text-[#460479] rounded-full px-3 py-0.5">{forLease.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {forLease.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SOLD ──────────────────────────────────────────────── */}
      {sold.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#222222] mb-2 flex items-center gap-3">
              Recently Sold
              <span className="text-sm font-semibold bg-[#e4f0ed] text-[#1F6B5F] rounded-full px-3 py-0.5">{sold.length}</span>
            </h2>
            <p className="text-sm text-[#6a6a6a] mb-8">Proof of results. These are homes I&apos;ve successfully closed for my clients.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sold.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/luna-sold-rl.webp" alt="Luna celebrating a sold property — Marki Hoffman Royal LePage Kelowna" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Don't See What You're Looking For?</h2>
          <p className="text-white/70 mb-8">I have access to listings before they hit the market. Tell me what you need.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#174f47] transition-colors">
              Contact Marki <ArrowRight size={16} />
            </Link>
            <a href="tel:2503175008" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              <Phone size={16} /> (250) 317-5008
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
