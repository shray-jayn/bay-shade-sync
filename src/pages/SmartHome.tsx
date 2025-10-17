import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Smartphone, Home, Zap, Sun, Moon, Wind, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const platforms = [
  'Amazon Alexa',
  'Google Home',
  'Apple HomeKit',
  'Control4',
  'Crestron',
  'Hubitat',
  'Samsung SmartThings',
];

const motorBrands = [
  'Somfy',
  'Lutron PowerView',
  'Hunter Douglas',
  'Sonesse',
  'RF Motors',
];

const sceneExamples = [
  {
    icon: Sun,
    name: 'Morning Warmth',
    description: 'Open east-facing shades at sunrise to welcome natural light',
    color: 'text-amber-500',
  },
  {
    icon: Smartphone,
    name: 'Work Mode',
    description: 'Close shades to reduce screen glare during video calls',
    color: 'text-blue-500',
  },
  {
    icon: Moon,
    name: 'Movie Night',
    description: 'Lower all shades and dim lights with one command',
    color: 'text-indigo-500',
  },
  {
    icon: Wind,
    name: 'Deck Evening',
    description: 'Lower patio zip-tracks, adjust lighting, and play music',
    color: 'text-teal-500',
  },
];

export default function SmartHome() {
  const { openQuoteForm } = useQuoteForm();
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden min-h-[75vh] flex items-center">
        {/* Animated mesh background */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center animate-float backdrop-blur-sm border-2 border-primary/20">
          <Smartphone className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center animate-float backdrop-blur-sm border-2 border-accent/20" style={{ animationDelay: '1s' }}>
          <Home className="h-10 w-10 text-accent" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-gradient-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center animate-bounce-slow backdrop-blur-sm border-2 border-primary/20">
          <Zap className="h-7 w-7 text-primary" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm mb-6 animate-pulse-glow border-2 border-primary/30 shadow-2xl">
            <Home className="h-14 w-14 text-primary animate-pulse" />
          </div>
          
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 rounded-full text-sm font-semibold text-primary mb-4 animate-bounce-slow backdrop-blur-sm">
            <Sparkles className="inline h-4 w-4 mr-2 animate-pulse" />
            Voice Control • Automation • Remote Access
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-tight animate-fade-in">
            Smart Home <span className="gradient-text inline-block animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Integration</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Seamlessly integrate your motorized shading with Alexa, Google, HomeKit, Control4, and more
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 backdrop-blur-sm shadow-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access Motorized Blinds specializes in complete smart home integration, ensuring your shading systems work 
              seamlessly with your existing home automation setup. Whether you're using voice assistants, control panels, 
              or mobile apps, we create a unified experience that puts you in control.
            </p>
          </div>
        </div>
      </section>

      {/* Motor Brands */}
      <section ref={ref1} className="scroll-reveal py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-accent backdrop-blur-sm animate-bounce-slow">
              <Zap className="h-4 w-4 animate-pulse" />
              Trusted Partners
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-display">
              Premium <span className="gradient-text">Motor Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We work with the industry's leading motorization brands
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {motorBrands.map((brand, index) => (
                <div
                  key={brand}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary transition-all text-center hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 duration-300 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Zap className="h-7 w-7 text-primary" />
                    </div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">{brand}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section ref={ref2} className="scroll-reveal py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm animate-bounce-slow">
              <Smartphone className="h-4 w-4 animate-pulse" />
              Works With Your Favorite Platforms
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-display">
              Compatible <span className="gradient-text">Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with the smart home system you already use
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={platform}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary transition-all text-center flex items-center justify-center hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 duration-300 relative overflow-hidden min-h-[120px]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold relative z-10 group-hover:text-primary transition-colors">{platform}</span>
                  <Sparkles className="absolute top-3 right-3 h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scene Examples */}
      <section ref={ref3} className="scroll-reveal py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-accent backdrop-blur-sm animate-bounce-slow">
              <Sun className="h-4 w-4 animate-pulse" />
              Automation Examples
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-display">
              Smart <span className="gradient-text">Scene Examples</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Create automated routines that adapt to your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {sceneExamples.map((scene, index) => {
              const Icon = scene.icon;
              return (
                <div
                  key={scene.name}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-primary/20 space-y-6 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 duration-500 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 border-2 border-primary/20 group-hover:scale-110 transition-all backdrop-blur-sm">
                      <Icon className={`h-10 w-10 ${scene.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors mb-3">{scene.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{scene.description}</p>
                    </div>
                    <div className="pt-4 border-t border-primary/20 flex items-center text-xs font-semibold text-muted-foreground">
                      <Sparkles className="h-4 w-4 mr-2 text-primary animate-pulse" />
                      <span>Fully Customizable</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={ref4} className="scroll-reveal py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm animate-bounce-slow">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Advanced Capabilities
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-display">
              Powerful <span className="gradient-text">Features</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: 'Voice Control', description: '"Alexa, close the living room shades" — hands-free control throughout your home.', color: 'from-yellow-500/20' },
                { icon: Smartphone, title: 'Remote Access', description: 'Control your shades from anywhere using your smartphone or tablet.', color: 'from-blue-500/20' },
                { icon: Sun, title: 'Automatic Scheduling', description: 'Program shades to open and close based on sunrise, sunset, or your daily routine.', color: 'from-orange-500/20' },
                { icon: Home, title: 'Whole-Home Scenes', description: 'Coordinate shades with lighting, HVAC, and entertainment systems.', color: 'from-purple-500/20' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 space-y-6 transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} to-transparent border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-gradient-shift" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-2xl rotate-45 animate-spin-slow" />

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm animate-pulse mb-4">
            <Home className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display animate-fade-in">
            Ready to upgrade your smart home?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Schedule a consultation to discuss your smart home integration and discover what's possible.
          </p>
          <Button
            onClick={() => openQuoteForm('smart-home-cta')}
            size="lg"
            variant="secondary"
            className="group rounded-lg text-lg px-10 py-7 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-fade-in-scale relative overflow-hidden"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="relative z-10 flex items-center">
              Schedule Smart Home Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>
        </div>
      </section>
    </main>
  );
}
