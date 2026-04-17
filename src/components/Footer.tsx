import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-[#2A7C6F] font-bold text-2xl">Marki</span>
              <span className="text-white font-semibold text-2xl"> Hoffman</span>
            </div>
            <p className="text-[#6a6a6a] text-sm leading-relaxed mb-5">
              Real Estate Agent with Royal LePage Kelowna.<br />
              Kelowna born and raised. UBC Okanagan alumni.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.instagram.com/markihoffmanrealestate/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2A7C6F] flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.facebook.com/hoffmanrealestatekelowna" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2A7C6F] flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="https://www.linkedin.com/in/marki-hoffman-076a4b167" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2A7C6F] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <LinkedInIcon size={16} />
              </a>
              <a href="https://linktr.ee/markihoffmanrealestate" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2A7C6F] flex items-center justify-center transition-colors text-xs font-bold" aria-label="Linktree">
                lt
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#6a6a6a] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Marki' },
                { href: '/listings', label: 'Listings' },
                { href: '/client-resources', label: 'Client Resources' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-[#2A7C6F] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#6a6a6a] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/client-resources#buyers', label: 'Buyer\'s Guide' },
                { href: '/client-resources#sellers', label: 'Seller\'s Guide' },
                { href: '/client-resources#mortgage', label: 'Mortgage Calculator' },
                { href: '/client-resources#neighbourhood', label: 'Neighbourhood Info' },
                { href: '/client-resources#amenities', label: 'Kelowna Amenities' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-[#2A7C6F] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#6a6a6a] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#2A7C6F]" />
                <a href="tel:2503175008" className="hover:text-white transition-colors">(250) 317-5008</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#2A7C6F]" />
                <a href="mailto:marki@markihoffman.com" className="hover:text-white transition-colors">marki@markihoffman.com</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#2A7C6F]" />
                <span>#1 – 1890 Cooper Road<br />Kelowna, BC V1Y 8B7</span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-xs text-[#6a6a6a]">Royal LePage Kelowna</p>
              <p className="text-xs text-[#6a6a6a]">Office: (250) 860-1100</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6a6a6a]">
            © {new Date().getFullYear()} Marki Hoffman · Royal LePage Kelowna · All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-xs text-[#6a6a6a]">Association of Interior REALTORS® · MLS®</p>
            <span className="hidden sm:block text-[#6a6a6a]">·</span>
            <a
              href="https://bryceelliot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6a6a6a] hover:text-[#2A7C6F] transition-colors"
            >
              Created by Elliot Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
