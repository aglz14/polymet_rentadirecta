import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Ruler, Building, User2 } from "lucide-react";
import UnitStatusBadge from "@/polymet/components/unit-status-badge";
import MaintenanceStatusBadge from "@/polymet/components/maintenance-status-badge";

export type BuildingUnit = {
  id: string;
  unitNumber: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  floor: number;
  rentAmount: number;
  rentStatus: "paid" | "pending" | "overdue" | "vacant";
  tenant?: {
    name: string;
    avatar?: string;
  };
  maintenanceStatus?: "none" | "scheduled" | "inProgress" | "completed";
};

interface BuildingUnitsGridProps {
  units: BuildingUnit[];
  onAddUnit?: () => void;
}

export default function BuildingUnitsGrid({
  units,
  onAddUnit,
}: BuildingUnitsGridProps) {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });

  // Group units by floor
  const unitsByFloor = units.reduce(
    (acc, unit) => {
      const floor = unit.floor;
      if (!acc[floor]) {
        acc[floor] = [];
      }
      acc[floor].push(unit);
      return acc;
    },
    {} as Record<number, BuildingUnit[]>
  );

  // Sort floors in descending order (top floor first)
  const sortedFloors = Object.keys(unitsByFloor)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#1B2A55]">
          Unidades ({units.length})
        </h2>
        {onAddUnit && (
          <Button
            onClick={onAddUnit}
            className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
          >
            Agregar Unidad
          </Button>
        )}
      </div>

      {sortedFloors.length === 0 ? (
        <div className="border rounded-lg p-8 text-center">
          <p className="text-muted-foreground">No hay unidades registradas</p>
        </div>
      ) : (
        sortedFloors.map((floor, index) => (
          <div key={floor} className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#1B2A55]">Piso {floor}</Badge>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {unitsByFloor[floor]
                .sort((a, b) => a.unitNumber.localeCompare(b.unitNumber))
                .map((unit, index) => (
                  <Card key={unit.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">
                            Unidad {unit.unitNumber}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Ruler className="h-3 w-3" />
                            <span>{unit.size} m²</span>
                            <BedDouble className="h-3 w-3 ml-2" />
                            <span>{unit.bedrooms}</span>
                            <Bath className="h-3 w-3 ml-2" />
                            <span>{unit.bathrooms}</span>
                          </div>
                        </div>
                        <UnitStatusBadge status={unit.rentStatus} />
                      </div>

                      {unit.tenant ? (
                        <div className="flex items-center gap-2 py-2 px-3 bg-muted/50 rounded-md mb-3">
                          {unit.tenant.avatar ? (
                            <img
                              src={unit.tenant.avatar}
                              alt={unit.tenant.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <User2 className="h-3 w-3 text-primary" />
                            </div>
                          )}
                          <span className="text-sm truncate">
                            {unit.tenant.name}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 py-2 px-3 bg-muted/50 rounded-md mb-3">
                          <User2 className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Vacante
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-medium">
                            {formatter.format(unit.rentAmount)}
                          </span>
                          <span className="text-xs text-muted-foreground ml-1">
                            /mes
                          </span>
                        </div>
                        <Link to={`/dashboard/unidades/${unit.id}`}>
                          <Button variant="outline" size="sm">
                            Ver Detalles
                          </Button>
                        </Link>
                      </div>

                      {unit.maintenanceStatus &&
                        unit.maintenanceStatus !== "none" && (
                          <div className="mt-2 flex justify-end">
                            <MaintenanceStatusBadge
                              status={unit.maintenanceStatus}
                            />
                          </div>
                        )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
