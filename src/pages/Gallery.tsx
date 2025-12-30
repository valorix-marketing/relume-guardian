import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";

// Import all gallery images
import gymInterior1 from "@/assets/gym-interior-1.jpg";
import gymInterior2 from "@/assets/gym-interior-2.jpg";
import gymGroup1 from "@/assets/gym-group-1.jpg";
import gymGroup2 from "@/assets/gym-group-2.jpg";
import gymGroup3 from "@/assets/gym-group-3.jpg";
import gymGroup4 from "@/assets/gym-group-4.jpg";
import gymGroup5 from "@/assets/gym-group-5.jpg";
import gymGroup6 from "@/assets/gym-group-6.jpg";
import gymClass from "@/assets/gym-class.jpg";

const galleryImages = [
  { src: gymInterior1, alt: "Joker Gym Interior", category: "Équipements" },
  { src: gymInterior2, alt: "Joker Gym Equipment", category: "Équipements" },
  { src: gymGroup1, alt: "Joker Gym Community", category: "Communauté" },
  { src: gymGroup2, alt: "Joker Gym Members", category: "Communauté" },
  { src: gymGroup3, alt: "Joker Gym Team", category: "Communauté" },
  { src: gymGroup4, alt: "Joker Gym Group Photo", category: "Communauté" },
  { src: gymGroup5, alt: "Joker Gym Training", category: "Entraînement" },
  { src: gymGroup6, alt: "Joker Gym Session", category: "Entraînement" },
  { src: gymClass, alt: "Joker Gym Class", category: "Classes" },
];

const categories = ["Tous", "Équipements", "Communauté", "Entraînement", "Classes"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
              Notre <span className="text-gradient">Galerie</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez l'atmosphère unique de Joker Gym à travers nos photos. 
              Équipements modernes, communauté dynamique et entraînements intenses.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-heading font-bold ${
                  selectedCategory === category
                    ? "gradient-primary"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer hover-lift"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Envie de Nous Rejoindre?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ces images vous inspirent? Venez vivre l'expérience Joker Gym en personne!
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="gradient-primary font-heading font-bold text-lg px-8 py-6 hover-glow"
            >
              Nous Contacter
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
