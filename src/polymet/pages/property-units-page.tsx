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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PropertyUnitCard from "@/polymet/components/property-unit-card";
import { PROPERTY_UNITS_DATA } from "@/polymet/data/property-units-data";
import {
  BuildingIcon,
  DoorOpenIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
} from "lucide-react";

export default function PropertyUnitsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [buildingFilter, setBuildingFilter] = useState("all");
  const [viewMode, setViewMode] = useState("all");

  // Extract unique building names for the filter dropdown
  const buildings = [
    ...new Set(PROPERTY_UNITS_DATA.map((unit) => unit.building)),
  ];

  // Filter units based on search query, status, and building
  const filteredUnits = PROPERTY_UNITS_DATA.filter((unit) => {
    // Search filter
    const matchesSearch =
      unit.unitNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.building.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (unit.tenant?.name &&
        unit.tenant.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Status filter
    const matchesStatus =
      statusFilter === "all" || unit.rentStatus === statusFilter;

    // Building filter
    const matchesBuilding =
      buildingFilter === "all" || unit.building === buildingFilter;

    // View mode filter
    const matchesViewMode =
      viewMode === "all" ||
      (viewMode === "vacant" && unit.rentStatus === "vacant") ||
      (viewMode === "occupied" && unit.rentStatus !== "vacant") ||
      (viewMode === "maintenance" &&
        unit.maintenanceStatus !== "none" &&
        unit.maintenanceStatus !== undefined);

    return matchesSearch && matchesStatus && matchesBuilding && matchesViewMode;
  });

  // Count units by status for the summary
  const unitCounts = {
    total: PROPERTY_UNITS_DATA.length,
    occupied: PROPERTY_UNITS_DATA.filter((unit) => unit.rentStatus !== "vacant")
      .length,
    vacant: PROPERTY_UNITS_DATA.filter((unit) => unit.rentStatus === "vacant")
      .length,
    maintenance: PROPERTY_UNITS_DATA.filter(
      (unit) =>
        unit.maintenanceStatus !== "none" &&
        unit.maintenanceStatus !== undefined
    ).length,
  };

  const handleViewUnit = (id: string) => {
    console.log(`Viewing unit ${id}`);
  };

  const handleEditUnit = (id: string) => {
    console.log(`Editing unit ${id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1B2A55]">
          Unidades de Propiedades
        </h1>
        <p className="text-muted-foreground">
          Gestione todas sus unidades individuales de propiedades
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#1B2A55]">
              Total de Unidades
            </CardTitle>
            <DoorOpenIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1B2A55]">
              {unitCounts.total}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#1B2A55]">
              Ocupadas
            </CardTitle>
            <Badge className="bg-[#86BC65]/20 text-[#86BC65] dark:bg-[#86BC65]/30 dark:text-[#86BC65]">
              {Math.round((unitCounts.occupied / unitCounts.total) * 100)}%
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1B2A55]">
              {unitCounts.occupied}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#1B2A55]">
              Vacantes
            </CardTitle>
            <Badge className="bg-blue-100 text-[#1B2A55] dark:bg-blue-900/30 dark:text-blue-400">
              {Math.round((unitCounts.vacant / unitCounts.total) * 100)}%
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1B2A55]">
              {unitCounts.vacant}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#1B2A55]">
              En Mantenimiento
            </CardTitle>
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
              {Math.round((unitCounts.maintenance / unitCounts.total) * 100)}%
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1B2A55]">
              {unitCounts.maintenance}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div>
              <CardTitle className="text-xl flex items-center text-[#1B2A55]">
                <DoorOpenIcon className="mr-2 h-5 w-5 text-[#1B2A55]" />
                Unidades
              </CardTitle>
              <CardDescription>
                {filteredUnits.length} unidades encontradas
              </CardDescription>
            </div>
            <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
              <PlusIcon className="mr-2 h-4 w-4" />
              Añadir Unidad
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Tabs - Improved responsive behavior */}
            <div className="overflow-x-auto pb-2">
              <Tabs
                defaultValue="all"
                value={viewMode}
                onValueChange={setViewMode}
                className="w-full min-w-[300px]"
              >
                <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap"
                  >
                    Todas
                  </TabsTrigger>
                  <TabsTrigger
                    value="occupied"
                    className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap"
                  >
                    Ocupadas
                  </TabsTrigger>
                  <TabsTrigger
                    value="vacant"
                    className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap"
                  >
                    Vacantes
                  </TabsTrigger>
                  <TabsTrigger
                    value="maintenance"
                    className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap"
                  >
                    Mantenimiento
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Search and Filters - Improved responsive layout */}
            <div className="space-y-4">
              {/* Search Bar - Full width on all screens */}
              <div className="relative w-full">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

                <Input
                  type="search"
                  placeholder="Buscar por número, edificio o inquilino..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters - Improved responsive grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr,auto] gap-2">
                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full border-input focus:ring-[#1B2A55]">
                    <SelectValue placeholder="Estado de Renta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="paid">Pagado</SelectItem>
                    <SelectItem value="pending">Pendiente</SelectItem>
                    <SelectItem value="overdue">Atrasado</SelectItem>
                    <SelectItem value="vacant">Vacante</SelectItem>
                  </SelectContent>
                </Select>

                {/* Building Filter */}
                <Select
                  value={buildingFilter}
                  onValueChange={setBuildingFilter}
                >
                  <SelectTrigger className="w-full border-input focus:ring-[#1B2A55]">
                    <SelectValue placeholder="Edificio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los edificios</SelectItem>
                    {buildings.map((building, index) => (
                      <SelectItem key={building} value={building}>
                        {building}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Advanced Filters Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-input hover:bg-[#86BC65]/10 hover:text-[#1B2A55] justify-self-end"
                >
                  <SlidersIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Units Grid - Changed from 3 columns to 2 columns */}
      {filteredUnits.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredUnits.map((unit, index) => (
            <PropertyUnitCard
              key={unit.id}
              unit={unit}
              onView={handleViewUnit}
              onEdit={handleEditUnit}
            />
          ))}
        </div>
      ) : (
        <Card className="py-12">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <BuildingIcon className="h-12 w-12 text-muted-foreground/60" />

            <h3 className="mt-4 text-lg font-semibold text-[#1B2A55]">
              No se encontraron unidades
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Intente ajustar sus filtros o añada nuevas unidades.
            </p>
            <Button className="mt-6 bg-[#1B2A55] hover:bg-[#1B2A55]/90">
              <PlusIcon className="mr-2 h-4 w-4" />
              Añadir Unidad
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
