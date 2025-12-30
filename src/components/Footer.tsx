import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/joker-gym-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Joker Gym Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <span className="font-heading text-xl font-bold text-gradient">
                JOKER GYM
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Libérez votre force intérieure à Joker Gym - Le centre de fitness 
              premier de Bizerte, Tunisie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">
                Classes
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Galerie
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=sidi+salem,+Bizerte,+Tunisia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Route Sidi Salem, Bizerte 7000, Tunisia</span>
              </a>
              <a
                href="tel:+21623401611"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+216 23 401 611</span>
              </a>
              <a
                href="mailto:thejokergym21@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>thejokergym21@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-foreground">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/official.jokergym/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              @official.jokergym
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Joker Gym – Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
