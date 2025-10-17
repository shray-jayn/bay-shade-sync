import { useState } from 'react';
import { LocationCard } from '@/components/LocationCard';
import { cities } from '@/data/cities';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Service Locations
          </h1>
          <p className="text-lg text-muted-foreground">
            We service the entire Bay Area — from the coast to the hills. Find your city.
          </p>
        </div>
      </section>

      {/* Search & Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by city or region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-lg"
              />
            </div>
          </div>

          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filteredCities.map((city) => (
                <LocationCard
                  key={city.slug}
                  name={city.name}
                  slug={city.slug}
                  region={city.region}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No cities found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold font-display">
            Don't see your city listed?
          </h2>
          <p className="text-muted-foreground">
            We serve the entire San Francisco Bay Area. If your city isn't listed above, 
            give us a call at <a href="tel:+16578951094" className="text-primary hover:underline font-medium">(657) 895-1094</a> and 
            we'll be happy to discuss service in your area.
          </p>
        </div>
      </section>
    </main>
  );
}
