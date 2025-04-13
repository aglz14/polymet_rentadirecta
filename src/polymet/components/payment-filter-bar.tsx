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
import { CalendarIcon, FilterIcon, PlusIcon, SearchIcon } from "lucide-react";

interface PaymentFilterBarProps {
  totalPayments: number;
  onSearch: (query: string) => void;
  onStatusFilter: (status: string) => void;
  onPropertyFilter: (property: string) => void;
  onMonthFilter: (month: string) => void;
  onAddPayment: () => void;
  properties: string[];
}

export default function PaymentFilterBar({
  totalPayments,
  onSearch,
  onStatusFilter,
  onPropertyFilter,
  onMonthFilter,
  onAddPayment,
  properties,
}: PaymentFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const months = [
    { value: "1", label: "Enero" },
    { value: "2", label: "Febrero" },
    { value: "3", label: "Marzo" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Mayo" },
    { value: "6", label: "Junio" },
    { value: "7", label: "Julio" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-[#1B2A55] flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5 text-[#1B2A55]" />
            Pagos
          </h2>
          <p className="text-sm text-muted-foreground">
            {totalPayments} pagos en total
          </p>
        </div>
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
          <Button
            onClick={onAddPayment}
            className="bg-[#1B2A55] hover:bg-[#1B2A55]/90 text-white"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Registrar Pago
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-2 md:space-y-0">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por inquilino, propiedad o factura..."
            className="pl-8"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
          <Select onValueChange={onStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los estados</SelectItem>
              <SelectItem value="pagado">Pagado</SelectItem>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="atrasado">Atrasado</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={onPropertyFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
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

          <Select onValueChange={onMonthFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Mes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los meses</SelectItem>
              {months.map((month, index) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" className="hidden sm:flex">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
