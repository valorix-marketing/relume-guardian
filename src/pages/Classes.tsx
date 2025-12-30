import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap, Heart, Swords, Music } from "lucide-react";
import Layout from "@/components/Layout";
import classImage from "@/assets/gym-class.jpg";

const schedule = [
  {
    day: "Lundi",
    classes: [
      { time: "18h-19h", name: "100% Femmes", icon: Heart },
      { time: "19h-20h", name: "Tae Bo", icon: Zap },
    ],
  },
  {
    day: "Mardi",
    classes: [
      { time: "18h-19h", name: "Step F", icon: Music },
      { time: "19h-20h", name: "Step F", icon: Music },
    ],
  },
  {
    day: "Mercredi",
    classes: [
      { time: "18h-19h", name: "100% Femmes", icon: Heart },
      { time: "19h-20h", name: "Cardio Mix", icon: Zap },
    ],
  },
  {
    day: "Jeudi",
    classes: [
      { time: "18h-19h", name: "Street F", icon: Swords },
      { time: "19h-20h", name: "Street F", icon: Swords },
    ],
  },
  {
    day: "Vendredi",
    classes: [
      { time: "18h-19h", name: "100% Femmes", icon: Heart },
      { time: "19h-20h", name: "Cardio Boxing", icon: Swords },
    ],
  },
  {
    day: "Samedi",
    classes: [
      { time: "12h-13:30h", name: "Street Fight", icon: Swords },
      { time: "13:30h-15h", name: "Dance", icon: Music },
      { time: "15h-17h", name: "Gymnastique", icon: Users },
      { time: "17h-18h", name: "Karate", icon: Swords },
    ],
  },
  {
    day: "Dimanche",
    classes: [
      { time: "13:30h-15h", name: "Dance", icon: Music },
      { time: "15h-17h", name: "Gymnastique", icon: Users },
      { time: "17h-18h", name: "Karate", icon: Swords },
    ],
  },
];

const classDescriptions = [
  {
    name: "100% Femmes",
    icon: Heart,
    description:
      "Sessions exclusivement féminines dans un environnement confortable et motivant. Cardio, renforcement et bien-être.",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Tae Bo",
    icon: Zap,
    description:
      "Combinaison explosive d'arts martiaux et d'aérobic pour un entraînement complet qui brûle les calories et réduit le stress.",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Cardio Boxing",
    icon: Swords,
    description:
      "Techniques de boxe dynamiques pour améliorer votre condition cardiovasculaire, votre coordination et votre confiance.",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Dance",
    icon: Music,
    description:
      "Exprimez-vous à travers le mouvement! Des chorégraphies fun qui améliorent flexibilité et coordination.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Karate",
    icon: Swords,
    description:
      "Apprenez l'art martial japonais. Discipline, confiance et techniques d'autodéfense pour tous les niveaux.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Gymnastique",
    icon: Users,
    description:
      "Développez force, souplesse et coordination à travers des exercices variés adaptés à tous les âges.",
    color: "from-green-500 to-teal-500",
  },
];

const Classes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
              Nos <span className="text-gradient">Classes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des cours variés pour tous les goûts et tous les niveaux. 
              Trouvez votre passion et atteignez vos objectifs.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <img
              src={classImage}
              alt="Joker Gym Classes"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-foreground text-xl font-heading font-bold">
                Une variété de classes pour tous les niveaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planning des Classes
            </h2>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Clock size={20} />
              Horaires mis à jour régulièrement - suivez-nous sur Instagram
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {schedule.map((day) => (
              <div
                key={day.day}
                className="bg-secondary border border-border rounded-xl p-6 hover-lift"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-4 text-center">
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.classes.map((classItem, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg"
                    >
                      <classItem.icon size={20} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {classItem.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {classItem.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            <Heart className="inline mr-2 text-pink-500" size={16} />
            Les classes "100% Femmes" sont exclusivement réservées aux femmes
          </p>
        </div>
      </section>

      {/* Class Descriptions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Découvrez Nos Programmes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque classe est conçue pour maximiser vos résultats tout en 
              gardant l'entraînement amusant et motivant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classDescriptions.map((classItem) => (
              <div
                key={classItem.name}
                className="bg-card border border-border rounded-xl p-8 hover-lift group"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${classItem.color}`}
                >
                  <classItem.icon size={32} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {classItem.name}
                </h3>
                <p className="text-muted-foreground">{classItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à Essayer?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour réserver votre première séance ou pour plus 
              d'informations sur nos classes.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-heading font-bold text-lg px-8 py-6"
              >
                Réserver Maintenant
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Classes;
