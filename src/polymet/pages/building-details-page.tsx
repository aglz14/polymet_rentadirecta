import { useParams } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, EditIcon, PrinterIcon, ShareIcon } from "lucide-react";
import UnitImageGallery from "@/polymet/components/unit-image-gallery";
import BuildingStatsCards from "@/polymet/components/building-stats-cards";
import BuildingUnitsGrid from "@/polymet/components/building-units-grid";
import MaintenanceExpensesTable from "@/polymet/components/maintenance-expenses-table";
import DocumentList from "@/polymet/components/document-list";

// Mock data for the building details
const BUILDING_DETAILS = {
  "building-1": {
    id: "building-1",
    name: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    type: "Residencial",
    totalUnits: 24,
    occupiedUnits: 20,
    occupancyRate: 83,
    rentCollectionRate: 92,
    totalMonthlyRent: 285000,
    totalMaintenanceExpenses: 45000,
    netIncome: 240000,
    image: "https://picsum.photos/seed/building1/800/600",
    description:
      "Edificio residencial de lujo con 24 unidades distribuidas en 6 pisos. Cuenta con áreas comunes, estacionamiento y seguridad 24/7.",
    yearBuilt: 2015,
    totalArea: 2800,
    amenities: [
      "Gimnasio",
      "Piscina",
      "Área de BBQ",
      "Sala de eventos",
      "Seguridad 24/7",
    ],

    documents: [
      {
        id: "doc-1",
        name: "Reglamento del Edificio",
        type: "legal",
        date: "2022-01-15",
        fileUrl: "#",
      },
      {
        id: "doc-2",
        name: "Póliza de Seguro",
        type: "legal",
        date: "2023-05-20",
        fileUrl: "#",
      },
      {
        id: "doc-3",
        name: "Plan de Mantenimiento Anual",
        type: "otro",
        date: "2024-01-10",
        fileUrl: "#",
      },
    ],
  },
  "building-2": {
    id: "building-2",
    name: "Residencial Los Pinos",
    address: "Calle Los Pinos 456, Guadalajara",
    type: "Residencial",
    totalUnits: 18,
    occupiedUnits: 14,
    occupancyRate: 78,
    rentCollectionRate: 85,
    totalMonthlyRent: 210000,
    totalMaintenanceExpenses: 38000,
    netIncome: 172000,
    image: "https://picsum.photos/seed/building2/800/600",
    description:
      "Complejo residencial con 18 unidades en una zona tranquila y arbolada. Ideal para familias.",
    yearBuilt: 2018,
    totalArea: 2200,
    amenities: ["Jardín", "Área de juegos", "Seguridad 24/7"],
    documents: [
      {
        id: "doc-4",
        name: "Reglamento del Edificio",
        type: "legal",
        date: "2022-03-10",
        fileUrl: "#",
      },
      {
        id: "doc-5",
        name: "Póliza de Seguro",
        type: "legal",
        date: "2023-04-15",
        fileUrl: "#",
      },
    ],
  },
};

// Mock data for building units
const BUILDING_UNITS = {
  "building-1": [
    {
      id: "unit-1",
      unitNumber: "A-101",
      size: 75,
      bedrooms: 2,
      bathrooms: 1,
      floor: 1,
      rentAmount: 12500,
      rentStatus: "paid",
      tenant: {
        name: "Carlos Rodríguez",
        avatar: "https://github.com/yusufhilmi.png",
      },
      maintenanceStatus: "none",
    },
    {
      id: "unit-2",
      unitNumber: "A-102",
      size: 65,
      bedrooms: 1,
      bathrooms: 1,
      floor: 1,
      rentAmount: 9800,
      rentStatus: "pending",
      tenant: {
        name: "Laura González",
        avatar: "https://github.com/yahyabedirhan.png",
      },
      maintenanceStatus: "scheduled",
    },
    {
      id: "unit-3",
      unitNumber: "A-201",
      size: 80,
      bedrooms: 2,
      bathrooms: 2,
      floor: 2,
      rentAmount: 13500,
      rentStatus: "overdue",
      tenant: {
        name: "Miguel Sánchez",
        avatar: "https://github.com/kdrnp.png",
      },
      maintenanceStatus: "inProgress",
    },
    {
      id: "unit-4",
      unitNumber: "A-202",
      size: 70,
      bedrooms: 2,
      bathrooms: 1,
      floor: 2,
      rentAmount: 11000,
      rentStatus: "vacant",
      maintenanceStatus: "none",
    },
    {
      id: "unit-5",
      unitNumber: "A-301",
      size: 85,
      bedrooms: 3,
      bathrooms: 2,
      floor: 3,
      rentAmount: 14500,
      rentStatus: "vacant",
      maintenanceStatus: "completed",
    },
  ],

  "building-2": [
    {
      id: "unit-6",
      unitNumber: "B-101",
      size: 70,
      bedrooms: 2,
      bathrooms: 1,
      floor: 1,
      rentAmount: 11000,
      rentStatus: "paid",
      tenant: {
        name: "Ana Martínez",
        avatar: "https://github.com/furkanksl.png",
      },
      maintenanceStatus: "none",
    },
    {
      id: "unit-7",
      unitNumber: "B-102",
      size: 60,
      bedrooms: 1,
      bathrooms: 1,
      floor: 1,
      rentAmount: 8500,
      rentStatus: "paid",
      tenant: {
        name: "Roberto Méndez",
        avatar: "https://github.com/buyuktas18.png",
      },
      maintenanceStatus: "none",
    },
    {
      id: "unit-8",
      unitNumber: "B-201",
      size: 75,
      bedrooms: 2,
      bathrooms: 2,
      floor: 2,
      rentAmount: 12000,
      rentStatus: "vacant",
      maintenanceStatus: "scheduled",
    },
  ],
};

