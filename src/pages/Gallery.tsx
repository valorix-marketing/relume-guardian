import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";

// Import gallery images
import gymInterior1 from "@/assets/gym-interior-1.jpg";
import gymInterior2 from "@/assets/gym-interior-2.jpg";
import gymGroup1 from "@/assets/gym-group-1.jpg";
import gymGroup2 from "@/assets/gym-group-2.jpg";
import gymGroup3 from "@/assets/gym-group-3.jpg";
import gymGroup4 from "@/assets/gym-group-4.jpg";
import gymGroup5 from "@/assets/gym-group-5.jpg";
import gymGroup6 from "@/assets/gym-group-6.jpg";

const galleryImages = [
  { src: gymInterior1, alt: "Joker Gym Interior - Modern Equipment" },
  { src: gymInterior2, alt: "Joker Gym Equipment Area" },
  { src: gymGroup1, alt: "Joker Gym Members Training" },
  { src: gymGroup2, alt: "Joker Gym Team Spirit" },
  { src: gymGroup3, alt: "Joker Gym Workout Session" },
  { src: gymGroup4, alt: "Joker Gym Group Training" },
  { src: gymGroup5, alt: "Joker Gym Fitness Area" },
  { src: gymGroup6, alt: "Joker Gym Atmosphere" },
];

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Disable right-click on images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (lightboxIndex + 1) % galleryImages.length;
        setLightboxIndex(nextIndex);
        setLightboxImage(galleryImages[nextIndex].src);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
        setLightboxIndex(prevIndex);
        setLightboxImage(galleryImages[prevIndex].src);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex]);

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxIndex(index);
  };

  const navigateLightbox = (direction: "prev" | "next", e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = direction === "next" 
      ? (lightboxIndex + 1) % galleryImages.length
      : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex].src);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4 animate-fade-in">
              NOTRE ESPACE
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-foreground mb-6">
              Galerie <span className="text-gradient">Joker Gym</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Découvrez notre salle, nos équipements modernes et l'énergie unique qui anime notre communauté.
            </p>
          </div>

          {/* Masonry-style Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(image.src, index)}
                style={{ aspectRatio: index === 0 || index === 5 ? "1/1" : "4/3" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none pointer-events-none"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-primary/90 p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Image number indicator */}
                <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-bold text-foreground">{index + 1}/{galleryImages.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-card via-background to-card">
        <div className="container-custom text-center">
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à <span className="text-gradient">Nous Rejoindre</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ces images vous inspirent? Venez vivre l'expérience Joker Gym en personne et transformez votre vie!
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary font-heading font-bold text-lg px-8 py-6 hover-glow"
              >
                Commencer Maintenant
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-3 bg-secondary/80 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
            onClick={(e) => navigateLightbox("prev", e)}
          >
            <ArrowRight className="rotate-180" size={24} />
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
            onClick={(e) => navigateLightbox("next", e)}
          >
            <ArrowRight size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full z-10">
            <span className="text-foreground font-bold">{lightboxIndex + 1} / {galleryImages.length}</span>
          </div>

          {/* Main image */}
          <img
            src={lightboxImage}
            alt={galleryImages[lightboxIndex]?.alt || "Gallery Image"}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none pointer-events-none animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
