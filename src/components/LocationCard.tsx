import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useQuoteForm } from '@/contexts/QuoteFormContext';

interface LocationCardProps {
  name: string;
  slug: string;
  region: string;
}

export const LocationCard = ({ name, slug, region }: LocationCardProps) => {
  const navigate = useNavigate();
  const { openQuoteForm } = useQuoteForm();

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/locations/${slug}`);
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/locations/${slug}`);
    openQuoteForm(`location-${slug}`);
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card
      onClick={handleCardClick}
      className="group cursor-pointer border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden relative bg-gradient-to-br from-card to-card/50 hover:-translate-y-2"
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-6 space-y-4 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary group-hover:scale-110 transition-transform" />
              <span>{region}</span>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        
        {/* Service badge */}
        <div className="py-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3 animate-pulse" />
            Full Service Area
          </div>
        </div>
        
        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-foreground bg-muted/50 py-2 rounded-lg">
            <Phone className="h-4 w-4 text-primary animate-pulse" />
            <span> (650) 232-9877</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <a href="tel:+16578951094" onClick={handleCall}>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-3.5 w-3.5 mr-1" />
                Call
              </Button>
            </a>
            <Button
              onClick={handleLearnMore}
              size="sm"
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
