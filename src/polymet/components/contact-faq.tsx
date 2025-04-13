import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactFAQ() {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar RentaDirecta?",
      answer:
        "Para la mayoría de las empresas, la implementación básica toma entre 1 y 2 semanas. Nuestro equipo le guiará durante todo el proceso para garantizar una transición sin problemas.",
    },
    {
      question: "¿Ofrecen capacitación para mi equipo?",
      answer:
        "Sí, ofrecemos sesiones de capacitación personalizadas para todos los usuarios de la plataforma, además de recursos de aprendizaje en línea y documentación detallada.",
    },
    {
      question: "¿Cómo funciona el proceso de cobro de rentas?",
      answer:
        "Nuestra plataforma automatiza el cobro mediante múltiples métodos de pago, envía recordatorios automáticos y registra todos los pagos para facilitar la contabilidad.",
    },
    {
      question: "¿Puedo migrar mis datos existentes a RentaDirecta?",
      answer:
        "Sí, ofrecemos servicios de migración de datos para transferir su información de propiedades, inquilinos, contratos y pagos a nuestra plataforma de manera segura.",
    },
  ];

  return (
    <div id="faq" className="mx-auto max-w-2xl">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[#1B2A55]">
          Preguntas frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-[#1B2A55]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
