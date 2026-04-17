import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Marki Hoffman, REALTOR® with Royal LePage Kelowna. Call, email, or send a message.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/kelowna-boardwalk.webp" alt="Kelowna waterfront boardwalk — Okanagan Lake" fill className="object-cover object-center" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">Get in Touch</p>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">Contact Marki</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Ready to buy, sell, or just have questions? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="bg-[#f7f7f7] rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <h3 className="text-base font-semibold text-[#222222] mb-4">Direct Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                      <Phone size={14} className="text-[#1F6B5F]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6a6a6a] mb-0.5">Direct</p>
                      <a href="tel:2503175008" className="text-sm font-semibold text-[#222222] hover:text-[#1F6B5F] transition-colors">
                        (250) 317-5008
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-[#1F6B5F]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6a6a6a] mb-0.5">Email</p>
                      <a href="mailto:marki@markihoffman.com" className="text-sm font-semibold text-[#222222] hover:text-[#1F6B5F] transition-colors">
                        marki@markihoffman.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-[#1F6B5F]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6a6a6a] mb-0.5">Office</p>
                      <p className="text-sm font-semibold text-[#222222]">
                        #1 – 1890 Cooper Road<br />Kelowna, BC V1Y 8B7
                      </p>
                      <p className="text-xs text-[#6a6a6a] mt-0.5">Royal LePage Kelowna</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4f0ed] flex items-center justify-center shrink-0">
                      <Clock size={14} className="text-[#1F6B5F]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6a6a6a] mb-0.5">Availability</p>
                      <p className="text-sm font-semibold text-[#222222]">Mon–Sat 9am–6pm</p>
                      <p className="text-xs text-[#6a6a6a] mt-0.5">Sun by appointment</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="bg-[#f7f7f7] rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <h3 className="text-base font-semibold text-[#222222] mb-4">Follow Along</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/markihoffmanrealestate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#222222] hover:text-[#1F6B5F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center">
                      <InstagramIcon size={14} />
                    </div>
                    @markihoffmanrealestate
                  </a>
                  <a
                    href="https://www.facebook.com/hoffmanrealestatekelowna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#222222] hover:text-[#1F6B5F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center">
                      <FacebookIcon size={14} />
                    </div>
                    Hoffman Real Estate Kelowna
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marki-hoffman-076a4b167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#222222] hover:text-[#1F6B5F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center">
                      <LinkedInIcon size={14} />
                    </div>
                    LinkedIn
                  </a>
                  <a
                    href="https://linktr.ee/markihoffmanrealestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#222222] hover:text-[#1F6B5F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#43e55e] flex items-center justify-center text-white font-bold text-xs">
                      lt
                    </div>
                    Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── MAP ───────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-base font-semibold text-[#222222] mb-4">Royal LePage Kelowna Office</h3>
          <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.8!2d-119.4436!3d49.8801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb3f0e95889%3A0x1a2b3c4d5e6f7a8b!2s1890%20Cooper%20Rd%2C%20Kelowna%2C%20BC%20V1Y%208B7!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal LePage Kelowna — 1890 Cooper Road"
            />
          </div>
        </div>
      </section>
    </>
  )
}
