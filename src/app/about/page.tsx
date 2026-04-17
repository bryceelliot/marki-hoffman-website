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
  description: 'Meet Marki Hoffman — Kelowna born and raised REALTOR® with Royal LePage Kelowna. Local expertise, genuine care.',
}

const credentials = [
  { icon: MapPin, text: 'Kelowna Born & Raised' },
  { icon: GraduationCap, text: 'UBC Okanagan Alumni' },
  { icon: Award, text: 'Royal LePage Kelowna REALTOR®' },
  { icon: Heart, text: 'Association of Interior REALTORS®' },
]

const values = [
  {
    title: 'Local Expertise',
    description: 'Born and raised in Kelowna, I know every neighbourhood, every street, and every hidden gem in the Okanagan Valley.',
  },
  {
    title: 'Honest Guidance',
    description: 'Real estate is one of the biggest decisions of your life. I give you straight talk, not just what you want to hear.',
  },
  {
    title: 'Full-Service Support',
    description: 'From first showing to closing day and beyond, I\'m with you every step of the way — and available when you need me.',
  },
  {
    title: 'Community Roots',
    description: 'My network runs deep in the Okanagan. I connect clients with trusted local professionals — inspectors, lawyers, lenders.',
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
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-3">About Marki</p>
              <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-6 leading-tight">
                Your Kelowna<br />Real Estate Expert
              </h1>
              <p className="text-lg text-[#6a6a6a] leading-relaxed mb-8">
                Real Estate Agent with Royal LePage Kelowna · Kelowna born and raised · UBC Okanagan alumni
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {credentials.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
                    <Icon size={16} className="text-[#2A7C6F] shrink-0" />
                    <span className="text-sm font-medium text-[#222222]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:2503175008" className="inline-flex items-center gap-2 bg-[#222222] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#2A7C6F] transition-colors">
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
                  src="/marki-dock.webp"
                  alt="Marki Hoffman with Luna on Okanagan Lake dock"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 bg-[#2A7C6F] text-white rounded-[20px] p-5"
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
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-3">My Story</p>
          <h2 className="text-3xl font-bold text-[#222222] tracking-tight mb-8">From the Okanagan, For the Okanagan</h2>
          <div className="space-y-5 text-[#6a6a6a] leading-relaxed text-[15px]">
            <p>
              Growing up in Kelowna, I've watched this community evolve from a quiet orchard town into one of Canada's most sought-after real estate markets. I've seen the lake at every season, explored every neighbourhood, and I'm proud to call this place home.
            </p>
            <p>
              After graduating from UBC Okanagan, I channeled my passion for this community into a career in real estate with Royal LePage Kelowna — one of the most respected brokerages in the valley. It's not just a job; it's a way of connecting people with the place I love most.
            </p>
            <p>
              Whether you're a first-time buyer navigating a competitive market, a family looking to upsize, or someone ready to sell and start a new chapter, I bring the same energy to every file: deep local knowledge, honest advice, and genuine enthusiasm for getting you the best possible outcome.
            </p>
            <p>
              When I'm not helping clients, you'll find me exploring Kelowna's trails and wineries with Luna — my dog and unofficial mascot.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-2">How I Work</p>
            <h2 className="text-4xl font-bold text-[#222222] tracking-tight">What Sets Me Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-[20px] p-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f5f2] flex items-center justify-center mb-4">
                  <span className="text-[#2A7C6F] font-bold text-lg">✦</span>
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
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#2A7C6F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <InstagramIcon size={16} /> @markihoffmanrealestate
            </a>
            <a
              href="https://www.facebook.com/hoffmanrealestatekelowna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#2A7C6F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <FacebookIcon size={16} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/marki-hoffman-076a4b167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#2A7C6F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://linktr.ee/markihoffmanrealestate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#2A7C6F] text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              🌿 Linktree
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2A7C6F] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1e6359] transition-colors"
          >
            Work With Marki <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
