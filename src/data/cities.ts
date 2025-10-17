export interface City {
  name: string;
  slug: string;
  region: string;
  description: string;
  weatherNotes: string;
  recommendedProducts: string[];
}

export const cities: City[] = [
  {
    name: "Belmont",
    slug: "belmont",
    region: "San Mateo County",
    description: "Our home base in the heart of the Peninsula",
    weatherNotes: "Belmont enjoys mild coastal weather with afternoon breezes. Motorized shades help manage morning glare and maintain comfortable indoor temperatures year-round.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    region: "San Francisco County",
    description: "Serving all SF neighborhoods from the Marina to the Mission",
    weatherNotes: "San Francisco's famous fog and microclimates mean precise light control is essential. Our motorized solutions adapt to changing conditions throughout the day.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Palo Alto",
    slug: "palo-alto",
    region: "Santa Clara County",
    description: "Premium solutions for Silicon Valley homes",
    weatherNotes: "Palo Alto's sunny climate and tech-forward residents make smart motorized shading a perfect fit for managing heat and glare while integrating with home automation.",
    recommendedProducts: ["Smart Home Integration", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Mill Valley",
    slug: "mill-valley",
    region: "Marin County",
    description: "Elegant shading for Marin's hillside homes",
    weatherNotes: "Mill Valley's hillside locations and dramatic views call for discreet motorized shading that preserves vistas while controlling intense afternoon sun.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Oakland",
    slug: "oakland",
    region: "Alameda County",
    description: "Modern solutions for East Bay living",
    weatherNotes: "Oakland's warmer inland climate benefits from exterior shading and smart automation to keep homes comfortable during hot summer days.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Awnings", "Dual Shades"]
  },
  {
    name: "San Jose",
    slug: "san-jose",
    region: "Santa Clara County",
    description: "Comprehensive shading for South Bay homes",
    weatherNotes: "San Jose's hot summers and strong sun require robust exterior and interior shading solutions with smart climate control integration.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Berkeley",
    slug: "berkeley",
    region: "Alameda County",
    description: "Sustainable shading for eco-conscious homes",
    weatherNotes: "Berkeley's focus on sustainability pairs perfectly with energy-efficient motorized shading that reduces cooling costs and carbon footprint.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Sausalito",
    slug: "sausalito",
    region: "Marin County",
    description: "Waterfront living requires specialized solutions",
    weatherNotes: "Sausalito's waterfront exposure to wind, salt air, and intense reflections demands durable exterior motorized systems built for marine environments.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Awnings", "Weather-Resistant Systems"]
  }
];
