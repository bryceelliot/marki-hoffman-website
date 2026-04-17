'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Square } from 'lucide-react'
import type { Listing } from '@/data/listings'

interface Props {
  listing: Listing
}

const typeBadgeStyles: Record<Listing['type'], string> = {
  'For Sale': 'bg-[#222222] text-white',
  'Sold': 'bg-[#1F6B5F] text-white',
  'For Lease': 'bg-[#460479] text-white',
}

export default function ListingCard({ listing }: Props) {
  const formatPrice = (p: number, type: Listing['type']) => {
    if (type === 'Sold') return 'SOLD'
    if (type === 'For Lease') return `$${p.toLocaleString()}/mo`
    return `$${p.toLocaleString()}`
  }

  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <div
        className="bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'rgba(0,0,0,0.08) 0px 4px 12px'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px'
        }}
      >
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.address}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-[14px] ${typeBadgeStyles[listing.type]}`}>
              {listing.type}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-semibold text-[#222222] leading-tight group-hover:text-[#1F6B5F] transition-colors">
              {listing.address}
            </h3>
            <span className="text-base font-bold text-[#222222] shrink-0">
              {formatPrice(listing.price, listing.type)}
            </span>
          </div>
          <p className="text-sm text-[#6a6a6a] mb-3">{listing.city}</p>

          <div className="flex items-center gap-4 text-sm text-[#6a6a6a]">
            <span className="flex items-center gap-1.5">
              <Bed size={14} className="text-[#1F6B5F]" />
              {listing.beds} bd
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={14} className="text-[#1F6B5F]" />
              {listing.baths} ba
            </span>
            {listing.sqft > 0 && (
              <span className="flex items-center gap-1.5">
                <Square size={14} className="text-[#1F6B5F]" />
                {listing.sqft.toLocaleString()} sqft
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
