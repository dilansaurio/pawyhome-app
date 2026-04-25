import { DropdownOption, SelectOptions } from "@/types/components/types";

export type PetSizeOption = {
  id: string;
  title: string;
  value: string;
};

export const SIZE_PET: PetSizeOption[] = [
  { id: "1", title: "Pequeño", value: "pequeno" },
  { id: "2", title: "Mediano", value: "mediano" },
  { id: "3", title: "Grande", value: "grande" },
  { id: "4", title: "Gigante", value: "gigante" },
];

export const BREED_PET: DropdownOption[] = [
  { label: "Persa", value: "persa" },
  { label: "Siames", value: "siames" },
  { label: "Maine Coon", value: "maine-coon" },
  { label: "Mestizo", value: "mestizo" },
];

export const PET_HEALTH_ISSUES: SelectOptions[] = [
  { id: "1", title: "Vacunas Séxtuple", value: "vacunas-sextuple" },
  { id: "2", title: "Vacuna Óctuple", value: "vacuna-octuple" },
  { id: "3", title: "Vacuna Antirrábica", value: "vacuna-antirrabica" },
  { id: "4", title: "Desparasitación", value: "desparasitacion" },
  { id: "5", title: "Esterilización", value: "esterilizacion" },
  { id: "6", title: "Enfermedades Crónicas", value: "enfermedades-cronicas" },
  { id: "7", title: "Alergias", value: "alergias" },
  { id: "8", title: "Microchip", value: "microchip" },
];
