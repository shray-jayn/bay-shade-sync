import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  imageUrl?: string;
}

export const ProductCard = ({ name, tagline, description, imageUrl }: ProductCardProps) => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-lg">
      <div className="aspect-[4/3] bg-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-center p-8">
              <div className="text-4xl font-bold font-display text-primary/20">
                {name.substring(0, 2)}
              </div>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-bold font-display">{name}</h3>
        <p className="text-sm text-accent font-medium">{tagline}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        <Button
          onClick={() => openQuoteForm(`product-${name}`)}
          variant="ghost"
          className="w-full justify-between group/btn hover:bg-primary/5 rounded-lg mt-4"
        >
          Learn More
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
