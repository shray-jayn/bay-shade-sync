import { products, productNames } from "./products";

export interface City {
  name: string;
  slug: string;
  region: string;
  description: string;
  weatherNotes: string;
  recommendedProducts: string[]; // product names
}

// Helper: "South San Francisco" -> "south-san-francisco"
const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Complete list exactly as provided
const bayAreaCityNames = [
  "San Francisco",
  "San Jose",
  "Oakland",
  "Fremont",
  "Santa Clara",
  "Palo Alto",
  "Mountain View",
  "Redwood City",
  "San Mateo",
  "Belmont",
  "Burlingame",
  "South San Francisco",
  "Daly City",
  "Pacifica",
  "Half Moon Bay",
  "Hayward",
  "Union City",
  "Castro Valley",
  "Pleasanton",
  "Dublin",
  "Livermore",
  "San Ramon",
  "Walnut Creek",
  "Concord",
  "Antioch",
  "Richmond",
  "Pinole",
  "San Leandro",
  "Emeryville",
  "Novato",
  "San Rafael",
  "Mill Valley",
  "Sausalito",
  "Petaluma",
  "Santa Rosa",
  "Napa",
  "Vallejo",
  "American Canyon",
  "Benicia",
  "Fairfield",
  "Vacaville",
  "Dixon",
  "Tracy",
  "Morgan Hill",
  "Gilroy",
  "Los Gatos",
  "Brentwood",
  "Pittsburg",
  "Oakland Hills",
  "Berkeley",
  "Albany",
  "El Cerrito",
  "Richmond Hills",
  "San Anselmo",
  "Larkspur",
  "Marin City",
  "Millbrae",
  "Colma",
  "Brisbane",
  "Menlo Park",
];

const defaultDescription = "Local, motorized shading solutions tailored to Bay Area homes.";
const defaultWeatherNotes =
  "Designed for microclimates—manage foggy mornings, bright afternoons, and heat efficiently.";

// Each city gets ALL products
export const cities: City[] = bayAreaCityNames.map((name) => ({
  name,
  slug: toSlug(name),
  region: "San Francisco Bay Area",
  description: defaultDescription,
  weatherNotes: defaultWeatherNotes,
  recommendedProducts: productNames,
}));

// Quick lookup: products available per city (all products everywhere)
export const productsByCity: Record<string, typeof products> = Object.fromEntries(
  cities.map((c) => [c.slug, products])
);

// Optional: group by region (single group for now; extensible later)
export const citiesByRegion: Record<string, City[]> = {
  "San Francisco Bay Area": cities,
};
