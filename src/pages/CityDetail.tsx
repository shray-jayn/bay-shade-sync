import { useParams, Navigate } from 'react-router-dom';
import { cities } from '@/data/cities';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Phone, MapPin, Home, Clock, Shield, Star, CheckCircle, Sparkles, Sun, CloudRain, Wind } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import locationHero from '@/assets/location-hero.jpg';
import cityLivingRoom from '@/assets/city-living-room.jpg';
import cityBedroom from '@/assets/city-bedroom.jpg';

export default function CityDetail() {
  const { citySlug } = useParams();
  const { openQuoteForm } = useQuoteForm();
  const productsRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const faqRef = useScrollReveal();

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
      <div className="sticky top-16 z-40 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm font-semibold text-center sm:text-left flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              Planning shades in <span className="gradient-text">{city.name}</span>? 
              <span className="hidden sm:inline"> Get your free quote today.</span>
            </p>
            <Button
              onClick={() => openQuoteForm(`city-sticky-${city.slug}`)}
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 shrink-0"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden min-h-[85vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 z-10" />
          <img 
            src={locationHero} 
            alt={`Motorized shades in ${city.name}`}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border-2 border-primary/20">
          <MapPin className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-bounce-slow backdrop-blur-sm border border-accent/20">
          <Home className="h-6 w-6 text-accent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 text-primary text-sm font-semibold mb-4 backdrop-blur-sm animate-bounce-slow">
              <MapPin className="h-5 w-5 mr-2 animate-pulse" />
              {city.region} • Bay Area
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight animate-fade-in">
              Motorized Blinds in <span className="gradient-text inline-block animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>{city.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {city.description}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span className="font-medium">5-Star Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Local Experts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => openQuoteForm(`city-hero-${city.slug}`)}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 text-lg px-8 py-6 group"
              >
                <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Free Quote
              </Button>
              <a href="tel:+16578951094">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-105 text-lg px-8 py-6 group"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  (657) 895-1094
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context with Images */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Weather context card */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  <Sun className="h-4 w-4 animate-spin-slow" />
                  Perfect for {city.name} Climate
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display">
                  Why Motorized Shading for <span className="gradient-text">{city.name}</span>?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {city.weatherNotes}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <Sun className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">UV Protection</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <Wind className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Energy Efficient</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <CloudRain className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">All Weather</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                  <img 
                    src={cityLivingRoom}
                    alt={`Modern living room with motorized shades in ${city.name}`}
                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Benefits with image */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <img 
                  src={cityBedroom}
                  alt={`Elegant bedroom with motorized shades in ${city.name}`}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold font-display">
                  Transform Your <span className="gradient-text">{city.name}</span> Home
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Home, title: 'Perfect Fit', desc: 'Custom measured for your windows' },
                    { icon: Clock, title: 'Fast Install', desc: '2-4 weeks from measurement' },
                    { icon: Shield, title: 'Warranty', desc: 'Full coverage on all products' },
                    { icon: Star, title: 'Local Service', desc: 'Bay Area based team' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm animate-bounce-slow">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Top Picks for Your Area
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                Recommended for <span className="gradient-text">{city.name}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Popular shading solutions for homes in your area
              </p>
            </div>

            <div ref={productsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {recommendedProducts.slice(0, 3).map((product, index) => (
                <div 
                  key={product.id}
                  className="stagger-item"
                >
                  <ProductCard
                    name={product.name}
                    tagline={product.tagline}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local FAQ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm animate-bounce-slow">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Local Insights
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                Common Questions from <span className="gradient-text">{city.name}</span> Residents
              </h2>
            </div>

            <div ref={faqRef} className="scroll-reveal space-y-4">
              {[
                {
                  q: `Do you serve all neighborhoods in ${city.name}?`,
                  a: `Yes! We provide service throughout ${city.name} and the surrounding ${city.region} area. Call us at (657) 895-1094 to confirm service in your specific neighborhood.`
                },
                {
                  q: `What's the typical timeline for a project in ${city.name}?`,
                  a: `Because we manufacture locally in Belmont, CA, most ${city.name} projects are completed within 2-4 weeks from measurement to installation.`
                },
                {
                  q: 'Is there a charge for the consultation?',
                  a: `No. We provide free in-home consultations and measurements throughout the Bay Area, including ${city.name}.`
                },
                {
                  q: `What makes motorized shades ideal for ${city.name}?`,
                  a: `${city.name}'s unique climate and architecture make motorized shades perfect for energy efficiency, UV protection, and smart home integration.`
                },
                {
                  q: 'Do you offer smart home integration?',
                  a: 'Absolutely! Our motorized shades work seamlessly with Google Home, Amazon Alexa, Apple HomeKit, and other popular smart home systems.'
                }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className="stagger-item p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 group"
                >
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-white/20">
          <Home className="h-6 w-6 text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-bounce-slow backdrop-blur-sm border border-white/20">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-semibold backdrop-blur-sm animate-bounce-slow">
            <Star className="h-4 w-4 fill-white" />
            Transform Your Space Today
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display max-w-4xl mx-auto leading-tight">
            Ready to transform your {city.name} home?
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Schedule your free consultation and discover the perfect motorized shading solution for your space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              onClick={() => openQuoteForm(`city-bottom-${city.slug}`)}
              size="lg"
              variant="secondary"
              className="rounded-xl text-lg px-10 py-7 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 group bg-white text-primary hover:bg-white/90"
            >
              <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Your Free Quote
            </Button>
            <a href="tel:+16578951094">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl text-lg px-10 py-7 border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-105 group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:wiggle" />
                (657) 895-1094
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
