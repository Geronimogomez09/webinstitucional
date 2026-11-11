# 🏫 Sitio Web Institucional - EPET N°20 (Neuquén)

## 1. Descripción del Proyecto
* **Objetivo:** Desarrollar el sitio web institucional oficial de la EPET N°20 de Neuquén para brindar información clara, moderna y accesible a la comunidad educativa (estudiantes, docentes, familias y público general).
* **Destinatarios:** Comunidad escolar de la EPET N°20, ingresantes, padres y tutores.
* **Decisiones de Diseño:** 
  * **Paleta de Colores:** Basada en tonos institucionales y profesionales: Crema/Marfil (`#FCF8EC`), Celeste Suave (`#D0E8F2`), Azul Acero Intermedio (`#79A3B1`) y Azul Oscuro Institucional (`#456268`).
  * **Tipografía:** Interfaz limpia, tipografía estándar sans-serif para asegurar la legibilidad en dispositivos móviles y de escritorio.
* **Tecnologías Utilizadas:** React, Vite, React Router DOM, Bootstrap, Bootstrap Icons y CSS Modules.

---

## 2. Estructura del Sitio y Carpetas
El proyecto está organizado de la siguiente manera:
```text
webinstitucional/
├── public/                # Archivos estáticos e imágenes públicas
├── src/
│   ├── componentes/       # Componentes reutilizables (Header, Footer, etc.)
│   ├── pages/             # Páginas principales (Inicio, NuestraHistoria, Novedades, ContactosyUbi)
│   ├── styles/            # Archivos de estilos CSS específicos por sección
│   ├── App.jsx            # Configuración principal de rutas y layout
│   ├── App.css            # Estilos globales de la aplicación
│   └── main.jsx           # Punto de entrada de React
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Documentación del repositorio


## 3. Cómo ejecutarlo y actualizarlo

### 🛠️ Pasos para ver el sitio en una computadora local:
1. Clonar el repositorio o descargar el código fuente.
2. Abrir una terminal en la carpeta raíz del proyecto (`webinstitucional`).
3. Instalar las dependencias ejecutando:
   ```bash
   npm install

## 4. Registro de Participación por Página

| Página     | Integrante | Tareas Realizadas |
| Inicio   | Luisa      | Maquetó la estructura visual general, configuró el layout principal y ajustó la presentación institucional. |
| Novedades| Gero    | Desarrolló el sistema de publicaciones, maquetación de tarjetas y visualización de notas recientes. |
| Trayectos Formativos| Ana | Estructuró los contenidos correspondientes al Ciclo Básico, Interciclo y Ciclo Orientado. |
| Talleres | Agus | Diseñó y programó la sección de talleres técnicos y especialidades. |
| Secretaría | Agus | Organizó la sección de trámites, instructivos de inscripciones y horarios de atención. |
| Nuestra Historia | Pilar | Redactó y estructuró los contenidos históricos institucionales y diseño de tarjetas. |
| Contacto y Ubicación | Pilar | Diseñó la tarjeta de información extendida a ancho completo e integró el mapa interactivo de Google Maps (Lanín 2020). |
| Biblioteca | Agus | Organizó la pagina ordenando los links. |
