import { Slide } from "@/types/onboarding/types";

export const slides: Slide[] = [
  {
    id: "1",
    image: require("@/assets/images/home/home_cat.jpg"),
    title: "Encuentra mascotas cerca de ti",
    description:
      "Explora mascotas disponibles para adopción en tu ciudad. Filtra por tipo, raza y mucho más.",
    accent: "#8FE0E3",
  },
  {
    id: "2",
    image: require("@/assets/images/home/home_rabbit.jpg"),
    title: "Publica en adopción",
    description:
      "¿Tienes una mascota que necesita un hogar? Publícala fácilmente y encuentra el dueño perfecto.",
    accent: "#FFCD5E",
  },
  {
    id: "3",
    image: require("@/assets/images/home/header_dog.png"),
    title: "Conecta con la comunidad",
    description:
      "Únete a miles de amantes de las mascotas. Adopta con amor y dale un hogar a quien lo necesita.",
    accent: "#F9A559",
  },
];
