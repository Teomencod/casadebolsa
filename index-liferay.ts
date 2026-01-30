import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Punto de entrada para Client Extension de Liferay
// Exporta una función que será llamada por Liferay
export function init(containerId: string) {
  const container = document.getElementById(containerId) || document.querySelector('[data-fondo-match-root]');
  
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.warn('[FondoMatch] No container found for initialization');
  }
}

// Inicialización automática si existe el elemento root
declare global {
  interface Window {
    FondoMatch: {
      init: (containerId: string) => void;
    };
  }
}

// Registro global
window.FondoMatch = { init };

// Inicialización automática en DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root') || document.querySelector('[data-fondo-match-root]');
    if (rootElement) {
      init(rootElement.id || 'root');
    }
  });
} else {
  const rootElement = document.getElementById('root') || document.querySelector('[data-fondo-match-root]');
  if (rootElement) {
    init(rootElement.id || 'root');
  }
}
