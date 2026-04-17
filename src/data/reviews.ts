export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  avatar: string
}

/* Placeholder reviews — replace with live Google Places API data once key is configured */
export const placeholderReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Marki made buying our first home in Kelowna an absolute dream. She was patient, knowledgeable, and fought hard to get us the best deal. We couldn\'t be happier!',
    date: 'March 2025',
    avatar: 'SM',
  },
  {
    id: '2',
    author: 'James & Alicia T.',
    rating: 5,
    text: 'Selling our home with Marki was seamless. Her market knowledge is unmatched and her communication kept us informed every step of the way. Sold in 6 days over asking!',
    date: 'January 2025',
    avatar: 'JA',
  },
  {
    id: '3',
    author: 'David K.',
    rating: 5,
    text: 'As someone relocating from Vancouver, I needed an agent who truly knew the Kelowna market. Marki delivered. She found us our perfect home in the Upper Mission.',
    date: 'February 2025',
    avatar: 'DK',
  },
  {
    id: '4',
    author: 'Rachel P.',
    rating: 5,
    text: 'Marki\'s local expertise as a born-and-raised Kelowna resident was invaluable. She knew every neighbourhood inside-out and helped us land a home in a competitive market.',
    date: 'November 2024',
    avatar: 'RP',
  },
  {
    id: '5',
    author: 'Tom & Linda W.',
    rating: 5,
    text: 'Professional, responsive, and genuinely caring. Marki went above and beyond throughout our entire buying process. We highly recommend her to anyone in the Okanagan.',
    date: 'December 2024',
    avatar: 'TW',
  },
]
