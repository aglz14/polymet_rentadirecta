import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import UnitStatusBadge from "@/polymet/components/unit-status-badge";
import TenantList from "@/polymet/components/tenant-list";
import DocumentList from "@/polymet/components/document-list";
import {
  AlertTriangleIcon,
  BuildingIcon,
  CalendarIcon,
  CarIcon,
  CreditCardIcon,
  EditIcon,
  HomeIcon,
  MapPinIcon,
  SquareIcon,
  WifiIcon,
  TvIcon,
  ThermometerIcon,
  UtensilsIcon,
  WashingMachineIcon,
  WarehouseIcon,
} from "lucide-react";

// Mock data for property details
const MOCK_PROPERTY_DATA = {
  "prop-1": {
    id: "prop-1",
    name: "Apartment",
    address:
      "Av. Insurgentes Sur 1602, Crédito Constructor, Benito Juárez, 03940 Ciudad de México, CDMX",
    status: "rented",
    rentAmount: 15000,
    nextPaymentDate: "2024-02-01",
    deposit: 15000,
    paymentMethod: "Transferencia bancaria",
    area: 120,
    constructionArea: 132, // Added construction area
    floors: 1, // Added floors
    maintenancePerSqm: 25, // Added maintenance per square meter
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    amenities: ["Wi-Fi", "TV Cable", "A/C", "Cocina", "Lavandería", "Bodega"],
    images: [
      "https://picsum.photos/seed/apartment1/800/600",
      "https://picsum.photos/seed/apartment2/800/600",
      "https://picsum.photos/seed/apartment3/800/600",
    ],

    tenants: [
      {
        id: "tenant-1",
        name: "Carlos Rodríguez",
        email: "carlos@email.com",
        phone: "+52 55 1234 5678",
        property: "Apartment",
        unit: "A-101",
        status: "active",
        avatar: "https://github.com/yusufhilmi.png",
        contractStart: "2023-01-01",
        contractEnd: "2024-01-01",
      },
      {
        id: "tenant-2",
        name: "Ana Martínez",
        email: "ana@email.com",
        phone: "+52 55 2345 6789",
        property: "Apartment",
        unit: "A-101",
        status: "active",
        avatar: "https://github.com/furkanksl.png",
        contractStart: "2023-01-01",
        contractEnd: "2024-01-01",
      },
    ],

    documents: [
      {
        id: "doc-1",
        name: "Contrato de Arrendamiento",
        type: "contrato",
        date: "2023-01-01",
        fileUrl: "#",
      },
      {
        id: "doc-2",
        name: "Recibo de Renta Enero",
        type: "recibo",
        date: "2024-01-05",
        fileUrl: "#",
      },
      {
        id: "doc-3",
        name: "Inventario de Entrada",
        type: "inventario",
        date: "2023-01-01",
        fileUrl: "#",
      },
    ],

    maintenanceRecords: [
      {
        id: "maint-1",
        title: "Reparación de aire acondicionado",
        status: "completed",
        date: "2023-11-15",
        cost: 1200,
        description:
          "Se reparó el sistema de aire acondicionado en la sala principal.",
      },
      {
        id: "maint-2",
        title: "Pintura de paredes",
        status: "scheduled",
        date: "2024-02-20",
        estimatedCost: 3500,
        description: "Pintura programada para todas las paredes interiores.",
      },
    ],

    payments: [
      {
        id: "pay-1",
        date: "2024-01-05",
        amount: 15000,
        status: "completed",
        method: "Transferencia bancaria",
      },
      {
        id: "pay-2",
        date: "2023-12-03",
        amount: 15000,
        status: "completed",
        method: "Transferencia bancaria",
      },
      {
        id: "pay-3",
        date: "2023-11-04",
        amount: 15000,
        status: "completed",
        method: "Transferencia bancaria",
      },
    ],
  },
  "prop-2": {
    id: "prop-2",
    name: "Casa Residencial",
    address:
      "Calle Palmas 123, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX",
    status: "vacant",
    rentAmount: 25000,
    area: 180,
    constructionArea: 195, // Added construction area
    floors: 2, // Added floors
    maintenancePerSqm: 30, // Added maintenance per square meter
    bedrooms: 3,
    bathrooms: 2.5,
    parkingSpaces: 2,
    amenities: [
      "Jardín",
      "Seguridad 24/7",
      "A/C",
      "Cocina integral",
      "Área de lavado",
    ],

    images: [
      "https://picsum.photos/seed/house1/800/600",
      "https://picsum.photos/seed/house2/800/600",
    ],

    tenants: [],
    documents: [],
    maintenanceRecords: [],
    payments: [],
  },
};