// Mock data for maintenance expenses
const MAINTENANCE_EXPENSES = {
  "building-1": [
    {
      id: "exp-1",
      description: "Reparación de elevador",
      category: "Equipamiento",
      amount: 15000,
      date: "2024-03-15",
      invoiceNumber: "F-2024-0315",
      status: "pagado",
      provider: "Elevadores Modernos S.A.",
    },
    {
      id: "exp-2",
      description: "Pintura de áreas comunes",
      category: "Mantenimiento",
      amount: 8500,
      date: "2024-03-10",
      invoiceNumber: "F-2024-0310",
      status: "pagado",
      provider: "Pinturas Express",
    },
    {
      id: "exp-3",
      description: "Jardinería mensual",
      category: "Servicios",
      amount: 3200,
      date: "2024-04-01",
      invoiceNumber: "F-2024-0401",
      status: "pendiente",
      provider: "Jardines Verdes",
    },
    {
      id: "exp-4",
      description: "Reparación sistema eléctrico",
      category: "Reparaciones",
      amount: 6800,
      date: "2024-04-15",
      status: "programado",
      provider: "Electricistas Unidos",
    },
    {
      id: "exp-5",
      description: "Limpieza de cisterna",
      category: "Servicios",
      amount: 4500,
      date: "2024-03-25",
      invoiceNumber: "F-2024-0325",
      status: "pagado",
      provider: "Hidrolimpieza",
    },
    {
      id: "exp-6",
      description: "Fumigación trimestral",
      category: "Servicios",
      amount: 2800,
      date: "2024-04-10",
      status: "programado",
      provider: "Fumigaciones Seguras",
    },
  ],

  "building-2": [
    {
      id: "exp-7",
      description: "Mantenimiento de jardín",
      category: "Servicios",
      amount: 2500,
      date: "2024-03-20",
      invoiceNumber: "F-2024-0320",
      status: "pagado",
      provider: "Jardines Verdes",
    },
    {
      id: "exp-8",
      description: "Reparación de bomba de agua",
      category: "Reparaciones",
      amount: 4800,
      date: "2024-03-05",
      invoiceNumber: "F-2024-0305",
      status: "pagado",
      provider: "Hidráulicos Express",
    },
    {
      id: "exp-9",
      description: "Limpieza de áreas comunes",
      category: "Servicios",
      amount: 1800,
      date: "2024-04-01",
      invoiceNumber: "F-2024-0401",
      status: "pendiente",
      provider: "Limpieza Total",
    },
  ],
};

