import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Marki Hoffman | REALTOR® Kelowna, BC — Royal LePage Kelowna',
    template: '%s | Marki Hoffman Real Estate Kelowna',
  },
  description:
    'Marki Hoffman is a Kelowna born and raised REALTOR® with Royal LePage Kelowna. Helping buyers and sellers across the Okanagan Valley with deep local expertise and genuine care.',
  keywords: [
    'Kelowna real estate', 'REALTOR Kelowna BC', 'Royal LePage Kelowna',
    'Marki Hoffman', 'Okanagan homes for sale', 'Kelowna homes for sale',
    'buy home Kelowna', 'sell home Kelowna', 'Okanagan real estate agent',
    'West Kelowna homes', 'Lower Mission real estate', 'Upper Mission homes',
  ],
  authors: [{ name: 'Marki Hoffman' }],
  creator: 'Marki Hoffman',
  metadataBase: new URL('https://www.markihoffman.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.markihoffman.com',
    siteName: 'Marki Hoffman Real Estate',
    title: 'Marki Hoffman | REALTOR® Kelowna, BC',
    description: 'Kelowna born and raised REALTOR® with Royal LePage Kelowna. Local expertise, genuine care.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Marki Hoffman — REALTOR® Kelowna BC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marki Hoffman | REALTOR® Kelowna, BC',
    description: 'Kelowna born and raised REALTOR® with Royal LePage Kelowna.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.markihoffman.com/#agent',
      name: 'Marki Hoffman',
      url: 'https://www.markihoffman.com',
      telephone: '+12503175008',
      email: 'marki@markihoffman.com',
      image: 'https://www.markihoffman.com/marki-dock.webp',
      description: 'Kelowna born and raised REALTOR® with Royal LePage Kelowna. Over 10 years of experience, proudly following in her father\'s 43-year real estate legacy.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#1 – 1890 Cooper Road',
        addressLocality: 'Kelowna',
        addressRegion: 'BC',
        postalCode: 'V1Y 8B7',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.8801,
        longitude: -119.4436,
      },
      areaServed: [
        { '@type': 'City', name: 'Kelowna', containedIn: 'British Columbia, Canada' },
        { '@type': 'City', name: 'West Kelowna', containedIn: 'British Columbia, Canada' },
        { '@type': 'City', name: 'Lake Country', containedIn: 'British Columbia, Canada' },
        { '@type': 'City', name: 'Peachland', containedIn: 'British Columbia, Canada' },
      ],
      memberOf: {
        '@type': 'Organization',
        name: 'Royal LePage Kelowna',
        url: 'https://royallepagekelowna.com',
      },
      sameAs: [
        'https://www.instagram.com/markihoffmanrealestate/',
        'https://www.facebook.com/hoffmanrealestatekelowna',
        'https://www.linkedin.com/in/marki-hoffman-076a4b167',
        'https://www.realtor.ca/agent/1990833/marki-hoffman-1-1890-cooper-road-kelowna-british-columbia-v1y8b7',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.markihoffman.com/#business',
      name: 'Marki Hoffman Real Estate',
      url: 'https://www.markihoffman.com',
      telephone: '+12503175008',
      priceRange: '$$',
      image: 'https://www.markihoffman.com/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#1 – 1890 Cooper Road',
        addressLocality: 'Kelowna',
        addressRegion: 'BC',
        postalCode: 'V1Y 8B7',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.8801,
        longitude: -119.4436,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '18:00' },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
