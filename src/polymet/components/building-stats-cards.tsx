import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Building, Home, TrendingUp, Banknote } from "lucide-react";

interface BuildingStatsCardsProps {
  totalUnits: number;
  occupiedUnits: number;
  occupancyRate: number;
  rentCollectionRate: number;
  totalMonthlyRent: number;
  totalMaintenanceExpenses: number;
  netIncome: number;
}

export default function BuildingStatsCards({
  totalUnits,
  occupiedUnits,
  occupancyRate,
  rentCollectionRate,
  totalMonthlyRent,
  totalMaintenanceExpenses,
  netIncome,
}: BuildingStatsCardsProps) {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted-foreground">Ocupación</p>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold">{occupancyRate}%</p>
                <p className="text-sm text-muted-foreground">
                  ({occupiedUnits}/{totalUnits})
                </p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Building className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <Progress value={occupancyRate} className="h-2 mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted-foreground">Cobro de Rentas</p>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold">{rentCollectionRate}%</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <Progress
            value={rentCollectionRate}
            className="h-2 mt-2 bg-muted"
            indicatorClassName="bg-green-500 dark:bg-green-600"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Renta Mensual</p>
              <p className="text-2xl font-bold">
                {formatter.format(totalMonthlyRent)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Ingresos potenciales
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Home className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Ingreso Neto</p>
              <p className="text-2xl font-bold">
                {formatter.format(netIncome)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Después de gastos: {formatter.format(totalMaintenanceExpenses)}
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Banknote className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
