const tintColorLight = "#2f95dc"; // Azul claro para temas claros
const tintColorDark = "#fff"; // Blanco para temas oscuros

const primary = "#FFCD5E"; // Azul principal

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tintprimary: primary,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
