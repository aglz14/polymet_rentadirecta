import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailIcon, PhoneIcon, MessageSquareIcon } from "lucide-react";

interface TenantInfoCardProps {
  tenant?: {
    name: string;
    avatar?: string;
    email?: string;
    phone?: string;
  };
  className?: string;
}

export default function TenantInfoCard({
  tenant,
  className = "",
}: TenantInfoCardProps) {
  if (!tenant) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-xl text-[#1B2A55]">Inquilino</CardTitle>
          <CardDescription>Información del inquilino</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="text-xl">?</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-[#1B2A55]">
              Sin inquilino
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Esta unidad no tiene inquilino asignado.
            </p>
            <Button className="mt-4 bg-[#1B2A55] hover:bg-[#1B2A55]/90">
              Añadir Inquilino
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl text-[#1B2A55]">Inquilino</CardTitle>
        <CardDescription>Información del inquilino</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={tenant.avatar} alt={tenant.name} />
            <AvatarFallback className="text-xl">
              {getInitials(tenant.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-semibold">{tenant.name}</h3>
            </div>
            <div className="space-y-2">
              {tenant.email && (
                <div className="flex items-center justify-center sm:justify-start">
                  <MailIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{tenant.email}</span>
                </div>
              )}
              {tenant.phone && (
                <div className="flex items-center justify-center sm:justify-start">
                  <PhoneIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{tenant.phone}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                <MailIcon className="mr-2 h-4 w-4" />
                Enviar Correo
              </Button>
              <Button variant="outline">
                <MessageSquareIcon className="mr-2 h-4 w-4" />
                Enviar Mensaje
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
