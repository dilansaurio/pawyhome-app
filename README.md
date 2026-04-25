# 🐾 PawyHome App

Aplicación móvil de adopción de mascotas desarrollada con **React Native** y **Expo**. Permite explorar mascotas disponibles para adopción, visualizarlas en un mapa interactivo y registrar nuevas mascotas.

---

## 📱 Pantallas

| Pantalla | Descripción |
|---|---|
| **Home** | Lista de mascotas por categoría con card destacada y modales de detalle |
| **Encontrar** | Mapa interactivo con marcadores de mascotas disponibles cerca |
| **Agregar** | Formulario paso a paso para registrar una nueva mascota en adopción |
| **Perfil** | Vista del perfil del usuario |

---

## 🚀 Tecnologías

- [Expo](https://expo.dev/) ~54
- [React Native](https://reactnative.dev/) 0.81
- [Expo Router](https://expo.github.io/router/) — navegación basada en archivos
- [NativeWind](https://www.nativewind.dev/) — Tailwind CSS para React Native
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) — mapa interactivo
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) — persistencia local segura
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) — selección de imágenes

---

## 📂 Estructura del proyecto

```
app/
├── (tabs)/          # Navegación principal por tabs
├── data/            # Datos estáticos (categorías, mascotas, regiones)
└── screen/          # Componentes de pantalla por sección
    ├── addscreen/
    ├── homescreen/
    └── profilescreen/
components/
├── atom/            # Componentes base (Button, TextInput, Search)
├── molecules/       # Componentes compuestos (Card, Modal, Dropdown...)
├── organisms/       # Bloques de UI (StepFooter)
└── template/        # Layouts de pantalla
hooks/               # Custom hooks (estado de formularios, dropdowns)
constants/           # Colores y estilos globales
types/               # Tipos TypeScript compartidos
```

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/dilansaurio/pawyhome-app.git
cd pawyhome-app

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start
```

Para correr en dispositivo/emulador:

```bash
npm run android   # Android
npm run ios       # iOS
npm run web       # Web
```

---

## 📋 Funcionalidades principales

- **Cards de categoría** con imagen, descripción y modal de detalle por mascota
- **Card destacada** "Un nuevo amigo te espera" con flyer informativo
- **Mapa** con 4 marcadores de mascotas cercanas y apertura de modal al tocar
- **Formulario de registro** con campos: nombre, raza, ciudad (12 regiones de Chile), tamaño y estado de salud
- **Persistencia local** del formulario con Expo Secure Store

---

## 🗺️ Ubicación base del mapa

Bogotá, Colombia — `lat: 4.710989, lng: -74.07209`

---

## 📄 Licencia

MIT
