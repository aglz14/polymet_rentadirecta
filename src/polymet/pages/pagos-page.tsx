import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentStats from "@/polymet/components/payment-stats";
import PaymentFilterBar from "@/polymet/components/payment-filter-bar";
import PaymentsTable from "@/polymet/components/payments-table";
import PaymentRegisterDialog from "@/polymet/components/payment-register-dialog";
import {
  PAYMENTS_DATA,
  filterPaymentsByStatus,
  getPaymentsByMonth,
  getTotalAmountByStatus,
} from "@/polymet/data/payments-data";

export default function PagosPage() {
  const [filteredPayments, setFilteredPayments] = useState(PAYMENTS_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [propertyFilter, setPropertyFilter] = useState("todas");
  const [monthFilter, setMonthFilter] = useState("todos");
  const [activeTab, setActiveTab] = useState("todos");

  const uniqueProperties = [
    ...new Set(PAYMENTS_DATA.map((payment) => payment.property)),
  ];

  // Prepare tenant data for the payment register dialog
  const tenants = Array.from(
    new Set(PAYMENTS_DATA.map((payment) => payment.tenantId))
  ).map((tenantId) => {
    const tenantPayments = PAYMENTS_DATA.filter(
      (payment) => payment.tenantId === tenantId
    );
    const firstPayment = tenantPayments[0];

    const propertyUnits = tenantPayments.reduce(
      (acc, payment) => {
        const unitKey = `${payment.property}-${payment.unit}`;
        if (!acc.some((u) => `${u.property}-${u.unit}` === unitKey)) {
          acc.push({
            id: `${payment.property}-${payment.unit}`,
            property: payment.property,
            unit: payment.unit,
            rentAmount: payment.amount,
          });
        }
        return acc;
      },
      [] as Array<{
        id: string;
        property: string;
        unit: string;
        rentAmount: number;
      }>
    );

    return {
      id: tenantId,
      name: firstPayment.tenantName,
      propertyUnits,
    };
  });

  const totalPayments = PAYMENTS_DATA.length;
  const paidPayments = filterPaymentsByStatus("pagado").length;
  const pendingPayments = filterPaymentsByStatus("pendiente").length;
  const overduePayments = filterPaymentsByStatus("atrasado").length;

  const totalAmount = PAYMENTS_DATA.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const paidAmount = getTotalAmountByStatus("pagado");
  const pendingAmount = getTotalAmountByStatus("pendiente");
  const overdueAmount = getTotalAmountByStatus("atrasado");

  useEffect(() => {
    let result = [...PAYMENTS_DATA];

    // Filter by tab selection
    if (activeTab !== "todos") {
      result = result.filter((payment) => payment.status === activeTab);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (payment) =>
          payment.tenantName.toLowerCase().includes(query) ||
          payment.property.toLowerCase().includes(query) ||
          payment.unit.toLowerCase().includes(query) ||
          (payment.invoiceNumber &&
            payment.invoiceNumber.toLowerCase().includes(query))
      );
    }

    // Apply status filter
    if (statusFilter !== "todos") {
      result = result.filter((payment) => payment.status === statusFilter);
    }

    // Apply property filter
    if (propertyFilter !== "todas") {
      result = result.filter((payment) => payment.property === propertyFilter);
    }

    // Apply month filter
    if (monthFilter !== "todos") {
      const currentYear = new Date().getFullYear();
      result = getPaymentsByMonth(parseInt(monthFilter), currentYear);
    }

    setFilteredPayments(result);
  }, [searchQuery, statusFilter, propertyFilter, monthFilter, activeTab]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
  };

  const handlePropertyFilter = (property: string) => {
    setPropertyFilter(property);
  };

  const handleMonthFilter = (month: string) => {
    setMonthFilter(month);
  };

  const handleRegisterPayment = (paymentData: any) => {
    // In a real application, this would send the data to an API
    console.log("New payment registered:", paymentData);
    // Then refresh the payments data
  };

  const handleViewPayment = (id: string) => {
    console.log(`View payment details: ${id}`);
  };

  const handleViewInvoice = (id: string) => {
    console.log(`View invoice: ${id}`);
  };

  const handlePrintReceipt = (id: string) => {
    console.log(`Print receipt: ${id}`);
  };

  const handleProcessPayment = (id: string) => {
    console.log(`Process payment: ${id}`);
  };

  return (
    <div className="space-y-6">
      <PaymentStats
        totalPayments={totalPayments}
        paidPayments={paidPayments}
        pendingPayments={pendingPayments}
        overduePayments={overduePayments}
        totalAmount={totalAmount}
        paidAmount={paidAmount}
        pendingAmount={pendingAmount}
        overdueAmount={overdueAmount}
      />

      <Card>
        <CardContent className="p-6 space-y-6">
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
              <PaymentRegisterDialog
                onRegisterPayment={handleRegisterPayment}
                tenants={tenants}
              />
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
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
              <Select onValueChange={handleStatusFilter}>
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

              <Select onValueChange={handlePropertyFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las propiedades</SelectItem>
                  {uniqueProperties.map((property, index) => (
                    <SelectItem key={property} value={property}>
                      {property}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={handleMonthFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los meses</SelectItem>
                  {[
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
                  ].map((month, index) => (
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

          <Tabs
            defaultValue="todos"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="overflow-x-auto">
              <TabsList className="grid grid-cols-4 mb-4 min-w-[400px]">
                <TabsTrigger value="todos" className="px-2 whitespace-nowrap">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="pagado" className="px-2 whitespace-nowrap">
                  Pagados
                </TabsTrigger>
                <TabsTrigger
                  value="pendiente"
                  className="px-2 whitespace-nowrap"
                >
                  Pendientes
                </TabsTrigger>
                <TabsTrigger
                  value="atrasado"
                  className="px-2 whitespace-nowrap"
                >
                  Atrasados
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="todos">
              <PaymentsTable
                payments={filteredPayments}
                onViewPayment={handleViewPayment}
                onViewInvoice={handleViewInvoice}
                onPrintReceipt={handlePrintReceipt}
                onProcessPayment={handleProcessPayment}
              />
            </TabsContent>
            <TabsContent value="pagado">
              <PaymentsTable
                payments={filteredPayments}
                onViewPayment={handleViewPayment}
                onViewInvoice={handleViewInvoice}
                onPrintReceipt={handlePrintReceipt}
                onProcessPayment={handleProcessPayment}
              />
            </TabsContent>
            <TabsContent value="pendiente">
              <PaymentsTable
                payments={filteredPayments}
                onViewPayment={handleViewPayment}
                onViewInvoice={handleViewInvoice}
                onPrintReceipt={handlePrintReceipt}
                onProcessPayment={handleProcessPayment}
              />
            </TabsContent>
            <TabsContent value="atrasado">
              <PaymentsTable
                payments={filteredPayments}
                onViewPayment={handleViewPayment}
                onViewInvoice={handleViewInvoice}
                onPrintReceipt={handlePrintReceipt}
                onProcessPayment={handleProcessPayment}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, FilterIcon, SearchIcon } from "lucide-react";
