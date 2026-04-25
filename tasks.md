# Tareas de la Prueba Técnica: "Javeriana Lead & Events Manager"

## Requerimientos Funcionales

- [X] **Visualización de Datos:** Consumir una API REST (JSONPlaceholder o Mockaroo) para listar eventos o programas académicos en formato de cards.
- [X] **Filtrado Avanzado:** Implementar un buscador por nombre y un filtro por categoría, que funcione sin recargar la página.
- [ ] **Captura de Leads:** Un formulario de inscripción con las siguientes validaciones:
  - [x] **Email:** Debe ser una estructura válida y, preferiblemente, validar dominio `@javeriana.edu.co`.
  - [ ] **Normalización:** Al enviar, los datos deben transformarse (limpieza de espacios, capitalización) antes de mostrar un mensaje de éxito.
- [x] **Persistencia:** Guardar los leads registrados en `localStorage` para que persistan tras recargar la página.

## Criterios de Evaluación

- [x] **Arquitectura:** Organización de carpetas, separación de componentes y lógica de negocio (Hooks/Componentes).
- [ ] **Dominio de TypeScript:** Uso de tipos, interfaces y manejo de opcionalidad (evitar el uso de `any`).
- [ ] **Calidad de Código:** Código limpio (Clean Code), semántica HTML5 y manejo de asincronía (`async/await`).
- [x] **Performance:** Control de re-renders innecesarios y optimización de filtros.