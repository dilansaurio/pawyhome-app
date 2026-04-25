// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3E8BAF", // Azul principal
          primarylight: "#8FE0E3", // Cyan
          secondary: "#FFCD5E", // Amarillo
          orange: "#F9A559", // Naranja
        },
        neutral: {
          surface: "#FFFFAB", // Amarillo muy claro
          background: "#f8fafc", // Gris muy claro
          text: "#0f172a",
        },
        status: {
          success: "#4ADE80", // Verde
          warning: "#FBBF24", // Amarillo oscuro
          error: "#F87171", // Rojo
        },
        text: {
          main: "#111827", // Gris muy oscuro
          primary: "#6B7280", // Gris medio
          secondary: "#CCCCCC", // Gris claro
          placeholder: "#94a3b8", // Gris claro
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      borderRadius: {
        card: "20px",
        button: "12px",
      },
    },
  },
  plugins: [],
};
