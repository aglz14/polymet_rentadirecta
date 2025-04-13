export interface Payment {
  id: string;
  tenantId: string;
  tenantName: string;
  property: string;
  unit: string;
  amount: number;
  status: "pagado" | "pendiente" | "atrasado" | "cancelado";
  date: string;
  dueDate: string;
  paymentMethod?: "transferencia" | "efectivo" | "tarjeta" | "cheque";
  reference?: string;
  notes?: string;
  invoiceNumber?: string;
}

export const PAYMENTS_DATA: Payment[] = [
  {
    id: "payment-1",
    tenantId: "tenant-1",
    tenantName: "Carlos Rodríguez",
    property: "Edificio Alameda",
    unit: "A-101",
    amount: 12500,
    status: "pagado",
    date: "2024-01-05",
    dueDate: "2024-01-15",
    paymentMethod: "transferencia",
    reference: "TRF-78901234",
    invoiceNumber: "INV-2024-001",
  },
  {
    id: "payment-2",
    tenantId: "tenant-2",
    tenantName: "Ana Martínez",
    property: "Edificio Alameda",
    unit: "A-202",
    amount: 10800,
    status: "atrasado",
    date: "",
    dueDate: "2024-01-28",
    invoiceNumber: "INV-2024-002",
  },
  {
    id: "payment-3",
    tenantId: "tenant-4",
    tenantName: "Laura González",
    property: "Residencial Los Pinos",
    unit: "C-401",
    amount: 15000,
    status: "pagado",
    date: "2024-01-12",
    dueDate: "2024-01-14",
    paymentMethod: "tarjeta",
    reference: "CARD-4567",
    invoiceNumber: "INV-2024-003",
  },
  {
    id: "payment-4",
    tenantId: "tenant-5",
    tenantName: "Roberto Méndez",
    property: "Edificio Central",
    unit: "D-101",
    amount: 13200,
    status: "pagado",
    date: "2024-01-01",
    dueDate: "2024-01-05",
    paymentMethod: "transferencia",
    reference: "TRF-56781234",
    invoiceNumber: "INV-2024-004",
  },
  {
    id: "payment-5",
    tenantId: "tenant-6",
    tenantName: "Patricia Vega",
    property: "Edificio Alameda",
    unit: "A-303",
    amount: 11000,
    status: "atrasado",
    date: "",
    dueDate: "2024-01-01",
    invoiceNumber: "INV-2024-005",
  },
  {
    id: "payment-6",
    tenantId: "tenant-7",
    tenantName: "Fernando López",
    property: "Residencial Los Pinos",
    unit: "B-201",
    amount: 9800,
    status: "pagado",
    date: "2024-01-14",
    dueDate: "2024-01-15",
    paymentMethod: "efectivo",
    reference: "CASH-1234",
    invoiceNumber: "INV-2024-006",
  },
  {
    id: "payment-7",
    tenantId: "tenant-8",
    tenantName: "Sofía Ramírez",
    property: "Edificio Central",
    unit: "D-205",
    amount: 14500,
    status: "pagado",
    date: "2024-01-02",
    dueDate: "2024-01-05",
    paymentMethod: "cheque",
    reference: "CHK-9876",
    invoiceNumber: "INV-2024-007",
  },
  {
    id: "payment-8",
    tenantId: "tenant-1",
    tenantName: "Carlos Rodríguez",
    property: "Edificio Alameda",
    unit: "A-101",
    amount: 12500,
    status: "pendiente",
    date: "",
    dueDate: "2024-02-15",
    invoiceNumber: "INV-2024-008",
  },
  {
    id: "payment-9",
    tenantId: "tenant-4",
    tenantName: "Laura González",
    property: "Residencial Los Pinos",
    unit: "C-401",
    amount: 15000,
    status: "pendiente",
    date: "",
    dueDate: "2024-02-14",
    invoiceNumber: "INV-2024-009",
  },
  {
    id: "payment-10",
    tenantId: "tenant-5",
    tenantName: "Roberto Méndez",
    property: "Edificio Central",
    unit: "D-101",
    amount: 13200,
    status: "pendiente",
    date: "",
    dueDate: "2024-02-05",
    invoiceNumber: "INV-2024-010",
  },
  {
    id: "payment-11",
    tenantId: "tenant-7",
    tenantName: "Fernando López",
    property: "Residencial Los Pinos",
    unit: "B-201",
    amount: 9800,
    status: "pendiente",
    date: "",
    dueDate: "2024-02-15",
    invoiceNumber: "INV-2024-011",
  },
  {
    id: "payment-12",
    tenantId: "tenant-8",
    tenantName: "Sofía Ramírez",
    property: "Edificio Central",
    unit: "D-205",
    amount: 14500,
    status: "pendiente",
    date: "",
    dueDate: "2024-02-05",
    invoiceNumber: "INV-2024-012",
  },
];

// Helper functions to filter and analyze payment data
export const filterPaymentsByStatus = (
  status: "pagado" | "pendiente" | "atrasado" | "cancelado"
) => {
  return PAYMENTS_DATA.filter((payment) => payment.status === status);
};

export const filterPaymentsByTenant = (tenantId: string) => {
  return PAYMENTS_DATA.filter((payment) => payment.tenantId === tenantId);
};

export const filterPaymentsByProperty = (property: string) => {
  return PAYMENTS_DATA.filter((payment) => payment.property === property);
};

export const filterPaymentsByUnit = (unit: string) => {
  return PAYMENTS_DATA.filter((payment) => payment.unit === unit);
};

export const getPaymentById = (id: string) => {
  return PAYMENTS_DATA.find((payment) => payment.id === id);
};

export const getPaymentCounts = () => {
  return {
    total: PAYMENTS_DATA.length,
    pagado: filterPaymentsByStatus("pagado").length,
    pendiente: filterPaymentsByStatus("pendiente").length,
    atrasado: filterPaymentsByStatus("atrasado").length,
    cancelado: filterPaymentsByStatus("cancelado").length,
  };
};

export const getTotalAmountByStatus = (
  status: "pagado" | "pendiente" | "atrasado" | "cancelado"
) => {
  return filterPaymentsByStatus(status).reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
};

export const getTotalAmount = () => {
  return PAYMENTS_DATA.reduce((sum, payment) => sum + payment.amount, 0);
};

export const getPaymentsByMonth = (month: number, year: number) => {
  return PAYMENTS_DATA.filter((payment) => {
    const paymentDate = new Date(payment.dueDate);
    return (
      paymentDate.getMonth() === month - 1 && paymentDate.getFullYear() === year
    );
  });
};
