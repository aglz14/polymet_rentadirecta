import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import BrandLogo from "@/polymet/components/brand-logo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#1B2A55]/5 blur-3xl"></div>
        <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#86BC65]/5 blur-3xl"></div>
      </div>

      <div className="container max-w-screen-xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center">
              Gestión inmobiliaria{" "}
              <span className="text-[#86BC65]">simplificada</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground text-center">
              Administre sus propiedades, automatice el cobro de rentas y mejore
              la comunicación con sus inquilinos en una sola plataforma.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Link to="/registro">
                <Button
                  size="lg"
                  className="text-base bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                >
                  Comenzar ahora
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-[#1B2A55] text-[#1B2A55] hover:bg-[#1B2A55]/10"
                >
                  Solicitar una demo
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((id, index) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/150?img=${id}`}
                    alt={`Usuario ${id}`}
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="ml-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">+500</span>{" "}
                empresas inmobiliarias confían en nosotros
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-br from-[#1B2A55]/20 to-[#86BC65]/20 p-1 shadow-xl">
              <div className="rounded-xl bg-background p-4">
                <img
                  src="https://picsum.photos/seed/rentadirecta-dashboard/800/600"
                  alt="Dashboard de RentaDirecta"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-[#1B2A55]/10 backdrop-blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-[#86BC65]/10 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}