# 🚀 Mi Landing Interactiva

Landing page Interactiva y elegante construida con React, TypeScript y CSS puro.

> **A tener en cuenta:** El maquetado inicial y el concepto fueron desarrollados por Bruno. Los componentes y el desarrollo de la lógica fueron formulados por Cursor. Estilo y colores de Glass elegido por Bruno en base a un gusto personal. 


##  Características Principales

###  **Funcionalidades Core**
- **Navegación fluida** entre secciones con scroll suave
- **Formulario de contacto** funcional con validación
- **Lista interactiva** para gestionar ideas, tareas y links
- **Diseño responsive** que se adapta a cualquier dispositivo
- **Animaciones suaves** que mejoran la experiencia de usuario

###  **Diseño y UX**
- **Fuente Montserrat** tipografía moderna y legible
- **Paleta de colores** armoniosa con gradientes atractivos
- **Efectos hover** y transiciones fluidas
- **Glass morphism** en elementos clave
- **Micro-interacciones** que hacen la interfaz más viva

## Arquitectura del Proyecto

### **Estructura de Archivos**
```
src/
├── components/         # Componentes reutilizables
│   ├── navmenu.tsx     # Navegación principal
│   └── InteractiveList.tsx  # Lista de tareas interactiva
├── pages/              # Páginas/secciones principales
│   ├── home.tsx        # Sección de inicio
│   └── contact.tsx     # Formulario de contacto
├── styles/             # Sistema de estilos
│   └── styles.css      # CSS unificado y optimizado
├── App.tsx             # Componente raíz
└── main.tsx            # Punto de entrada
```

##  Componentes Detallados

### **NavMenu** (`components/navmenu.tsx`)
El corazón de la navegación. Un menú fijo que permite saltar entre secciones de forma elegante.

```tsx
// Características clave:
- Posición fija con backdrop blur
- Botones con hover effects
- Scroll suave automático
- Responsive en móviles
```

### **Home** (`pages/home.tsx`)
La primera impresión que recibe el usuario. Una sección hero con gradiente y features cards que flotan suavemente.

```tsx
// Elementos destacados:
- Título con highlight animado
- 3 features cards con iconos
- Card flotante interactiva
- Grid responsive automático
```

### **Contact** (`pages/contact.tsx`)
Formulario de contacto completo con manejo de estado y feedback visual.

```tsx
// Funcionalidades:
- Validación de campos requeridos
- Manejo de estado con React hooks
- Feedback al usuario al enviar
- Diseño centrado y accesible
```

### **InteractiveList** (`components/InteractiveList.tsx`)
El componente más interactivo. Permite agregar, completar y eliminar elementos de diferentes tipos.

```tsx
// Características:
- 3 tipos de elementos: ideas, tareas, links
- Estados visuales diferenciados
- Estadísticas en tiempo real
- Animaciones de entrada/salida
```

##  Sistema CSS 
### **Variables CSS Minimalistas**
```css
:root {
  --primary: #f507ba;    /* Color principal */
  --accent: #c2ff04;     /* Color de acento */
  --text: #161616;       /* Texto principal */
  --bg: #f8f9fa;           /* Fondo */
  --shadow: 0 4px 12px rgba(0,0,0,0.48);
  --radius: 8px;        /* Border radius */
}
```
### **Sistema de Layout**
- **Grid CSS**: `.grid-2`, `.grid-3`, `.grid-auto` para layouts responsivos
- **Flexbox**: `.flex`, `.flex-center`, `.flex-between` para alineaciones
- **Containers**: Sistema de contenedores centrados y responsive

### **Componentes CSS Reutilizables**
```css
/* Botones con variantes */
.btn { /* Base */ }
.btn-secondary { /* Outline */ }
.btn-small, .btn-large { /* Tamaños */ }

/* Cards con hover effects */
.card { /* Base con sombra */ }
.card:hover { /* Elevación */ }

/* Formularios consistentes */
.form-input { /* Inputs unificados */ }
.form-group { /* Agrupación */ }
```

### **Animaciones Suaves**
```css
/* Clases de animación */
.animate-fade-in { animation: fadeIn 0.6s ease-out; }
.animate-slide-up { animation: slideUp 0.6s ease-out; }
.animate-float { animation: float 3s ease-in-out infinite; }
```

## Responsive Design

El proyecto está diseñado mobile-first

- **Desktop**: > 768px - Layout completo con grid
- **Tablet**: 768px - Adaptación de columnas
- **Mobile**: < 480px - Stack vertical optimizado

## Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **CSS3** - Estilos modernos con variables
- **Vite** - Build tool rápido
- **ESLint** - Calidad de código



## 🛠️ Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

```
### **UX/UI Decisions**
- **Glass morphism**
- **Gradientes**
- **Micro-animaciones**

## Paleta de Colores

- **Rosa principal** (#f507ba): Color vibrante y llamativo
- **Verde neón** (#c2ff04): Acento brillante y moderno  
- **Blanco** (#f8f9fa): Fondo limpio y minimalista
- **Negro** (#161616): Texto principal con buen contraste

---
