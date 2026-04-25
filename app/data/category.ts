export type PetCategory = {
  id: string;
  title: string;
  description: string;
  source: any;
  petName: string;
  petAge: string;
  details: { id: string; title: string; description: string }[];
};

export const CATEGORY_DATA: PetCategory[] = [
  {
    id: "1",
    title: "Perro",
    description: "Activo, cariñoso y fiel. ¡Te espera con la cola al aire!",
    source: require("../../assets/images/home/image_card.jpg"),
    petName: "Max",
    petAge: "2 años",
    details: [
      { id: "1", title: "Raza", description: "Golden Retriever" },
      { id: "2", title: "Tamaño", description: "Grande" },
      { id: "3", title: "Vacunas", description: "Al día" },
      { id: "4", title: "Esterilizado", description: "Sí" },
      { id: "5", title: "Estado", description: "En adopción" },
      { id: "6", title: "Ubicación", description: "Madrid" },
    ],
  },
  {
    id: "2",
    title: "Gato",
    description: "Independiente y curioso. Perfecto para el hogar.",
    source: require("../../assets/images/home/home_cat.jpg"),
    petName: "Luna",
    petAge: "1 año",
    details: [
      { id: "1", title: "Raza", description: "Siamés" },
      { id: "2", title: "Tamaño", description: "Mediano" },
      { id: "3", title: "Vacunas", description: "Al día" },
      { id: "4", title: "Esterilizada", description: "Sí" },
      { id: "5", title: "Estado", description: "En adopción" },
      { id: "6", title: "Ubicación", description: "Barcelona" },
    ],
  },
  {
    id: "3",
    title: "Conejo",
    description: "Tierno y juguetón. Ideal para familias con niños.",
    source: require("../../assets/images/home/home_rabbit.jpg"),
    petName: "Coco",
    petAge: "8 meses",
    details: [
      { id: "1", title: "Raza", description: "Enano holandés" },
      { id: "2", title: "Tamaño", description: "Pequeño" },
      { id: "3", title: "Vacunas", description: "Al día" },
      { id: "4", title: "Esterilizado", description: "No" },
      { id: "5", title: "Estado", description: "En adopción" },
      { id: "6", title: "Ubicación", description: "Valencia" },
    ],
  },
  {
    id: "4",
    title: "Hamster",
    description: "Pequeño, activo y lleno de energía. ¡Un amigo en miniatura!",
    source: require("../../assets/images/home/home_hamster.jpg"),
    petName: "Peanut",
    petAge: "4 meses",
    details: [
      { id: "1", title: "Raza", description: "Sirio dorado" },
      { id: "2", title: "Tamaño", description: "Mini" },
      { id: "3", title: "Vacunas", description: "No requeridas" },
      { id: "4", title: "Esterilizado", description: "No" },
      { id: "5", title: "Estado", description: "En adopción" },
      { id: "6", title: "Ubicación", description: "Sevilla" },
    ],
  },
];
