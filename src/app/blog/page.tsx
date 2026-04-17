import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Kelowna real estate news, market updates, and local insights from REALTOR® Marki Hoffman.',
}

const posts = [
  {
    slug: 'kelowna-market-update-2026',
    title: "Kelowna Real Estate Market Update — Spring 2026",
    excerpt: "What buyers and sellers need to know about the current Okanagan market. Inventory levels, pricing trends, and what to expect this season.",
    date: 'April 10, 2026',
    category: 'Market Update',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    readTime: '5 min read',
  },
  {
    slug: 'first-time-buyer-guide-kelowna',
    title: "First-Time Buyer's Guide to Kelowna in 2026",
    excerpt: "Everything you need to know before buying your first home in the Okanagan — from getting pre-approved to making your offer stand out.",
    date: 'March 22, 2026',
    category: 'Buyer Tips',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f7e47?w=800&q=80',
    readTime: '8 min read',
  },
  {
    slug: 'best-kelowna-neighbourhoods-2026',
    title: "The Best Kelowna Neighbourhoods to Live In Right Now",
    excerpt: "From the Lower Mission waterfront to the trendy Pandosy Village — a local's guide to Kelowna's most sought-after areas.",
    date: 'March 5, 2026',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    readTime: '6 min read',
  },
  {
    slug: 'home-staging-tips-kelowna',
    title: "Home Staging Tips That Help Kelowna Homes Sell Faster",
    excerpt: "Proven staging strategies that get results in the Okanagan market — and won't cost you a fortune.",
    date: 'February 18, 2026',
    category: 'Seller Tips',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    readTime: '4 min read',
  },
  {
    slug: 'kelowna-winery-lifestyle',
    title: "Living the Okanagan Lifestyle: Wineries, Lakes, and Real Estate",
    excerpt: "What makes Kelowna so special — and why more Canadians are choosing the Okanagan Valley as their forever home.",
    date: 'January 30, 2026',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    readTime: '4 min read',
  },
  {
    slug: 'investment-property-kelowna',
    title: "Is Kelowna a Good Place to Invest in Real Estate in 2026?",
    excerpt: "Rental demand, appreciation trends, and the best property types for investors in the current Okanagan market.",
    date: 'January 12, 2026',
    category: 'Investment',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    readTime: '7 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Market Update': 'bg-[#e8f5f2] text-[#2A7C6F]',
  'Buyer Tips': 'bg-[#f0f7ff] text-[#428bff]',
  'Seller Tips': 'bg-[#f0fff4] text-[#34a853]',
  'Local Guide': 'bg-[#f5f0ff] text-[#460479]',
  'Lifestyle': 'bg-[#fff8f0] text-[#ff9500]',
  'Investment': 'bg-[#f0f7ff] text-[#222222]',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-16 border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2A7C6F] mb-2">Kelowna Real Estate</p>
          <h1 className="text-5xl font-bold text-[#222222] tracking-tight mb-4">Blog & Insights</h1>
          <p className="text-lg text-[#6a6a6a] max-w-2xl">
            Market updates, buyer & seller tips, and a local's perspective on life in the Okanagan Valley.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-12">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden"
              style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
            >
              <div className="relative aspect-[16/9] lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#6a6a6a]">{featured.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#222222] leading-tight mb-3 group-hover:text-[#2A7C6F] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#6a6a6a] leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#6a6a6a]">
                    <Calendar size={12} />
                    {featured.date}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2A7C6F]">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div
                  className="bg-white rounded-[20px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px' }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-[#f2f2f2] text-[#222222]'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-[#6a6a6a]">{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#222222] leading-tight mb-2 group-hover:text-[#2A7C6F] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#6a6a6a] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-[#6a6a6a] mt-auto">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
