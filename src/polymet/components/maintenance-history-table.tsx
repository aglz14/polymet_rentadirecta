import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  WrenchIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";
import { MaintenanceRecord } from "@/polymet/data/maintenance-records-data";

interface MaintenanceHistoryTableProps {
  records: MaintenanceRecord[];
  onAddMaintenance?: () => void;
  onViewDetails?: (id: string) => void;
  onEditRecord?: (id: string) => void;
  onDeleteRecord?: (id: string) => void;
}

export default function MaintenanceHistoryTable({
  records,
  onAddMaintenance,
  onViewDetails,
  onEditRecord,
  onDeleteRecord,
}: MaintenanceHistoryTableProps) {
  const [filter, setFilter] = useState<string>("todos");

  const filteredRecords =
    filter === "todos"
      ? records
      : records.filter((record) => record.status === filter);

  // Format date to local format
  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-MX");
  };

  // Format currency
  const formatCurrency = (amount?: number) => {
    if (amount === undefined) return "-";
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  // Get status badge
  const getStatusBadge = (status: MaintenanceRecord["status"]) => {
    switch (status) {
      case "programado":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-600"
          >
            Programado
          </Badge>
        );

      case "en_progreso":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            En Progreso
          </Badge>
        );

      case "completado":
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Completado
          </Badge>
        );

      case "cancelado":
        return (
          <Badge variant="outline" className="border-red-500 text-red-600">
            Cancelado
          </Badge>
        );

      default:
        return null;
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority: MaintenanceRecord["priority"]) => {
    switch (priority) {
      case "baja":
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Baja
          </Badge>
        );

      case "media":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            Media
          </Badge>
        );

      case "alta":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-600"
          >
            Alta
          </Badge>
        );

      case "urgente":
        return (
          <Badge variant="outline" className="border-red-500 text-red-600">
            Urgente
          </Badge>
        );

      default:
        return null;
    }
  };

  // Get category icon and label
  const getCategoryInfo = (category: MaintenanceRecord["category"]) => {
    switch (category) {
      case "reparacion":
        return {
          icon: <WrenchIcon className="h-4 w-4 mr-2 text-blue-500" />,
          label: "Reparación",
        };
      case "preventivo":
        return {
          icon: <CalendarIcon className="h-4 w-4 mr-2 text-green-500" />,
          label: "Preventivo",
        };
      case "emergencia":
        return {
          icon: <WrenchIcon className="h-4 w-4 mr-2 text-red-500" />,
          label: "Emergencia",
        };
      case "inspeccion":
        return {
          icon: <ClipboardCheckIcon className="h-4 w-4 mr-2 text-purple-500" />,
          label: "Inspección",
        };
      default:
        return {
          icon: <WrenchIcon className="h-4 w-4 mr-2 text-gray-500" />,
          label: "Otro",
        };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-[#1B2A55] mr-4">
            Historial de Mantenimiento
          </h3>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="programado">Programado</SelectItem>
              <SelectItem value="en_progreso">En Progreso</SelectItem>
              <SelectItem value="completado">Completado</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {onAddMaintenance && (
          <Button
            onClick={onAddMaintenance}
            className="bg-[#1B2A55] hover:bg-[#15213f]"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Registrar Mantenimiento
          </Button>
        )}
      </div>

      {filteredRecords.length > 0 ? (
        <div className="border rounded-md">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Categoría
                  </TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Prioridad
                  </TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Fecha Reporte
                  </TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Fecha Programada
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Técnico
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">Costo</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((record, index) => {
                  const categoryInfo = getCategoryInfo(record.category);
                  return (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">
                        {record.description}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center">
                          {categoryInfo.icon}
                          {categoryInfo.label}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {getPriorityBadge(record.priority)}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {formatDate(record.reportDate)}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {formatDate(record.scheduledDate)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {record.technician || "-"}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {formatCurrency(record.cost)}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVerticalIcon className="h-4 w-4" />
                              <span className="sr-only">Abrir menú</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {onViewDetails && (
                              <DropdownMenuItem
                                onClick={() => onViewDetails(record.id)}
                              >
                                Ver detalles
                              </DropdownMenuItem>
                            )}
                            {onEditRecord && (
                              <DropdownMenuItem
                                onClick={() => onEditRecord(record.id)}
                              >
                                Editar registro
                              </DropdownMenuItem>
                            )}
                            {onDeleteRecord && (
                              <DropdownMenuItem
                                onClick={() => onDeleteRecord(record.id)}
                                className="text-red-600"
                              >
                                Eliminar registro
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-gray-50">
          <WrenchIcon className="h-12 w-12 text-gray-300 mb-4" />
          <p className="text-muted-foreground mb-2">
            No hay registros de mantenimiento{" "}
            {filter !== "todos" ? "con este estado" : "disponibles"}.
          </p>
          {onAddMaintenance && (
            <Button
              onClick={onAddMaintenance}
              variant="outline"
              className="mt-2"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Registrar Mantenimiento
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
