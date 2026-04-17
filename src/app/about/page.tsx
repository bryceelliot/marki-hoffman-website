import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Award, MapPin, GraduationCap, Heart, ArrowRight } from 'lucide-react'

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
  title: 'About',
  description: 'Meet Marki Hoffman — Kelowna born and raised REALTOR® with over 10 years of experience at Royal LePage Kelowna, following in her father\'s 43-year legacy.',
}

const credentials = [
  { icon: MapPin, text: 'Kelowna Born & Raised' },
  { icon: GraduationCap, text: 'UBC Okanagan Alumni' },
  { icon: Award, text: '10+ Years Licensed REALTOR®' },
  { icon: Heart, text: 'Royal LePage Kelowna' },
]

const values = [
  {
    title: 'Family Legacy',
    description: 'My father Gord Hoffman served Okanagan clients for 43 years. I spent my first decade in real estate learning from him — integrity and trust are in my DNA.',
  },
  {
    title: 'Attention to Detail',
    description: 'Working aboard private luxury yachts in the U.S. taught me the standard of service people deserve. That same care goes into every transaction.',
  },
  {
    title: 'Local Roots',
    description: 'Born and raised in Kelowna, snowboarding Big White since age four. I know this valley and I\'m proud to call it home.',
  },
  {
    title: 'Lasting Relationships',
    description: 'Real estate is more than a transaction — it\'s about connection. Many of my clients become friends, and that\'s the part of this business I love most.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-3">About Marki</p>
              <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-6 leading-tight">
                Your Kelowna<br />Real Estate Expert
              </h1>
              <p className="text-lg text-[#6a6a6a] leading-relaxed mb-8">
                10+ years as a licensed REALTOR® with Royal LePage Kelowna, following in the footsteps of her father, Gord Hoffman — 43 years serving the Okanagan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {credentials.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                    <Icon size={16} className="text-[#1F6B5F] shrink-0" />
                    <span className="text-sm font-medium text-[#222222]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:2503175008" className="inline-flex items-center gap-2 bg-[#222222] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1F6B5F] transition-colors">
                  <Phone size={14} /> (250) 317-5008
                </a>
                <a href="mailto:marki@markihoffman.com" className="inline-flex items-center gap-2 border border-[#e8e8e8] text-[#222222] font-semibold text-sm px-6 py-3 rounded-lg hover:border-[#222222] transition-colors">
                  <Mail size={14} /> Email Me
                </a>
              </div>
            </div>

            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden">
                <Image
                  src="/marki-headshot.webp"
                  alt="Marki Hoffman REALTOR® Royal LePage Kelowna"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 bg-[#1F6B5F] text-white rounded-[20px] p-5"
                style={{ boxShadow: 'rgba(0,0,0,0.1) 0px 8px 24px' }}
              >
                <p className="text-3xl font-bold">Luna</p>
                <p className="text-sm text-white/80">Chief Happiness Officer 🐾</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-3">My Story</p>
          <h2 className="text-3xl font-bold text-[#222222] tracking-tight mb-8">From the Okanagan, For the Okanagan</h2>
          <div className="space-y-5 text-[#6a6a6a] leading-relaxed text-[15px]">
            <p>
              Born and raised in the Okanagan, real estate has always been part of my life. I've been a licensed Realtor® here for over 10 years, proudly following in the footsteps of my father, Gord Hoffman, who served local clients for an incredible 43 years. Working alongside him for my first decade in the business taught me the importance of integrity, trust, and building lasting relationships — values I continue to uphold with every client I work with.
            </p>
            <p>
              Before my real estate career, I earned my degree from UBC Okanagan, including a year studying abroad in Australia. After a couple of years working as a recreation coordinator in the oil and gas sector, I worked aboard private luxury yachts in the U.S., where I gained invaluable experience in high-level service, organization, and attention to detail — qualities I bring to every client relationship today.
            </p>
            <p>
              When I'm not helping clients buy or sell their homes, you can usually find me outdoors with my canine companion, Luna — my constant adventure buddy. I love hiking the local trails with her, mountain biking, and soaking up the Okanagan lifestyle. I've been snowboarding at Big White since I was four, and playing competitive softball as a teenager, now slow-pitch every summer.
            </p>
            <p>
              For me, real estate is more than a transaction — it's about connection. Many of my clients become friends, and that's the part of this business I love most.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">How I Work</p>
            <h2 className="text-4xl font-bold text-[#222222] tracking-tight">What Sets Me Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#e4f0ed] flex items-center justify-center mb-4">
                  <span className="text-[#1F6B5F] font-bold text-lg">✦</span>
                </div>
                <h3 className="text-base font-semibold text-[#222222] mb-2">{title}</h3>
                <p className="text-sm text-[#6a6a6a] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL + CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[#222222] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-white/70 text-lg mb-8">Follow along on Instagram and Facebook for Kelowna market updates, new listings, and local life.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="https://www.instagram.com/markihoffmanrealestate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#1F6B5F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <InstagramIcon size={16} /> @markihoffmanrealestate
            </a>
            <a
              href="https://www.facebook.com/hoffmanrealestatekelowna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#1F6B5F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <FacebookIcon size={16} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/marki-hoffman-076a4b167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#1F6B5F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://linktr.ee/markihoffmanrealestate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#1F6B5F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              🌿 Linktree
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1F6B5F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#174f47] transition-colors"
          >
            Work With Marki <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
