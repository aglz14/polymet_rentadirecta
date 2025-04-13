import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import DocumentFilterBar from "@/polymet/components/document-filter-bar";
import DocumentsTable from "@/polymet/components/documents-table";
import {
  DOCUMENTS_DATA,
  filterDocumentsByType,
  filterDocumentsByProperty,
  filterDocumentsBySearch,
  getUniqueProperties,
  Document,
} from "@/polymet/data/documents-data";
import { TENANTS_DATA } from "@/polymet/data/tenants-data";
import { useToast } from "@/components/ui/use-toast";

export default function DocumentosPage() {
  const [filteredDocuments, setFilteredDocuments] =
    useState<Document[]>(DOCUMENTS_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("todos");
  const [propertyFilter, setPropertyFilter] = useState("todas");
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const uniqueProperties = getUniqueProperties();

  const tenants = TENANTS_DATA.map((tenant) => ({
    id: tenant.id,
    name: tenant.name,
  }));

  useEffect(() => {
    let result = [...DOCUMENTS_DATA];

    // Apply search filter
    if (searchQuery) {
      result = filterDocumentsBySearch(searchQuery);
    }

    // Apply type filter
    if (typeFilter !== "todos") {
      result = result.filter((doc) => doc.type === typeFilter);
    }

    // Apply property filter
    if (propertyFilter !== "todas") {
      result = result.filter((doc) => doc.property === propertyFilter);
    }

    // Apply date filter
    if (dateFilter) {
      const dateString = dateFilter.toISOString().split("T")[0];
      result = result.filter((doc) => {
        const uploadDate = doc.uploadDate.split("T")[0];
        return uploadDate === dateString;
      });
    }

    setFilteredDocuments(result);
  }, [searchQuery, typeFilter, propertyFilter, dateFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
  };

  const handlePropertyFilter = (property: string) => {
    setPropertyFilter(property);
  };

  const handleDateFilter = (date: Date | undefined) => {
    setDateFilter(date);
  };

  const handleUploadDocument = (values: any) => {
    toast({
      title: "Documento subido",
      description: `El documento "${values.title}" ha sido subido correctamente.`,
    });
    console.log("Document uploaded:", values);
  };

  const handleViewDocument = (id: string) => {
    toast({
      title: "Ver documento",
      description: `Abriendo el documento con ID: ${id}`,
    });
    console.log(`View document: ${id}`);
  };

  const handleEditDocument = (id: string) => {
    toast({
      title: "Editar documento",
      description: `Editando el documento con ID: ${id}`,
    });
    console.log(`Edit document: ${id}`);
  };

  const handleDeleteDocument = (id: string) => {
    toast({
      title: "Documento eliminado",
      description: "El documento ha sido eliminado correctamente.",
      variant: "destructive",
    });
    console.log(`Delete document: ${id}`);
  };

  const handleDownloadDocument = (id: string) => {
    toast({
      title: "Descargando documento",
      description: `Iniciando la descarga del documento con ID: ${id}`,
    });
    console.log(`Download document: ${id}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-6">
          <DocumentFilterBar
            totalDocuments={filteredDocuments.length}
            onSearch={handleSearch}
            onTypeFilter={handleTypeFilter}
            onPropertyFilter={handlePropertyFilter}
            onDateFilter={handleDateFilter}
            onUpload={handleUploadDocument}
            properties={uniqueProperties}
            tenants={tenants}
          />

          <DocumentsTable
            documents={filteredDocuments}
            onViewDocument={handleViewDocument}
            onEditDocument={handleEditDocument}
            onDeleteDocument={handleDeleteDocument}
            onDownloadDocument={handleDownloadDocument}
          />
        </CardContent>
      </Card>
    </div>
  );
}
