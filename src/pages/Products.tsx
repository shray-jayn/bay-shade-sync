import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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

export default function Products() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/5 rounded-lg rotate-45 animate-spin-slow" />

        <div className="container mx-auto px-4 text-center max-w-3xl space-y-8 relative z-10">
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 animate-bounce-slow backdrop-blur-sm">
            <Sparkles className="inline h-4 w-4 mr-2 animate-pulse" />
            Premium Shading Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight animate-fade-in">
            Our <span className="gradient-text inline-block animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            From elegant interiors to durable exterior systems, our motorized solutions fit every Bay Area home
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((product, index) => {
        const ProductSection = () => {
          const ref = useScrollReveal();
          
          return (
            <section
              key={product.id}
              id={product.slug}
              className={`relative py-24 overflow-hidden ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
            >
              {/* Decorative background */}
              {index % 2 === 0 ? (
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              ) : (
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
              )}

              <div className="container mx-auto px-4 relative z-10">
                <div ref={ref} className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                  {/* Image */}
                  <div
                    className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 ${
                      index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img 
                      src={productImages[product.id]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
                      <Sparkles className="inline h-4 w-4 mr-1" />
                      Premium
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent animate-pulse">
                        Product #{index + 1}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-display group-hover:text-primary transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-xl text-accent font-semibold">
                        {product.tagline}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    <div className="space-y-6 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-display">Key Features</h3>
                      </div>
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li 
                            key={feature} 
                            className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <span className="w-1 h-6 bg-primary mr-3 rounded-full" />
                        Perfect For
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {product.useCases.map((useCase) => (
                          <span
                            key={useCase}
                            className="px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-sm font-medium border border-border hover:border-primary/30 transition-all hover:scale-105 cursor-default"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <span className="w-1 h-6 bg-accent mr-3 rounded-full" />
                        Available Finishes
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {product.finishes.map((finish) => (
                          <span
                            key={finish}
                            className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-sm text-primary font-semibold border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => openQuoteForm(`product-page-${product.slug}`)}
                      size="lg"
                      className="group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Request Quote for {product.name}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        };
        
        return <ProductSection key={product.id} />;
      })}

      {/* Bottom CTA */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full animate-float" />

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-block p-3 bg-primary/10 rounded-full backdrop-blur-sm animate-bounce-slow mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display animate-fade-in">
            Not sure which option is <span className="gradient-text">right for you?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Let us help you compare options and find the perfect shading solution for your space.
          </p>
          <Button
            onClick={() => openQuoteForm('products-bottom')}
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 text-lg px-10 py-7 animate-fade-in-scale relative overflow-hidden"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="relative z-10 flex items-center">
              Compare Options for Your Space
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </section>
    </main>
  );
}
