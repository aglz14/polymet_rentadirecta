export interface Document {
  id: string;
  title: string;
  type: "contrato" | "recibo" | "inventario" | "legal" | "otro";
  property: string;
  unit?: string;
  uploadDate: string;
  expirationDate?: string;
  isRentContract: boolean;
  tenantIds?: string[];
  fileUrl?: string;
  description?: string;
}

export const DOCUMENTS_DATA: Document[] = [
  {
    id: "doc-1",
    title: "Contrato de Arrendamiento A-101",
    type: "contrato",
    property: "Edificio Alameda",
    unit: "A-101",
    uploadDate: "2023-12-15",
    expirationDate: "2024-12-14",
    isRentContract: true,
    tenantIds: ["tenant-1"],
    fileUrl: "#",
    description:
      "Contrato de arrendamiento para la unidad A-101 del Edificio Alameda.",
  },
  {
    id: "doc-2",
    title: "Recibo de Renta Enero",
    type: "recibo",
    property: "Edificio Alameda",
    unit: "A-101",
    uploadDate: "2024-01-05",
    isRentContract: false,
    tenantIds: ["tenant-1"],
    fileUrl: "#",
  },
  {
    id: "doc-3",
    title: "Inventario de Entrada A-101",
    type: "inventario",
    property: "Edificio Alameda",
    unit: "A-101",
    uploadDate: "2023-12-15",
    isRentContract: false,
    tenantIds: ["tenant-1"],
    fileUrl: "#",
    description:
      "Inventario de entrada detallando el estado de la unidad A-101 al momento de la entrega.",
  },
  {
    id: "doc-4",
    title: "Contrato de Arrendamiento A-202",
    type: "contrato",
    property: "Edificio Alameda",
    unit: "A-202",
    uploadDate: "2023-11-30",
    expirationDate: "2024-11-29",
    isRentContract: true,
    tenantIds: ["tenant-2"],
    fileUrl: "#",
  },
  {
    id: "doc-5",
    title: "Recibo de Renta Enero",
    type: "recibo",
    property: "Edificio Alameda",
    unit: "A-202",
    uploadDate: "2024-01-05",
    isRentContract: false,
    tenantIds: ["tenant-2"],
    fileUrl: "#",
  },
  {
    id: "doc-6",
    title: "Contrato de Arrendamiento C-401",
    type: "contrato",
    property: "Residencial Los Pinos",
    unit: "C-401",
    uploadDate: "2023-10-01",
    expirationDate: "2024-09-30",
    isRentContract: true,
    tenantIds: ["tenant-3"],
    fileUrl: "#",
    description:
      "Contrato de arrendamiento para la unidad C-401 del Residencial Los Pinos.",
  },
  {
    id: "doc-7",
    title: "Recibo de Renta Enero",
    type: "recibo",
    property: "Residencial Los Pinos",
    unit: "C-401",
    uploadDate: "2024-01-10",
    isRentContract: false,
    tenantIds: ["tenant-3"],
    fileUrl: "#",
  },
  {
    id: "doc-8",
    title: "Inventario de Entrada C-401",
    type: "inventario",
    property: "Residencial Los Pinos",
    unit: "C-401",
    uploadDate: "2023-10-01",
    isRentContract: false,
    tenantIds: ["tenant-3"],
    fileUrl: "#",
  },
  {
    id: "doc-9",
    title: "Contrato de Arrendamiento D-101",
    type: "contrato",
    property: "Edificio Central",
    unit: "D-101",
    uploadDate: "2023-12-01",
    expirationDate: "2024-11-30",
    isRentContract: true,
    tenantIds: ["tenant-4"],
    fileUrl: "#",
  },
  {
    id: "doc-10",
    title: "Recibo de Renta Enero",
    type: "recibo",
    property: "Edificio Central",
    unit: "D-101",
    uploadDate: "2024-01-03",
    isRentContract: false,
    tenantIds: ["tenant-4"],
    fileUrl: "#",
  },
  {
    id: "doc-11",
    title: "Documento Legal de Propiedad",
    type: "legal",
    property: "Edificio Central",
    uploadDate: "2023-05-20",
    isRentContract: false,
    fileUrl: "#",
    description: "Escritura pública y documentación legal de la propiedad.",
  },
  {
    id: "doc-12",
    title: "Documento Legal de Propiedad",
    type: "legal",
    property: "Edificio Alameda",
    uploadDate: "2022-03-15",
    isRentContract: false,
    fileUrl: "#",
    description: "Escritura pública y documentación legal de la propiedad.",
  },
  {
    id: "doc-13",
    title: "Documento Legal de Propiedad",
    type: "legal",
    property: "Residencial Los Pinos",
    uploadDate: "2021-11-10",
    isRentContract: false,
    fileUrl: "#",
    description: "Escritura pública y documentación legal de la propiedad.",
  },
  {
    id: "doc-14",
    title: "Contrato de Mantenimiento",
    type: "otro",
    property: "Edificio Alameda",
    uploadDate: "2024-01-15",
    expirationDate: "2025-01-14",
    isRentContract: false,
    fileUrl: "#",
    description:
      "Contrato con empresa de mantenimiento para servicios generales del edificio.",
  },
  {
    id: "doc-15",
    title: "Póliza de Seguro",
    type: "otro",
    property: "Residencial Los Pinos",
    uploadDate: "2023-09-01",
    expirationDate: "2024-08-31",
    isRentContract: false,
    fileUrl: "#",
    description:
      "Póliza de seguro para la propiedad que cubre daños estructurales e incendios.",
  },
];

