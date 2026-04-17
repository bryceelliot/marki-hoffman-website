import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#f7f7f7]">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[#e4f0ed] flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-[#1F6B5F]">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[#222222] mb-3">Page Not Found</h1>
        <p className="text-[#6a6a6a] mb-8">
          That page doesn't exist. It may have moved, or you may have followed an old link. Let's get you somewhere useful.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#174f47] transition-colors"
          >
            Go Home <ArrowRight size={14} />
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 bg-[#222222] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1F6B5F] transition-colors"
          >
            View Listings
          </Link>
          <a
            href="tel:2503175008"
            className="inline-flex items-center gap-2 border border-[#e8e8e8] text-[#222222] font-semibold text-sm px-6 py-3 rounded-lg hover:border-[#222222] transition-colors"
          >
            <Phone size={14} /> (250) 317-5008
          </a>
        </div>
      </div>
    </section>
  )
}
