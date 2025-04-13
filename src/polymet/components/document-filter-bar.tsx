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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import DocumentUploadDialog from "@/polymet/components/document-upload-dialog";

interface DocumentFilterBarProps {
  totalDocuments: number;
  onSearch: (query: string) => void;
  onTypeFilter: (type: string) => void;
  onPropertyFilter: (property: string) => void;
  onDateFilter: (date: Date | undefined) => void;
  onUpload: (values: any) => void;
  properties: string[];
  tenants?: { id: string; name: string }[];
}

export default function DocumentFilterBar({
  totalDocuments,
  onSearch,
  onTypeFilter,
  onPropertyFilter,
  onDateFilter,
  onUpload,
  properties,
  tenants = [],
}: DocumentFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateFilter(selectedDate);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#1B2A55]">
          Documentos ({totalDocuments})
        </h2>
        <DocumentUploadDialog onUpload={onUpload} tenants={tenants} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_200px_200px_200px_auto] gap-4">
        <form onSubmit={handleSearch} className="flex w-full items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre, tipo o propiedad..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="ml-2 hidden sm:flex"
          >
            Buscar
          </Button>
        </form>

        <Select onValueChange={onTypeFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los tipos</SelectItem>
            <SelectItem value="contrato">Contrato</SelectItem>
            <SelectItem value="recibo">Recibo</SelectItem>
            <SelectItem value="inventario">Inventario</SelectItem>
            <SelectItem value="legal">Documento Legal</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onPropertyFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Propiedad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas las propiedades</SelectItem>
            {properties.map((property, index) => (
              <SelectItem key={property} value={property}>
                {property}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: es }) : "Fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button variant="outline" size="icon" className="w-10 h-10">
          <FilterIcon className="h-4 w-4" />
          <span className="sr-only">Filtros adicionales</span>
        </Button>
      </div>
    </div>
  );
}
