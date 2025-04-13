import { useState } from "react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/polymet/components/property-card";
import { PlusIcon } from "lucide-react";

export default function EdificiosPage() {
  const [featuredProperties, setFeaturedProperties] =
    useState(sampleProperties);

  const handleViewProperty = (id: string) => {
    console.log(`Viewing property ${id}`);
  };

  const handleEditProperty = (id: string) => {
    console.log(`Editing property ${id}`);
  };

  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B2A55]">
            Edificios
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gestione todos sus edificios y propiedades desde un solo lugar.
          </p>
        </div>
        <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 w-full sm:w-auto">
          <PlusIcon className="mr-2 h-4 w-4" />
          Añadir Propiedad
        </Button>
      </div>

      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#1B2A55]">
            Propiedades Destacadas
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onView={handleViewProperty}
              onEdit={handleEditProperty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const sampleProperties = [
  {
    id: "prop-1",
    name: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    type: "Residencial",
    units: 24,
    occupancyRate: 85,
    rentCollectionRate: 92,
    image: "https://picsum.photos/seed/property1/800/600",
    status: "active",
  },
  {
    id: "prop-2",
    name: "Residencial Los Pinos",
    address: "Calle Los Pinos 456, Guadalajara",
    type: "Residencial",
    units: 16,
    occupancyRate: 75,
    rentCollectionRate: 88,
    image: "https://picsum.photos/seed/property2/800/600",
    status: "active",
  },
  {
    id: "prop-3",
    name: "Centro Comercial Reforma",
    address: "Av. Reforma 789, Ciudad de México",
    type: "Comercial",
    units: 32,
    occupancyRate: 90,
    rentCollectionRate: 95,
    image: "https://picsum.photos/seed/property3/800/600",
    status: "active",
  },
  {
    id: "prop-4",
    name: "Edificio Corporativo Insurgentes",
    address: "Av. Insurgentes 321, Ciudad de México",
    type: "Oficinas",
    units: 48,
    occupancyRate: 65,
    rentCollectionRate: 80,
    image: "https://picsum.photos/seed/property4/800/600",
    status: "maintenance",
  },
];
