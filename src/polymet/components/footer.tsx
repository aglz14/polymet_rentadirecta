import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "lucide-react";
import BrandLogo from "@/polymet/components/brand-logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex h-full max-w-screen-xl mx-auto px-4">
        <div className="w-full py-12 md:py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 w-full">
            {/* Brand and Newsletter Section */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex items-center gap-2">
                <BrandLogo withDomain={true} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Simplificando la gestión de propiedades y rentas para empresas
                de desarrollo inmobiliario e inversionistas.
              </p>
              <div className="w-full">
                <h3 className="text-sm font-semibold mb-3">
                  Mantente informado
                </h3>
                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="rounded-md"
                  />
                  <Button
                    type="submit"
                    className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 transition-colors"
                  >
                    <MailIcon className="mr-2 h-4 w-4" />
                    Suscribirse
                  </Button>
                </div>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold mb-4">Soluciones</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/soluciones/gestion-propiedades"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Gestión de Propiedades
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soluciones/cobro-rentas"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Cobro de Rentas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soluciones/gestion-inquilinos"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Gestión de Inquilinos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soluciones/gestion-documental"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Gestión Documental
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/sobre-nosotros"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/carreras"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                    onClick={scrollToTop}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal and Social Section */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-4">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      to="/privacidad"
                      className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                      onClick={scrollToTop}
                    >
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terminos"
                      className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                      onClick={scrollToTop}
                    >
                      Términos de Servicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cookies"
                      className="text-muted-foreground hover:text-[#86BC65] transition-colors"
                      onClick={scrollToTop}
                    >
                      Política de Cookies
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-[#1B2A55] transition-colors"
                    aria-label="Facebook"
                    onClick={scrollToTop}
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-[#1B2A55] transition-colors"
                    aria-label="Twitter"
                    onClick={scrollToTop}
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-[#1B2A55] transition-colors"
                    aria-label="Instagram"
                    onClick={scrollToTop}
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-[#1B2A55] transition-colors"
                    aria-label="LinkedIn"
                    onClick={scrollToTop}
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-border/40 pt-6">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} RentaDirecta. Todos los
                derechos reservados.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/privacidad"
                  className="text-sm text-muted-foreground hover:text-[#86BC65] transition-colors"
                  onClick={scrollToTop}
                >
                  Privacidad
                </Link>
                <Link
                  to="/terminos"
                  className="text-sm text-muted-foreground hover:text-[#86BC65] transition-colors"
                  onClick={scrollToTop}
                >
                  Términos
                </Link>
                <Link
                  to="/contacto"
                  className="text-sm text-muted-foreground hover:text-[#86BC65] transition-colors"
                  onClick={scrollToTop}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
