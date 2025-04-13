import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, PencilIcon } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    address: string;
    type: string;
    units: number;
    occupancyRate: number;
    rentCollectionRate: number;
    image: string;
    status: "active" | "maintenance";
  };
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export default function PropertyCard({
  property,
  onView,
  onEdit,
}: PropertyCardProps) {
  const getStatusBadge = () => {
    switch (property.status) {
      case "active":
        return (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            Activo
          </Badge>
        );

      case "maintenance":
        return (
          <Badge className="absolute top-3 right-3 bg-amber-500 hover:bg-amber-600">
            En Mantenimiento
          </Badge>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link to={`/dashboard/edificios/${property.id}`}>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
        {getStatusBadge()}
      </div>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{property.name}</h3>
            <Badge variant="outline" className="mt-1">
              {property.type}
            </Badge>
            <p className="text-sm text-muted-foreground mt-1">
              {property.address}
            </p>
            <p className="text-sm mt-1">
              <span className="font-medium">{property.units}</span>{" "}
              <span className="text-muted-foreground">Unidades</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Ocupación</span>
              <span className="font-medium">{property.occupancyRate}%</span>
            </div>
            <Progress value={property.occupancyRate} className="h-2" />

            <div className="flex justify-between items-center text-sm">
              <span>Cobro de Rentas</span>
              <span className="font-medium">
                {property.rentCollectionRate}%
              </span>
            </div>
            <Progress value={property.rentCollectionRate} className="h-2" />
          </div>

          <div className="flex gap-2">
            <Link to={`/dashboard/edificios/${property.id}`} className="flex-1">
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  if (onView) onView(property.id);
                  // If onView is not provided, the Link will navigate to the route
                }}
              >
                <EyeIcon className="mr-2 h-4 w-4" />
                Ver Detalles
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-10 flex-none"
              onClick={() => onEdit && onEdit(property.id)}
            >
              <PencilIcon className="h-4 w-4" />
              <span className="sr-only">Editar</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
