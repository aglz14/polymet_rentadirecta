import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import BrandLogo from "@/polymet/components/brand-logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-xl py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <BrandLogo withDomain={true} />
            </div>
            <p className="mt-4 max-w-md text-muted-foreground">
              Simplificando la gestión de propiedades y rentas para empresas de
              desarrollo inmobiliario e inversionistas.
            </p>
            <div className="mt-6">
              <h3 className="mb-4 text-sm font-semibold">
                Suscríbete a nuestro boletín
              </h3>
              <div className="flex max-w-md flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="rounded-md"
                />

                <Button
                  type="submit"
                  className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                >
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Soluciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/soluciones/gestion-propiedades"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Gestión de Propiedades
                </Link>
              </li>
              <li>
                <Link
                  to="/soluciones/cobro-rentas"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Cobro de Rentas
                </Link>
              </li>
              <li>
                <Link
                  to="/soluciones/gestion-inquilinos"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Gestión de Inquilinos
                </Link>
              </li>
              <li>
                <Link
                  to="/soluciones/gestion-documental"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Gestión Documental
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/sobre-nosotros"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/carreras"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Carreras
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacidad"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-muted-foreground hover:text-[#86BC65]"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="mb-4 text-sm font-semibold">Síguenos</h3>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-[#1B2A55]"
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-[#1B2A55]"
                >
                  <TwitterIcon className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-[#1B2A55]"
                >
                  <InstagramIcon className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-[#1B2A55]"
                >
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} RentaDirecta. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/privacidad"
                className="text-sm text-muted-foreground hover:text-[#86BC65]"
              >
                Privacidad
              </Link>
              <Link
                to="/terminos"
                className="text-sm text-muted-foreground hover:text-[#86BC65]"
              >
                Términos
              </Link>
              <Link
                to="/contacto"
                className="text-sm text-muted-foreground hover:text-[#86BC65]"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
