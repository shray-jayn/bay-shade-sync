import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  imageUrl?: string;
}

export const ProductCard = ({ name, tagline, description, imageUrl }: ProductCardProps) => {
  const { openQuoteForm } = useQuoteForm();
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="scroll-reveal">
      <Card className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl bg-gradient-to-br from-card via-primary/5 to-accent/5 h-full hover:-translate-y-2">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="aspect-[4/3] bg-muted overflow-hidden relative">
            <img
              src={imageUrl || ''}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
            />
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
          
          <CardContent className="p-6 space-y-3 bg-gradient-to-b from-transparent to-card/80 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{name}</h3>
              <Sparkles className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <p className="text-sm text-primary font-semibold">{tagline}</p>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
            <Button
              onClick={() => openQuoteForm(`product-${name}`)}
              className="w-full justify-between group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-xl mt-4 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-primary-foreground">Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-all" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
