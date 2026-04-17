'use client'

import { useState } from 'react'

export default function ListingInquiryForm({ address }: { address: string }) {
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
      <div className="bg-[#e4f0ed] text-[#1F6B5F] rounded-[16px] px-5 py-6 text-center">
        <p className="font-semibold mb-1">Message sent!</p>
        <p className="text-sm">Marki will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="hidden" name="property" value={address} />
      <input
        name="name" type="text" placeholder="Your name" required
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white"
      />
      <input
        name="email" type="email" placeholder="Email address" required
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white"
      />
      <input
        name="phone" type="tel" placeholder="Phone (optional)"
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white"
      />
      <textarea
        name="message" rows={3}
        defaultValue={`Hi Marki, I'm interested in ${address}. `}
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition resize-none bg-white"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#1F6B5F] text-white font-semibold text-sm py-3 rounded-lg hover:bg-[#174f47] transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request More Info'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-600 text-center">Something went wrong — please call directly.</p>
      )}
    </form>
  )
}
