import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { FAQSection } from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Shield, Zap, Award, MapPin } from 'lucide-react';
import { products } from '@/data/products';

const whyAccessFeatures = [
  {
    icon: MapPin,
    title: 'Bay Area Built',
    description: 'Locally manufactured right here in Belmont, CA with rapid turnaround times.',
  },
  {
    icon: Shield,
    title: 'Expert Installers',
    description: 'Certified technicians with years of experience in motorized shading systems.',
  },
  {
    icon: Zap,
    title: 'Quiet Motors',
    description: 'Premium Somfy and Lutron motors for whisper-quiet, reliable operation.',
  },
  {
    icon: Award,
    title: 'Price-Match Pledge',
    description: "We'll beat any competitor's quote by 10% — guaranteed.",
  },
];

const testimonials = [
  {
    quote: "The zip-track blinds transformed our patio into a year-round space. The installation was flawless and the smart home integration works perfectly.",
    author: "Sarah M.",
    location: "Belmont, CA"
  },
  {
    quote: "Access handled our whole-home motorization project with incredible professionalism. The shades are beautiful and the Alexa integration is seamless.",
    author: "David K.",
    location: "Palo Alto, CA"
  },
  {
    quote: "Finally, outdoor blinds that can handle Mill Valley winds! The automatic sensors give us peace of mind, and the quality is outstanding.",
    author: "Jennifer L.",
    location: "Mill Valley, CA"
  },
];

export default function Home() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              From elegant interiors to weather-resistant exteriors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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

      {/* Why Access */}
      <section id="why-access" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Why Choose Access
            </h2>
            <p className="text-lg text-muted-foreground">
              Local expertise, premium quality, and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAccessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from Bay Area homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-card border border-border space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl text-primary/20 font-serif">"</div>
                <p className="text-muted-foreground italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA Band */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Ready for your custom quote?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create the perfect shading solution for your Bay Area home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => openQuoteForm('cta-band')}
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8 py-6"
            >
              Get Your Free Quote
            </Button>
            <a href="tel:+16578951094">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-lg text-lg px-8 py-6"
              >
                Call (657) 895-1094
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
