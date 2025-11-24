import { Button } from './ui/button';
import { Phone, CheckCircle, Sparkles } from 'lucide-react';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import heroImage from '@/assets/hero-home.jpg';

export const Hero = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32 min-h-[90vh] flex items-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 parallax">
          <img 
            src={heroImage} 
            alt="Modern Bay Area home with motorized blinds" 
            className="w-full h-[110%] object-cover scale-110"
            style={{ transform: 'translateY(var(--scroll-offset, 0))' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Animated sunlight sweep */}
      <div className="absolute inset-0 overflow-hidden opacity-30 z-[1]">
        <div
          className="absolute inset-y-0 w-1/2 animate-sunlight-sweep"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.3) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-scale inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Bay Area's Premier Motorized Shading</span>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
              Smart Motorized Blinds & Shading for{' '}
              <span className="gradient-text inline-block animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                Bay Area Homes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Custom-built interior and exterior solutions — seamlessly integrated with your smart home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={() => openQuoteForm('hero')}
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-lg px-10 py-7 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get a Free Quote
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
            </Button>
            <a href="tel:+16578951094">
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg text-lg px-10 py-7 border-2 hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-background/50"
              >
                <Phone className="h-5 w-5 mr-2 animate-wiggle" />
                 (650) 232-9877
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: CheckCircle, text: 'Local Manufacturing' },
              { icon: CheckCircle, text: 'Smart Integration' },
              { icon: CheckCircle, text: '10% Price Match' },
            ].map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center space-x-2 text-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <badge.icon className="h-5 w-5 text-primary animate-pulse" />
                <span className="font-medium">{badge.text}</span>
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
