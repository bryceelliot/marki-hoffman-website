'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/listings', label: 'Listings' },
  { href: '/client-resources', label: 'Client Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8e8]" style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#2A7C6F] font-bold text-xl tracking-tight leading-none">Marki</span>
          <span className="text-[#222222] font-semibold text-xl tracking-tight leading-none">Hoffman</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#2A7C6F] bg-[#e8f5f2]'
                    : 'text-[#222222] hover:bg-[#f2f2f2]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="tel:2503175008"
          className="hidden md:flex items-center gap-2 bg-[#222222] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2A7C6F] transition-colors"
        >
          <Phone size={14} />
          (250) 317-5008
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#f2f2f2] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e8e8e8] bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'text-[#2A7C6F] bg-[#e8f5f2]' : 'text-[#222222] hover:bg-[#f2f2f2]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <a
              href="tel:2503175008"
              className="mt-2 flex items-center justify-center gap-2 bg-[#222222] text-white text-sm font-medium px-4 py-3 rounded-lg"
            >
              <Phone size={14} />
              (250) 317-5008
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
