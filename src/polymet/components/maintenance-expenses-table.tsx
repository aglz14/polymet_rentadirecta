import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, MoreVertical, Printer } from "lucide-react";

export type MaintenanceExpense = {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: string;
  invoiceNumber?: string;
  status: "pagado" | "pendiente" | "programado";
  provider?: string;
};

interface MaintenanceExpensesTableProps {
  expenses: MaintenanceExpense[];
  onViewExpense?: (id: string) => void;
  onViewInvoice?: (id: string) => void;
  onPrintReceipt?: (id: string) => void;
  onAddExpense?: () => void;
}

export default function MaintenanceExpensesTable({
  expenses,
  onViewExpense,
  onViewInvoice,
  onPrintReceipt,
  onAddExpense,
}: MaintenanceExpensesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  });

  // Calculate pagination
  const totalPages = Math.ceil(expenses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExpenses = expenses.slice(startIndex, endIndex);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "pagado":
        return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400";
      case "pendiente":
        return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "programado":
        return "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "text-gray-600 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pagado":
        return "Pagado";
      case "pendiente":
        return "Pendiente";
      case "programado":
        return "Programado";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#1B2A55]">
          Gastos de Mantenimiento
        </h2>
        {onAddExpense && (
          <Button
            onClick={onAddExpense}
            className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
          >
            Registrar Gasto
          </Button>
        )}
      </div>

      {expenses.length === 0 ? (
        <div className="border rounded-lg p-8 text-center">
          <p className="text-muted-foreground">No hay gastos registrados</p>
        </div>
      ) : (
        <>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Descripción</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Proveedor</TableHead>
                  <TableHead>Factura</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentExpenses.map((expense, index) => (
                  <TableRow key={expense.id}>
                    <TableCell className="font-medium">
                      {expense.description}
                    </TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>
                          {new Date(expense.date).toLocaleDateString("es-MX")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{expense.provider || "—"}</TableCell>
                    <TableCell>
                      {expense.invoiceNumber ? (
                        <div className="flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>{expense.invoiceNumber}</span>
                        </div>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {formatter.format(expense.amount)}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                          expense.status
                        )}`}
                      >
                        {getStatusLabel(expense.status)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {onViewExpense && (
                            <DropdownMenuItem
                              onClick={() => onViewExpense(expense.id)}
                            >
                              Ver detalles
                            </DropdownMenuItem>
                          )}
                          {expense.invoiceNumber && onViewInvoice && (
                            <DropdownMenuItem
                              onClick={() => onViewInvoice(expense.id)}
                            >
                              Ver factura
                            </DropdownMenuItem>
                          )}
                          {expense.status === "pagado" && onPrintReceipt && (
                            <DropdownMenuItem
                              onClick={() => onPrintReceipt(expense.id)}
                            >
                              Imprimir recibo
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <Pagination className="justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => setCurrentPage(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}
