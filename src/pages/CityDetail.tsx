import { useParams, Navigate } from 'react-router-dom';
import { cities } from '@/data/cities';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Phone, MapPin } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function CityDetail() {
  const { citySlug } = useParams();
  const { openQuoteForm } = useQuoteForm();

  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return <Navigate to="/locations" replace />;
  }

  const recommendedProducts = products.filter((product) =>
    city.recommendedProducts.some((rec) => product.name.includes(rec))
  );

  return (
    <main className="min-h-screen">
      {/* Sticky CTA Bar */}
      <div className="sticky top-16 z-40 bg-accent/10 border-b border-accent/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm font-medium text-center sm:text-left">
              Planning shades in <span className="text-accent">{city.name}</span>? 
              <span className="hidden sm:inline"> Get your free quote today.</span>
            </p>
            <Button
              onClick={() => openQuoteForm(`city-sticky-${city.slug}`)}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shrink-0"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              {city.region}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display">
              Motorized Blinds in {city.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => openQuoteForm(`city-hero-${city.slug}`)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Get Free Quote
              </Button>
              <a href="tel:+16578951094">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (657) 895-1094
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-lg bg-card border border-border space-y-4">
              <h2 className="text-2xl font-bold font-display">
                Why Motorized Shading for {city.name}?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {city.weatherNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl font-bold font-display">
                Recommended for {city.name}
              </h2>
              <p className="text-lg text-muted-foreground">
                Popular shading solutions for homes in your area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {recommendedProducts.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  tagline={product.tagline}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              Common Questions from {city.name} Residents
            </h2>

            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">
                  Do you serve all neighborhoods in {city.name}?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We provide service throughout {city.name} and the surrounding {city.region} area. 
                  Call us at (657) 895-1094 to confirm service in your specific neighborhood.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">
                  What's the typical timeline for a project in {city.name}?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Because we manufacture locally in Belmont, CA, most {city.name} projects are completed 
                  within 2-4 weeks from measurement to installation.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">
                  Is there a charge for the consultation?
                </h3>
                <p className="text-sm text-muted-foreground">
                  No. We provide free in-home consultations and measurements throughout the Bay Area, 
                  including {city.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Ready to transform your {city.name} home?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Schedule your free consultation and discover the perfect motorized shading solution.
          </p>
          <Button
            onClick={() => openQuoteForm(`city-bottom-${city.slug}`)}
            size="lg"
            variant="secondary"
            className="rounded-lg text-lg px-8 py-6"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}
