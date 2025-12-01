import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">DC Art & Tattoo Studio</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Padmanabhanagar's premier tattoo and art studio with a perfect 5.0★ rating. Where creativity meets skin.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dctattoocafe47?igsh=MThia3g4ZHUwdTQwMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/shorts/_t5o_YEWSSA?si=i1ApQ5vIjULj5UvB" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>
              <a href="mailto:dctattoocafe47@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Custom Tattoo Design</li>
              <li>Piercing Services</li>
              <li>Pencil Sketches</li>
              <li>Paintings & Artwork</li>
              <li>Dream Catcher Art</li>
              <li>Mixed Media</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                <span>
                  # 8, 1st Floor, CA-8, 60 Feet Road, 18th Main Rd, next to Royal Mart, Padmanabhanagar, Bengaluru, Karnataka 560070
                </span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:07406008294" className="hover:text-gold transition-colors">
                  074060 08294
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-gold" />
                <span>Open Daily • Closes 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DC Art & Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;