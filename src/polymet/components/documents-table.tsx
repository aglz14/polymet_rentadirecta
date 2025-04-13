import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  FileIcon,
  MoreVerticalIcon,
  Pencil,
  TrashIcon,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

export interface Document {
  id: string;
  title: string;
  type: string;
  property: string;
  unit?: string;
  uploadDate: string;
  expirationDate?: string;
  isRentContract: boolean;
  tenants?: string[];
  fileUrl?: string;
}

interface DocumentsTableProps {
  documents: Document[];
  onViewDocument: (id: string) => void;
  onEditDocument: (id: string) => void;
  onDeleteDocument: (id: string) => void;
  onDownloadDocument: (id: string) => void;
}

export default function DocumentsTable({
  documents,
  onViewDocument,
  onEditDocument,
  onDeleteDocument,
  onDownloadDocument,
}: DocumentsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const paginatedDocuments = documents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d MMM yyyy", { locale: es });
  };

  const getDocumentTypeLabel = (type: string) => {
    switch (type) {
      case "contrato":
        return "Contrato";
      case "recibo":
        return "Recibo";
      case "inventario":
        return "Inventario";
      case "legal":
        return "Documento Legal";
      case "otro":
        return "Otro";
      default:
        return type;
    }
  };

  const getDocumentTypeColor = (type: string) => {
    switch (type) {
      case "contrato":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "recibo":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "inventario":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "legal":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileIcon className="h-16 w-16 text-muted-foreground/60 mb-4" />
        <h3 className="text-lg font-semibold text-[#1B2A55]">
          No hay documentos
        </h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-md">
          No se encontraron documentos con los filtros actuales. Intenta cambiar
          los filtros o sube un nuevo documento.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Propiedad / Unidad</TableHead>
              <TableHead>Fecha de Subida</TableHead>
              <TableHead>Vencimiento</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedDocuments.map((doc, index) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <div>
                      <div>{doc.title}</div>
                      {doc.isRentContract && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          Contrato de Arrendamiento
                        </Badge>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getDocumentTypeColor(doc.type)}>
                    {getDocumentTypeLabel(doc.type)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {doc.property}
                  {doc.unit && (
                    <span className="text-muted-foreground"> / {doc.unit}</span>
                  )}
                </TableCell>
                <TableCell>{formatDate(doc.uploadDate)}</TableCell>
                <TableCell>
                  {doc.expirationDate ? (
                    formatDate(doc.expirationDate)
                  ) : (
                    <span className="text-muted-foreground">N/A</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDownloadDocument(doc.id)}
                    >
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVerticalIcon className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => onViewDocument(doc.id)}
                        >
                          Ver documento
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onEditDocument(doc.id)}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          Editar detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => onDeleteDocument(doc.id)}
                        >
                          <TrashIcon className="mr-2 h-4 w-4" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Página siguiente</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
