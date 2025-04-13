import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  UsersIcon,
  GlobeIcon,
  HeartIcon,
  LinkedinIcon,
} from "lucide-react";

export default function CarrerasPage() {
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
              Únete a nuestro <span className="text-[#86BC65]">equipo</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Estamos buscando personas talentosas y apasionadas por la
              tecnología y el sector inmobiliario para transformar juntos la
              gestión de propiedades en México.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-accent/30">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
              ¿Por qué trabajar en RentaDirecta?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ofrecemos un ambiente de trabajo dinámico, innovador y con grandes
              oportunidades de crecimiento profesional
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/40 bg-background shadow-sm">
              <div className="rounded-full bg-[#86BC65]/10 p-4 mb-4">
                <BriefcaseIcon className="h-8 w-8 text-[#86BC65]" />
              </div>
              <h3 className="text-xl font-medium mb-2">
                Desarrollo profesional
              </h3>
              <p className="text-muted-foreground">
                Oportunidades de crecimiento y aprendizaje continuo en un sector
                en expansión
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/40 bg-background shadow-sm">
              <div className="rounded-full bg-[#86BC65]/10 p-4 mb-4">
                <UsersIcon className="h-8 w-8 text-[#86BC65]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Equipo diverso</h3>
              <p className="text-muted-foreground">
                Colabora con profesionales talentosos de diferentes disciplinas
                y backgrounds
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/40 bg-background shadow-sm">
              <div className="rounded-full bg-[#86BC65]/10 p-4 mb-4">
                <GlobeIcon className="h-8 w-8 text-[#86BC65]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Impacto real</h3>
              <p className="text-muted-foreground">
                Contribuye a transformar el sector inmobiliario en México con
                soluciones innovadoras
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/40 bg-background shadow-sm">
              <div className="rounded-full bg-[#86BC65]/10 p-4 mb-4">
                <HeartIcon className="h-8 w-8 text-[#86BC65]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Balance laboral</h3>
              <p className="text-muted-foreground">
                Valoramos el equilibrio entre vida personal y profesional con
                horarios flexibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
              Vacantes actuales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explora nuestras oportunidades laborales disponibles y únete a
              nuestro equipo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl border border-border/40 bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium">{job.title}</h3>
                    <p className="text-[#86BC65] font-medium">
                      {job.department}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium">
                    {job.location}
                  </span>
                </div>
                <p className="text-muted-foreground flex-grow mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center rounded-full bg-[#1B2A55]/10 px-2.5 py-0.5 text-xs font-medium text-[#1B2A55]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                  onClick={() => window.open(job.applyLink, "_blank")}
                >
                  Ver detalles y aplicar
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/company/rentadirecta/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1B2A55] hover:text-[#86BC65] font-medium"
            >
              <LinkedinIcon className="h-5 w-5" />
              Ver todas nuestras vacantes en LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-accent/30">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A55]">
              Proceso de selección
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Conoce los pasos de nuestro proceso de reclutamiento
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2A55] text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-medium mb-2">Aplicación</h3>
              <p className="text-muted-foreground">
                Envía tu CV y carta de presentación a través de nuestra
                plataforma o LinkedIn
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2A55] text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-medium mb-2">Entrevista inicial</h3>
              <p className="text-muted-foreground">
                Conversación telefónica o por videollamada con nuestro equipo de
                recursos humanos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2A55] text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-medium mb-2">Evaluación técnica</h3>
              <p className="text-muted-foreground">
                Dependiendo del puesto, realizarás pruebas técnicas o casos
                prácticos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B2A55] text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-medium mb-2">Entrevista final</h3>
              <p className="text-muted-foreground">
                Conoce a tu futuro equipo y al liderazgo de la empresa antes de
                recibir una oferta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1B2A55] to-[#0F1A3A] py-16 sm:py-24 text-white">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              ¿No encuentras la vacante ideal?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Siempre estamos buscando talento. Envíanos tu CV y te
              contactaremos cuando surja una oportunidad que se ajuste a tu
              perfil.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:carreras@rentadirecta.mx"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#1B2A55] shadow-sm hover:bg-white/90"
              >
                Enviar CV
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10"
              >
                Contactar con RRHH
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data for job openings
const jobOpenings = [
  {
    title: "Desarrollador Frontend Senior",
    department: "Tecnología",
    location: "Remoto",
    description:
      "Buscamos un desarrollador frontend con experiencia en React y TypeScript para liderar el desarrollo de nuestra plataforma web.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
  {
    title: "Especialista en Marketing Digital",
    department: "Marketing",
    location: "Ciudad de México",
    description:
      "Responsable de diseñar e implementar estrategias de marketing digital para aumentar la adquisición de clientes.",
    skills: ["SEO/SEM", "Redes Sociales", "Email Marketing", "Analytics"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
  {
    title: "Analista de Operaciones Inmobiliarias",
    department: "Operaciones",
    location: "Híbrido",
    description:
      "Apoyarás en la optimización de procesos operativos relacionados con la gestión de propiedades e inquilinos.",
    skills: ["Excel Avanzado", "Análisis de Datos", "Sector Inmobiliario"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
  {
    title: "Desarrollador Backend",
    department: "Tecnología",
    location: "Remoto",
    description:
      "Desarrollarás y mantendrás la infraestructura backend de nuestra plataforma, asegurando su escalabilidad y rendimiento.",
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
  {
    title: "Ejecutivo de Ventas",
    department: "Ventas",
    location: "Ciudad de México",
    description:
      "Responsable de la captación de nuevos clientes y la gestión de cuentas existentes en el sector inmobiliario.",
    skills: ["Ventas B2B", "CRM", "Negociación", "Sector Inmobiliario"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
  {
    title: "Diseñador UX/UI",
    department: "Diseño",
    location: "Remoto",
    description:
      "Crearás experiencias de usuario intuitivas y atractivas para nuestra plataforma web y aplicación móvil.",
    skills: ["Figma", "Adobe XD", "Investigación de Usuarios", "Prototipado"],
    applyLink: "https://www.linkedin.com/company/rentadirecta/jobs/",
  },
];
