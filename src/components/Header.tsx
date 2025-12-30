import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/joker-gym-logo.jpg";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À Propos", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Galerie", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Joker Gym Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-heading text-xl font-bold text-gradient hidden sm:block">
              JOKER GYM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="gradient-primary hover-glow font-heading font-bold">
                Rejoindre
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden glass border-t border-border animate-fade-in">
          <div className="container-custom py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full gradient-primary font-heading font-bold">
                Rejoindre
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
