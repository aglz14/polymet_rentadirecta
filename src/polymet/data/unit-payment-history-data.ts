import { UnitPaymentRecord } from "@/polymet/components/unit-payment-history-table";

export const UNIT_PAYMENT_HISTORY_DATA: Record<string, UnitPaymentRecord[]> = {
  "unit-1": [
    {
      id: "payment-1",
      date: "2024-05-03",
      dueDate: "2024-05-05",
      amount: 12500,
      status: "pagado",
      paymentMethod: "transferencia",
      reference: "TRF-78901234",
      invoiceNumber: "INV-2024-005",
      period: "Mayo 2024",
    },
    {
      id: "payment-2",
      date: "2024-04-02",
      dueDate: "2024-04-05",
      amount: 12500,
      status: "pagado",
      paymentMethod: "tarjeta",
      reference: "CARD-4567",
      invoiceNumber: "INV-2024-004",
      period: "Abril 2024",
    },
    {
      id: "payment-3",
      date: "2024-03-06",
      dueDate: "2024-03-05",
      amount: 12500,
      status: "atrasado",
      paymentMethod: "efectivo",
      reference: "CASH-1234",
      invoiceNumber: "INV-2024-003",
      period: "Marzo 2024",
    },
    {
      id: "payment-4",
      date: "2024-02-04",
      dueDate: "2024-02-05",
      amount: 12500,
      status: "pagado",
      paymentMethod: "cheque",
      reference: "CHK-9876",
      invoiceNumber: "INV-2024-002",
      period: "Febrero 2024",
    },
    {
      id: "payment-5",
      date: "2024-01-05",
      dueDate: "2024-01-05",
      amount: 12500,
      status: "pagado",
      paymentMethod: "transferencia",
      reference: "TRF-56781234",
      invoiceNumber: "INV-2024-001",
      period: "Enero 2024",
    },
    {
      id: "payment-6",
      date: "",
      dueDate: "2024-06-05",
      amount: 12500,
      status: "pendiente",
      period: "Junio 2024",
    },
  ],

  "unit-2": [
    {
      id: "payment-7",
      date: "2024-04-10",
      dueDate: "2024-04-15",
      amount: 10800,
      status: "pagado",
      paymentMethod: "transferencia",
      reference: "TRF-45678901",
      invoiceNumber: "INV-2024-010",
      period: "Abril 2024",
    },
    {
      id: "payment-8",
      date: "2024-03-18",
      dueDate: "2024-03-15",
      amount: 10800,
      status: "atrasado",
      paymentMethod: "efectivo",
      reference: "CASH-5678",
      invoiceNumber: "INV-2024-009",
      period: "Marzo 2024",
    },
    {
      id: "payment-9",
      date: "",
      dueDate: "2024-05-15",
      amount: 10800,
      status: "pendiente",
      period: "Mayo 2024",
    },
  ],

  "unit-3": [],
  "unit-4": [
    {
      id: "payment-10",
      date: "2024-05-12",
      dueDate: "2024-05-14",
      amount: 15000,
      status: "pagado",
      paymentMethod: "tarjeta",
      reference: "CARD-8901",
      invoiceNumber: "INV-2024-015",
      period: "Mayo 2024",
    },
    {
      id: "payment-11",
      date: "2024-04-14",
      dueDate: "2024-04-14",
      amount: 15000,
      status: "pagado",
      paymentMethod: "transferencia",
      reference: "TRF-12345678",
      invoiceNumber: "INV-2024-014",
      period: "Abril 2024",
    },
    {
      id: "payment-12",
      date: "2024-03-14",
      dueDate: "2024-03-14",
      amount: 15000,
      status: "pagado",
      paymentMethod: "transferencia",
      reference: "TRF-23456789",
      invoiceNumber: "INV-2024-013",
      period: "Marzo 2024",
    },
  ],
};

// Helper functions to filter and analyze payment history data
export const getPaymentHistoryByUnit = (
  unitId: string
): UnitPaymentRecord[] => {
  return UNIT_PAYMENT_HISTORY_DATA[unitId] || [];
};

export const getPaymentHistoryByStatus = (
  unitId: string,
  status: "pagado" | "pendiente" | "atrasado" | "cancelado"
): UnitPaymentRecord[] => {
  const payments = getPaymentHistoryByUnit(unitId);
  return payments.filter((payment) => payment.status === status);
};

export const getPaymentHistoryByPeriod = (
  unitId: string,
  startDate: string,
  endDate: string
): UnitPaymentRecord[] => {
  const payments = getPaymentHistoryByUnit(unitId);
  const start = new Date(startDate);
  const end = new Date(endDate);

  return payments.filter((payment) => {
    const paymentDate = new Date(payment.date || payment.dueDate);
    return paymentDate >= start && paymentDate <= end;
  });
};

export const getTotalPaidAmount = (unitId: string): number => {
  const paidPayments = getPaymentHistoryByStatus(unitId, "pagado");
  return paidPayments.reduce((sum, payment) => sum + payment.amount, 0);
};

export const getLatestPayment = (
  unitId: string
): UnitPaymentRecord | undefined => {
  const payments = getPaymentHistoryByUnit(unitId);
  if (payments.length === 0) return undefined;

  return payments.reduce((latest, current) => {
    if (!latest.date) return current;
    if (!current.date) return latest;
    return new Date(current.date) > new Date(latest.date) ? current : latest;
  });
};

export const getNextDuePayment = (
  unitId: string
): UnitPaymentRecord | undefined => {
  const pendingPayments = getPaymentHistoryByStatus(unitId, "pendiente");
  if (pendingPayments.length === 0) return undefined;

  return pendingPayments.reduce((earliest, current) => {
    return new Date(current.dueDate) < new Date(earliest.dueDate)
      ? current
      : earliest;
  });
};
