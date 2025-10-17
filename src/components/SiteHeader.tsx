import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useQuoteForm } from '@/contexts/QuoteFormContext';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const SiteHeader = () => {
  const { openQuoteForm } = useQuoteForm();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Smart Home', path: '/smart-home' },
    { label: 'Locations', path: '/locations' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold font-display text-primary">
            Access
          </div>
          <div className="text-sm font-medium text-muted-foreground hidden sm:block">
            Motorized Blinds
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                isActive(link.path)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+16578951094"
            className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(657) 895-1094</span>
          </a>
          <Button
            onClick={() => openQuoteForm('header')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <a
                href="tel:+16578951094"
                className="flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium bg-muted rounded-lg"
              >
                <Phone className="h-4 w-4" />
                <span>(657) 895-1094</span>
              </a>
              <Button
                onClick={() => {
                  openQuoteForm('header-mobile');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              >
                Get Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
