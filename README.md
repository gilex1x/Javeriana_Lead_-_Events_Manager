
# DESCRIPCIÓN DE LA SOLUCIÓN

## STACK
Como la prueba lo indica, se uso `React` con `Typescript`, `Vite` como bundler y para los estilos se uso `Tailwind`. Para el manejo de estado se opto por usar `Context API` y no una libreria externa, esto ya que no se tiene que hacer fetch de muchos datos ni se manejan estados muy complejos.

Para hacer fetch de la data se uso el servicio de [`My Json server`](https://my-json-server.typicode.com/gilex1x/Javeriana_Lead_-_Events_Manager) el cual lee la información del archivo `db.json` que se encuentra en la raiz del proyecto.

Para el manejo de la información guardada en el localStorage se creo un customHook llamado useLocalStorage, ademas se crearon otros custom hooks para el filtrado de los items y para validar clicks externos en el boton de filtros.

### Adicionales
- Para poder agregar un Lead se agrego un boton con el icono de `+` en cada uno de los items, boton el cual muestra un formulario para registrar los leads.
- En el card de cada item también se agrego un contador que muestra la cantidad de leads registrados para cada item.

## USO DE IA
Se uso gemini-cli, con el modelo gemini-3.1-pro-preview, en algunas partes del proceso para: 
 - **Uso de iconos**: Para evitar usar librerias de terceros o buscar el codigo en internet.
 - **Corrección de errores**: Errores que se tuvieron a la hora de hacer uso del custom hook useLocalStorage.
 - **La creación de la data**: Para crear el `db.json` haciendo que la IA busque la pagina oficial de la universidad Javeriana eventos y oferta academica.
 - **Corrección de estilos**: Para corregir estilos que no estaban alineados con un diseño responsivo.

**Nota**: Siempre se reviso, y en algunos casos se corrigio, el codigo entregado por parte de la IA.

## Ejecutar proyecto

Sigue estos pasos para instalar y levantar el entorno de desarrollo localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Javeriana_Lead_-_Events_Manager
   ```

2. **Instalar las dependencias:**
   Como el proyecto utiliza `yarn` (se evidencia por el `yarn.lock`), ejecuta el siguiente comando:
   ```bash
   yarn install
   ```
   *(Si prefieres usar npm, puedes ejecutar `npm install`)*

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade la URL del servicio (My Json Server):
   ```env
   VITE_SERVICE_URL=https://my-json-server.typicode.com/gilex1x/Javeriana_Lead_-_Events_Manager
   ```

4. **Levantar el servidor de desarrollo:**
   Para iniciar la aplicación en modo desarrollo y ver los cambios en tiempo real, ejecuta:
   ```bash
   yarn dev
   ```
   El servidor se iniciará normalmente en `http://localhost:5173`.

5. **Construir para producción (Build):**
   Para generar una versión optimizada de la aplicación lista para ser desplegada:
   ```bash
   yarn build
   ```

6. **Previsualizar la versión de producción:**
   Para comprobar cómo se verá la aplicación una vez construida:
   ```bash
   yarn preview
   ```
6. **Versión de producción online:**
   Puedes ver el proyecto en linea desplegado en netlify [aquí](https://javerianaleadsystem.netlify.app/)


---


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
