import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BuildingIcon,
  UsersIcon,
  BarChartIcon,
  HeartIcon,
} from "lucide-react";

export default function SobreNosotrosPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#1B2A55]/5 blur-3xl"></div>
          <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#86BC65]/5 blur-3xl"></div>
        </div>

        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transformando la gestión inmobiliaria en{" "}
              <span className="text-[#86BC65]">México</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Conoce al equipo detrás de RentaDirecta y nuestra misión de
              simplificar la administración de propiedades para empresas
              inmobiliarias e inversionistas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-accent/30">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
                Nuestra Misión
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En RentaDirecta, nos dedicamos a transformar la manera en que se
                gestionan las propiedades en México. Nuestra plataforma integral
                permite a empresas inmobiliarias y propietarios independientes
                automatizar procesos, reducir costos operativos y mejorar la
                experiencia tanto para administradores como para inquilinos.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-[#86BC65]/10 p-1">
                    <BuildingIcon className="h-5 w-5 text-[#86BC65]" />
                  </div>
                  <span className="ml-3 text-base">
                    <strong>Innovación:</strong> Desarrollamos soluciones
                    tecnológicas que simplifican la gestión inmobiliaria.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-[#86BC65]/10 p-1">
                    <UsersIcon className="h-5 w-5 text-[#86BC65]" />
                  </div>
                  <span className="ml-3 text-base">
                    <strong>Servicio:</strong> Ofrecemos soporte técnico 24/7 y
                    atención personalizada a nuestros clientes.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-[#86BC65]/10 p-1">
                    <BarChartIcon className="h-5 w-5 text-[#86BC65]" />
                  </div>
                  <span className="ml-3 text-base">
                    <strong>Resultados:</strong> Nos enfocamos en generar valor
                    medible para nuestros usuarios.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-[#86BC65]/10 p-1">
                    <HeartIcon className="h-5 w-5 text-[#86BC65]" />
                  </div>
                  <span className="ml-3 text-base">
                    <strong>Comunidad:</strong> Contribuimos al desarrollo del
                    sector inmobiliario en México.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1B2A55]/10 to-[#86BC65]/10 p-1 shadow-xl">
                <img
                  src="https://picsum.photos/seed/rentadirecta-mission/800/600"
                  alt="Equipo de RentaDirecta"
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

      {/* Team Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un grupo de profesionales apasionados por la tecnología y el
              sector inmobiliario, comprometidos con transformar la industria.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border border-border/40 bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-32 w-32 rounded-full object-cover mb-4"
                />

                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-sm text-[#86BC65] font-medium">
                  {member.position}
                </p>
                <p className="mt-2 text-center text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neowave Backing Section */}
      <section className="py-16 bg-[#1B2A55] text-white">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Respaldados por Neowave
              </h2>
              <p className="mt-4 text-lg text-white/80">
                RentaDirecta es parte del portafolio de empresas tecnológicas de
                Neowave, una firma líder en inversión y desarrollo de soluciones
                digitales innovadoras en Latinoamérica. Este respaldo nos
                permite contar con la experiencia, recursos y visión estratégica
                necesarios para revolucionar el sector inmobiliario.
              </p>
              <p className="mt-4 text-lg text-white/80">
                La experiencia de Neowave en el desarrollo de empresas
                tecnológicas exitosas nos proporciona una ventaja competitiva
                única, permitiéndonos escalar rápidamente y ofrecer soluciones
                de clase mundial adaptadas al mercado mexicano.
              </p>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1B2A55]"
                >
                  Conoce más sobre Neowave
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative rounded-2xl bg-white/10 p-1 shadow-xl">
                <img
                  src="https://picsum.photos/seed/neowave-backing/800/600"
                  alt="Neowave"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
              Nuestra Historia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              El camino que hemos recorrido para transformar la gestión
              inmobiliaria en México.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#86BC65] z-10"></div>

                {/* Content */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}
                >
                  <div className="bg-accent/30 rounded-xl p-6 shadow-sm">
                    <span className="text-sm font-medium text-[#86BC65]">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-medium mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1B2A55] to-[#0F1A3A] text-white">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Únete a la revolución inmobiliaria
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Descubre cómo RentaDirecta puede transformar la gestión de tus
              propiedades y mejorar tus resultados.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/registro">
                <Button
                  size="lg"
                  className="bg-white text-[#1B2A55] hover:bg-white/90"
                >
                  Comenzar ahora
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
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

const teamMembers = [
  {
    name: "Carlos Rodríguez",
    position: "CEO y Fundador",
    bio: "Con más de 15 años de experiencia en el sector inmobiliario y tecnológico, Carlos fundó RentaDirecta para resolver los problemas que enfrentó como propietario de múltiples inmuebles.",
    avatar: "https://github.com/yusufhilmi.png",
  },
  {
    name: "Ana Martínez",
    position: "CTO",
    bio: "Ingeniera de software con experiencia en empresas como Google y Microsoft. Lidera el desarrollo tecnológico de nuestra plataforma con un enfoque en la experiencia del usuario.",
    avatar: "https://github.com/furkanksl.png",
  },
  {
    name: "Miguel Sánchez",
    position: "Director de Operaciones",
    bio: "Especialista en optimización de procesos con amplia experiencia en el sector inmobiliario. Responsable de asegurar la excelencia operativa de RentaDirecta.",
    avatar: "https://github.com/kdrnp.png",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Fundación",
    description:
      "RentaDirecta nace como una idea para resolver los problemas de gestión inmobiliaria en México.",
  },
  {
    year: "2021",
    title: "Lanzamiento Beta",
    description:
      "Lanzamos la primera versión beta de nuestra plataforma con funcionalidades básicas de gestión de propiedades.",
  },
  {
    year: "2022",
    title: "Inversión de Neowave",
    description:
      "Recibimos el respaldo de Neowave, permitiéndonos acelerar el desarrollo y expansión de nuestra plataforma.",
  },
  {
    year: "2023",
    title: "Expansión Nacional",
    description:
      "Alcanzamos presencia en las principales ciudades de México, superando los 10,000 inmuebles gestionados en la plataforma.",
  },
  {
    year: "2024",
    title: "Nuevas Funcionalidades",
    description:
      "Lanzamos módulos avanzados de gestión documental, cobro de rentas y comunicación con inquilinos.",
  },
];
