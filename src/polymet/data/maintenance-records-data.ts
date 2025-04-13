export interface MaintenanceRecord {
  id: string;
  description: string;
  category: "reparacion" | "preventivo" | "emergencia" | "inspeccion" | "otro";
  status: "programado" | "en_progreso" | "completado" | "cancelado";
  priority: "baja" | "media" | "alta" | "urgente";
  reportDate: string;
  scheduledDate?: string;
  completionDate?: string;
  technician?: string;
  cost?: number;
  notes?: string;
  reportedBy?: string;
}

export const MAINTENANCE_RECORDS_DATA: Record<string, MaintenanceRecord[]> = {
  "unit-1": [
    {
      id: "maint-1",
      description: "Reparación de fuga en lavabo del baño principal",
      category: "reparacion",
      status: "completado",
      priority: "media",
      reportDate: "2024-03-15",
      scheduledDate: "2024-03-17",
      completionDate: "2024-03-17",
      technician: "Roberto Méndez",
      cost: 1200,
      notes: "Se reemplazó la llave mezcladora y se sellaron las uniones",
      reportedBy: "Carlos Rodríguez",
    },
    {
      id: "maint-2",
      description: "Mantenimiento preventivo de aire acondicionado",
      category: "preventivo",
      status: "programado",
      priority: "baja",
      reportDate: "2024-04-10",
      scheduledDate: "2024-05-05",
      technician: "Servicios AC Premium",
      reportedBy: "Administración",
    },
    {
      id: "maint-3",
      description: "Reparación de persiana en ventana de sala",
      category: "reparacion",
      status: "en_progreso",
      priority: "baja",
      reportDate: "2024-04-22",
      scheduledDate: "2024-04-25",
      technician: "Manuel Ortega",
      reportedBy: "Carlos Rodríguez",
    },
  ],

  "unit-2": [
    {
      id: "maint-4",
      description: "Falla eléctrica en tomacorrientes de cocina",
      category: "emergencia",
      status: "completado",
      priority: "alta",
      reportDate: "2024-02-28",
      scheduledDate: "2024-02-28",
      completionDate: "2024-02-28",
      technician: "Electricistas Unidos",
      cost: 1800,
      notes: "Se reemplazó el interruptor principal y se revisó el cableado",
      reportedBy: "Laura González",
    },
    {
      id: "maint-5",
      description: "Inspección anual de detectores de humo",
      category: "inspeccion",
      status: "completado",
      priority: "media",
      reportDate: "2024-01-15",
      scheduledDate: "2024-01-20",
      completionDate: "2024-01-20",
      technician: "Seguridad Residencial SA",
      cost: 450,
      reportedBy: "Administración",
    },
  ],

  "unit-3": [
    {
      id: "maint-6",
      description: "Reparación de puerta principal",
      category: "reparacion",
      status: "completado",
      priority: "media",
      reportDate: "2024-03-05",
      scheduledDate: "2024-03-10",
      completionDate: "2024-03-10",
      technician: "Carpintería Moderna",
      cost: 950,
      notes: "Se ajustó la bisagra y se reemplazó la cerradura",
      reportedBy: "Miguel Sánchez",
    },
  ],

  "unit-4": [
    {
      id: "maint-7",
      description: "Filtración de agua en techo de dormitorio",
      category: "emergencia",
      status: "en_progreso",
      priority: "urgente",
      reportDate: "2024-04-18",
      scheduledDate: "2024-04-19",
      technician: "Impermeabilizaciones Rápidas",
      reportedBy: "Ana Martínez",
      notes: "Se colocó contención temporal. Pendiente reparación definitiva",
    },
  ],

  "unit-5": [
    {
      id: "maint-8",
      description: "Mantenimiento preventivo de calentador de agua",
      category: "preventivo",
      status: "programado",
      priority: "media",
      reportDate: "2024-04-12",
      scheduledDate: "2024-05-10",
      technician: "Servicios Técnicos Hidráulicos",
      reportedBy: "Administración",
    },
  ],
};

export const getMaintenanceRecords = (unitId: string): MaintenanceRecord[] => {
  return MAINTENANCE_RECORDS_DATA[unitId] || [];
};

export const getMaintenanceRecordsByStatus = (
  unitId: string,
  status: MaintenanceRecord["status"]
): MaintenanceRecord[] => {
  const records = getMaintenanceRecords(unitId);
  return records.filter((record) => record.status === status);
};

export const getMaintenanceRecordsByCategory = (
  unitId: string,
  category: MaintenanceRecord["category"]
): MaintenanceRecord[] => {
  const records = getMaintenanceRecords(unitId);
  return records.filter((record) => record.category === category);
};

export const getTotalMaintenanceCost = (unitId: string): number => {
  const records = getMaintenanceRecords(unitId);
  return records.reduce((total, record) => total + (record.cost || 0), 0);
};

export const getPendingMaintenanceCount = (unitId: string): number => {
  const records = getMaintenanceRecords(unitId);
  return records.filter(
    (record) =>
      record.status === "programado" || record.status === "en_progreso"
  ).length;
};