// Utility functions

export const filterDocumentsByType = (type: string) => {
  if (type === "todos") return DOCUMENTS_DATA;
  return DOCUMENTS_DATA.filter((document) => document.type === type);
};

export const filterDocumentsByProperty = (property: string) => {
  if (property === "todas") return DOCUMENTS_DATA;
  return DOCUMENTS_DATA.filter((document) => document.property === property);
};

export const filterDocumentsByDate = (date: Date) => {
  const dateString = date.toISOString().split("T")[0];
  return DOCUMENTS_DATA.filter((document) => {
    const uploadDate = document.uploadDate.split("T")[0];
    return uploadDate === dateString;
  });
};

export const filterDocumentsBySearch = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return DOCUMENTS_DATA.filter((document) => {
    return (
      document.title.toLowerCase().includes(lowerCaseQuery) ||
      document.type.toLowerCase().includes(lowerCaseQuery) ||
      document.property.toLowerCase().includes(lowerCaseQuery) ||
      (document.unit && document.unit.toLowerCase().includes(lowerCaseQuery)) ||
      (document.description &&
        document.description.toLowerCase().includes(lowerCaseQuery))
    );
  });
};

export const getDocumentsByTenant = (tenantId: string) => {
  return DOCUMENTS_DATA.filter((document) => {
    return document.tenantIds?.includes(tenantId);
  });
};

export const getDocumentsByUnit = (unit: string) => {
  return DOCUMENTS_DATA.filter((document) => document.unit === unit);
};

export const getUniqueProperties = () => {
  return [...new Set(DOCUMENTS_DATA.map((document) => document.property))];
};

export const getDocumentCountByType = () => {
  const counts: Record<string, number> = {
    contrato: 0,
    recibo: 0,
    inventario: 0,
    legal: 0,
    otro: 0,
  };

  DOCUMENTS_DATA.forEach((document) => {
    counts[document.type]++;
  });

  return counts;
};

export const getRentContractsCount = () => {
  return DOCUMENTS_DATA.filter((document) => document.isRentContract).length;
};

export const getExpiringContracts = (daysThreshold: number) => {
  const today = new Date();
  const thresholdDate = new Date();
  thresholdDate.setDate(today.getDate() + daysThreshold);

  return DOCUMENTS_DATA.filter((document) => {
    if (!document.expirationDate) return false;

    const expirationDate = new Date(document.expirationDate);
    return (
      document.isRentContract &&
      expirationDate <= thresholdDate &&
      expirationDate >= today
    );
  });
};
