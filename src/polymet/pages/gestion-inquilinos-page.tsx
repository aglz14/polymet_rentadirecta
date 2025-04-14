import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  UsersIcon,
  MessageSquareIcon,
  FileTextIcon,
  BellIcon,
} from "lucide-react";

export default function GestionInquilinosPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A55] to-[#1B2A55]/90 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#86BC65]/10 blur-3xl"></div>
          <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#86BC65]/10 blur-3xl"></div>
        </div>

        <div className="w-full px-4 md:px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Gestión de <span className="text-[#86BC65]">Inquilinos</span>
                </h1>
                <p className="mt-6 text-xl text-white/90">
                  Mantenga un registro completo de sus inquilinos, incluyendo
                  información de contacto, historial de pagos y documentos
                  asociados.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/registro">
                    <Button
                      size="lg"
                      className="text-base bg-white text-[#1B2A55] hover:bg-white/90"
                    >
                      Comenzar ahora
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base border-white text-white hover:bg-white/10"
                    >
                      Solicitar una demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-br from-[#1B2A55]/50 to-[#86BC65]/30 p-1 shadow-xl">
                  <div className="rounded-xl bg-background/5 backdrop-blur-sm p-4">
                    <img
                      src="https://picsum.photos/seed/rentadirecta-tenants/800/600"
                      alt="Panel de Gestión de Inquilinos"
                      className="w-full rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Características principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubra cómo nuestra solución de gestión de inquilinos puede
              mejorar su relación con los arrendatarios
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<UsersIcon className="h-6 w-6" />}
              title="Perfiles completos"
              description="Mantenga toda la información relevante de sus inquilinos en un solo lugar, fácilmente accesible."
            />

            <FeatureCard
              icon={<MessageSquareIcon className="h-6 w-6" />}
              title="Comunicación directa"
              description="Envíe mensajes y notificaciones directamente a sus inquilinos desde la plataforma."
            />

            <FeatureCard
              icon={<FileTextIcon className="h-6 w-6" />}
              title="Historial de contratos"
              description="Acceda al historial completo de contratos y renovaciones de cada inquilino."
            />

            <FeatureCard
              icon={<BellIcon className="h-6 w-6" />}
              title="Alertas automáticas"
              description="Reciba notificaciones sobre vencimientos de contratos y otros eventos importantes."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestro sistema simplifica la gestión de inquilinos en tres
              sencillos pasos
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StepCard
              number="1"
              title="Registro de inquilinos"
              description="Ingrese los datos básicos de sus inquilinos, incluyendo información de contacto y documentos de identificación."
            />

            <StepCard
              number="2"
              title="Asociación con unidades"
              description="Vincule a cada inquilino con la unidad que renta, estableciendo términos de contrato y montos de renta."
            />

            <StepCard
              number="3"
              title="Gestión continua"
              description="Mantenga un seguimiento de pagos, comunicaciones y renovaciones de contrato de manera automatizada."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Beneficios de nuestra gestión de inquilinos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mejore la relación con sus inquilinos y reduzca la rotación con
                nuestra plataforma integral
              </p>

              <ul className="mt-8 space-y-4">
                <BenefitItem>
                  Mejore la satisfacción de sus inquilinos con comunicación
                  efectiva
                </BenefitItem>
                <BenefitItem>
                  Reduzca el tiempo dedicado a resolver problemas y consultas
                </BenefitItem>
                <BenefitItem>
                  Disminuya la rotación de inquilinos con una mejor gestión
                </BenefitItem>
                <BenefitItem>
                  Mantenga un registro histórico completo de cada inquilino
                </BenefitItem>
                <BenefitItem>
                  Anticipe renovaciones y evite vacantes inesperadas
                </BenefitItem>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1B2A55]/10 to-[#86BC65]/10 p-1 shadow-xl">
                <img
                  src="https://picsum.photos/seed/rentadirecta-tenants-dashboard/800/600"
                  alt="Dashboard de Inquilinos"
                  className="w-full rounded-xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-[#86BC65]/10 backdrop-blur-sm -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-[#1B2A55]/10 backdrop-blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-4">
                <img
                  src="https://github.com/polymet-ai.png"
                  alt="Logo de Desarrollos Urbanos S.A."
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    Desarrollos Urbanos S.A.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Cliente desde 2022
                  </p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-[#86BC65]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4">
                <p className="text-lg">
                  "La gestión de inquilinos solía ser uno de nuestros mayores
                  dolores de cabeza. Con RentaDirecta, hemos logrado reducir la
                  rotación de inquilinos en un 30% gracias a una mejor
                  comunicación y atención a sus necesidades."
                </p>
              </blockquote>
              <p className="mt-4 text-right text-sm font-medium">
                — Miguel Sánchez, Gerente de Operaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0F1A3A] to-[#1B2A55] py-16 sm:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mejore la relación con sus inquilinos hoy mismo
            </h2>
            <p className="mt-6 text-lg text-white/90">
              Únase a más de 500 empresas inmobiliarias que ya están optimizando
              su gestión con RentaDirecta
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/registro">
                <Button
                  size="lg"
                  className="bg-white text-[#1B2A55] hover:bg-white/90 text-base font-medium shadow-lg"
                >
                  Comenzar gratis
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white border-2 text-black font-medium shadow-lg hover:bg-white/20 hover:text-white"
                >
                  Contactar con ventas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
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

function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-6 shadow-sm text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2A55] text-white text-xl font-bold">
        {number}
      </div>
      <h3 className="mt-4 text-xl font-medium">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

function BenefitItem({ children }) {
  return (
    <li className="flex items-start">
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
      <span className="ml-3 text-base">{children}</span>
    </li>
  );
}
