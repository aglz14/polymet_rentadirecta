import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ContactHeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container max-w-screen-xl py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#1B2A55] sm:text-5xl md:text-6xl">
          Estamos aquí para ayudarle
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Nuestro equipo está listo para responder a sus preguntas y ofrecerle
          soluciones personalizadas.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
            onClick={() => scrollToSection("contact-form")}
          >
            Contactar ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1B2A55] text-[#1B2A55] hover:bg-[#86BC65]/10"
            onClick={() => scrollToSection("faq")}
          >
            Ver preguntas frecuentes
          </Button>
        </div>
      </div>
    </div>
  );
}
