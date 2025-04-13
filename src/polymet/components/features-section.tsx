import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChartIcon,
  BuildingIcon,
  CreditCardIcon,
  FileTextIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que necesita para gestionar sus propiedades
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nuestra plataforma integral le ofrece todas las herramientas
            necesarias para administrar sus propiedades de manera eficiente.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Simplifique su operación y aumente sus ingresos
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                RentaDirecta le permite automatizar tareas repetitivas, reducir
                la morosidad y mejorar la comunicación con sus inquilinos.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={benefit} className="flex items-start">
                    <div className="flex-shrink-0 rounded-full bg-[#86BC65]/10 p-1">
                      <svg
                        className="h-5 w-5 text-[#86BC65]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to="/demo">
                  <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                    Solicitar una demostración
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1B2A55]/10 to-[#86BC65]/10 p-1 shadow-xl">
                <img
                  src="https://picsum.photos/seed/rentadirecta-features/800/600"
                  alt="Dashboard de RentaDirecta"
                  className="w-full rounded-xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-[#86BC65]/10 backdrop-blur-sm -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-[#1B2A55]/10 backdrop-blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border/40 bg-background p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 rounded-full bg-[#1B2A55]/10 p-3 w-fit">
        <div className="text-[#1B2A55]">{icon}</div>
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

const features = [
  {
    icon: <BuildingIcon className="h-6 w-6" />,
    title: "Gestión de Propiedades",
    description:
      "Administre todas sus propiedades y unidades desde un solo lugar con información detallada y actualizada.",
  },
  {
    icon: <CreditCardIcon className="h-6 w-6" />,
    title: "Cobro de Rentas",
    description:
      "Automatice el proceso de cobro de rentas con recordatorios y múltiples opciones de pago para sus inquilinos.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Gestión de Inquilinos",
    description:
      "Mantenga un registro completo de sus inquilinos, incluyendo información de contacto y historial de pagos.",
  },
  {
    icon: <FileTextIcon className="h-6 w-6" />,
    title: "Gestión Documental",
    description:
      "Almacene y gestione contratos, documentos legales e identificaciones de manera segura y organizada.",
  },
  {
    icon: <MessageSquareIcon className="h-6 w-6" />,
    title: "Comunicación Efectiva",
    description:
      "Mantenga una comunicación fluida con sus inquilinos a través de notificaciones y mensajes directos.",
  },
  {
    icon: <BarChartIcon className="h-6 w-6" />,
    title: "Reportes y Análisis",
    description:
      "Obtenga informes detallados sobre la ocupación, ingresos y gastos de sus propiedades.",
  },
];

const benefits = [
  "Reduzca hasta un 45% el tiempo dedicado a tareas administrativas",
  "Aumente la tasa de cobro de rentas hasta un 98%",
  "Mejore la satisfacción de sus inquilinos con comunicación efectiva",
  "Acceda a su información desde cualquier lugar y dispositivo",
  "Tome decisiones basadas en datos con reportes detallados",
];
