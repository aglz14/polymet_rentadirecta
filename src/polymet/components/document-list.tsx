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
import { FileIcon, DownloadIcon, PlusIcon } from "lucide-react";
import { PropertyUnitDocument } from "@/polymet/data/property-unit-details-data";

interface DocumentListProps {
  documents?: PropertyUnitDocument[];
  className?: string;
}

export default function DocumentList({
  documents = [],
  className = "",
}: DocumentListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getDocumentTypeLabel = (type: string) => {
    switch (type) {
      case "contrato":
        return "Contrato";
      case "recibo":
        return "Recibo";
      case "inventario":
        return "Inventario";
      case "otro":
        return "Otro";
      default:
        return type;
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-[#1B2A55]">Documentos</CardTitle>
            <CardDescription>
              {documents.length} documentos disponibles
            </CardDescription>
          </div>
          <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
            <PlusIcon className="mr-2 h-4 w-4" />
            Añadir Documento
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {documents.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead className="text-right">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc, index) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <FileIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      {doc.name}
                    </div>
                  </TableCell>
                  <TableCell>{getDocumentTypeLabel(doc.type)}</TableCell>
                  <TableCell>{formatDate(doc.date)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <FileIcon className="h-12 w-12 text-muted-foreground/60 mb-4" />
            <h3 className="text-lg font-semibold text-[#1B2A55]">
              No hay documentos
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Añade documentos para esta unidad.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
