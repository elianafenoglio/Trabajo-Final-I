# Chat React App

## Descripción del proyecto

Este proyecto consiste en una aplicación de mensajería instantánea estilo WhatsApp desarrollada en **React**. Permite al usuario autenticarse con una clave genérica, seleccionar un contacto de una lista y mantener una conversación básica con historial simulado. ++++

##  Funcionalidades

- Inicio de sesión básico.
- Visualización de una lista de contactos.
- Vista de conversación con cada contacto.
- Envío de mensajes que se renderizan en pantalla.
- Interfaz **responsive**, adaptable entre resoluciones de 320px a 2000px.
- Navegación entre rutas utilizando `react-router-dom`.
- Implementación de **estados** con `useState` para manejar datos como:
  - Contacto seleccionado.
  - Historial de mensajes.
  - Mensaje actual en escritura.
- Uso de **componentes reutilizables** (`ContactItem`, `Chat`, `ContactList`, etc).
- Estilos accesibles: colores contrastantes, tamaños de fuente legibles, disposición clara.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) 
- HTML y CSS

## Librerías y dependencias

- `react-router-dom` para el enrutamiento.
- `useState` de React para manejo de estado.

## Despliegue

La aplicación se encuentra desplegada en [Vercel](https://vercel.com/).  
**Link al deploy:** [https://<tu-nombre-del-proyecto>.vercel.app](https://<tu-nombre-del-proyecto>.vercel.app)

## 📁 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── ContactList.jsx
│   ├── ContactItem.jsx
│   ├── Chat.jsx
├── screens/
│   ├── LoginScreen.jsx
│   ├── ContactScreen.jsx
│   ├── ChatScreen.jsx
├── style.css
public/
└── index.html
```

## 🤯 Dificultades enfrentadas

- Configuración inicial de Git y Vercel.
- Estilos responsivos para mantener la visualización clara en pantallas pequeñas.
- Alineación correcta de los mensajes y el botón de enviar.
- Sincronización entre selección de contacto y carga de historial de mensajes.
- Eliminación de dependencias obsoletas (ej. Math.js) sin afectar el renderizado.

## 📌 Consideraciones

- El sistema de login es estático y no contiene validación real.
- No hay backend ni almacenamiento persistente, solo frontend.
- Ideal como práctica de React, manejo de estados y routing.

## ✍️ Autor

Eliana E. Fenoglio  
Argentina – 2025
