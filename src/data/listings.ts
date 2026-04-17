export interface Listing {
  id: string
  address: string
  city: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: 'For Sale' | 'Sold' | 'For Lease'
  image: string
  description: string
  features: string[]
  mlsNumber: string
}

export const listings: Listing[] = [
  {
    id: '0',
    address: '47-1960 KLO Road',
    city: 'Kelowna, BC',
    price: 0,
    beds: 2,
    baths: 2,
    sqft: 0,
    type: 'Sold',
    image: '/sold-fall.webp',
    description: "Quietly located in desirable 'Gablecraft in the Mission'. Beautifully maintained no-step rancher style home with high ceilings, island kitchen with stainless steel appliances, new flooring, private patio area, double garage and more! Pet friendly and no age or rental restrictions.",
    features: ['No-Step Rancher', 'Island Kitchen', 'Fenced Yard', 'Attached Double Garage', 'Pet Friendly', 'No Age Restrictions'],
    mlsNumber: 'MLS10346085',
  },
  {
    id: '1',
    address: '1234 Lakeshore Drive',
    city: 'Kelowna, BC',
    price: 1_250_000,
    beds: 4,
    baths: 3,
    sqft: 2_840,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    description: 'Stunning Okanagan Lake views from this beautifully renovated family home. Open-concept main floor, chef\'s kitchen, and expansive deck perfect for entertaining.',
    features: ['Lake Views', 'Updated Kitchen', 'Double Garage', 'Large Deck'],
    mlsNumber: '10XXXXXX',
  },
  {
    id: '2',
    address: '567 Mission Hill Road',
    city: 'West Kelowna, BC',
    price: 875_000,
    beds: 3,
    baths: 2,
    sqft: 1_960,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    description: 'Charming rancher in sought-after West Kelowna, minutes from Mission Hill Winery. Single-level living with a beautifully landscaped yard and mountain views.',
    features: ['Rancher', 'Mountain Views', 'Landscaped Yard', 'Near Wineries'],
    mlsNumber: '10XXXXXY',
  },
  {
    id: '3',
    address: '890 Pandosy Street, #302',
    city: 'Kelowna, BC',
    price: 525_000,
    beds: 2,
    baths: 2,
    sqft: 1_050,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description: 'Modern downtown condo steps from the waterfront, restaurants, and shops. Bright open layout with quartz counters, stainless appliances, and a private balcony.',
    features: ['Downtown Location', 'Balcony', 'In-Suite Laundry', 'Secure Parking'],
    mlsNumber: '10XXXXYZ',
  },
  {
    id: '4',
    address: '23 Vineyard Court',
    city: 'Kelowna, BC',
    price: 1_599_000,
    beds: 5,
    baths: 4,
    sqft: 3_650,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'Executive estate in the Upper Mission with panoramic valley and lake views. Gourmet kitchen, home theatre, pool, and triple garage on a sprawling 0.4-acre lot.',
    features: ['Pool', 'Triple Garage', 'Valley Views', 'Home Theatre'],
    mlsNumber: '10XXXXYY',
  },
  {
    id: '5',
    address: '445 Knox Mountain Drive',
    city: 'Kelowna, BC',
    price: 995_000,
    beds: 4,
    baths: 3,
    sqft: 2_300,
    type: 'Sold',
    image: '/luna-sold-autumn.webp',
    description: 'Beautifully updated two-storey home backing onto Knox Mountain Park. Hardwood floors throughout, updated bathrooms, and a private backyard oasis.',
    features: ['Backing Parkland', 'Updated Baths', 'Hardwood Floors', 'Private Yard'],
    mlsNumber: '10XXXZZZ',
  },
  {
    id: '6',
    address: '112 Waterfront Way, #501',
    city: 'Kelowna, BC',
    price: 3_200,
    beds: 2,
    baths: 2,
    sqft: 1_100,
    type: 'For Lease',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    description: 'Premium waterfront rental with unobstructed lake views. Modern finishes, floor-to-ceiling windows, and access to rooftop amenities and concierge.',
    features: ['Waterfront', 'Rooftop Amenities', 'Concierge', 'Furnished Option'],
    mlsNumber: '10XXXAAA',
  },
]
