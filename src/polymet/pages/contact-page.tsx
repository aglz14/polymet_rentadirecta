import ContactHeroSection from "@/polymet/components/contact-hero-section";
import ContactForm from "@/polymet/components/contact-form";
import ContactCards from "@/polymet/components/contact-cards";
import ContactFAQ from "@/polymet/components/contact-faq";
import ContactLocation from "@/polymet/components/contact-location";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section - Updated */}
      <ContactHeroSection />

      {/* Contact Cards - Minimalist version */}
      <section className="container max-w-screen-xl">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-[#1B2A55] md:text-3xl">
          Cómo podemos ayudarle
        </h2>
        <ContactCards />
      </section>

      {/* Contact Form and Location - Side by side layout */}
      <section id="contact-form" className="container max-w-screen-xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1B2A55]">
                Envíenos un mensaje
              </h2>
              <p className="mb-6 text-muted-foreground">
                Complete el formulario y nos pondremos en contacto con usted lo
                antes posible.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1B2A55]">
                Contáctanos
              </h2>
            </div>
            <ContactLocation />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container max-w-screen-xl">
        <div>
          <ContactFAQ />
        </div>
      </section>

      {/* CTA Banner - Simplified */}
      <section className="bg-[#1B2A55]/5 py-10">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#1B2A55]">
              ¿Listo para transformar la gestión de sus propiedades?
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#1B2A55] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1B2A55]/90 focus-visible:outline-none focus-visible:ring-2"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Comenzar ahora
              </button>
              <button
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-[#1B2A55] transition-colors hover:bg-[#86BC65]/10 hover:text-[#1B2A55] focus-visible:outline-none focus-visible:ring-2"
                onClick={() => window.open("/precios", "_self")}
              >
                Ver planes y precios
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
