import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { FAQSection } from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Shield, Zap, Award, MapPin, Sparkles, Phone } from 'lucide-react';
import { products } from '@/data/products';
import rollerShadesImg from '@/assets/product-roller-shades.jpg';
import dualShadesImg from '@/assets/product-dual-shades.jpg';
import shangriLaImg from '@/assets/product-shangri-la.jpg';
import honeycombImg from '@/assets/product-honeycomb.jpg';
import zipTrackImg from '@/assets/product-zip-track.jpg';
import awningsImg from '@/assets/product-awnings.jpg';

const productImages: Record<string, string> = {
  'roller-shades': rollerShadesImg,
  'dual-shades': dualShadesImg,
  'shangri-la': shangriLaImg,
  'honeycomb': honeycombImg,
  'exterior-zip-track': zipTrackImg,
  'awnings': awningsImg,
};

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
  {
    quote: "We love our honeycomb shades! They've noticeably reduced our energy bills and the motorization makes them so convenient. Great investment.",
    author: "Michael T.",
    location: "San Jose, CA"
  },
  {
    quote: "The team was professional from start to finish. Our dual shades look stunning and the light control is exactly what we needed for our home office.",
    author: "Amanda R.",
    location: "Oakland, CA"
  },
  {
    quote: "Being able to control all our shades from our phone while we're away is fantastic. The local service and warranty support give us confidence.",
    author: "Robert & Lisa Chen",
    location: "San Francisco, CA"
  },
];

export default function Home() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 animate-bounce-slow">
              Discover Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Featured <span className="gradient-text">Products</span>
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
                imageUrl={productImages[product.id]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Access */}
      <section id="why-access" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Why Choose <span className="gradient-text">Access</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Local expertise, premium quality, and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAccessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group text-center space-y-4 p-8 rounded-lg bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Testimonials */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from Bay Area homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 space-y-4 animate-fade-in transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl text-primary/20 font-serif leading-none">"</div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA Band */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-gradient-shift" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
          }} />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-spin-slow" />

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm animate-pulse mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display animate-fade-in">
            Ready for your custom quote?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Let's discuss your project and create the perfect shading solution for your Bay Area home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={() => openQuoteForm('cta-band')}
              size="lg"
              variant="secondary"
              className="group rounded-lg text-lg px-10 py-7 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get Your Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
            <a href="tel:+16578951094">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm rounded-lg text-lg px-10 py-7 hover:scale-110 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2 animate-wiggle" />
                Call (657) 895-1094
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
