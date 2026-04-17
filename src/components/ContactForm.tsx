'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">First Name</label>
          <input name="firstName" type="text" placeholder="Jane" required
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#6a6a6a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#222222] mb-1.5">Last Name</label>
          <input name="lastName" type="text" placeholder="Doe" required
            className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#6a6a6a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Email</label>
        <input name="email" type="email" placeholder="jane@example.com" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#6a6a6a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Phone (optional)</label>
        <input name="phone" type="tel" placeholder="(250) 555-0100"
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#6a6a6a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">I&apos;m interested in</label>
        <select name="interest" required
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition bg-white">
          <option value="">Select one…</option>
          <option value="buying">Buying a Home</option>
          <option value="selling">Selling My Home</option>
          <option value="both">Buying &amp; Selling</option>
          <option value="leasing">Leasing</option>
          <option value="other">General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#222222] mb-1.5">Message</label>
        <textarea name="message" rows={5} required placeholder="Tell me a little about what you're looking for…"
          className="w-full px-4 py-3 rounded-lg border border-[#e8e8e8] text-sm text-[#222222] placeholder-[#6a6a6a] focus:outline-none focus:border-[#1F6B5F] focus:ring-2 focus:ring-[#1F6B5F]/10 transition resize-none" />
      </div>

      <button type="submit" disabled={status === 'sending'}
        className="w-full bg-[#222222] text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-[#1F6B5F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="bg-[#e4f0ed] text-[#1F6B5F] text-sm font-medium px-4 py-3 rounded-lg text-center">
          Message sent! Marki will be in touch shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 text-red-700 text-sm font-medium px-4 py-3 rounded-lg text-center">
          Something went wrong. Please call (250) 317-5008 directly.
        </div>
      )}

      <p className="text-xs text-[#6a6a6a] text-center">
        Typically responds within a few hours during business hours.
      </p>
    </form>
  )
}
