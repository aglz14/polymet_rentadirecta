export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  status: "active" | "late" | "inactive";
  avatar?: string;
  leaseStart?: string;
  leaseEnd?: string;
  rentAmount?: number;
  documents?: number;
  paymentMethod?: string;
  notes?: string;
}

export const TENANTS_DATA: Tenant[] = [
  {
    id: "tenant-1",
    name: "Carlos Rodríguez",
    email: "carlos@example.com",
    phone: "+52 55 1234 5678",
    property: "Edificio Alameda",
    unit: "A-101",
    status: "active",
    avatar: "https://github.com/yusufhilmi.png",
    leaseStart: "2023-01-15",
    leaseEnd: "2024-01-14",
    rentAmount: 12500,
    documents: 3,
    paymentMethod: "Transferencia bancaria",
    notes: "Inquilino puntual con los pagos",
  },
  {
    id: "tenant-2",
    name: "Ana Martínez",
    email: "ana@example.com",
    phone: "+52 55 2345 6789",
    property: "Edificio Alameda",
    unit: "A-202",
    status: "late",
    avatar: "https://github.com/furkanksl.png",
    leaseStart: "2023-03-01",
    leaseEnd: "2024-02-29",
    rentAmount: 10800,
    documents: 2,
    paymentMethod: "Efectivo",
    notes: "Ha solicitado reparaciones en la cocina",
  },
  {
    id: "tenant-3",
    name: "Miguel Sánchez",
    email: "miguel@example.com",
    phone: "+52 55 3456 7890",
    property: "Residencial Los Pinos",
    unit: "B-305",
    status: "inactive",
    avatar: "https://github.com/kdrnp.png",
    leaseStart: "2022-11-01",
    leaseEnd: "2023-10-31",
    rentAmount: 9500,
    documents: 4,
    paymentMethod: "Transferencia bancaria",
    notes: "Contrato finalizado, pendiente de renovación",
  },
  {
    id: "tenant-4",
    name: "Laura González",
    email: "laura@example.com",
    phone: "+52 55 4567 8901",
    property: "Residencial Los Pinos",
    unit: "C-401",
    status: "active",
    avatar: "https://github.com/yahyabedirhan.png",
    leaseStart: "2023-05-15",
    leaseEnd: "2024-05-14",
    rentAmount: 15000,
    documents: 3,
    paymentMethod: "Tarjeta de crédito",
    notes: "Inquilina con mascota (perro pequeño)",
  },
  {
    id: "tenant-5",
    name: "Roberto Méndez",
    email: "roberto@example.com",
    phone: "+52 55 5678 9012",
    property: "Edificio Central",
    unit: "D-101",
    status: "active",
    avatar: "https://github.com/buyuktas18.png",
    leaseStart: "2023-02-01",
    leaseEnd: "2024-01-31",
    rentAmount: 13200,
    documents: 2,
    paymentMethod: "Transferencia bancaria",
    notes: "",
  },
  {
    id: "tenant-6",
    name: "Patricia Vega",
    email: "patricia@example.com",
    phone: "+52 55 6789 0123",
    property: "Edificio Alameda",
    unit: "A-303",
    status: "late",
    avatar: "https://github.com/furkanksl.png",
    leaseStart: "2023-04-01",
    leaseEnd: "2024-03-31",
    rentAmount: 11000,
    documents: 3,
    paymentMethod: "Efectivo",
    notes: "Ha reportado problemas con el calentador de agua",
  },
  {
    id: "tenant-7",
    name: "Fernando López",
    email: "fernando@example.com",
    phone: "+52 55 7890 1234",
    property: "Residencial Los Pinos",
    unit: "B-201",
    status: "active",
    avatar: "https://github.com/kdrnp.png",
    leaseStart: "2023-06-15",
    leaseEnd: "2024-06-14",
    rentAmount: 9800,
    documents: 2,
    paymentMethod: "Transferencia bancaria",
    notes: "",
  },
  {
    id: "tenant-8",
    name: "Sofía Ramírez",
    email: "sofia@example.com",
    phone: "+52 55 8901 2345",
    property: "Edificio Central",
    unit: "D-205",
    status: "active",
    avatar: "https://github.com/yahyabedirhan.png",
    leaseStart: "2023-01-01",
    leaseEnd: "2023-12-31",
    rentAmount: 14500,
    documents: 4,
    paymentMethod: "Tarjeta de crédito",
    notes: "Trabaja desde casa, requiere buena conexión a internet",
  },
];

// Helper functions to filter and analyze tenant data
export const filterTenantsByStatus = (
  status: "active" | "late" | "inactive"
) => {
  return TENANTS_DATA.filter((tenant) => tenant.status === status);
};

export const getTenantsByProperty = (property: string) => {
  return TENANTS_DATA.filter((tenant) => tenant.property === property);
};

export const getTenantsByUnit = (unit: string) => {
  return TENANTS_DATA.filter((tenant) => tenant.unit === unit);
};

export const getTenantById = (id: string) => {
  return TENANTS_DATA.find((tenant) => tenant.id === id);
};

export const getTenantCounts = () => {
  return {
    total: TENANTS_DATA.length,
    active: filterTenantsByStatus("active").length,
    late: filterTenantsByStatus("late").length,
    inactive: filterTenantsByStatus("inactive").length,
  };
};

export const getUniqueProperties = () => {
  return [...new Set(TENANTS_DATA.map((tenant) => tenant.property))];
};

export const getTotalRentAmount = () => {
  return TENANTS_DATA.reduce(
    (sum, tenant) => sum + (tenant.rentAmount || 0),
    0
  );
};
