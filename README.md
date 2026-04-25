# CONVOCATORIA: DESARROLLADOR FRONTEND

## PRUEBA TÉCNICA: DASHBOARD DE GESTIÓN DE PROSPECTOS

### 1. Introducción
Bienvenido/a al proceso de selección para la Dirección de Mercadeo de la Pontificia Universidad Javeriana. El objetivo de esta prueba es evaluar tus habilidades técnicas en el ecosistema moderno de desarrollo web, tu capacidad para estructurar código escalable y tu atención al detalle en la experiencia de usuario (UX).

### 2. El Reto: "Javeriana Lead & Events Manager"
Deberás construir una aplicación de una sola página (SPA) que permita al equipo de mercadeo visualizar la oferta académica (eventos/programas) y gestionar el registro de nuevos interesados (leads).

**Requerimientos Funcionales:**
1. **Visualización de Datos:** Consumir una API REST (puedes usar JSONPlaceholder o Mockaroo) para listar eventos o programas académicos en formato de cards.
2. **Filtrado Avanzado:** Implementar un buscador por nombre y un filtro por categoría (ej. Pregrado, Posgrado, Educación Continua) que funcione sin recargar la página.
3. **Captura de Leads:** Un formulario de inscripción con las siguientes validaciones:
    - **Email:** Debe ser una estructura válida y, preferiblemente, validar dominio @javeriana.edu.co.
    - **Normalización:** Al enviar, los datos deben transformarse (limpieza de espacios, capitalización) antes de mostrar un mensaje de éxito.
4. **Persistencia:** Guardar los leads registrados en localStorage para que persistan tras recargar la página.

### 3. Stack Tecnológico Requerido
Para esta prueba, es obligatorio el uso de las siguientes herramientas:
- **Framework:** React.js o Vue.js (Versiones estables recientes).
- **Lenguaje:** Javascript o TypeScript (Definición estricta de interfaces y tipos) este último es un plus.
- **Estilos:** Bootstrap 5 o Tailwind CSS (Se evaluará el diseño UI y la adaptabilidad móvil/responsive).
- **Gestión de Estado:** Context API, Redux, Pinia o Composition API.

### 4. Criterios de Evaluación
- **Arquitectura:** Organización de carpetas, separación de componentes y lógica de negocio (Hooks/Composables).
- **Dominio de TypeScript:** Uso de tipos, interfaces y manejo de opcionalidad (evitar el uso de any) este es si escogen este lenguaje.
- **Calidad de Código:** Código limpio (Clean Code), semántica HTML5 y manejo de asincronía (async/await).
- **Performance:** Control de re-renders innecesarios y optimización de filtros.

### 5. Instrucciones de Entrega
1. **Plazo:** El plazo máximo de entrega es el día martes 28 de abril a las 12:00 p.m.
2. **Código Fuente:** Sube el proyecto a un repositorio público (GitHub/GitLab).
3. **README:** Incluye un archivo con las instrucciones para ejecutar el proyecto localmente y una breve explicación de las decisiones técnicas tomadas.
4. **Deployment:** Despliega la aplicación en una plataforma gratuita (Vercel, Netlify o GitHub Pages) y adjunta el enlace.

**Nota:** En la Universidad Javeriana valoramos la innovación. Si decides agregar una funcionalidad extra (como modo oscuro, animaciones con Framer Motion, o pruebas unitarias), será tomado en cuenta como un plus en tu calificación.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```