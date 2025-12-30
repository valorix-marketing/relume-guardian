import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Route Sidi Salem, Bizerte 7000, Tunisia",
    link: "https://maps.google.com/?q=sidi+salem,+Bizerte,+Tunisia",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+216 23 401 611",
    link: "tel:+21623401611",
  },
  {
    icon: Mail,
    title: "Email",
    content: "thejokergym21@gmail.com",
    link: "mailto:thejokergym21@gmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven: 6h-22h | Sam-Dim: 9h-18h",
    link: null,
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
              <span className="text-gradient">Contactez</span>-Nous
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vous avez des questions sur nos abonnements, nos classes ou nos 
              installations? N'hésitez pas à nous contacter!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link || undefined}
                    target={info.link?.startsWith("http") ? "_blank" : undefined}
                    rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`bg-card border border-border rounded-xl p-6 flex items-start gap-4 ${
                      info.link ? "hover-lift cursor-pointer" : ""
                    }`}
                  >
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Suivez-nous sur les Réseaux
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/official.jokergym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-secondary p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex-1"
                  >
                    <Instagram size={24} />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm opacity-80">@official.jokergym</p>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/p/The-JOKER-GYM-61554677015102/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-secondary p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex-1"
                  >
                    <Facebook size={24} />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm opacity-80">The JOKER GYM</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <iframe
                  title="Joker Gym Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12839.144693848885!2d9.870082!3d37.2744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2c8b3b0b3b3b3%3A0x0!2sSidi%20Salem%2C%20Bizerte%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Forms */}
            <div className="space-y-8">
              <ContactForm title="Envoyez-nous un Message" type="contact" />
              
              <div className="bg-secondary border border-border rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Demande d'Adhésion
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Intéressé par un abonnement? Utilisez le formulaire ci-dessus 
                  et mentionnez vos objectifs fitness. Nous vous répondrons avec 
                  les options qui vous conviennent le mieux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Sessions 100% Femmes
              </h2>
              <p className="text-muted-foreground">
                Nous offrons des créneaux horaires exclusivement réservés aux femmes 
                pour un entraînement confortable et motivant:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Lundi, Mercredi, Vendredi: 18h-19h</li>
                <li>• Environnement respectueux et inclusif</li>
                <li>• Coachs féminins disponibles</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Comment Nous Trouver
              </h2>
              <p className="text-muted-foreground">
                Joker Gym est situé sur la Route Sidi Salem à Bizerte. Facilement 
                accessible depuis le centre-ville avec un parking disponible sur place.
              </p>
              <p className="text-muted-foreground">
                Pour une visite guidée de nos installations ou pour essayer une 
                séance d'essai, contactez-nous par téléphone ou via le formulaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
