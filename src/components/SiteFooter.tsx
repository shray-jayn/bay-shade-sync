import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-display text-primary">
              Access
            </div>
            <p className="text-sm text-muted-foreground">
              Motorized Blinds & Smart Shading for the Bay Area
            </p>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <address className="not-italic text-muted-foreground">
                2822 San Juan Blvd<br />
                Belmont, CA 94002
              </address>
            </div>
            <a
              href="tel:+16578951094"
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(657) 895-1094</span>
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products#roller-shades" className="text-muted-foreground hover:text-primary transition-colors">
                  Motorized Roller Shades
                </Link>
              </li>
              <li>
                <Link to="/products#dual-shades" className="text-muted-foreground hover:text-primary transition-colors">
                  Dual / Zebra Blinds
                </Link>
              </li>
              <li>
                <Link to="/products#shangri-la" className="text-muted-foreground hover:text-primary transition-colors">
                  Shangri-La & Roman
                </Link>
              </li>
              <li>
                <Link to="/products#honeycomb" className="text-muted-foreground hover:text-primary transition-colors">
                  Honeycomb Shades
                </Link>
              </li>
              <li>
                <Link to="/products#exterior-zip-track" className="text-muted-foreground hover:text-primary transition-colors">
                  Exterior Zip-Track
                </Link>
              </li>
              <li>
                <Link to="/products#awnings" className="text-muted-foreground hover:text-primary transition-colors">
                  Motorized Awnings
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/smart-home" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Home Integration
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#why-access" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Access
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Access Motorized Blinds. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Local Manufacturing</span>
              <span>•</span>
              <span>Expert Installation</span>
              <span>•</span>
              <span>10% Price Match</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
