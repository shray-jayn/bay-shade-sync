import { Button } from './ui/button';
import { Phone, CheckCircle } from 'lucide-react';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import heroImage from '@/assets/hero-home.jpg';

export const Hero = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Bay Area home with motorized blinds" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Animated sunlight sweep */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-[1]">
        <div
          className="absolute inset-y-0 w-1/3 animate-sunlight-sweep"
          style={{
            background: 'var(--gradient-sunlight)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Smart Motorized Blinds & Shading for{' '}
              <span className="text-primary">Bay Area Homes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom-built interior and exterior solutions — integrated with your smart home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-scale">
            <Button
              onClick={() => openQuoteForm('hero')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-lg px-8 py-6"
            >
              Get a Free Quote
            </Button>
            <a href="tel:+16578951094">
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg text-lg px-8 py-6"
              >
                <Phone className="h-5 w-5 mr-2" />
                (657) 895-1094
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm animate-slide-in-right">
            {[
              'Local Manufacturing',
              'Smart Integration',
              '10% Price Match',
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
