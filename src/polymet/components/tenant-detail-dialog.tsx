import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  ClipboardListIcon,
  CreditCardIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Tenant } from "@/polymet/data/tenants-data";

interface TenantDetailDialogProps {
  tenant: Tenant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TenantDetailDialog({
  tenant,
  open,
  onOpenChange,
}: TenantDetailDialogProps) {
  const [activeTab, setActiveTab] = useState("info");

  if (!tenant) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Activo
          </Badge>
        );

      case "late":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            Pago Atrasado
          </Badge>
        );

      case "inactive":
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            Inactivo
          </Badge>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-[#1B2A55] flex items-center gap-2">
            Detalles del Inquilino
            {getStatusBadge(tenant.status)}
          </DialogTitle>
          <DialogDescription>
            Información completa del inquilino y su contrato
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-4 py-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={tenant.avatar} alt={tenant.name} />

            <AvatarFallback>
              {tenant.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold text-[#1B2A55]">
              {tenant.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {tenant.property} • {tenant.unit}
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="info"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white"
            >
              Información
            </TabsTrigger>
            <TabsTrigger
              value="lease"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white"
            >
              Contrato
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white"
            >
              Documentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Correo Electrónico
                </p>
                <p className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-[#1B2A55]" />

                  {tenant.email}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-[#1B2A55]" />

                  {tenant.phone}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Propiedad</p>
                <p className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#1B2A55]" />

                  {tenant.property}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Unidad</p>
                <p className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#1B2A55]" />

                  {tenant.unit}
                </p>
              </div>
            </div>

            {tenant.notes && (
              <>
                <Separator />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Notas</p>
                  <p className="text-sm">{tenant.notes}</p>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="lease" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Inicio de Contrato
                </p>
                <p className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-[#1B2A55]" />

                  {formatDate(tenant.leaseStart)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Fin de Contrato</p>
                <p className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-[#1B2A55]" />

                  {formatDate(tenant.leaseEnd)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Renta Mensual</p>
                <p className="flex items-center gap-2">
                  <CreditCardIcon className="h-4 w-4 text-[#1B2A55]" />$
                  {tenant.rentAmount?.toLocaleString("es-MX")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Método de Pago</p>
                <p className="flex items-center gap-2">
                  <CreditCardIcon className="h-4 w-4 text-[#1B2A55]" />

                  {tenant.paymentMethod || "No especificado"}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {tenant.documents || 0} documentos disponibles
              </p>
              <Button variant="outline" size="sm" className="text-[#1B2A55]">
                <FileTextIcon className="h-4 w-4 mr-2" />
                Añadir Documento
              </Button>
            </div>

            {tenant.documents && tenant.documents > 0 ? (
              <div className="space-y-2">
                <div className="flex items-center p-2 border rounded-md hover:bg-accent cursor-pointer">
                  <FileTextIcon className="h-5 w-5 mr-3 text-[#1B2A55]" />

                  <div>
                    <p className="text-sm font-medium">
                      Contrato de Arrendamiento
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF • {formatDate(tenant.leaseStart)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-2 border rounded-md hover:bg-accent cursor-pointer">
                  <ClipboardListIcon className="h-5 w-5 mr-3 text-[#1B2A55]" />

                  <div>
                    <p className="text-sm font-medium">Inventario de Entrada</p>
                    <p className="text-xs text-muted-foreground">
                      PDF • {formatDate(tenant.leaseStart)}
                    </p>
                  </div>
                </div>

                {tenant.documents > 2 && (
                  <div className="flex items-center p-2 border rounded-md hover:bg-accent cursor-pointer">
                    <FileTextIcon className="h-5 w-5 mr-3 text-[#1B2A55]" />

                    <div>
                      <p className="text-sm font-medium">
                        Identificación Oficial
                      </p>
                      <p className="text-xs text-muted-foreground">
                        JPG • {formatDate(tenant.leaseStart)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <FileTextIcon className="h-10 w-10 text-muted-foreground mb-2" />

                <p className="text-muted-foreground">
                  No hay documentos disponibles
                </p>
                <Button variant="link" className="mt-2 text-[#1B2A55]">
                  Añadir el primer documento
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
          <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
            Editar Inquilino
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
