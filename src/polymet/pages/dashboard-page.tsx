import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/polymet/components/stats-card";
import RentStatusChart from "@/polymet/components/rent-status-chart";
import TenantList from "@/polymet/components/tenant-list";
import {
  BuildingIcon,
  CreditCardIcon,
  FileTextIcon,
  UsersIcon,
} from "lucide-react";

export default function DashboardPage() {
  const [recentTenants, setRecentTenants] = useState(sampleTenants);

  const handleViewTenant = (id: string) => {
    console.log(`Viewing tenant ${id}`);
  };

  const handleViewDocuments = (id: string) => {
    console.log(`Viewing documents for tenant ${id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1B2A55]">Panel Principal</h1>
        <p className="text-muted-foreground">
          Bienvenido de nuevo, Juan. Aquí está un resumen de sus propiedades.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total de Propiedades"
          value="15"
          icon={<BuildingIcon className="h-5 w-5" />}
          change={{
            value: 12,
            trend: "up",
            text: "desde el mes pasado",
          }}
        />

        <StatsCard
          title="Rentas Cobradas"
          value="$45,231"
          icon={<CreditCardIcon className="h-5 w-5" />}
          change={{
            value: 8,
            trend: "up",
            text: "desde el mes pasado",
          }}
        />

        <StatsCard
          title="Total de Inquilinos"
          value="124"
          icon={<UsersIcon className="h-5 w-5" />}
          change={{
            value: 2,
            trend: "down",
            text: "desde el mes pasado",
          }}
        />

        <StatsCard
          title="Documentos Pendientes"
          value="7"
          icon={<FileTextIcon className="h-5 w-5" />}
          change={{
            value: 0,
            trend: "neutral",
            text: "sin cambios",
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-[#1B2A55]">Estado de Rentas</CardTitle>
            <div className="flex space-x-1 rounded-md bg-muted p-1">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-sm px-3 py-1.5 bg-background shadow-sm"
              >
                Mensual
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-sm px-3 py-1.5 text-muted-foreground"
              >
                Trimestral
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-sm px-3 py-1.5 text-muted-foreground"
              >
                Anual
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <RentStatusChart data={rentStatusData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-[#1B2A55]">
              Próximos Vencimientos
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="border-[#1B2A55] text-[#1B2A55] hover:bg-[#86BC65]/10 hover:text-[#1B2A55]"
            >
              Ver Todos
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDueDates.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`rounded-full p-2 ${
                        item.type === "rent"
                          ? "bg-blue-100 text-[#1B2A55] dark:bg-blue-900/30 dark:text-blue-400"
                          : item.type === "contract"
                            ? "bg-purple-100 text-[#1B2A55] dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-[#86BC65]/20 text-[#86BC65] dark:bg-[#86BC65]/30 dark:text-[#86BC65]"
                      }`}
                    >
                      {item.type === "rent" ? (
                        <CreditCardIcon className="h-4 w-4" />
                      ) : item.type === "contract" ? (
                        <FileTextIcon className="h-4 w-4" />
                      ) : (
                        <BuildingIcon className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1B2A55]">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      item.daysLeft <= 3
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : item.daysLeft <= 7
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-[#86BC65]/20 text-[#86BC65] dark:bg-[#86BC65]/30 dark:text-[#86BC65]"
                    }`}
                  >
                    {item.daysLeft} días
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <TenantList
        tenants={recentTenants}
        onViewTenant={handleViewTenant}
        onViewDocuments={handleViewDocuments}
      />
    </div>
  );
}

const sampleTenants = [
  {
    id: "tenant-1",
    name: "Carlos Rodríguez",
    email: "carlos@example.com",
    phone: "+52 55 1234 5678",
    property: "Edificio Alameda",
    unit: "A-101",
    status: "active",
    avatar: "https://github.com/yusufhilmi.png",
  },
  {
    id: "tenant-2",
    name: "Ana Martínez",
    email: "ana@example.com",
    phone: "+52 55 2345 6789",
    property: "Edificio Alameda",
    unit: "A-202",
    status: "late",
    avatar: "https://github.com/furkanksl.png",
  },
  {
    id: "tenant-3",
    name: "Miguel Sánchez",
    email: "miguel@example.com",
    phone: "+52 55 3456 7890",
    property: "Residencial Los Pinos",
    unit: "B-305",
    status: "inactive",
    avatar: "https://github.com/kdrnp.png",
  },
  {
    id: "tenant-4",
    name: "Laura González",
    email: "laura@example.com",
    phone: "+52 55 4567 8901",
    property: "Residencial Los Pinos",
    unit: "C-401",
    status: "active",
    avatar: "https://github.com/yahyabedirhan.png",
  },
];

const rentStatusData = {
  monthly: [
    { name: "Ene", pagado: 4000, pendiente: 1000, atrasado: 500 },
    { name: "Feb", pagado: 4200, pendiente: 800, atrasado: 400 },
    { name: "Mar", pagado: 5000, pendiente: 1200, atrasado: 300 },
    { name: "Abr", pagado: 4800, pendiente: 900, atrasado: 450 },
    { name: "May", pagado: 5200, pendiente: 700, atrasado: 350 },
    { name: "Jun", pagado: 5500, pendiente: 600, atrasado: 200 },
  ],

  quarterly: [
    { name: "Q1", pagado: 13200, pendiente: 3000, atrasado: 1200 },
    { name: "Q2", pagado: 15500, pendiente: 2200, atrasado: 1000 },
    { name: "Q3", pagado: 14800, pendiente: 2500, atrasado: 900 },
    { name: "Q4", pagado: 16200, pendiente: 1800, atrasado: 800 },
  ],

  yearly: [
    { name: "2021", pagado: 48000, pendiente: 12000, atrasado: 6000 },
    { name: "2022", pagado: 52000, pendiente: 10000, atrasado: 5000 },
    { name: "2023", pagado: 59700, pendiente: 9500, atrasado: 3900 },
  ],
};

const upcomingDueDates = [
  {
    id: "due-1",
    type: "rent",
    title: "Vencimiento de Renta - Edificio Alameda",
    description: "10 unidades con renta por vencer",
    daysLeft: 3,
  },
  {
    id: "due-2",
    type: "contract",
    title: "Renovación de Contrato - Ana Martínez",
    description: "Unidad A-202, Edificio Alameda",
    daysLeft: 7,
  },
  {
    id: "due-3",
    type: "maintenance",
    title: "Mantenimiento Programado - Residencial Los Pinos",
    description: "Mantenimiento de áreas comunes",
    daysLeft: 14,
  },
  {
    id: "due-4",
    type: "rent",
    title: "Vencimiento de Renta - Centro Comercial Reforma",
    description: "5 unidades con renta por vencer",
    daysLeft: 5,
  },
];
