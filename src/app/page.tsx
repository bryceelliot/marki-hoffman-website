import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Phone, Award, Users, Home, TrendingUp } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import ReviewCard from '@/components/ReviewCard'
import { listings } from '@/data/listings'
import { placeholderReviews } from '@/data/reviews'
import { getGoogleReviews } from '@/lib/google-places'

export default async function HomePage() {
  const googleReviews = await getGoogleReviews()
  const reviews = googleReviews.length > 0 ? googleReviews : placeholderReviews
  const featuredListings = listings.filter(l => l.type !== 'Sold').slice(0, 3)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Marki Hoffman with Luna — Kelowna, BC"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 15%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#2A7C6F] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              Royal LePage Kelowna
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Your Home in the<br />
              <span className="text-[#2A7C6F]">Okanagan</span><br />
              Starts Here.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
              Kelowna born and raised. UBC Okanagan alumni. As your local REALTOR®, I bring deep community roots and genuine care to every transaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 bg-[#2A7C6F] text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#1e6359] transition-colors"
              >
                View Listings
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#222222] font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#f2f2f2] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating contact card */}
        <div
          className="absolute bottom-8 right-8 hidden lg:block bg-white rounded-[20px] p-5 max-w-[260px]"
          style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#2A7C6F] flex items-center justify-center text-white font-bold text-sm">
              MH
            </div>
            <div>
              <p className="text-sm font-semibold text-[#222222]">Marki Hoffman</p>
              <p className="text-xs text-[#6a6a6a]">REALTOR® · Royal LePage</p>
            </div>
          </div>
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-[#2A7C6F] text-[#2A7C6F]" />
            ))}
            <span className="text-xs text-[#6a6a6a] ml-1">5.0 Google</span>
          </div>
          <a
            href="tel:2503175008"
            className="block text-center text-sm font-medium bg-[#222222] text-white py-2 rounded-lg hover:bg-[#2A7C6F] transition-colors"
          >
            (250) 317-5008
          </a>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-[#222222] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Home, value: '150+', label: 'Homes Sold' },
              { icon: Users, value: '200+', label: 'Happy Clients' },
              { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
              { icon: Award, value: '5★', label: 'Google Rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={22} className="text-[#2A7C6F]" />
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-sm text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED LISTINGS ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-2">Current Listings</p>
              <h2 className="text-4xl font-bold text-[#222222] tracking-tight">Featured Properties</h2>
            </div>
            <Link
              href="/listings"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#222222] hover:text-[#2A7C6F] transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#222222] hover:text-[#2A7C6F] transition-colors"
            >
              View All Listings <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden max-w-md mx-auto lg:mx-0">
                <Image
                  src="/sold-fall.webp"
                  alt="Marki Hoffman REALTOR® Kelowna BC — Royal LePage Kelowna real estate agent"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-[20px] p-5 hidden sm:block"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
              >
                <p className="text-2xl font-bold text-[#222222]">Born &</p>
                <p className="text-2xl font-bold text-[#2A7C6F]">Raised Here</p>
                <p className="text-xs text-[#6a6a6a] mt-1">Kelowna, BC</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-3">About Marki</p>
              <h2 className="text-4xl font-bold text-[#222222] tracking-tight mb-6 leading-tight">
                Local Knowledge.<br />Genuine Care.
              </h2>
              <div className="space-y-4 text-[#6a6a6a] leading-relaxed">
                <p>
                  As a born-and-raised Kelowna local and UBC Okanagan alumna, I don't just sell homes in the Okanagan — I live here, I love it here, and I know every neighbourhood inside-out.
                </p>
                <p>
                  Whether you're buying your first home, upgrading to your dream property, or selling and starting the next chapter, I bring market expertise, honest guidance, and a personal touch you won't find anywhere else.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#222222] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#2A7C6F] transition-colors"
                >
                  More About Me <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:2503175008"
                  className="inline-flex items-center gap-2 border border-[#e8e8e8] text-[#222222] font-semibold text-sm px-6 py-3 rounded-lg hover:border-[#222222] transition-colors"
                >
                  <Phone size={14} />
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-2">Google Reviews</p>
            <h2 className="text-4xl font-bold text-[#222222] tracking-tight mb-3">What Clients Are Saying</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#2A7C6F] text-[#2A7C6F]" />
                ))}
              </div>
              <span className="text-sm text-[#6a6a6a] font-medium">5.0 · Google Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-20 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Let's talk about your real estate goals. I'm here to help you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2A7C6F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1e6359] transition-colors"
            >
              Contact Marki <ArrowRight size={16} />
            </Link>
            <a
              href="tel:2503175008"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone size={16} />
              (250) 317-5008
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
