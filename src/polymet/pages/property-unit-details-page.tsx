import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  PrinterIcon,
  ShareIcon,
  PencilIcon,
} from "lucide-react";
import UnitImageGallery from "@/polymet/components/unit-image-gallery";
import UnitStatusBadge from "@/polymet/components/unit-status-badge";
import TenantInfoCard from "@/polymet/components/tenant-info-card";
import MultiTenantList from "@/polymet/components/multi-tenant-list";
import DocumentList from "@/polymet/components/document-list";
import UnitImageUploader from "@/polymet/components/unit-image-uploader";
import MaintenanceHistoryTable from "@/polymet/components/maintenance-history-table";
import UnitPaymentHistoryTable from "@/polymet/components/unit-payment-history-table";
import { PROPERTY_UNIT_DETAILS_DATA_WITH_MULTIPLE_TENANTS } from "@/polymet/data/property-unit-details-data-with-multiple-tenants";
import { PROPERTY_UNIT_IMAGES_DATA } from "@/polymet/data/property-unit-images-data";
import { getMaintenanceRecords } from "@/polymet/data/maintenance-records-data";
import { getPaymentHistoryByUnit } from "@/polymet/data/unit-payment-history-data";

export default function PropertyUnitDetailsPage() {
  const { unitId = "unit-1" } = useParams();
  const [activeTab, setActiveTab] = useState("detalles");

  // Get unit details from mock data
  const unitDetails =
    PROPERTY_UNIT_DETAILS_DATA_WITH_MULTIPLE_TENANTS[unitId] ||
    PROPERTY_UNIT_DETAILS_DATA_WITH_MULTIPLE_TENANTS["unit-1"];

  // Get unit images from mock data
  const unitImagesData = PROPERTY_UNIT_IMAGES_DATA[unitId] || [];
  const unitImages = unitImagesData.map((image) => image.url);

  // Get maintenance records for this unit
  const maintenanceRecords = getMaintenanceRecords(unitId);

  // Get payment history for this unit
  const paymentHistory = getPaymentHistoryByUnit(unitId);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  const handleUploadImages = (files) => {
    console.log("Uploading images:", files);
    // In a real app, this would upload the files to a server
  };

  const handleAddMaintenance = () => {
    console.log("Adding new maintenance record");
    // In a real app, this would open a form to add a new maintenance record
  };

  const handleViewMaintenanceDetails = (id) => {
    console.log(`Viewing details for maintenance record ${id}`);
    // In a real app, this would open a modal with details
  };

  const handleEditMaintenanceRecord = (id) => {
    console.log(`Editing maintenance record ${id}`);
    // In a real app, this would open a form to edit the record
  };

  const handleDeleteMaintenanceRecord = (id) => {
    console.log(`Deleting maintenance record ${id}`);
    // In a real app, this would show a confirmation dialog
  };

  const handleViewInvoice = (id) => {
    console.log(`Viewing invoice for payment ${id}`);
    // In a real app, this would open the invoice document
  };

  const handlePrintReceipt = (id) => {
    console.log(`Printing receipt for payment ${id}`);
    // In a real app, this would generate and print a receipt
  };

  return (
    <div className="space-y-6">
      {/* Header with back button and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard/unidades"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4" />
            Volver a Unidades
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <PrinterIcon className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <ShareIcon className="mr-2 h-4 w-4" />
            Compartir
          </Button>
          <Button className="bg-[#1B2A55] hover:bg-[#15213f]" size="sm">
            <PencilIcon className="mr-2 h-4 w-4" />
            Editar
          </Button>
        </div>
      </div>

      {/* Unit title and status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A55]">
            Unidad {unitDetails.unitNumber}
          </h1>
          <p className="text-muted-foreground">
            {unitDetails.building} · {unitDetails.address}
          </p>
        </div>
        <UnitStatusBadge status={unitDetails.rentStatus} size="lg" />
      </div>

      {/* Image gallery */}
      <UnitImageGallery
        images={unitImages}
        title={`Unidad ${unitDetails.unitNumber}`}
      />

      {/* Tabs navigation */}
      <Tabs
        defaultValue="detalles"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="detalles">Detalles</TabsTrigger>
          <TabsTrigger value="inquilino">
            {unitDetails.tenants && unitDetails.tenants.length > 1
              ? "Inquilinos"
              : "Inquilino"}
          </TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
          <TabsTrigger value="mantenimiento">Mantenimiento</TabsTrigger>
          <TabsTrigger value="pagos">Historial de Pagos</TabsTrigger>
        </TabsList>

        {/* Details tab */}
        <TabsContent value="detalles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unit specifications */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 text-[#1B2A55]">
                Especificaciones de la Unidad
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Tamaño</p>
                  <p className="font-medium">{unitDetails.size} m²</p>
                </div>
                {unitDetails.constructionArea && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Área construida
                    </p>
                    <p className="font-medium">
                      {unitDetails.constructionArea} m²
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-foreground">Habitaciones</p>
                  <p className="font-medium">{unitDetails.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Baños</p>
                  <p className="font-medium">{unitDetails.bathrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Piso</p>
                  <p className="font-medium">{unitDetails.floor}</p>
                </div>
                {unitDetails.floors && (
                  <div>
                    <p className="text-sm text-muted-foreground">Niveles</p>
                    <p className="font-medium">{unitDetails.floors}</p>
                  </div>
                )}
                {unitDetails.parkingSpaces && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Estacionamientos
                    </p>
                    <p className="font-medium">{unitDetails.parkingSpaces}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Financial information */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 text-[#1B2A55]">
                Información Financiera
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Renta Mensual</p>
                  <p className="font-medium text-lg">
                    {formatCurrency(unitDetails.rentAmount)}
                  </p>
                </div>
                {unitDetails.publicPricePerSqm && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Precio por m²
                    </p>
                    <p className="font-medium">
                      {formatCurrency(unitDetails.publicPricePerSqm)}
                    </p>
                  </div>
                )}
                {unitDetails.maintenancePerSqm && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Mantenimiento por m²
                    </p>
                    <p className="font-medium">
                      {formatCurrency(unitDetails.maintenancePerSqm)}
                    </p>
                  </div>
                )}
                {unitDetails.leaseEndDate && (
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Fin de Contrato
                    </p>
                    <p className="font-medium">
                      {new Date(unitDetails.leaseEndDate).toLocaleDateString(
                        "es-MX"
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image uploader */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1B2A55]">
                Imágenes de la Unidad
              </h2>
              <UnitImageUploader
                unitId={unitId}
                onUpload={handleUploadImages}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {unitImages.length === 0
                ? "No hay imágenes disponibles para esta unidad. Haga clic en 'Subir Imágenes' para agregar."
                : `${unitImages.length} imágenes disponibles. Puede subir más imágenes haciendo clic en 'Subir Imágenes'.`}
            </p>
          </div>
        </TabsContent>

        {/* Tenant tab */}
        <TabsContent value="inquilino" className="space-y-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#1B2A55]">
              {unitDetails.tenants && unitDetails.tenants.length > 1
                ? "Información de los Inquilinos"
                : "Información del Inquilino"}
            </h2>

            {/* Show MultiTenantList if tenants array exists, otherwise fallback to TenantInfoCard */}
            {unitDetails.tenants ? (
              <MultiTenantList tenants={unitDetails.tenants} />
            ) : (
              <TenantInfoCard tenant={unitDetails.tenant} />
            )}
          </div>
        </TabsContent>

        {/* Documents tab */}
        <TabsContent value="documentos" className="space-y-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#1B2A55]">
              Documentos
            </h2>
            <DocumentList documents={unitDetails.documents || []} />
          </div>
        </TabsContent>

        {/* Maintenance tab */}
        <TabsContent value="mantenimiento" className="space-y-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <MaintenanceHistoryTable
              records={maintenanceRecords}
              onAddMaintenance={handleAddMaintenance}
              onViewDetails={handleViewMaintenanceDetails}
              onEditRecord={handleEditMaintenanceRecord}
              onDeleteRecord={handleDeleteMaintenanceRecord}
            />
          </div>
        </TabsContent>

        {/* Payments tab */}
        <TabsContent value="pagos" className="space-y-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <UnitPaymentHistoryTable
              payments={paymentHistory}
              onViewInvoice={handleViewInvoice}
              onPrintReceipt={handlePrintReceipt}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
