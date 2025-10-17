import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { Check } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground">
            From elegant interiors to durable exterior systems, our motorized solutions fit every Bay Area home
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.slug}
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div
                className={`aspect-[4/3] rounded-lg overflow-hidden ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <img 
                  src={productImages[product.id]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    {product.name}
                  </h2>
                  <p className="text-lg text-accent font-medium">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Perfect For</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground border border-border"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Available Finishes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary font-medium"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => openQuoteForm(`product-page-${product.slug}`)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                >
                  Request Quote for {product.name}
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold font-display">
            Not sure which option is right for you?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let us help you compare options and find the perfect shading solution for your space.
          </p>
          <Button
            onClick={() => openQuoteForm('products-bottom')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
          >
            Compare Options for Your Space
          </Button>
        </div>
      </section>
    </main>
  );
}
