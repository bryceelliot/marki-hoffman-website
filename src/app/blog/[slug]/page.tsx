import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Phone } from 'lucide-react'
import { posts, categoryColors, type Section } from '@/data/blog'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  }
}

function RenderSection({ section }: { section: Section }) {
  switch (section.type) {
    case 'intro':
      return <p className="text-xl text-[#444] leading-relaxed font-medium border-l-4 border-[#1F6B5F] pl-5 mb-8">{section.text}</p>
    case 'h2':
      return <h2 className="text-2xl font-bold text-[#222222] mt-10 mb-4">{section.text}</h2>
    case 'h3':
      return <h3 className="text-lg font-semibold text-[#222222] mt-6 mb-3">{section.text}</h3>
    case 'p':
      return <p className="text-[#555] leading-relaxed mb-4">{section.text}</p>
    case 'ul':
      return (
        <ul className="space-y-2 mb-6 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[#555]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F6B5F] shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <div className="bg-[#e4f0ed] rounded-[16px] p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F6B5F] mb-2">{section.label ?? 'Marki\'s Tip'}</p>
          <p className="text-sm text-[#1F6B5F] leading-relaxed">{section.text}</p>
        </div>
      )
    case 'callout':
      return (
        <div className="bg-[#222222] text-white rounded-[16px] p-6 mb-6">
          <p className="text-sm leading-relaxed">{section.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  const colorClass = categoryColors[post.category] ?? 'bg-[#f2f2f2] text-[#222222]'

  return (
    <>
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#6a6a6a] hover:text-[#1F6B5F] transition-colors">
            <ArrowLeft size={14} /> Blog & Insights
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] max-h-[480px] bg-[#222222]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${colorClass}`}>
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">

            {/* Article */}
            <article>
              <div className="flex items-center gap-4 text-sm text-[#6a6a6a] mb-8 pb-6 border-b border-[#f0f0f0]">
                <div className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</div>
                <div className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</div>
                <div className="flex items-center gap-2 ml-auto">
                  <div className="w-7 h-7 rounded-full bg-[#1F6B5F] flex items-center justify-center text-white font-bold text-xs">MH</div>
                  <span className="font-medium text-[#222222]">Marki Hoffman</span>
                </div>
              </div>

              <div>
                {post.content.map((section, i) => (
                  <RenderSection key={i} section={section} />
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div
                className="bg-[#f7f7f7] rounded-[20px] p-6 sticky top-6"
                style={{ boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F6B5F] flex items-center justify-center text-white font-bold">MH</div>
                  <div>
                    <p className="font-semibold text-[#222222] text-sm">Marki Hoffman</p>
                    <p className="text-xs text-[#6a6a6a]">REALTOR® · Royal LePage</p>
                  </div>
                </div>
                <p className="text-sm text-[#6a6a6a] leading-relaxed mb-5">
                  Born and raised in Kelowna. 10+ years helping my clients buy and sell with confidence.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#1F6B5F] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#174f47] transition-colors mb-2"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:2503175008"
                  className="flex items-center justify-center gap-2 bg-white border border-[#e8e8e8] text-[#222222] text-sm font-semibold py-3 rounded-lg hover:border-[#222222] transition-colors"
                >
                  <Phone size={13} /> (250) 317-5008
                </a>
              </div>

              {/* Related posts */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6a6a6a] mb-3">More Posts</p>
                <div className="space-y-3">
                  {posts.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                      <p className="text-sm font-medium text-[#222222] group-hover:text-[#1F6B5F] transition-colors leading-snug">{p.title}</p>
                      <p className="text-xs text-[#6a6a6a] mt-0.5">{p.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
