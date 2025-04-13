import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EyeIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  status: "active" | "late" | "inactive";
  avatar?: string;
}

interface TenantListProps {
  tenants: Tenant[];
  onViewTenant?: (id: string) => void;
  onViewDocuments?: (id: string) => void;
}

export default function TenantList({
  tenants,
  onViewTenant,
  onViewDocuments,
}: TenantListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  return (
    <Card>
      <CardHeader className="px-6 py-5">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <CardTitle className="text-xl flex items-center text-[#1B2A55]">
              <UsersIcon className="mr-2 h-5 w-5 text-[#1B2A55]" />
              Inquilinos
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Gestione la información de sus inquilinos
            </CardDescription>
          </div>
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar inquilinos..."
                className="pl-8 w-full sm:w-[200px] md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 text-white">
              Añadir Inquilino
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Inquilino</TableHead>
                <TableHead>Propiedad</TableHead>
                <TableHead>Unidad</TableHead>
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
                          <AvatarImage src={tenant.avatar} />
                          <AvatarFallback>
                            {tenant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{tenant.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {tenant.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{tenant.property}</TableCell>
                    <TableCell>{tenant.unit}</TableCell>
                    <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                              onViewTenant && onViewTenant(tenant.id)
                            }
                          >
                            <EyeIcon className="mr-2 h-4 w-4" />
                            Ver Detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              onViewDocuments && onViewDocuments(tenant.id)
                            }
                          >
                            <FileTextIcon className="mr-2 h-4 w-4" />
                            Ver Documentos
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <UsersIcon className="h-10 w-10 mb-2" />
                      <p>No se encontraron inquilinos</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
