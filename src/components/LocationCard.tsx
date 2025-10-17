import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone, MapPin } from 'lucide-react';
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
      className="group cursor-pointer border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-lg"
    >
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            <span>{region}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border space-y-2">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>(657) 895-1094</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <a href="tel:+16578951094" onClick={handleCall}>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-lg hover:bg-primary hover:text-primary-foreground"
              >
                Call
              </Button>
            </a>
            <Button
              onClick={handleLearnMore}
              size="sm"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
