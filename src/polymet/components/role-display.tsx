import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldIcon, InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RoleDisplayProps {
  role: "admin" | "manager" | "viewer";
  isCurrentUserAdmin?: boolean;
}

export default function RoleDisplay({
  role,
  isCurrentUserAdmin = false,
}: RoleDisplayProps) {
  const roleInfo = {
    admin: {
      title: "Administrador",
      description: "Acceso completo a todas las funciones y configuraciones",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    },
    manager: {
      title: "Gestor",
      description: "Puede gestionar propiedades, inquilinos y pagos",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    },
    viewer: {
      title: "Visualizador",
      description: "Solo puede ver información, sin permisos de edición",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400",
    },
  };

  const rolePermissions = {
    admin: [
      "Gestión completa de propiedades e inquilinos",
      "Gestión de pagos y documentos",
      "Gestión de usuarios y roles",
      "Configuración de la plataforma",
      "Acceso a reportes y estadísticas",
    ],

    manager: [
      "Gestión de propiedades e inquilinos",
      "Gestión de pagos y documentos",
      "Acceso a reportes y estadísticas",
      "No puede gestionar usuarios ni roles",
      "No puede modificar configuraciones globales",
    ],

    viewer: [
      "Visualización de propiedades e inquilinos",
      "Visualización de pagos y documentos",
      "Visualización de reportes básicos",
      "No puede realizar cambios en el sistema",
      "No puede gestionar usuarios ni roles",
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#1B2A55] flex items-center gap-2">
          <ShieldIcon className="h-5 w-5" />
          Rol y permisos
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>Tu rol actual y permisos en la plataforma</span>
          {!isCurrentUserAdmin && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span>Solo el administrador puede cambiar roles</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">
                    Para solicitar un cambio de rol, contacta al administrador
                    del sistema.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-sm font-medium">Rol actual:</span>
            <Badge className={`${roleInfo[role].color} font-medium`}>
              {roleInfo[role].title}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {roleInfo[role].description}
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Permisos incluidos:</h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {rolePermissions[role].map((permission, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      permission.startsWith("No")
                        ? "bg-red-500"
                        : "bg-[#86BC65]"
                    }`}
                  />

                  <span>{permission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
