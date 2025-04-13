import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCardIcon, HomeIcon, UserIcon, UsersIcon } from "lucide-react";

interface TenantStatsProps {
  totalTenants: number;
  activeTenants: number;
  lateTenants: number;
  inactiveTenants: number;
  totalRent?: number;
  properties?: number;
}

export default function TenantStats({
  totalTenants,
  activeTenants,
  lateTenants,
  inactiveTenants,
  totalRent,
  properties,
}: TenantStatsProps) {
  const activePercentage =
    totalTenants > 0 ? Math.round((activeTenants / totalTenants) * 100) : 0;

  const latePercentage =
    totalTenants > 0 ? Math.round((lateTenants / totalTenants) * 100) : 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-[#1B2A55]">
            Total de Inquilinos
          </CardTitle>
          <UsersIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#1B2A55]">
            {totalTenants}
          </div>
          <p className="text-xs text-muted-foreground">
            En {properties || "todas las"} propiedades
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-[#1B2A55]">
            Inquilinos Activos
          </CardTitle>
          <Badge className="bg-[#86BC65]/20 text-[#86BC65] dark:bg-[#86BC65]/30 dark:text-[#86BC65]">
            {activePercentage}%
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#1B2A55]">
            {activeTenants}
          </div>
          <p className="text-xs text-muted-foreground">
            Con contratos vigentes
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-[#1B2A55]">
            Pagos Atrasados
          </CardTitle>
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            {latePercentage}%
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#1B2A55]">{lateTenants}</div>
          <p className="text-xs text-muted-foreground">Requieren seguimiento</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-[#1B2A55]">
            {totalRent ? "Renta Mensual" : "Inactivos"}
          </CardTitle>
          {totalRent ? (
            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
              {totalTenants > 0
                ? Math.round((inactiveTenants / totalTenants) * 100)
                : 0}
              %
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#1B2A55]">
            {totalRent
              ? `$${totalRent.toLocaleString("es-MX")}`
              : inactiveTenants}
          </div>
          <p className="text-xs text-muted-foreground">
            {totalRent ? "Total de rentas activas" : "Contratos por renovar"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
