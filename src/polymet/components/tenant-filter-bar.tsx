import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, SearchIcon, SlidersIcon } from "lucide-react";

interface TenantFilterBarProps {
  totalTenants: number;
  onSearch: (query: string) => void;
  onStatusFilter: (status: string) => void;
  onPropertyFilter: (property: string) => void;
  onAddTenant: () => void;
  properties: string[];
}

export default function TenantFilterBar({
  totalTenants,
  onSearch,
  onStatusFilter,
  onPropertyFilter,
  onAddTenant,
  properties,
}: TenantFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-[#1B2A55] flex items-center">
            Inquilinos
            <Badge variant="secondary" className="ml-2">
              {totalTenants} total
            </Badge>
          </h2>
          <p className="text-muted-foreground">
            Gestione la información de todos sus inquilinos
          </p>
        </div>
        <Button
          onClick={onAddTenant}
          className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Añadir Inquilino
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr,auto,auto] md:gap-2">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nombre, email o propiedad..."
            className="pl-8 w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <Select onValueChange={onStatusFilter} defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="active">Activos</SelectItem>
            <SelectItem value="late">Pago Atrasado</SelectItem>
            <SelectItem value="inactive">Inactivos</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onPropertyFilter} defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Propiedad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las propiedades</SelectItem>
            {properties.map((property, index) => (
              <SelectItem key={property} value={property}>
                {property}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
