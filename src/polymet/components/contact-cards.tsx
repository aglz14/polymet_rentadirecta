import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  HeadphonesIcon,
  PresentationIcon,
  HandshakeIcon,
  BuildingIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCards() {
  const contactOptions = [
    {
      id: "support",
      title: "Soporte",
      description: "Asistencia técnica y ayuda con la plataforma",
      icon: <HeadphonesIcon className="h-5 w-5" />,
      email: "soporte@rentadirecta.com",
    },
    {
      id: "demos",
      title: "Demostraciones",
      description: "Solicite una demostración personalizada",
      icon: <PresentationIcon className="h-5 w-5" />,
      email: "demos@rentadirecta.com",
    },
    {
      id: "partners",
      title: "Asociaciones",
      description: "Oportunidades de colaboración y alianzas",
      icon: <HandshakeIcon className="h-5 w-5" />,
      email: "partners@rentadirecta.com",
    },
    {
      id: "sales",
      title: "Ventas",
      description: "Información sobre planes y precios",
      icon: <BuildingIcon className="h-5 w-5" />,
      email: "ventas@rentadirecta.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {contactOptions.map((option, index) => (
        <Card key={option.id} className="border-[#1B2A55]/10">
          <CardHeader className="pb-2">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B2A55]/10">
              <span className="text-[#1B2A55]">{option.icon}</span>
            </div>
            <h3 className="text-lg font-medium text-[#1B2A55]">
              {option.title}
            </h3>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              {option.description}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full text-sm hover:bg-[#86BC65]/10"
              asChild
            >
              <Link to={`mailto:${option.email}`}>{option.email}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
