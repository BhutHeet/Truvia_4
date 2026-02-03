import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-secondary-foreground">TP</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Truvia Polyplast</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
              "TRUVIA POLYPLAST" have gained success in the market by manufacturing and wholesaling a remarkable gamut of P.T.M.T Taps, Plastic Valve, Plastic & Shower, Connection Pipe & Many More Products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Categories</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/products/ptmt-taps" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  PTMT Taps
                </Link>
              </li>
              <li>
                <Link to="/products/pprc-taps" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  PPRC Taps
                </Link>
              </li>
              <li>
                <Link to="/products/shower-faucets" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Shower & Faucets
                </Link>
              </li>
              <li>
                <Link to="/products/pipes-ball-cock" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Pipes & Ball Cock
                </Link>
              </li>
              <li>
                <Link to="/products/ball-valve" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  Ball Valve
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+916353329493" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                +91-6353329493
              </a>
              <a href="mailto:truviapolyplast@gmail.com" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-white transition-colors text-sm break-all">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                truviapolyplast@gmail.com
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <p className="text-center text-primary-foreground/70 text-xs sm:text-sm">
            © {new Date().getFullYear()} Truvia Polyplast. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
