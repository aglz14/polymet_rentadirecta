import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EyeIcon,
  FileTextIcon,
  MailIcon,
  MoreHorizontalIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import {
  TENANTS_DATA,
  Tenant,
  getUniqueProperties,
  getTenantCounts,
  getTotalRentAmount,
} from "@/polymet/data/tenants-data";
import TenantStats from "@/polymet/components/tenant-stats";
import TenantFilterBar from "@/polymet/components/tenant-filter-bar";
import TenantDetailDialog from "@/polymet/components/tenant-detail-dialog";

export default function InquilinosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  // Get unique properties for the filter dropdown
  const properties = getUniqueProperties();

  // Get tenant counts for stats
  const tenantCounts = getTenantCounts();

  // Get total rent amount
  const totalRent = getTotalRentAmount();

  // Filter tenants based on search query, status, and property
  const filteredTenants = TENANTS_DATA.filter((tenant) => {
    // Search filter
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.unit.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "all" || tenant.status === statusFilter;

    // Property filter
    const matchesProperty =
      propertyFilter === "all" || tenant.property === propertyFilter;

    return matchesSearch && matchesStatus && matchesProperty;
  });

  const handleViewTenant = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setDetailDialogOpen(true);
  };

  const handleViewDocuments = (tenant: Tenant) => {
    console.log(`Viewing documents for tenant: ${tenant.id}`);
  };

  const handleContactTenant = (tenant: Tenant, method: "email" | "phone") => {
    if (method === "email") {
      window.location.href = `mailto:${tenant.email}`;
    } else {
      window.location.href = `tel:${tenant.phone}`;
    }
  };

  const handleAddTenant = () => {
    console.log("Add tenant clicked");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Activo
          </Badge>
        );

      case "late":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            Pago Atrasado
          </Badge>
        );

      case "inactive":
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            Inactivo
          </Badge>
        );

      default:
        return null;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <TenantStats
        totalTenants={tenantCounts.total}
        activeTenants={tenantCounts.active}
        lateTenants={tenantCounts.late}
        inactiveTenants={tenantCounts.inactive}
        totalRent={totalRent}
        properties={properties.length}
      />

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <TenantFilterBar
            totalTenants={tenantCounts.total}
            onSearch={setSearchQuery}
            onStatusFilter={setStatusFilter}
            onPropertyFilter={setPropertyFilter}
            onAddTenant={handleAddTenant}
            properties={properties}
          />
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Inquilino</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Contacto
                  </TableHead>
                  <TableHead>Propiedad / Unidad</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Contrato
                  </TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTenants.length > 0 ? (
                  filteredTenants.map((tenant, index) => (
                    <TableRow key={tenant.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={tenant.avatar}
                              alt={tenant.name}
                            />

                            <AvatarFallback>
                              {tenant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{tenant.name}</div>
                            <div className="text-sm text-muted-foreground md:hidden">
                              {tenant.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center text-sm">
                            <MailIcon className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            {tenant.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <PhoneIcon className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            {tenant.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{tenant.property}</div>
                        <div className="text-sm text-muted-foreground">
                          Unidad {tenant.unit}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="text-sm">
                          {tenant.leaseStart && tenant.leaseEnd ? (
                            <>
                              {formatDate(tenant.leaseStart)} -{" "}
                              {formatDate(tenant.leaseEnd)}
                            </>
                          ) : (
                            "No disponible"
                          )}
                        </div>
                        {tenant.rentAmount && (
                          <div className="text-sm font-medium">
                            ${tenant.rentAmount.toLocaleString("es-MX")} /mes
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleContactTenant(tenant, "email")}
                            title="Enviar Email"
                          >
                            <MailIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleContactTenant(tenant, "phone")}
                            title="Llamar"
                          >
                            <PhoneIcon className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontalIcon className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleViewTenant(tenant)}
                              >
                                <EyeIcon className="mr-2 h-4 w-4" />
                                Ver Detalles
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleViewDocuments(tenant)}
                              >
                                <FileTextIcon className="mr-2 h-4 w-4" />
                                Ver Documentos
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <UserIcon className="h-10 w-10 mb-2" />
                        <p>No se encontraron inquilinos</p>
                        <Button
                          variant="link"
                          className="mt-2 text-[#1B2A55]"
                          onClick={handleAddTenant}
                        >
                          Añadir un nuevo inquilino
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Tenant Detail Dialog */}
      <TenantDetailDialog
        tenant={selectedTenant}
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
      />
    </div>
  );
}
