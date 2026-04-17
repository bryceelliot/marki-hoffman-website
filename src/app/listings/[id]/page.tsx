import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Bed, Bath, Square, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { listings } from '@/data/listings'
import ListingInquiryForm from '@/components/ListingInquiryForm'
import ListingGallery from '@/components/ListingGallery'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return listings.map(l => ({ id: l.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const listing = listings.find(l => l.id === id)
  if (!listing) return {}
  return {
    title: listing.address,
    description: `${listing.type} — ${listing.address}, ${listing.city}. ${listing.description}`,
  }
}

export default async function ListingDetailPage({ params }: Props) {
  const { id } = await params
  const listing = listings.find(l => l.id === id)
  if (!listing) notFound()

  const formatPrice = (p: number, type: typeof listing.type) => {
    if (type === 'Sold') return 'SOLD'
    if (type === 'For Lease') return `$${p.toLocaleString()}/mo`
    return `$${p.toLocaleString()}`
  }

  const badgeStyle =
    listing.type === 'Sold' ? 'bg-[#1F6B5F] text-white' :
    listing.type === 'For Lease' ? 'bg-[#460479] text-white' :
    'bg-[#222222] text-white'

  return (
    <>
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/listings" className="inline-flex items-center gap-2 text-sm font-medium text-[#6a6a6a] hover:text-[#1F6B5F] transition-colors">
            <ArrowLeft size={14} /> Back to Listings
          </Link>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — gallery + details */}
            <div className="lg:col-span-3">
              <ListingGallery images={listing.images} address={listing.address} />

              <div className="mb-6 mt-2">
                <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                  <div>
                    <h1 className="text-3xl font-bold text-[#222222] tracking-tight">{listing.address}</h1>
                    <p className="flex items-center gap-1.5 text-[#6a6a6a] text-sm mt-1">
                      <MapPin size={13} className="text-[#1F6B5F]" /> {listing.city}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-2xl font-bold text-[#1F6B5F]">{formatPrice(listing.price, listing.type)}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyle}`}>{listing.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 py-5 border-y border-[#e8e8e8] mb-6">
                <div className="flex items-center gap-2 text-sm text-[#6a6a6a]">
                  <Bed size={16} className="text-[#1F6B5F]" />
                  <span><strong className="text-[#222222]">{listing.beds}</strong> Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6a6a6a]">
                  <Bath size={16} className="text-[#1F6B5F]" />
                  <span><strong className="text-[#222222]">{listing.baths}</strong> Bathrooms</span>
                </div>
                {listing.sqft > 0 && (
                  <div className="flex items-center gap-2 text-sm text-[#6a6a6a]">
                    <Square size={16} className="text-[#1F6B5F]" />
                    <span><strong className="text-[#222222]">{listing.sqft.toLocaleString()}</strong> sqft</span>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-base font-semibold text-[#222222] mb-3">About This Property</h2>
                <p className="text-[#6a6a6a] leading-relaxed">{listing.description}</p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#222222] mb-3">Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {listing.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6a6a6a]">
                      <CheckCircle2 size={14} className="text-[#1F6B5F] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {listing.mlsNumber && (
                <p className="mt-6 text-xs text-[#6a6a6a]">MLS® {listing.mlsNumber}</p>
              )}
            </div>

            {/* Right — contact card */}
            <div className="lg:col-span-2">
              <div
                className="sticky top-8 bg-[#f7f7f7] rounded-[24px] p-7"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#1F6B5F] flex items-center justify-center text-white font-bold">MH</div>
                  <div>
                    <p className="font-semibold text-[#222222]">Marki Hoffman</p>
                    <p className="text-xs text-[#6a6a6a]">REALTOR® · Royal LePage Kelowna</p>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-[#222222] mb-1">
                  {listing.type === 'Sold' ? 'Interested in a Similar Property?' : 'Interested in This Property?'}
                </h3>
                <p className="text-sm text-[#6a6a6a] mb-5">
                  {listing.type === 'Sold'
                    ? "This property has sold, but I may have similar listings available."
                    : "Get in touch for a showing or to make an offer."}
                </p>

                <ListingInquiryForm address={listing.address} />

                <div className="flex gap-2 mt-3">
                  <a href="tel:2503175008" className="flex items-center justify-center gap-1.5 flex-1 border border-[#e8e8e8] bg-white text-[#222222] font-semibold text-xs py-2.5 rounded-lg hover:border-[#222222] transition-colors">
                    <Phone size={12} /> Call
                  </a>
                  <a href="mailto:marki@markihoffman.com" className="flex items-center justify-center gap-1.5 flex-1 border border-[#e8e8e8] bg-white text-[#222222] font-semibold text-xs py-2.5 rounded-lg hover:border-[#222222] transition-colors">
                    <Mail size={12} /> Email
                  </a>
                </div>
                <p className="text-xs text-[#6a6a6a] text-center mt-3">Typically responds within a few hours during business hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
