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
  },
  {
    name: "Redwood City",
    slug: "redwood-city",
    region: "San Mateo County",
    description: "Smart solutions for the Peninsula's tech hub",
    weatherNotes: "Redwood City's warm, sunny climate makes motorized shading essential for comfort and energy efficiency in modern homes and offices.",
    recommendedProducts: ["Motorized Roller Shades", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "San Mateo",
    slug: "san-mateo",
    region: "San Mateo County",
    description: "Central Peninsula elegance meets modern convenience",
    weatherNotes: "San Mateo's moderate coastal climate benefits from versatile shading solutions that handle both sunny days and foggy mornings.",
    recommendedProducts: ["Dual Shades", "Motorized Roller Shades", "Shangri-La Shades"]
  },
  {
    name: "Burlingame",
    slug: "burlingame",
    region: "San Mateo County",
    description: "Sophisticated solutions for upscale Peninsula living",
    weatherNotes: "Burlingame homes benefit from premium motorized shading that complements elegant architecture while managing coastal light patterns.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Menlo Park",
    slug: "menlo-park",
    region: "San Mateo County",
    description: "Innovation meets comfort in Silicon Valley",
    weatherNotes: "Menlo Park's tech-savvy residents appreciate smart motorized systems that integrate seamlessly with whole-home automation.",
    recommendedProducts: ["Smart Integration", "Motorized Roller Shades", "Honeycomb Shades"]
  },
  {
    name: "Mountain View",
    slug: "mountain-view",
    region: "Santa Clara County",
    description: "High-tech shading for the heart of Silicon Valley",
    weatherNotes: "Mountain View's sunny weather and tech culture make automated, energy-efficient shading a natural fit for modern homes.",
    recommendedProducts: ["Smart Integration", "Exterior Zip-Track Blinds", "Dual Shades"]
  },
  {
    name: "Sunnyvale",
    slug: "sunnyvale",
    region: "Santa Clara County",
    description: "Bright solutions for South Bay homes",
    weatherNotes: "Living up to its name, Sunnyvale requires excellent sun control. Our motorized exterior and interior solutions keep homes comfortable year-round.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Roller Shades", "Honeycomb Shades"]
  },
  {
    name: "Cupertino",
    slug: "cupertino",
    region: "Santa Clara County",
    description: "Premium automation for discerning homeowners",
    weatherNotes: "Cupertino's affluent neighborhoods demand the finest motorized shading with seamless smart home integration and elegant design.",
    recommendedProducts: ["Smart Integration", "Shangri-La Shades", "Motorized Roller Shades"]
  },
  {
    name: "Santa Clara",
    slug: "santa-clara",
    region: "Santa Clara County",
    description: "Practical luxury for South Bay residents",
    weatherNotes: "Santa Clara's warm summers benefit greatly from smart motorized shading that automatically adjusts to keep homes cool and comfortable.",
    recommendedProducts: ["Honeycomb Shades", "Exterior Zip-Track Blinds", "Smart Integration"]
  },
  {
    name: "Los Altos",
    slug: "los-altos",
    region: "Santa Clara County",
    description: "Elite shading for prestigious foothill homes",
    weatherNotes: "Los Altos' hillside locations and luxury homes require premium motorized solutions that preserve stunning views while controlling intense sunlight.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Fremont",
    slug: "fremont",
    region: "Alameda County",
    description: "Versatile solutions for diverse neighborhoods",
    weatherNotes: "Fremont's varied microclimates from hills to bay require flexible motorized shading solutions tailored to each location.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Honeycomb Shades"]
  },
  {
    name: "Hayward",
    slug: "hayward",
    region: "Alameda County",
    description: "Affordable elegance for East Bay homes",
    weatherNotes: "Hayward's warm inland climate makes energy-efficient motorized shading a smart investment for reducing cooling costs.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "San Rafael",
    slug: "san-rafael",
    region: "Marin County",
    description: "Marin elegance with modern convenience",
    weatherNotes: "San Rafael's diverse neighborhoods from downtown to hillsides benefit from custom motorized shading that adapts to varied light conditions.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Novato",
    slug: "novato",
    region: "Marin County",
    description: "North Bay comfort and style",
    weatherNotes: "Novato's warmer North Bay climate requires effective sun control, making motorized exterior and interior shading essential for comfort.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Motorized Awnings"]
  }
];
