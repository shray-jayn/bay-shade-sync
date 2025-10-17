import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Smartphone, Home, Zap, Sun, Moon, Wind } from 'lucide-react';

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

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-primary/10 mb-4">
            <Home className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Smart Home Integration
          </h1>
          <p className="text-lg text-muted-foreground">
            Seamlessly integrate your motorized shading with Alexa, Google, HomeKit, Control4, and more
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Access Motorized Blinds specializes in complete smart home integration, ensuring your shading systems work 
              seamlessly with your existing home automation setup. Whether you're using voice assistants, control panels, 
              or mobile apps, we create a unified experience that puts you in control.
            </p>
          </div>
        </div>
      </section>

      {/* Motor Brands */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Premium Motor Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with the industry's leading motorization brands
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {motorBrands.map((brand) => (
                <div
                  key={brand}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className="font-semibold text-sm">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Compatible Platforms
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with the smart home system you already use
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center flex items-center justify-center"
                >
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scene Examples */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Smart Scene Examples
            </h2>
            <p className="text-lg text-muted-foreground">
              Create automated routines that adapt to your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sceneExamples.map((scene) => {
              const Icon = scene.icon;
              return (
                <div
                  key={scene.name}
                  className="p-6 rounded-lg bg-card border border-border space-y-4 hover:border-primary/50 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted ${scene.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display">{scene.name}</h3>
                  <p className="text-sm text-muted-foreground">{scene.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Voice Control</h3>
                <p className="text-muted-foreground">
                  "Alexa, close the living room shades" — hands-free control throughout your home.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Remote Access</h3>
                <p className="text-muted-foreground">
                  Control your shades from anywhere using your smartphone or tablet.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Automatic Scheduling</h3>
                <p className="text-muted-foreground">
                  Program shades to open and close based on sunrise, sunset, or your daily routine.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Whole-Home Scenes</h3>
                <p className="text-muted-foreground">
                  Coordinate shades with lighting, HVAC, and entertainment systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Ready to upgrade your smart home?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Schedule a consultation to discuss your smart home integration and discover what's possible.
          </p>
          <Button
            onClick={() => openQuoteForm('smart-home-cta')}
            size="lg"
            variant="secondary"
            className="rounded-lg text-lg px-8 py-6"
          >
            Schedule Smart Home Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}
