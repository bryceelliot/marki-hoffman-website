export interface GoogleReview {
  id: string
  author: string
  rating: number
  text: string
  date: string
  avatar: string
  profilePhoto?: string
}

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return []
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) return []

    const data = await res.json()
    const reviews = data.result?.reviews ?? []

    return reviews
      .filter((r: { rating: number }) => r.rating >= 4)
      .slice(0, 6)
      .map((r: {
        author_name: string
        rating: number
        text: string
        relative_time_description: string
        profile_photo_url?: string
      }, i: number) => ({
        id: String(i),
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        date: r.relative_time_description,
        avatar: r.author_name.slice(0, 2).toUpperCase(),
        profilePhoto: r.profile_photo_url,
      }))
  } catch {
    return []
  }
}
