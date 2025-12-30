import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/gym-interior-1.jpg";
import groupImage from "@/assets/gym-group-2.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Équipements Modernes",
    description:
      "Machines de pointe, poids libres, et espaces d'entraînement fonctionnel pour tous les niveaux.",
  },
  {
    icon: Users,
    title: "Entraîneurs Experts",
    description:
      "Coachs certifiés et passionnés pour vous guider vers vos objectifs fitness.",
  },
  {
    icon: Calendar,
    title: "Classes Variées",
    description:
      "Tae Bo, Dance, Karate, Cardio Boxing et plus encore - trouvez votre passion.",
  },
];

const benefits = [
  "Accès aux équipements 7 jours sur 7",
  "Sessions 100% Femmes disponibles",
  "Tarifs étudiants avantageux",
  "Ambiance motivante et inclusive",
  "Emplacement pratique à Sidi Salem",
  "Pack Couple pour économiser",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up">
            <span className="text-gradient">Libérez Votre</span>
            <br />
            <span className="text-foreground">Force Intérieure</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Rejoignez Joker Gym - Le centre de fitness premier de Bizerte, Tunisie. 
            Équipements modernes, classes variées et communauté motivante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary font-heading font-bold text-lg px-8 py-6 hover-glow animate-pulse-glow"
              >
                Rejoindre Maintenant
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/classes">
              <Button
                size="lg"
                variant="outline"
                className="font-heading font-bold text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Voir les Classes
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce Que Nous Offrons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour atteindre vos objectifs fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-secondary border border-border rounded-xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={groupImage}
                alt="Joker Gym Community"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl font-heading font-bold text-center hidden md:block">
                <div className="text-4xl">100+</div>
                <div className="text-sm">Membres Actifs</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Pourquoi Choisir{" "}
                <span className="text-gradient">Joker Gym</span>?
              </h2>
              <p className="text-muted-foreground text-lg">
                Chez Joker Gym, nous croyons que le fitness est pour tout le monde. 
                Notre environnement inclusif et nos équipements de qualité vous 
                permettent d'atteindre vos objectifs, quel que soit votre niveau.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about">
                <Button
                  size="lg"
                  className="gradient-primary font-heading font-bold mt-4 hover-glow"
                >
                  En Savoir Plus
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à Commencer?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Faites le premier pas vers une vie plus saine. 
              Contactez-nous pour plus d'informations sur nos abonnements.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-heading font-bold text-lg px-8 py-6"
              >
                Nous Contacter
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
