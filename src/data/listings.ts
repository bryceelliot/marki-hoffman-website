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
  images: string[]
  description: string
  features: string[]
  mlsNumber: string
  canvaLink?: string
}

const REW = 'https://assets-listings.rew.ca/listing/crea_ddf'

export const listings: Listing[] = [
  {
    id: '1',
    address: '1880 Broadview Avenue',
    city: 'Kelowna, BC',
    price: 1_808_542,
    beds: 5,
    baths: 4,
    sqft: 3_480,
    type: 'For Sale',
    image: `${REW}/28171349/00_2ece8a4d4dc680e96101636481b7e8f9.jpg`,
    images: [
      `${REW}/28171349/00_2ece8a4d4dc680e96101636481b7e8f9.jpg`,
      `${REW}/28171349/00_5d848936a1941c594ef317dc656e555a.jpg`,
      `${REW}/28171349/00_50aeb32d684f3b1cfedeb1b77c7923e0.jpg`,
      `${REW}/28171349/00_d198d2570048f4f84afb5ecf6c9db312.jpg`,
      `${REW}/28171349/00_2b74db3c56129563f7a1ce3b290e2563.jpg`,
      `${REW}/28171349/00_bdc31f91d49a5e6c052097edbc39e4e1.jpg`,
      `${REW}/28171349/00_015ce7562e86081052f55b2fec204d8a.jpg`,
      `${REW}/28171349/00_6ba3bf75224ab98abc2e888658920ff5.jpg`,
      `${REW}/28171349/00_44956d6b13f2b67e87c5c9c9e9efc8d1.jpg`,
      `${REW}/28171349/00_9a626661344466b7e87307724c17a7f9.jpg`,
      `${REW}/28171349/00_face2b0222bfb015bf98261e35aa9d58.jpg`,
      `${REW}/28171349/00_a6d134061240b31ad86be221e9c8ee36.jpg`,
    ],
    description: 'Exceptional family home in sought-after Broadview Estates. Spacious open-concept layout with high-end finishes throughout, chef\'s kitchen with large island, generous primary suite, and a beautifully landscaped backyard with covered patio. Triple garage, RV parking, and stunning valley views.',
    features: ['Triple Garage', 'Valley Views', 'Chef\'s Kitchen', 'RV Parking', 'Covered Patio', 'No Strata'],
    mlsNumber: 'MLS10343553',
  },
  {
    id: '2',
    address: '703 Glenburn Street',
    city: 'Kelowna, BC',
    price: 1_851_300,
    beds: 4,
    baths: 3,
    sqft: 3_100,
    type: 'For Sale',
    image: `${REW}/28170890/00_2ece8a4d4dc680e96101636481b7e8f9.jpg`,
    images: [
      `${REW}/28170890/00_2ece8a4d4dc680e96101636481b7e8f9.jpg`,
      `${REW}/28170890/00_5d848936a1941c594ef317dc656e555a.jpg`,
      `${REW}/28170890/00_50aeb32d684f3b1cfedeb1b77c7923e0.jpg`,
      `${REW}/28170890/00_d198d2570048f4f84afb5ecf6c9db312.jpg`,
      `${REW}/28170890/00_2b74db3c56129563f7a1ce3b290e2563.jpg`,
      `${REW}/28170890/00_bdc31f91d49a5e6c052097edbc39e4e1.jpg`,
      `${REW}/28170890/00_015ce7562e86081052f55b2fec204d8a.jpg`,
      `${REW}/28170890/00_6ba3bf75224ab98abc2e888658920ff5.jpg`,
      `${REW}/28170890/00_44956d6b13f2b67e87c5c9c9e9efc8d1.jpg`,
      `${REW}/28170890/00_9a626661344466b7e87307724c17a7f9.jpg`,
      `${REW}/28170890/00_cd00ecb9a3e6eeb343041c924bb2a7e3.jpg`,
      `${REW}/28170890/00_d3903a74c91edf3e30d9571eff9f04ab.jpg`,
    ],
    description: 'Stunning custom-built home on a quiet cul-de-sac in Glenmore. Thoughtfully designed with vaulted ceilings, premium hardwood floors, and a show-stopping kitchen with quartz countertops. Generous primary suite with spa-inspired ensuite, plus a fully finished lower level with suite potential.',
    features: ['Vaulted Ceilings', 'Custom Build', 'Suite Potential', 'Quartz Countertops', 'Double Garage', 'Cul-de-Sac'],
    mlsNumber: 'MLS10343607',
  },
  {
    id: '3',
    address: '740 Glenmore Drive',
    city: 'Kelowna, BC',
    price: 1_495_000,
    beds: 3,
    baths: 2,
    sqft: 1_950,
    type: 'For Sale',
    image: `${REW}/28170797/00_0a88ac0768bffb36a47e5d1f3d7e700f.jpg`,
    images: [
      `${REW}/28170797/00_0a88ac0768bffb36a47e5d1f3d7e700f.jpg`,
      `${REW}/28170797/00_110b5d6c30de303c95336f5e450d064a.jpg`,
      `${REW}/28170797/00_1216e42aae2b8a04ee1e1507cb037e73.jpg`,
      `${REW}/28170797/00_170f437821362a7661db909eaf6d22bf.jpg`,
      `${REW}/28170797/00_197cd4333822803c731a7a8e664e46b8.jpg`,
      `${REW}/28170797/00_2142170e20d14d7eab25194af5e2698a.jpg`,
      `${REW}/28170797/00_2befd25c6fdcc4173c949cb2dac33deb.jpg`,
      `${REW}/28170797/00_3355ae06936809b3696244f1f2a11e99.jpg`,
      `${REW}/28170797/00_566a6a642e54e84eefcd07ed9e04b7d9.jpg`,
      `${REW}/28170797/00_5b8e2dec4124a46344000a17020321c8.jpg`,
    ],
    description: 'Prime Glenmore land assembly opportunity. Three contiguous properties totalling approximately 0.65 acres fronting Glenmore Drive, ideally positioned for future development. Current home is well maintained and liveable while you plan. Contact me for the full land assembly package.',
    features: ['Land Assembly', '0.65 Acre Site', 'Development Potential', 'Glenmore Dr Frontage', 'Contiguous Lots', 'UC2 Zoning'],
    mlsNumber: 'MLS10343452',
    canvaLink: 'https://www.canva.com/design/DAGDi3lwsQU/xdvTTl1pOaGVUGvO9YTd_w/view?utm_content=DAGDi3lwsQU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hac5001a090',
  },
  {
    id: '4',
    address: '3122 McCulloch Road',
    city: 'South Kelowna, BC',
    price: 549_000,
    beds: 3,
    baths: 1,
    sqft: 1_340,
    type: 'For Sale',
    image: `${REW}/29319650/00_974db9266bab33f82ad5c58f4501dd0e.jpg`,
    images: [
      `${REW}/29319650/00_974db9266bab33f82ad5c58f4501dd0e.jpg`,
      `${REW}/29319650/00_3522e9ea4ca7df73bd58caca62c74324.jpg`,
      `${REW}/29319650/00_bd8b9d485199eebce68062162fd197e2.jpg`,
      `${REW}/29319650/00_72772c6bedb025c416036201257c5116.jpg`,
      `${REW}/29319650/00_7a245778224da971347af8739ae6f7f8.jpg`,
      `${REW}/29319650/00_57a598c928e40c0396d0fd526c5c31a4.jpg`,
      `${REW}/29319650/00_70d293c37bcaa721f7c146e2856656ed.jpg`,
      `${REW}/29319650/00_82cc40fd98a486c051a4fe75f2995f5f.jpg`,
      `${REW}/29319650/00_a74b289370a856fdc5d4c2111afc6b45.jpg`,
      `${REW}/29319650/00_aab1da1244c22aaa0e3ca120a406f8e9.jpg`,
    ],
    description: 'Charming acreage property in South Kelowna with incredible orchard and valley views. Solid 3-bedroom home on a spacious rural lot with plenty of room for a workshop, garden, or additional outbuildings. A rare opportunity to own a piece of the Okanagan countryside at an accessible price point.',
    features: ['Acreage', 'Orchard Views', 'Rural Setting', 'Workshop Potential', 'South Kelowna', 'No Strata'],
    mlsNumber: 'MLS10374399',
  },
]
