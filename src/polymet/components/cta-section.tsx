import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 w-full bg-[#0F1A3A]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1A3A] to-[#1B2A55] -z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#86BC65]/30 blur-3xl" />

        <div className="absolute -right-[5%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-[#86BC65]/20 blur-3xl" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Optimice su gestión inmobiliaria hoy mismo
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Únase a más de 500 empresas inmobiliarias que ya están ahorrando
            tiempo y mejorando sus resultados con nuestra plataforma.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/registro">
              <Button
                size="lg"
                className="bg-white text-[#1B2A55] hover:bg-white/90 text-base font-medium"
              >
                Comenzar gratis
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#1B2A55] font-medium hover:bg-white/20 hover:text-white bg-white"
              >
                Contactar con ventas
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatItem value="15,000+" label="Unidades gestionadas" />

          <StatItem value="98%" label="Tasa de cobro de rentas" />

          <StatItem value="45%" label="Reducción en tiempo administrativo" />

          <StatItem value="24/7" label="Soporte técnico" />
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <CheckIcon className="mr-2 h-5 w-5 text-[#9ED77F]" />

        <span className="text-2xl font-bold text-white">{value}</span>
      </div>
      <p className="mt-2 text-center text-sm text-white/90">{label}</p>
    </div>
  );
}
