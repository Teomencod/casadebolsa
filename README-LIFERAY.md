# FondoMatch - Client Extension para Liferay 7.4

## 📋 Descripción
Client Extension de Liferay 7.4 que proporciona un asesor de inversiones inteligente con IA generativa.

## 🏗️ Estructura de archivos compilados

```
dist/
├── index.js       # JavaScript compilado (IIFE)
└── index.css      # Estilos compilados
```

## 🚀 Pasos para instalar en Liferay 7.4

### 1. Compilar la extensión
```bash
npm install
npm run build:liferay
```

### 2. Descargar los archivos generados
- `dist/index.js`
- `dist/index.css`

### 3. En Liferay Admin Panel:
1. Ir a **Control Panel** → **Client Extensions**
2. Crear una nueva **Global JS/CSS Client Extension**
3. Cargar los archivos:
   - Archivo JS: `dist/index.js`
   - Archivo CSS: `dist/index.css`
4. Configurar variables de entorno:
   - `GEMINI_API_KEY`: Tu clave API de Google Gemini

### 4. Activar la extensión
- Marcar como **Habilitada**
- Hacer clic en **Guardar**

## 🔧 Uso en portlets

Agregar contenedor HTML en tu portlet:
```html
<div id="root"></div>
<!-- o -->
<div data-fondo-match-root></div>
```

O inicializar manualmente con JavaScript:
```javascript
window.FondoMatch.init('root');
```

## 📦 Dependencias incluidas

- React 19
- Framer Motion (animaciones)
- Tailwind CSS
- Google Generative AI SDK

## 🔑 Variables de entorno requeridas

```
GEMINI_API_KEY=tu_clave_api_aqui
```

## 📝 Notas de seguridad

- La extensión tiene permiso para acceder a `generativelanguage.googleapis.com`
- Asegurar que la API Key está configurada en variables de entorno de Liferay
- No exponer credenciales en el código

## 📄 Licencia
MIT
