import { NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/google-places'
import { placeholderReviews } from '@/data/reviews'

export async function GET() {
  const googleReviews = await getGoogleReviews()
  const reviews = googleReviews.length > 0 ? googleReviews : placeholderReviews

  return NextResponse.json(reviews, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