export default function PropertyDetailsPage() {
  const { propertyId = "prop-1" } = useParams();
  const [activeTab, setActiveTab] = useState("distribucion");

  // Get property data based on propertyId
  const property =
    MOCK_PROPERTY_DATA[propertyId as keyof typeof MOCK_PROPERTY_DATA] ||
    MOCK_PROPERTY_DATA["prop-1"];

  const handleViewTenant = (id: string) => {
    console.log(`Viewing tenant ${id}`);
  };

  const handleViewDocuments = (id: string) => {
    console.log(`Viewing documents for tenant ${id}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "rented":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Rentado
          </Badge>
        );

      case "vacant":
        return (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            Vacante
          </Badge>
        );

      default:
        return null;
    }
  };

  const renderAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi":
        return <WifiIcon className="h-4 w-4 mr-2" />;
      case "TV Cable":
        return <TvIcon className="h-4 w-4 mr-2" />;
      case "A/C":
        return <ThermometerIcon className="h-4 w-4 mr-2" />;

      case "Cocina":
        return <UtensilsIcon className="h-4 w-4 mr-2" />;
      case "Lavandería":
        return <WashingMachineIcon className="h-4 w-4 mr-2" />;

      case "Bodega":
        return <WarehouseIcon className="h-4 w-4 mr-2" />;
      default:
        return <HomeIcon className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Property Header */}
      <div className="bg-white dark:bg-card rounded-lg p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1B2A55]">
              {property.name}
            </h1>
            <div className="flex items-start sm:items-center text-muted-foreground mt-1">
              <MapPinIcon className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5 sm:mt-0" />

              <span className="text-xs sm:text-sm">{property.address}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {getStatusBadge(property.status)}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9"
              >
                <EditIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                Editar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9"
              >
                <AlertTriangleIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                Reportar Problema
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {property.images.slice(0, 1).map((image, index) => (
          <div
            key={index}
            className="md:col-span-2 rounded-lg overflow-hidden h-[300px]"
          >
            <img
              src={image}
              alt={`${property.name} - Imagen principal`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="hidden md:grid grid-rows-2 gap-4">
          {property.images.slice(1, 3).map((image, index) => (
            <div
              key={index + 1}
              className="rounded-lg overflow-hidden h-[145px]"
            >
              <img
                src={image}
                alt={`${property.name} - Imagen ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {property.images.length > 3 && (
            <div className="absolute bottom-4 right-4">
              <Button
                variant="secondary"
                className="bg-white/80 hover:bg-white"
              >
                Ver más fotos
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs
        defaultValue="distribucion"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="overflow-x-auto pb-2">
          <TabsList className="grid min-w-max grid-cols-5 w-full max-w-4xl">
            <TabsTrigger
              value="distribucion"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white whitespace-nowrap px-3 sm:px-4"
            >
              Distribución
            </TabsTrigger>
            <TabsTrigger
              value="inquilinos"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white whitespace-nowrap px-3 sm:px-4"
            >
              Inquilinos
            </TabsTrigger>
            <TabsTrigger
              value="documentos"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white whitespace-nowrap px-3 sm:px-4"
            >
              Documentos
            </TabsTrigger>
            <TabsTrigger
              value="mantenimiento"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white whitespace-nowrap px-3 sm:px-4"
            >
              Mantenimiento
            </TabsTrigger>
            <TabsTrigger
              value="pagos"
              className="data-[state=active]:bg-[#1B2A55] data-[state=active]:text-white whitespace-nowrap px-3 sm:px-4"
            >
              Pagos
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Distribución Tab */}
        <TabsContent value="distribucion" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Distribución</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">{property.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">
                        Recámaras
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">{property.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">Baños</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CarIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">
                        {property.parkingSpaces}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Estacionamiento
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <SquareIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">{property.area} m²</div>
                      <div className="text-sm text-muted-foreground">Área</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">{property.floors}</div>
                      <div className="text-sm text-muted-foreground">Pisos</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <SquareIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">
                        {property.constructionArea} m²
                      </div>
                      <div className="text-sm text-muted-foreground">
                        M² Construcción
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center col-span-2">
                    <CreditCardIcon className="h-5 w-5 mr-2 text-muted-foreground" />

                    <div>
                      <div className="font-medium">
                        ${property.maintenancePerSqm} MXN
                      </div>
                      <div className="text-sm text-muted-foreground">
                        $M² Mantenimiento
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Renta Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">
                    ${property.rentAmount.toLocaleString()} MXN
                  </span>
                </div>

                {property.status === "rented" && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Próximo pago
                      </span>
                      <span className="text-sm font-medium flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />

                        {new Date(property.nextPaymentDate).toLocaleDateString(
                          "es-MX"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Depósito
                      </span>
                      <span className="text-sm font-medium">
                        ${property.deposit.toLocaleString()} MXN
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Método de pago
                      </span>
                      <span className="text-sm font-medium flex items-center">
                        <CreditCardIcon className="h-4 w-4 mr-1" />

                        {property.paymentMethod}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Amenidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-secondary/30 rounded-lg"
                  >
                    {renderAmenityIcon(amenity)}
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inquilinos Tab */}
        <TabsContent value="inquilinos" className="mt-6">
          {property.tenants.length > 0 ? (
            <TenantList
              tenants={property.tenants}
              onViewTenant={handleViewTenant}
              onViewDocuments={handleViewDocuments}
            />
          ) : (
            <Card className="py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <BuildingIcon className="h-12 w-12 text-muted-foreground/60" />

                <h3 className="mt-4 text-lg font-semibold text-[#1B2A55]">
                  No hay inquilinos registrados
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Esta propiedad no tiene inquilinos asignados actualmente.
                </p>
                <Button className="mt-6 bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                  Añadir Inquilino
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Documentos Tab */}
        <TabsContent value="documentos" className="mt-6">
          <DocumentList documents={property.documents} />
        </TabsContent>

        {/* Mantenimiento Tab */}
        <TabsContent value="mantenimiento" className="mt-6">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="text-lg">
                Registros de Mantenimiento
              </CardTitle>
              <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 w-full sm:w-auto">
                Programar Mantenimiento
              </Button>
            </CardHeader>
            <CardContent>
              {property.maintenanceRecords.length > 0 ? (
                <div className="space-y-4">
                  {property.maintenanceRecords.map((record, index) => (
                    <div
                      key={record.id}
                      className="flex flex-col sm:flex-row sm:items-start justify-between border-b pb-4 gap-3"
                    >
                      <div>
                        <h3 className="font-medium">{record.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {record.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <CalendarIcon className="h-4 w-4 mr-1 text-muted-foreground" />

                          <span className="text-sm">
                            {new Date(record.date).toLocaleDateString("es-MX")}
                          </span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <UnitStatusBadge
                          status={
                            record.status === "completed"
                              ? "paid"
                              : record.status === "scheduled"
                                ? "pending"
                                : "overdue"
                          }
                        />

                        <div className="mt-2 text-sm font-medium">
                          {record.cost
                            ? `$${record.cost.toLocaleString()} MXN`
                            : record.estimatedCost
                              ? `$${record.estimatedCost.toLocaleString()} MXN (est.)`
                              : ""}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No hay registros de mantenimiento disponibles.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pagos Tab */}
        <TabsContent value="pagos" className="mt-6">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="text-lg">Historial de Pagos</CardTitle>
              <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 w-full sm:w-auto">
                Registrar Pago
              </Button>
            </CardHeader>
            <CardContent>
              {property.payments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Fecha</th>
                        <th className="text-left py-3 px-4">Monto</th>
                        <th className="text-left py-3 px-4">Estado</th>
                        <th className="text-left py-3 px-4">Método</th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.payments.map((payment, index) => (
                        <tr key={payment.id} className="border-b">
                          <td className="py-3 px-4">
                            {new Date(payment.date).toLocaleDateString("es-MX")}
                          </td>
                          <td className="py-3 px-4">
                            ${payment.amount.toLocaleString()} MXN
                          </td>
                          <td className="py-3 px-4">
                            <UnitStatusBadge
                              status={
                                payment.status === "completed"
                                  ? "paid"
                                  : "pending"
                              }
                            />
                          </td>
                          <td className="py-3 px-4">{payment.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No hay registros de pagos disponibles.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
