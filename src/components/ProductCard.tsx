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
      <Card className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl rounded-lg bg-card/50 backdrop-blur-sm h-full">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
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
          
          <CardContent className="p-6 space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{name}</h3>
              <Sparkles className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <p className="text-sm text-accent font-medium">{tagline}</p>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
            <Button
              onClick={() => openQuoteForm(`product-${name}`)}
              variant="ghost"
              className="w-full justify-between group/btn hover:bg-primary/10 rounded-lg mt-4 border border-transparent hover:border-primary/20 transition-all"
            >
              <span className="group-hover/btn:text-primary transition-colors">Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 group-hover/btn:text-primary transition-all" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
