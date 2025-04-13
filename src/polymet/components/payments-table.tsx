import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Payment } from "@/polymet/data/payments-data";
import PaymentStatusBadge from "@/polymet/components/payment-status-badge";
import PaymentMethodIcon from "@/polymet/components/payment-method-icon";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  EyeIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  PrinterIcon,
} from "lucide-react";

interface PaymentsTableProps {
  payments: Payment[];
  onViewPayment?: (id: string) => void;
  onViewInvoice?: (id: string) => void;
  onPrintReceipt?: (id: string) => void;
  onProcessPayment?: (id: string) => void;
}

export default function PaymentsTable({
  payments,
  onViewPayment,
  onViewInvoice,
  onPrintReceipt,
  onProcessPayment,
}: PaymentsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(payments.length / itemsPerPage);

  const paginatedPayments = payments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString: string) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Inquilino</TableHead>
              <TableHead>Propiedad / Unidad</TableHead>
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
            {paginatedPayments.length > 0 ? (
              paginatedPayments.map((payment, index) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={`https://github.com/${
                            payment.tenantId === "tenant-1"
                              ? "yusufhilmi"
                              : payment.tenantId === "tenant-2"
                                ? "furkanksl"
                                : payment.tenantId === "tenant-3"
                                  ? "kdrnp"
                                  : payment.tenantId === "tenant-4"
                                    ? "yahyabedirhan"
                                    : payment.tenantId === "tenant-5"
                                      ? "buyuktas18"
                                      : "polymet-ai"
                          }.png`}
                        />

                        <AvatarFallback>
                          {payment.tenantName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{payment.tenantName}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{payment.property}</div>
                      <div className="text-sm text-muted-foreground">
                        Unidad {payment.unit}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(payment.dueDate)}</TableCell>
                  <TableCell>{formatDate(payment.date)}</TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(payment.amount)}
                  </TableCell>
                  <TableCell>
                    <PaymentStatusBadge status={payment.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <PaymentMethodIcon method={payment.paymentMethod} />

                      <span className="text-sm">
                        {payment.paymentMethod
                          ? payment.paymentMethod.charAt(0).toUpperCase() +
                            payment.paymentMethod.slice(1)
                          : "—"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{payment.reference || "—"}</span>
                  </TableCell>
                  <TableCell>
                    {(payment.status === "pendiente" ||
                      payment.status === "atrasado") && (
                      <Button
                        size="sm"
                        onClick={() =>
                          onProcessPayment && onProcessPayment(payment.id)
                        }
                        className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                      >
                        <CreditCardIcon className="mr-1 h-4 w-4" />
                        Pagar
                      </Button>
                    )}
                  </TableCell>
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
                            onViewPayment && onViewPayment(payment.id)
                          }
                        >
                          <EyeIcon className="mr-2 h-4 w-4" />
                          Ver Detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            onViewInvoice && onViewInvoice(payment.id)
                          }
                        >
                          <FileTextIcon className="mr-2 h-4 w-4" />
                          Ver Factura
                        </DropdownMenuItem>
                        {payment.status === "pagado" && (
                          <DropdownMenuItem
                            onClick={() =>
                              onPrintReceipt && onPrintReceipt(payment.id)
                            }
                          >
                            <PrinterIcon className="mr-2 h-4 w-4" />
                            Imprimir Recibo
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} className="text-center py-8">
                  No se encontraron pagos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                className="w-8 h-8"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
