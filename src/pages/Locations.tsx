import { useState } from 'react';
import { LocationCard } from '@/components/LocationCard';
import { cities } from '@/data/cities';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import cityLivingRoom from '@/assets/city-living-room.jpg';

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useScrollReveal();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden min-h-[70vh] flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating map pins */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-primary/20">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-accent/20" style={{ animationDelay: '1s' }}>
          <MapPin className="h-8 w-8 text-accent" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-slow backdrop-blur-sm">
          <MapPin className="h-5 w-5 text-primary" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl space-y-8 relative z-10">
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 animate-bounce-slow backdrop-blur-sm">
            <MapPin className="inline h-4 w-4 mr-2 animate-pulse" />
            Serving 20+ Bay Area Cities
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight animate-fade-in">
            Service <span className="gradient-text inline-block animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Locations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We service the entire Bay Area — from the coast to the hills. Find your city.
          </p>
        </div>
      </section>

      {/* Search & Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <Input
                type="text"
                placeholder="Search by city or region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-4 h-16 text-lg rounded-2xl border-2 border-border focus:border-primary/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-xl">×</span>
                </button>
              )}
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">
              <Sparkles className="inline h-4 w-4 mr-1 text-accent" />
              {filteredCities.length} {filteredCities.length === 1 ? 'city' : 'cities'} available
            </p>
          </div>

          {filteredCities.length > 0 ? (
            <div ref={ref} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {filteredCities.map((city, index) => (
                <div 
                  key={city.slug}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-fade-in"
                >
                  <LocationCard
                    name={city.name}
                    slug={city.slug}
                    region={city.region}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-muted/50 rounded-full mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-xl text-muted-foreground mb-2">
                No cities found matching "{searchTerm}"
              </p>
              <p className="text-sm text-muted-foreground">
                Try a different search term or browse all our service areas
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Area Info */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/60 z-10" />
          <img 
            src={cityLivingRoom} 
            alt="Bay Area home with motorized shades"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-30 z-20">
          <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl space-y-8 relative z-30">
          <div className="inline-block p-5 bg-primary/20 rounded-full backdrop-blur-md animate-bounce-slow mb-4 border-2 border-primary/30 shadow-xl">
            <MapPin className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display drop-shadow-lg">
            Don't see your <span className="gradient-text">city listed?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We serve the entire San Francisco Bay Area. If your city isn't listed above, 
            give us a call and we'll be happy to discuss service in your area.
          </p>
          <a 
            href="tel:+16578951094"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 group"
          >
            <MapPin className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
             (650) 232-9877
          </a>
        </div>
      </section>
    </main>
  );
}
