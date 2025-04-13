import { PropertyUnitDetails } from "./property-unit-details-data";

export interface PropertyUnitImage {
  id: string;
  unitId: string;
  url: string;
  title?: string;
  description?: string;
  isPrimary?: boolean;
  uploadedAt: string; // ISO date string
}

export const PROPERTY_UNIT_IMAGES_DATA: Record<string, PropertyUnitImage[]> = {
  "unit-1": [
    {
      id: "img-1-1",
      unitId: "unit-1",
      url: "https://picsum.photos/seed/apartment1-main/800/600",
      title: "Vista principal",
      description: "Vista principal de la sala de estar",
      isPrimary: true,
      uploadedAt: "2023-12-15T10:30:00Z",
    },
    {
      id: "img-1-2",
      unitId: "unit-1",
      url: "https://picsum.photos/seed/apartment1-kitchen/800/600",
      title: "Cocina",
      description: "Cocina equipada con electrodomésticos modernos",
      isPrimary: false,
      uploadedAt: "2023-12-15T10:35:00Z",
    },
    {
      id: "img-1-3",
      unitId: "unit-1",
      url: "https://picsum.photos/seed/apartment1-bedroom/800/600",
      title: "Dormitorio principal",
      description: "Dormitorio principal con cama king size",
      isPrimary: false,
      uploadedAt: "2023-12-15T10:40:00Z",
    },
    {
      id: "img-1-4",
      unitId: "unit-1",
      url: "https://picsum.photos/seed/apartment1-bathroom/800/600",
      title: "Baño",
      description: "Baño completo con ducha y bañera",
      isPrimary: false,
      uploadedAt: "2023-12-15T10:45:00Z",
    },
    {
      id: "img-1-5",
      unitId: "unit-1",
      url: "https://picsum.photos/seed/apartment1-balcony/800/600",
      title: "Balcón",
      description: "Balcón con vista a la ciudad",
      isPrimary: false,
      uploadedAt: "2023-12-15T10:50:00Z",
    },
  ],

  "unit-2": [
    {
      id: "img-2-1",
      unitId: "unit-2",
      url: "https://picsum.photos/seed/apartment2-main/800/600",
      title: "Vista principal",
      description: "Vista principal del apartamento",
      isPrimary: true,
      uploadedAt: "2023-11-20T14:15:00Z",
    },
    {
      id: "img-2-2",
      unitId: "unit-2",
      url: "https://picsum.photos/seed/apartment2-kitchen/800/600",
      title: "Cocina",
      description: "Cocina con isla central",
      isPrimary: false,
      uploadedAt: "2023-11-20T14:20:00Z",
    },
    {
      id: "img-2-3",
      unitId: "unit-2",
      url: "https://picsum.photos/seed/apartment2-bedroom/800/600",
      title: "Dormitorio",
      description: "Dormitorio con closet amplio",
      isPrimary: false,
      uploadedAt: "2023-11-20T14:25:00Z",
    },
  ],

  "unit-3": [
    {
      id: "img-3-1",
      unitId: "unit-3",
      url: "https://picsum.photos/seed/apartment3-main/800/600",
      title: "Vista principal",
      description: "Vista principal del apartamento",
      isPrimary: true,
      uploadedAt: "2023-10-05T09:10:00Z",
    },
    {
      id: "img-3-2",
      unitId: "unit-3",
      url: "https://picsum.photos/seed/apartment3-dining/800/600",
      title: "Comedor",
      description: "Área de comedor con capacidad para 6 personas",
      isPrimary: false,
      uploadedAt: "2023-10-05T09:15:00Z",
    },
  ],

  "unit-4": [
    {
      id: "img-4-1",
      unitId: "unit-4",
      url: "https://picsum.photos/seed/apartment4-main/800/600",
      title: "Vista principal",
      description: "Vista principal del apartamento",
      isPrimary: true,
      uploadedAt: "2023-09-12T16:40:00Z",
    },
  ],

  "unit-5": [],
};

export const getUnitImages = (unitId: string): PropertyUnitImage[] => {
  return PROPERTY_UNIT_IMAGES_DATA[unitId] || [];
};

export const getPrimaryUnitImage = (
  unitId: string
): PropertyUnitImage | undefined => {
  const images = PROPERTY_UNIT_IMAGES_DATA[unitId] || [];
  return images.find((img) => img.isPrimary) || images[0];
};

export const getUnitImageUrls = (unitId: string): string[] => {
  const images = PROPERTY_UNIT_IMAGES_DATA[unitId] || [];
  return images.map((img) => img.url);
};

// Helper function to update property unit details with primary image
export const updatePropertyUnitWithImages = (
  unit: PropertyUnitDetails
): PropertyUnitDetails => {
  const primaryImage = getPrimaryUnitImage(unit.id);

  return {
    ...unit,
    image: primaryImage?.url || unit.image,
    images: getUnitImageUrls(unit.id),
  };
};
