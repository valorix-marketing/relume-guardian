import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Heart, Trophy, Users, ArrowRight, Instagram, Facebook } from "lucide-react";
import Layout from "@/components/Layout";
import gymImage from "@/assets/gym-interior-2.jpg";
import groupImage from "@/assets/gym-group-3.jpg";

const values = [
  {
    icon: Heart,
    title: "Inclusivité",
    description:
      "Le fitness est pour tous. Nous offrons des sessions 100% femmes et des programmes adaptés à tous les niveaux et âges.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "Nous restons à la pointe avec les dernières tendances: HIIT, cardio-dance, arts martiaux et plus encore.",
  },
  {
    icon: Trophy,
    title: "Résultats",
    description:
      "Nos programmes sont conçus pour offrir des améliorations mesurables en force, endurance et bien-être général.",
  },
  {
    icon: Users,
    title: "Communauté",
    description:
      "Plus qu'une salle de sport, nous sommes une famille. Soutenez et soyez soutenus dans votre parcours fitness.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl font-black">
                Découvrez{" "}
                <span className="text-gradient">Joker Gym</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Joker Gym est un centre de fitness moderne situé au cœur de Bizerte, 
                Tunisie, sur la Route Sidi Salem. Nous nous consacrons à aider nos 
                membres à atteindre leurs objectifs de santé et de bien-être grâce 
                à un entraînement personnalisé, un soutien communautaire dynamique 
                et des équipements de classe mondiale.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Que vous soyez un athlète chevronné cherchant à repousser vos 
                limites ou un débutant faisant vos premiers pas vers un mode de 
                vie plus sain, Joker Gym offre un espace inclusif où chacun peut 
                s'épanouir.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Notre installation dispose de vastes zones d'entraînement, de 
                vestiaires modernes et d'un salon accueillant pour la détente 
                après l'entraînement. Situé idéalement à Bizerte, nous sommes 
                plus qu'une simple salle de sport – nous sommes un centre 
                communautaire pour les passionnés de fitness à travers la Tunisie.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={gymImage}
                alt="Joker Gym Interior"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident tout ce que nous faisons chez Joker Gym
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-secondary border border-border rounded-xl p-8 flex gap-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <value.icon size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={groupImage}
                alt="Joker Gym Community"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Rejoignez Notre{" "}
                <span className="text-gradient">Communauté</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Suivez-nous sur les réseaux sociaux pour des mises à jour 
                quotidiennes, des conseils d'entraînement, des photos de membres 
                et des annonces d'événements spéciaux.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sur Instagram @official.jokergym, nous partageons des vidéos 
                d'entraînement, des conseils nutritionnels et des aperçus des 
                coulisses. Notre page Facebook The JOKER GYM accueille des 
                sessions Q&A en direct avec les entraîneurs et des annonces 
                d'événements.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/official.jokergym/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="gradient-primary font-heading font-bold hover-glow"
                  >
                    <Instagram className="mr-2" />
                    Instagram
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-heading font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Facebook className="mr-2" />
                    Facebook
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à Transformer Votre Vie?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Découvrez nos classes et trouvez celle qui vous convient le mieux.
          </p>
          <Link to="/classes">
            <Button
              size="lg"
              className="gradient-primary font-heading font-bold text-lg px-8 py-6 hover-glow"
            >
              Voir les Classes
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