export default function BuildingDetailsPage() {
  const { buildingId = "building-1" } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  // Get building details from mock data
  const buildingDetails =
    BUILDING_DETAILS[buildingId] || BUILDING_DETAILS["building-1"];

  // Get building units
  const buildingUnits = BUILDING_UNITS[buildingId] || [];

  // Get maintenance expenses
  const maintenanceExpenses = MAINTENANCE_EXPENSES[buildingId] || [];

  // Get building images (using the building image as the first one and adding some extras)
  const buildingImages = [
    buildingDetails.image,
    "https://picsum.photos/seed/building_common1/800/600",
    "https://picsum.photos/seed/building_common2/800/600",
    "https://picsum.photos/seed/building_common3/800/600",
  ];

  // Handlers for actions
  const handleViewExpense = (id: string) => {
    console.log(`Viewing expense ${id}`);
  };

  const handleViewInvoice = (id: string) => {
    console.log(`Viewing invoice for expense ${id}`);
  };

  const handlePrintReceipt = (id: string) => {
    console.log(`Printing receipt for expense ${id}`);
  };

  const handleAddExpense = () => {
    console.log("Add expense clicked");
  };

  const handleAddUnit = () => {
    console.log("Add unit clicked");
  };

  return (
    <div className="container py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-2 text-muted-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeftIcon className="mr-1 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-2xl font-bold text-[#1B2A55]">
            {buildingDetails.name}
          </h1>
          <p className="text-muted-foreground">{buildingDetails.address}</p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm">
            <PrinterIcon className="mr-1 h-4 w-4" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <ShareIcon className="mr-1 h-4 w-4" />
            Compartir
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
          >
            <EditIcon className="mr-1 h-4 w-4" />
            Editar
          </Button>
        </div>
      </div>

      {/* Building Stats Cards */}
      <BuildingStatsCards
        totalUnits={buildingDetails.totalUnits}
        occupiedUnits={buildingDetails.occupiedUnits}
        occupancyRate={buildingDetails.occupancyRate}
        rentCollectionRate={buildingDetails.rentCollectionRate}
        totalMonthlyRent={buildingDetails.totalMonthlyRent}
        totalMaintenanceExpenses={buildingDetails.totalMaintenanceExpenses}
        netIncome={buildingDetails.netIncome}
      />

      {/* Image Gallery */}
      <div className="rounded-lg overflow-hidden">
        <UnitImageGallery
          images={buildingImages}
          title={buildingDetails.name}
        />
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="details"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 overflow-x-auto flex-nowrap">
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1B2A55] data-[state=active]:bg-transparent data-[state=active]:text-[#1B2A55] px-4 py-2 whitespace-nowrap"
          >
            Detalles
          </TabsTrigger>
          <TabsTrigger
            value="units"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1B2A55] data-[state=active]:bg-transparent data-[state=active]:text-[#1B2A55] px-4 py-2 whitespace-nowrap"
          >
            Unidades
          </TabsTrigger>
          <TabsTrigger
            value="maintenance"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1B2A55] data-[state=active]:bg-transparent data-[state=active]:text-[#1B2A55] px-4 py-2 whitespace-nowrap"
          >
            Mantenimiento
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1B2A55] data-[state=active]:bg-transparent data-[state=active]:text-[#1B2A55] px-4 py-2 whitespace-nowrap"
          >
            Documentos
          </TabsTrigger>
          <TabsTrigger
            value="payments"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1B2A55] data-[state=active]:bg-transparent data-[state=active]:text-[#1B2A55] px-4 py-2 whitespace-nowrap"
          >
            Pagos
          </TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-[#1B2A55] mb-4">
                  Información del Edificio
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Tipo de Edificio
                    </p>
                    <p className="font-medium">{buildingDetails.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Año de Construcción
                    </p>
                    <p className="font-medium">{buildingDetails.yearBuilt}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Área Total</p>
                    <p className="font-medium">
                      {buildingDetails.totalArea} m²
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total de Unidades
                    </p>
                    <p className="font-medium">{buildingDetails.totalUnits}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Unidades Ocupadas
                    </p>
                    <p className="font-medium">
                      {buildingDetails.occupiedUnits}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Unidades Disponibles
                    </p>
                    <p className="font-medium">
                      {buildingDetails.totalUnits -
                        buildingDetails.occupiedUnits}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#1B2A55] mb-4">
                  Información Financiera
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Renta Mensual Total
                    </p>
                    <p className="font-medium">
                      $
                      {buildingDetails.totalMonthlyRent.toLocaleString("es-MX")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Gastos de Mantenimiento
                    </p>
                    <p className="font-medium">
                      $
                      {buildingDetails.totalMaintenanceExpenses.toLocaleString(
                        "es-MX"
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Ingreso Neto
                    </p>
                    <p className="font-medium">
                      ${buildingDetails.netIncome.toLocaleString("es-MX")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Tasa de Cobro
                    </p>
                    <p className="font-medium">
                      {buildingDetails.rentCollectionRate}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-[#1B2A55] mb-4">
                  Ubicación
                </h3>
                <div className="bg-muted rounded-lg h-[200px] flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa no disponible</p>
                </div>
                <p className="mt-2 text-sm">{buildingDetails.address}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#1B2A55] mb-4">
                  Amenidades
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {buildingDetails.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#1B2A55]"></div>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#1B2A55] mb-4">
                  Descripción
                </h3>
                <p className="text-sm">{buildingDetails.description}</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Units Tab */}
        <TabsContent value="units" className="pt-6">
          <BuildingUnitsGrid units={buildingUnits} onAddUnit={handleAddUnit} />
        </TabsContent>

        {/* Maintenance Tab */}
        <TabsContent value="maintenance" className="pt-6">
          <MaintenanceExpensesTable
            expenses={maintenanceExpenses}
            onViewExpense={handleViewExpense}
            onViewInvoice={handleViewInvoice}
            onPrintReceipt={handlePrintReceipt}
            onAddExpense={handleAddExpense}
          />
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="pt-6">
          <DocumentList documents={buildingDetails.documents || []} />
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="pt-6">
          <div className="border rounded-lg p-6 text-center">
            <p className="text-muted-foreground">No hay registros de pagos</p>
            <Button className="mt-4 bg-[#1B2A55] hover:bg-[#1B2A55]/90">
              Registrar Pago
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
