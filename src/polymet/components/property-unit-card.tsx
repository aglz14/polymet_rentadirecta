import { Link } from "react-router-dom";
import { Building, BedDouble, Bath, Ruler, User2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UnitStatusBadge from "@/polymet/components/unit-status-badge";
import MaintenanceStatusBadge from "@/polymet/components/maintenance-status-badge";

type PropertyUnitCardProps = {
  unit: {
    id: string;
    unitNumber: string;
    size: number;
    bedrooms: number;
    bathrooms: number;
    floor: number;
    building: string;
    address: string;
    tenant?: {
      name: string;
      avatar?: string;
    };
    rentAmount: number;
    rentStatus: "paid" | "pending" | "overdue" | "vacant";
    leaseEndDate?: string;
    maintenanceStatus?: "none" | "scheduled" | "inProgress" | "completed";
    image?: string;
  };
  onEdit?: (id: string) => void;
};

export default function PropertyUnitCard({
  unit,
  onEdit,
}: PropertyUnitCardProps) {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        {unit.image ? (
          <img
            src={unit.image}
            alt={`Unidad ${unit.unitNumber}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Building className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <UnitStatusBadge status={unit.rentStatus} />
          {unit.maintenanceStatus && unit.maintenanceStatus !== "none" && (
            <MaintenanceStatusBadge status={unit.maintenanceStatus} />
          )}
        </div>
      </div>

      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[#1B2A55]">
              Unidad {unit.unitNumber}
            </h3>
            <p className="text-sm text-muted-foreground">{unit.building}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-[#1B2A55]">
              {formatter.format(unit.rentAmount)}
            </p>
            <p className="text-xs text-muted-foreground">por mes</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{unit.bedrooms} Hab.</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{unit.bathrooms} Baños</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{unit.size} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Piso {unit.floor}</span>
          </div>
        </div>

        {unit.tenant ? (
          <div className="flex items-center gap-3 py-2 px-3 bg-muted/50 rounded-md mb-4">
            {unit.tenant.avatar ? (
              <img
                src={unit.tenant.avatar}
                alt={unit.tenant.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User2 className="h-4 w-4 text-primary" />
              </div>
            )}
            <div>
              <p className="text-sm font-medium">{unit.tenant.name}</p>
              <p className="text-xs text-muted-foreground">
                {unit.leaseEndDate
                  ? `Contrato hasta ${new Date(
                      unit.leaseEndDate
                    ).toLocaleDateString("es-MX")}`
                  : "Inquilino"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 py-2 px-3 bg-muted/50 rounded-md mb-4">
            <User2 className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Sin inquilino</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        <Link to={`/dashboard/unidades/${unit.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            Ver Detalles
          </Button>
        </Link>
        {onEdit && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(unit.id)}
            className="flex-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pencil"
            >
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <span className="sr-only">Editar</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
