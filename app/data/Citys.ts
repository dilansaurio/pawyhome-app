export type Region = {
  id: string;
  label: string;
  value: string;
};

export const CHILE_REGIONS: Region[] = [
  { id: "1", label: "Arica y Parinacota", value: "arica_y_parinacota" },
  { id: "2", label: "Tarapacá", value: "tarapaca" },
  { id: "3", label: "Antofagasta", value: "antofagasta" },
  { id: "4", label: "Atacama", value: "atacama" },
  { id: "5", label: "Coquimbo", value: "coquimbo" },
  { id: "6", label: "Valparaíso", value: "valparaiso" },
  { id: "7", label: "Metropolitana de Santiago", value: "metropolitana" },
  { id: "8", label: "O'Higgins", value: "ohiggins" },
  { id: "9", label: "Maule", value: "maule" },
  { id: "10", label: "Ñuble", value: "nuble" },
  { id: "11", label: "Biobío", value: "biobio" },
  { id: "12", label: "La Araucanía", value: "araucania" },
];
