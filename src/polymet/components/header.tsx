import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/polymet/components/brand-logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BrandLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Soluciones
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution, index) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.href}
                        to={solution.href}
                      >
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/precios">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Precios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacto">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-base">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/registro">
              <Button className="text-base bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2">
            <div className="py-2">
              <h3 className="mb-2 px-3 text-sm font-semibold">Soluciones</h3>
              {solutions.map((solution, index) => (
                <Link
                  key={solution.title}
                  to={solution.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {solution.title}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <Link
                to="/precios"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                to="/contacto"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
            <div className="border-t border-border/40 pt-4">
              <div className="flex flex-col space-y-3 px-3">
                <Link
                  to="/login"
                  className="rounded-md bg-accent px-4 py-2 text-center text-base font-medium text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/registro"
                  className="rounded-md bg-[#1B2A55] px-4 py-2 text-center text-base font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const solutions = [
  {
    title: "Gestión de Propiedades",
    href: "/soluciones/gestion-propiedades",
    description:
      "Administre todas sus propiedades desde un solo lugar con nuestro panel centralizado.",
  },
  {
    title: "Cobro de Rentas",
    href: "/soluciones/cobro-rentas",
    description:
      "Automatice el cobro de rentas y reciba pagos de manera eficiente y segura.",
  },
  {
    title: "Gestión de Inquilinos",
    href: "/soluciones/gestion-inquilinos",
    description:
      "Mantenga toda la información de sus inquilinos organizada y accesible.",
  },
  {
    title: "Gestión Documental",
    href: "/soluciones/gestion-documental",
    description:
      "Almacene y gestione contratos, documentos legales e identificaciones de manera segura.",
  },
];
