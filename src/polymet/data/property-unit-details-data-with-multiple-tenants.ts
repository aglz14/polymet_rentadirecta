import { PropertyUnit } from "./property-units-data";

export interface PropertyUnitDetails extends PropertyUnit {
  constructionArea?: number; // m² de construcción
  parkingSpaces?: number; // cajones de estacionamiento
  floors?: number; // número de pisos
  publicPricePerSqm?: number; // precio público por m²
  maintenancePerSqm?: number; // mantenimiento por m²
  documents?: PropertyUnitDocument[];
  location?: {
    latitude: number;
    longitude: number;
  };
  tenants?: Tenant[]; // Multiple tenants
}

export interface Tenant {
  name: string;
  avatar?: string;
  email?: string;
  phone?: string;
}

export interface PropertyUnitDocument {
  id: string;
  name: string;
  type: "contrato" | "recibo" | "inventario" | "otro";
  date: string; // ISO date string
  fileUrl?: string;
}

export const PROPERTY_UNIT_DETAILS_DATA_WITH_MULTIPLE_TENANTS: Record<
  string,
  PropertyUnitDetails
> = {
  "unit-1": {
    id: "unit-1",
    unitNumber: "A-101",
    size: 75,
    constructionArea: 82,
    parkingSpaces: 1,
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    floor: 1,
    building: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    tenant: {
      name: "Carlos Rodríguez",
      avatar: "https://github.com/yusufhilmi.png",
      email: "carlos.rodriguez@example.com",
      phone: "+52 55 1234 5678",
    },
    tenants: [
      {
        name: "Carlos Rodríguez",
        avatar: "https://github.com/yusufhilmi.png",
        email: "carlos.rodriguez@example.com",
        phone: "+52 55 1234 5678",
      },
      {
        name: "Ana Martínez",
        avatar: "https://github.com/furkanksl.png",
        email: "ana.martinez@example.com",
        phone: "+52 55 2345 6789",
      },
    ],

    rentAmount: 12500,
    rentStatus: "paid",
    leaseEndDate: "2024-12-31",
    maintenanceStatus: "none",
    image: "https://picsum.photos/seed/apartment1/800/600",
    publicPricePerSqm: 166.67,
    maintenancePerSqm: 25,
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    documents: [
      {
        id: "doc-1",
        name: "Contrato de Arrendamiento",
        type: "contrato",
        date: "2023-12-31",
        fileUrl: "#",
      },
      {
        id: "doc-2",
        name: "Recibo de Renta Enero",
        type: "recibo",
        date: "2024-01-05",
        fileUrl: "#",
      },
      {
        id: "doc-3",
        name: "Inventario de Entrada",
        type: "inventario",
        date: "2023-12-31",
        fileUrl: "#",
      },
    ],
  },
  "unit-2": {
    id: "unit-2",
    unitNumber: "A-102",
    size: 65,
    constructionArea: 70,
    parkingSpaces: 1,
    floors: 1,
    bedrooms: 1,
    bathrooms: 1,
    floor: 1,
    building: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    tenant: {
      name: "Laura González",
      avatar: "https://github.com/yahyabedirhan.png",
      email: "laura.gonzalez@example.com",
      phone: "+52 55 2345 6789",
    },
    tenants: [
      {
        name: "Laura González",
        avatar: "https://github.com/yahyabedirhan.png",
        email: "laura.gonzalez@example.com",
        phone: "+52 55 2345 6789",
      },
    ],

    rentAmount: 9800,
    rentStatus: "paid",
    leaseEndDate: "2024-11-30",
    maintenanceStatus: "none",
    image: "https://picsum.photos/seed/apartment2/800/600",
    publicPricePerSqm: 150.77,
    maintenancePerSqm: 22,
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    documents: [
      {
        id: "doc-4",
        name: "Contrato de Arrendamiento",
        type: "contrato",
        date: "2023-11-30",
        fileUrl: "#",
      },
      {
        id: "doc-5",
        name: "Recibo de Renta Enero",
        type: "recibo",
        date: "2024-01-05",
        fileUrl: "#",
      },
    ],
  },
  "unit-3": {
    id: "unit-3",
    unitNumber: "A-201",
    size: 80,
    constructionArea: 88,
    parkingSpaces: 1,
    floors: 1,
    bedrooms: 2,
    bathrooms: 2,
    floor: 2,
    building: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    tenant: {
      name: "Miguel Sánchez",
      avatar: "https://github.com/kdrnp.png",
      email: "miguel.sanchez@example.com",
      phone: "+52 55 3456 7890",
    },
    tenants: [
      {
        name: "Miguel Sánchez",
        avatar: "https://github.com/kdrnp.png",
        email: "miguel.sanchez@example.com",
        phone: "+52 55 3456 7890",
      },
      {
        name: "Roberto Méndez",
        avatar: "https://github.com/buyuktas18.png",
        email: "roberto.mendez@example.com",
        phone: "+52 55 4567 8901",
      },
      {
        name: "Elena Vázquez",
        avatar: "https://github.com/yahyabedirhan.png",
        email: "elena.vazquez@example.com",
        phone: "+52 55 5678 9012",
      },
    ],

    rentAmount: 13500,
    rentStatus: "pending",
    leaseEndDate: "2024-10-15",
    maintenanceStatus: "none",
    image: "https://picsum.photos/seed/apartment3/800/600",
    publicPricePerSqm: 168.75,
    maintenancePerSqm: 25,
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    documents: [
      {
        id: "doc-6",
        name: "Contrato de Arrendamiento",
        type: "contrato",
        date: "2023-10-15",
        fileUrl: "#",
      },
    ],
  },
  "unit-4": {
    id: "unit-4",
    unitNumber: "A-202",
    size: 70,
    constructionArea: 76,
    parkingSpaces: 1,
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    floor: 2,
    building: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    tenant: {
      name: "Ana Martínez",
      avatar: "https://github.com/furkanksl.png",
      email: "ana.martinez@example.com",
      phone: "+52 55 4567 8901",
    },
    tenants: [
      {
        name: "Ana Martínez",
        avatar: "https://github.com/furkanksl.png",
        email: "ana.martinez@example.com",
        phone: "+52 55 4567 8901",
      },
    ],

    rentAmount: 11000,
    rentStatus: "overdue",
    leaseEndDate: "2024-09-30",
    maintenanceStatus: "scheduled",
    image: "https://picsum.photos/seed/apartment4/800/600",
    publicPricePerSqm: 157.14,
    maintenancePerSqm: 23,
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    documents: [
      {
        id: "doc-7",
        name: "Contrato de Arrendamiento",
        type: "contrato",
        date: "2023-09-30",
        fileUrl: "#",
      },
      {
        id: "doc-8",
        name: "Aviso de Mantenimiento",
        type: "otro",
        date: "2024-02-15",
        fileUrl: "#",
      },
    ],
  },
  "unit-5": {
    id: "unit-5",
    unitNumber: "A-301",
    size: 85,
    constructionArea: 92,
    parkingSpaces: 2,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    floor: 3,
    building: "Edificio Alameda",
    address: "Av. Alameda 123, Ciudad de México",
    tenants: [],
    rentAmount: 14500,
    rentStatus: "vacant",
    maintenanceStatus: "completed",
    image: "https://picsum.photos/seed/apartment5/800/600",
    publicPricePerSqm: 170.59,
    maintenancePerSqm: 25,
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    documents: [
      {
        id: "doc-9",
        name: "Reporte de Mantenimiento",
        type: "otro",
        date: "2024-01-20",
        fileUrl: "#",
      },
    ],
  },
};

export const getUnitDetailsWithMultipleTenants = (
  unitId: string
): PropertyUnitDetails | undefined => {
  return PROPERTY_UNIT_DETAILS_DATA_WITH_MULTIPLE_TENANTS[unitId];
};
