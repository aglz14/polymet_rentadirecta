import { StarIcon } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Empresas inmobiliarias de todos los tamaños confían en RentaDirecta
            para gestionar sus propiedades y mejorar sus resultados.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-lg font-medium">
            Empresas que confían en nosotros
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex h-12 items-center justify-center"
              >
                <div className="flex items-center justify-center rounded-md bg-background px-4 py-2">
                  <span className="text-xl font-bold">
                    <span className="text-[#1B2A55]">{company.firstPart}</span>
                    <span className="text-[#86BC65]">{company.secondPart}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialProps {
  testimonial: {
    content: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    image: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border/40 bg-background p-6 shadow-sm">
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "fill-[#86BC65] text-[#86BC65]"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <blockquote className="flex-1">
        <p className="text-base text-foreground">{testimonial.content}</p>
      </blockquote>
      <div className="mt-6 flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="ml-3">
          <p className="text-sm font-medium">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    content:
      "RentaDirecta ha transformado la manera en que gestionamos nuestras propiedades. Hemos reducido el tiempo administrativo y mejorado la comunicación con nuestros inquilinos.",
    author: "Ana Martínez",
    role: "Directora de Operaciones",
    company: "Grupo Inmobiliario XYZ",
    rating: 5,
    image: "https://github.com/yahyabedirhan.png",
  },
  {
    content:
      "La automatización del cobro de rentas nos ha permitido aumentar nuestra tasa de cobro al 98%. El soporte técnico es excelente y siempre están disponibles para ayudarnos.",
    author: "Carlos Rodríguez",
    role: "Gerente General",
    company: "Inmobiliaria CR",
    rating: 5,
    image: "https://github.com/yusufhilmi.png",
  },
  {
    content:
      "Los reportes y análisis nos han dado visibilidad sobre el rendimiento de nuestras propiedades. Ahora podemos tomar decisiones basadas en datos reales.",
    author: "Laura González",
    role: "Directora Financiera",
    company: "Inversiones Urbanas",
    rating: 4,
    image: "https://github.com/furkanksl.png",
  },
];

const companies = [
  { firstPart: "Grupo", secondPart: "Inmobiliario" },
  { firstPart: "Urban", secondPart: "Properties" },
  { firstPart: "Inmo", secondPart: "Capital" },
  { firstPart: "Real", secondPart: "Estate" },
  { firstPart: "Metro", secondPart: "Vivienda" },
];
