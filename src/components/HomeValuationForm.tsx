'use client'

import { useState } from 'react'

export default function HomeValuationForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#e4f0ed] rounded-[20px] px-8 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#1F6B5F] flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-[#222222] mb-2">Request Received!</h3>
        <p className="text-[#6a6a6a]">Marki will prepare your CMA and be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New Home Valuation Request" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">First Name</label>
          <input name="firstName" type="text" placeholder="Jane" required
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">Last Name</label>
          <input name="lastName" type="text" placeholder="Doe" required
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Email</label>
        <input name="email" type="email" placeholder="jane@example.com" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Phone</label>
        <input name="phone" type="tel" placeholder="(250) 555-0100" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Property Address</label>
        <input name="address" type="text" placeholder="123 Lakeshore Drive, Kelowna" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">Property Type</label>
          <select name="propertyType" required
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white">
            <option value="">Select…</option>
            <option>Single Family</option>
            <option>Townhouse</option>
            <option>Condo / Apartment</option>
            <option>Acreage / Rural</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">Bedrooms</label>
          <select name="bedrooms"
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white">
            <option value="">–</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4</option><option>5+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">Bathrooms</label>
          <select name="bathrooms"
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white">
            <option value="">–</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Timeline</label>
        <select name="timeline" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white">
          <option value="">When are you thinking of selling?</option>
          <option>Within 3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>Just curious / no timeline yet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Anything else? (optional)</label>
        <textarea name="notes" rows={3} placeholder="Recent renovations, unique features, specific questions…"
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition resize-none" />
      </div>

      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-[#1F6B5F] text-white font-semibold py-3.5 rounded-lg hover:bg-[#174f47] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending…' : 'Get My Free Valuation'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">Something went wrong. Please call (250) 317-5008.</p>
      )}

      <p className="text-xs text-[#6a6a6a] text-center">
        Free, no-obligation. Marki typically responds within 24 hours.
      </p>
    </form>
  )
}
