import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontalIcon,
  FileTextIcon,
  PrinterIcon,
  CreditCardIcon,
} from "lucide-react";
import PaymentStatusBadge from "@/polymet/components/payment-status-badge";
import PaymentMethodIcon from "@/polymet/components/payment-method-icon";

export interface UnitPaymentRecord {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "pagado" | "pendiente" | "atrasado" | "cancelado";
  paymentMethod?: "transferencia" | "efectivo" | "tarjeta" | "cheque";
  reference?: string;
  invoiceNumber?: string;
  period: string;
}

interface UnitPaymentHistoryTableProps {
  payments: UnitPaymentRecord[];
  onViewInvoice?: (id: string) => void;
  onPrintReceipt?: (id: string) => void;
  onProcessPayment?: (id: string) => void;
}

export default function UnitPaymentHistoryTable({
  payments,
  onViewInvoice,
  onPrintReceipt,
  onProcessPayment,
}: UnitPaymentHistoryTableProps) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#1B2A55]">
          Historial de Pagos
        </h2>
      </div>

      {payments.length > 0 ? (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Periodo</TableHead>
                <TableHead>Fecha Límite</TableHead>
                <TableHead>Fecha de Pago</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Referencia</TableHead>
                <TableHead>Pagar</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.period}</TableCell>
                  <TableCell>{formatDate(payment.dueDate)}</TableCell>
                  <TableCell className="font-medium">
                    {payment.date ? formatDate(payment.date) : "—"}
                  </TableCell>
                  <TableCell>{formatCurrency(payment.amount)}</TableCell>
                  <TableCell>
                    <PaymentStatusBadge status={payment.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {payment.paymentMethod && (
                        <PaymentMethodIcon method={payment.paymentMethod} />
                      )}
                      <span className="text-sm capitalize">
                        {payment.paymentMethod || "—"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{payment.reference || "—"}</TableCell>
                  <TableCell>
                    {(payment.status === "pendiente" ||
                      payment.status === "atrasado") && (
                      <Button
                        size="sm"
                        className="bg-[#1B2A55] hover:bg-[#15213f]"
                        onClick={() =>
                          onProcessPayment && onProcessPayment(payment.id)
                        }
                      >
                        <CreditCardIcon className="h-4 w-4 mr-1" />
                        Pagar
                      </Button>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontalIcon className="h-4 w-4" />

                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {payment.invoiceNumber && (
                          <DropdownMenuItem
                            onClick={() =>
                              onViewInvoice && onViewInvoice(payment.id)
                            }
                          >
                            <FileTextIcon className="mr-2 h-4 w-4" />

                            <span>Ver factura</span>
                          </DropdownMenuItem>
                        )}
                        {payment.status === "pagado" && (
                          <DropdownMenuItem
                            onClick={() =>
                              onPrintReceipt && onPrintReceipt(payment.id)
                            }
                          >
                            <PrinterIcon className="mr-2 h-4 w-4" />

                            <span>Imprimir recibo</span>
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
      ) : (
        <div className="border rounded-md p-8 text-center">
          <p className="text-muted-foreground">
            No hay registros de pagos disponibles para esta unidad.
          </p>
        </div>
      )}
    </div>
  );
}
