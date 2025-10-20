export interface City {
  name: string;
  slug: string;
  region: string;
  description: string;
  weatherNotes: string;
  recommendedProducts: string[];
}

export const cities: City[] = [
  // --- Core Peninsula & SF Bay ---
  {
    name: "San Francisco",
    slug: "san-francisco",
    region: "San Francisco County",
    description: "Serving all SF neighborhoods from the Marina to the Mission.",
    weatherNotes: "Foggy mornings and sunny afternoons make automated shades ideal for comfort and energy control.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "San Jose",
    slug: "san-jose",
    region: "Santa Clara County",
    description: "Comprehensive shading for South Bay homes.",
    weatherNotes: "Hot summers and strong sunlight benefit from smart, motorized cooling solutions.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Oakland",
    slug: "oakland",
    region: "Alameda County",
    description: "Modern shading solutions for East Bay living.",
    weatherNotes: "Inland heat management and energy efficiency at their best.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Awnings", "Dual Shades"]
  },
  {
    name: "Fremont",
    slug: "fremont",
    region: "Alameda County",
    description: "Versatile shading for diverse East Bay neighborhoods.",
    weatherNotes: "Flexible systems for both sunny plains and cooler hillside homes.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Honeycomb Shades"]
  },
  {
    name: "Santa Clara",
    slug: "santa-clara",
    region: "Santa Clara County",
    description: "Comfort and smart shading for South Bay families.",
    weatherNotes: "Perfect for energy-efficient homes under bright Bay Area skies.",
    recommendedProducts: ["Honeycomb Shades", "Exterior Zip-Track Blinds", "Smart Integration"]
  },
  {
    name: "Palo Alto",
    slug: "palo-alto",
    region: "Santa Clara County",
    description: "Premium automation for Silicon Valley homes.",
    weatherNotes: "High sunlight and tech-forward homeowners benefit from smart motorized shades.",
    recommendedProducts: ["Smart Home Integration", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Mountain View",
    slug: "mountain-view",
    region: "Santa Clara County",
    description: "High-tech shading for sunny South Bay.",
    weatherNotes: "Ideal for tech campuses and homes that demand automation.",
    recommendedProducts: ["Smart Integration", "Exterior Zip-Track Blinds", "Dual Shades"]
  },
  {
    name: "Redwood City",
    slug: "redwood-city",
    region: "San Mateo County",
    description: "Smart shading for warm Peninsula neighborhoods.",
    weatherNotes: "‘Climate best by government test’ still benefits from light and glare control.",
    recommendedProducts: ["Motorized Roller Shades", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "San Mateo",
    slug: "san-mateo",
    region: "San Mateo County",
    description: "Central Peninsula comfort and energy efficiency.",
    weatherNotes: "Balanced coastal sun calls for flexible, motorized light control.",
    recommendedProducts: ["Dual Shades", "Motorized Roller Shades", "Shangri-La Shades"]
  },
  {
    name: "Belmont",
    slug: "belmont",
    region: "San Mateo County",
    description: "Our home base in the heart of the Peninsula.",
    weatherNotes: "Mild coastal weather with bright afternoons—ideal for adaptive shading.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Burlingame",
    slug: "burlingame",
    region: "San Mateo County",
    description: "Elegant shading for the Peninsula’s finest homes.",
    weatherNotes: "Stylish and efficient control for coastal light.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "South San Francisco",
    slug: "south-san-francisco",
    region: "San Mateo County",
    description: "Convenient smart shading for urban living.",
    weatherNotes: "Perfect for mixed light and fog conditions.",
    recommendedProducts: ["Dual Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Daly City",
    slug: "daly-city",
    region: "San Mateo County",
    description: "Durable comfort for foggy hillsides.",
    weatherNotes: "Thick fog and bright breaks require responsive shading.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Pacifica",
    slug: "pacifica",
    region: "San Mateo County",
    description: "Coastal homes with serene comfort.",
    weatherNotes: "Handle fog, glare, and reflections gracefully.",
    recommendedProducts: ["Motorized Roller Shades", "Exterior Zip-Track Blinds", "Smart Integration"]
  },
  {
    name: "Half Moon Bay",
    slug: "half-moon-bay",
    region: "San Mateo County",
    description: "Coastal elegance with climate-smart shades.",
    weatherNotes: "Fog and salt air demand durable exterior systems.",
    recommendedProducts: ["Weather-Resistant Systems", "Exterior Awnings", "Dual Shades"]
  },
  {
    name: "Hayward",
    slug: "hayward",
    region: "Alameda County",
    description: "Reliable shading for East Bay comfort.",
    weatherNotes: "Warm summers make motorized cooling shades a must.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Dual Shades"]
  },
  {
    name: "Union City",
    slug: "union-city",
    region: "Alameda County",
    description: "Convenient control for East Bay homes.",
    weatherNotes: "Great for bright, modern living spaces.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Blinds"]
  },
  {
    name: "Castro Valley",
    slug: "castro-valley",
    region: "Alameda County",
    description: "Suburban serenity meets smart design.",
    weatherNotes: "Automated systems enhance indoor living comfort.",
    recommendedProducts: ["Exterior Blinds", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Pleasanton",
    slug: "pleasanton",
    region: "Alameda County",
    description: "Luxury automation for warm inland homes.",
    weatherNotes: "Perfect for managing heat and sunlight.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Smart Integration", "Motorized Roller Shades"]
  },
  {
    name: "Dublin",
    slug: "dublin",
    region: "Alameda County",
    description: "Smart and stylish shading for new communities.",
    weatherNotes: "Ideal for bright, open-plan interiors.",
    recommendedProducts: ["Motorized Roller Shades", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Livermore",
    slug: "livermore",
    region: "Alameda County",
    description: "Energy-efficient shading for wine country homes.",
    weatherNotes: "Reduce glare and protect interiors from heat.",
    recommendedProducts: ["Exterior Awnings", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "San Ramon",
    slug: "san-ramon",
    region: "Contra Costa County",
    description: "Refined shading for modern hillside homes.",
    weatherNotes: "Perfect for afternoon sun control and view preservation.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Blinds"]
  },
  {
    name: "Walnut Creek",
    slug: "walnut-creek",
    region: "Contra Costa County",
    description: "Bright comfort for Contra Costa homes.",
    weatherNotes: "Manage intense sunlight and heat efficiently.",
    recommendedProducts: ["Motorized Roller Shades", "Exterior Blinds", "Honeycomb Shades"]
  },
  {
    name: "Concord",
    slug: "concord",
    region: "Contra Costa County",
    description: "Functional, stylish shading for suburban living.",
    weatherNotes: "Perfect for year-round comfort and glare control.",
    recommendedProducts: ["Dual Shades", "Honeycomb Shades", "Motorized Roller Shades"]
  },
  {
    name: "Antioch",
    slug: "antioch",
    region: "Contra Costa County",
    description: "Affordable automation for East Bay homes.",
    weatherNotes: "Ideal for strong sunlight and high temperatures.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Dual Shades", "Smart Integration"]
  },
  {
    name: "Richmond",
    slug: "richmond",
    region: "Contra Costa County",
    description: "Durable shading for coastal conditions.",
    weatherNotes: "Wind-resistant systems keep interiors cool and comfortable.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Awnings", "Honeycomb Shades"]
  },
  {
    name: "Pinole",
    slug: "pinole",
    region: "Contra Costa County",
    description: "Comfort and privacy in the North East Bay.",
    weatherNotes: "Ideal for all-weather light control.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Blinds"]
  },
  {
    name: "San Leandro",
    slug: "san-leandro",
    region: "Alameda County",
    description: "Comfort shading for sunny neighborhoods.",
    weatherNotes: "Ideal for regulating heat and light throughout the day.",
    recommendedProducts: ["Motorized Roller Shades", "Exterior Awnings", "Dual Shades"]
  },
  {
    name: "Emeryville",
    slug: "emeryville",
    region: "Alameda County",
    description: "Stylish shading for lofts and apartments.",
    weatherNotes: "Urban homes benefit from efficient glare and privacy control.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Smart Integration"]
  },

  // --- North Bay & Marin / Sonoma / Napa / Solano ---
  {
    name: "Novato",
    slug: "novato",
    region: "Marin County",
    description: "North Bay comfort and control.",
    weatherNotes: "Ideal for managing warm, sunny interiors efficiently.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Motorized Awnings"]
  },
  {
    name: "San Rafael",
    slug: "san-rafael",
    region: "Marin County",
    description: "Modern shading for classic Marin homes.",
    weatherNotes: "Cool mornings and bright afternoons—perfect for automation.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Mill Valley",
    slug: "mill-valley",
    region: "Marin County",
    description: "Hillside elegance with sun-smart technology.",
    weatherNotes: "Discreet solutions that preserve views and manage intense light.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Sausalito",
    slug: "sausalito",
    region: "Marin County",
    description: "Waterfront homes with panoramic light control.",
    weatherNotes: "Marine environments require durable exterior solutions.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Awnings", "Weather-Resistant Systems"]
  },
  {
    name: "Petaluma",
    slug: "petaluma",
    region: "Sonoma County",
    description: "Historic charm meets modern shade technology.",
    weatherNotes: "Variable light throughout the day makes automation essential.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Santa Rosa",
    slug: "santa-rosa",
    region: "Sonoma County",
    description: "Shading for wine country living.",
    weatherNotes: "Hot summers call for efficient solar control.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Napa",
    slug: "napa",
    region: "Napa County",
    description: "Luxury motorized shades for vineyard estates.",
    weatherNotes: "Control harsh sunlight while maintaining vineyard views.",
    recommendedProducts: ["Shangri-La Shades", "Exterior Awnings", "Motorized Roller Shades"]
  },
  {
    name: "Vallejo",
    slug: "vallejo",
    region: "Solano County",
    description: "Coastal style with functional comfort.",
    weatherNotes: "Manage bright, reflective light with durable shading.",
    recommendedProducts: ["Dual Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "American Canyon",
    slug: "american-canyon",
    region: "Napa County",
    description: "Gateway to wine country comfort.",
    weatherNotes: "Perfect blend of luxury and practicality for bright days.",
    recommendedProducts: ["Exterior Blinds", "Honeycomb Shades", "Smart Integration"]
  },
  {
    name: "Benicia",
    slug: "benicia",
    region: "Solano County",
    description: "Seaside tranquility with sun-smart design.",
    weatherNotes: "Perfect for bright waterfront locations.",
    recommendedProducts: ["Honeycomb Shades", "Exterior Zip-Track Blinds", "Motorized Roller Shades"]
  },
  {
    name: "Fairfield",
    slug: "fairfield",
    region: "Solano County",
    description: "Comfort and cooling for inland summers.",
    weatherNotes: "Ideal for heat management and privacy.",
    recommendedProducts: ["Honeycomb Shades", "Exterior Blinds", "Motorized Awnings"]
  },
  {
    name: "Vacaville",
    slug: "vacaville",
    region: "Solano County",
    description: "Reliable shading for warm interiors.",
    weatherNotes: "Motorized systems to keep interiors cool and inviting.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Roller Shades", "Dual Shades"]
  },
  {
    name: "Dixon",
    slug: "dixon",
    region: "Solano County",
    description: "Suburban comfort with modern light control.",
    weatherNotes: "Bright days need responsive shading.",
    recommendedProducts: ["Motorized Roller Shades", "Honeycomb Shades", "Smart Integration"]
  },

  // --- San Joaquin / Outlying ---
  {
    name: "Tracy",
    slug: "tracy",
    region: "San Joaquin County",
    description: "Shading for fast-growing inland communities.",
    weatherNotes: "Hot, sunny days call for strong exterior blinds and energy-saving shades.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Smart Integration"]
  },

  // --- South Bay & Santa Clara Valley ---
  {
    name: "Morgan Hill",
    slug: "morgan-hill",
    region: "Santa Clara County",
    description: "Suburban comfort with intelligent shading.",
    weatherNotes: "Motorized systems perfect for long summer days.",
    recommendedProducts: ["Exterior Blinds", "Motorized Roller Shades", "Dual Shades"]
  },
  {
    name: "Gilroy",
    slug: "gilroy",
    region: "Santa Clara County",
    description: "Bright control for sunny, spacious homes.",
    weatherNotes: "Heat-resistant automation for maximum comfort.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Los Gatos",
    slug: "los-gatos",
    region: "Santa Clara County",
    description: "Luxury shading for foothill estates.",
    weatherNotes: "Keep interiors cool while preserving scenic views.",
    recommendedProducts: ["Motorized Roller Shades", "Honeycomb Shades", "Smart Integration"]
  },

  // --- Far East Bay / Delta ---
  {
    name: "Brentwood",
    slug: "brentwood",
    region: "Contra Costa County",
    description: "Sunny suburb comfort and convenience.",
    weatherNotes: "Stay cool and comfortable through hot summers.",
    recommendedProducts: ["Motorized Awnings", "Honeycomb Shades", "Exterior Blinds"]
  },
  {
    name: "Pittsburg",
    slug: "pittsburg",
    region: "Contra Costa County",
    description: "Coastal heat protection with modern style.",
    weatherNotes: "Motorized systems ideal for bright waterfronts.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Honeycomb Shades", "Motorized Roller Shades"]
  },

  // --- Hills / Specialized ---
  {
    name: "Oakland Hills",
    slug: "oakland-hills",
    region: "Alameda County",
    description: "Elegant hillside shading for scenic properties.",
    weatherNotes: "Perfect for large windows and panoramic views.",
    recommendedProducts: ["Shangri-La Shades", "Exterior Awnings", "Smart Integration"]
  },
  {
    name: "Richmond Hills",
    slug: "richmond-hills",
    region: "Contra Costa County",
    description: "Refined comfort with panoramic Bay views.",
    weatherNotes: "Durable shading that preserves scenic vistas.",
    recommendedProducts: ["Shangri-La Shades", "Exterior Blinds", "Smart Integration"]
  },

  // --- Berkeley / Albany / El Cerrito ---
  {
    name: "Berkeley",
    slug: "berkeley",
    region: "Alameda County",
    description: "Eco-friendly shading for sustainable homes.",
    weatherNotes: "Smart systems reduce heat gain and energy use.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Smart Integration"]
  },
  {
    name: "Albany",
    slug: "albany",
    region: "Alameda County",
    description: "Compact comfort for cozy homes.",
    weatherNotes: "Smart shading offers both privacy and efficiency.",
    recommendedProducts: ["Dual Shades", "Motorized Roller Shades", "Honeycomb Shades"]
  },
  {
    name: "El Cerrito",
    slug: "el-cerrito",
    region: "Contra Costa County",
    description: "Elegant hillside shading with modern flair.",
    weatherNotes: "Great for light-filled hillside properties.",
    recommendedProducts: ["Motorized Roller Shades", "Smart Integration", "Exterior Zip-Track Blinds"]
  },

  // --- Marin small cities ---
  {
    name: "San Anselmo",
    slug: "san-anselmo",
    region: "Marin County",
    description: "Timeless Marin charm with modern automation.",
    weatherNotes: "Cool mornings and bright afternoons suit adaptive shading.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Smart Integration"]
  },
  {
    name: "Larkspur",
    slug: "larkspur",
    region: "Marin County",
    description: "Refined coastal living with precise light control.",
    weatherNotes: "Great for glare management while preserving views.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Marin City",
    slug: "marin-city",
    region: "Marin County",
    description: "Water-adjacent homes with durable shade solutions.",
    weatherNotes: "Marine fog and wind call for resilient exterior systems.",
    recommendedProducts: ["Exterior Zip-Track Blinds", "Weather-Resistant Systems", "Motorized Awnings"]
  },

  // --- Additional Peninsula cities ---
  {
    name: "Millbrae",
    slug: "millbrae",
    region: "San Mateo County",
    description: "Luxury light control near the Bay.",
    weatherNotes: "Perfect for sun-filtering with coastal charm.",
    recommendedProducts: ["Motorized Roller Shades", "Dual Shades", "Smart Integration"]
  },
  {
    name: "Colma",
    slug: "colma",
    region: "San Mateo County",
    description: "Small-town feel, modern shading benefits.",
    weatherNotes: "Smart shading improves indoor comfort all year.",
    recommendedProducts: ["Honeycomb Shades", "Motorized Roller Shades", "Exterior Awnings"]
  },
  {
    name: "Brisbane",
    slug: "brisbane",
    region: "San Mateo County",
    description: "Hillside homes with stunning Bay views.",
    weatherNotes: "Precision shading keeps views unobstructed and comfortable.",
    recommendedProducts: ["Shangri-La Shades", "Motorized Roller Shades", "Exterior Zip-Track Blinds"]
  },
  {
    name: "Menlo Park",
    slug: "menlo-park",
    region: "San Mateo County",
    description: "Innovation meets comfort in Silicon Valley.",
    weatherNotes: "Smart automation for high-performance homes.",
    recommendedProducts: ["Smart Integration", "Motorized Roller Shades", "Honeycomb Shades"]
  }
];
