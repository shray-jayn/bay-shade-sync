export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  finishes: string[];
}

export const products: Product[] = [
  {
    id: "roller-shades",
    name: "Motorized Roller Shades",
    slug: "roller-shades",
    tagline: "Sleek, minimal, and effortlessly controlled",
    description: "Our most popular interior solution combines clean aesthetics with whisper-quiet motorization. Perfect for modern homes that demand both style and smart functionality.",
    features: [
      "Ultra-quiet Somfy motors",
      "Blackout to sheer fabric options",
      "Smart home integration ready",
      "Custom sizing up to 16 feet wide",
      "Cordless and child-safe"
    ],
    useCases: [
      "Living rooms and bedrooms",
      "Home offices and media rooms",
      "Floor-to-ceiling windows",
      "Skylights and high windows"
    ],
    finishes: ["Solar Screen", "Light Filtering", "Room Darkening", "Blackout"]
  },
  {
    id: "dual-shades",
    name: "Dual / Zebra Blinds",
    slug: "dual-shades",
    tagline: "Precision light control with elegant stripes",
    description: "Alternating sheer and opaque fabric bands offer infinite light control. Shift between privacy and view with a single motor adjustment.",
    features: [
      "Variable opacity control",
      "Modern striped aesthetic",
      "Minimal light gaps",
      "Energy-efficient design",
      "Motorized or manual options"
    ],
    useCases: [
      "Dining rooms",
      "Home offices",
      "Bedrooms with varying light needs",
      "Spaces requiring glare control"
    ],
    finishes: ["Natural Linen", "Cool Gray", "Warm Beige", "Pure White"]
  },
  {
    id: "shangri-la",
    name: "Shangri-La & Roman Shades",
    slug: "shangri-la",
    tagline: "Soft elegance meets motorized precision",
    description: "Fabric vanes suspended between sheer layers create a floating, luxurious look. Roman shades offer classic tailored folds with modern automation.",
    features: [
      "Floating fabric vanes",
      "Soft diffused lighting",
      "Luxurious fabric selections",
      "Motorized lift systems",
      "Custom color matching"
    ],
    useCases: [
      "Formal living spaces",
      "Master bedrooms",
      "Dining rooms",
      "Any space needing elegance"
    ],
    finishes: ["Silk Ivory", "Linen Cream", "Cotton Graphite", "Custom Fabrics"]
  },
  {
    id: "honeycomb",
    name: "Honeycomb Shades",
    slug: "honeycomb",
    tagline: "Energy efficiency meets smart design",
    description: "Cellular construction traps air for superior insulation. Reduce heating and cooling costs while enjoying whisper-quiet motorized operation.",
    features: [
      "Cellular air-trapping design",
      "Up to 50% energy savings",
      "Top-down / bottom-up options",
      "Cordless motorization",
      "Single or double cell construction"
    ],
    useCases: [
      "Bedrooms and nurseries",
      "Energy-conscious homes",
      "Climate control priority",
      "Noise reduction needs"
    ],
    finishes: ["Arctic White", "Desert Sand", "Storm Gray", "Midnight Blue"]
  },
  {
    id: "exterior-zip-track",
    name: "Exterior Zip-Track Patio Blinds",
    slug: "exterior-zip-track",
    tagline: "Outdoor living, perfected",
    description: "Transform your patio into a year-round retreat. Our zip-track system handles wind, rain, and sun while maintaining clear sightlines and motorized convenience.",
    features: [
      "Wind-rated up to 60+ mph",
      "Guided side channels (no flapping)",
      "UV-blocking and waterproof fabrics",
      "Integrated wind sensors",
      "Solar-powered options"
    ],
    useCases: [
      "Covered patios and decks",
      "Outdoor dining areas",
      "Pool cabanas",
      "Balconies and terraces"
    ],
    finishes: ["Solar Mesh 5%", "Solar Mesh 10%", "Blackout PVC", "Clear Vinyl"]
  },
  {
    id: "awnings",
    name: "Motorized Awnings",
    slug: "awnings",
    tagline: "Shade on demand for outdoor spaces",
    description: "Retractable awnings extend your living space outdoors. Motorized operation with sun and wind sensors provides automatic climate adaptation.",
    features: [
      "Retractable motorized arms",
      "Weather-resistant Sunbrella fabrics",
      "Automatic sun/wind sensors",
      "Powder-coated aluminum frames",
      "LED lighting integration available"
    ],
    useCases: [
      "Patios and decks",
      "Outdoor kitchens",
      "Restaurant seating areas",
      "West or south-facing exposures"
    ],
    finishes: ["Sunbrella Acrylic (100+ colors)", "Solution-Dyed Acrylics", "Custom Stripes"]
  }
];
