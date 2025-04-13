import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from "lucide-react";

export default function ContactLocation() {
  const contactDetails = [
    {
      id: "address",
      icon: <MapPinIcon className="h-4 w-4" />,
      title: "Dirección",
      content: [
        "Av. Paseo de la Reforma 222, Piso 15",
        "Col. Juárez, Cuauhtémoc",
        "06600, Ciudad de México, México",
      ],
    },
    {
      id: "phone",
      icon: <PhoneIcon className="h-4 w-4" />,
      title: "Teléfono",
      content: ["+52 (55) 5123 4567", "+52 (55) 5987 6543"],
    },
    {
      id: "email",
      icon: <MailIcon className="h-4 w-4" />,
      title: "Correo electrónico",
      content: ["info@rentadirecta.com", "contacto@rentadirecta.com"],
    },
    {
      id: "hours",
      icon: <ClockIcon className="h-4 w-4" />,
      title: "Horario de atención",
      content: [
        "Lunes a Viernes: 9:00 AM - 6:00 PM",
        "Sábados: 9:00 AM - 1:00 PM",
        "Domingos: Cerrado",
      ],
    },
  ];

  return (
    <div className="space-y-5">
      {contactDetails.map((detail, index) => (
        <div key={detail.id} className="flex items-start gap-3">
          <div className="rounded-full bg-[#1B2A55]/10 p-2 text-[#1B2A55]">
            {detail.icon}
          </div>
          <div>
            <h3 className="font-medium text-[#1B2A55]">{detail.title}</h3>
            <div className="mt-1 space-y-0.5">
              {detail.content.map((line, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
