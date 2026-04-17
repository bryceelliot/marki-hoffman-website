'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Grid2X2 } from 'lucide-react'

interface Props {
  images: string[]
  address: string
}

export default function ListingGallery({ images, address }: Props) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = () => setActive(i => (i - 1 + images.length) % images.length)
  const next = () => setActive(i => (i + 1) % images.length)

  return (
    <>
      {/* Main gallery */}
      <div className="mb-4">
        {/* Hero image */}
        <div
          className="relative w-full rounded-[20px] overflow-hidden cursor-pointer"
          style={{ aspectRatio: '16/9' }}
          onClick={() => setLightbox(true)}
        >
          <Image
            src={images[active]}
            alt={`${address} — photo ${active + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            priority={active === 0}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
          {/* Counter + view all */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className="bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {active + 1} / {images.length}
            </span>
            <button
              onClick={e => { e.stopPropagation(); setLightbox(true) }}
              className="bg-black/50 hover:bg-black/70 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors"
            >
              <Grid2X2 size={11} /> All Photos
            </button>
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-2 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative shrink-0 w-16 h-12 rounded-[8px] overflow-hidden transition-all ${
                  i === active ? 'ring-2 ring-[#1F6B5F] ring-offset-1' : 'opacity-60 hover:opacity-90'
                }`}
              >
                <Image
                  src={src}
                  alt={`${address} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0">
            <span className="text-white/70 text-sm">{address} · {active + 1} of {images.length}</span>
            <button
              onClick={() => setLightbox(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Main image */}
          <div className="relative flex-1 mx-4">
            <Image
              src={images[active]}
              alt={`${address} — photo ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 px-4 py-3 overflow-x-auto shrink-0">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative shrink-0 w-16 h-12 rounded-[6px] overflow-hidden transition-all ${
                  i === active ? 'ring-2 ring-[#1F6B5F] ring-offset-1 ring-offset-black' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
