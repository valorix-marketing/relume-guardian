import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Email invalide").max(255),
  phone: z.string().min(8, "Numéro de téléphone invalide").max(20),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  title?: string;
  type?: "contact" | "membership";
}

const ContactForm = ({ title = "Envoyez-nous un message", type = "contact" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...data,
          type,
        },
      });

      if (error) throw error;

      toast({
        title: "Message envoyé!",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
        {title}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            placeholder="Votre nom"
            {...register("name")}
            className="bg-secondary border-border"
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            {...register("email")}
            className="bg-secondary border-border"
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+216 XX XXX XXX"
            {...register("phone")}
            className="bg-secondary border-border"
          />
          {errors.phone && (
            <p className="text-destructive text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            placeholder={
              type === "membership"
                ? "Décrivez vos objectifs fitness et les classes qui vous intéressent..."
                : "Votre message..."
            }
            rows={5}
            {...register("message")}
            className="bg-secondary border-border resize-none"
          />
          {errors.message && (
            <p className="text-destructive text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gradient-primary font-heading font-bold text-lg py-6 hover-glow"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
