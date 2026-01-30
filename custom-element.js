/**
 * FondoMatch Custom Element
 * Define <fondo-match></fondo-match> como Web Component
 */

class FondoMatchElement extends HTMLElement {
  connectedCallback() {
    // Crear contenedor raíz
    this.innerHTML = '<div id="fondo-match-root"></div>';
    
    // Esperar a que el script principal se cargue
    this.waitForFondoMatch();
  }

  waitForFondoMatch() {
    // Intentar cada 100ms hasta encontrar la app
    const checkInterval = setInterval(() => {
      if (window.FondoMatch && window.FondoMatch.init) {
        clearInterval(checkInterval);
        window.FondoMatch.init('fondo-match-root');
      }
    }, 100);

    // Timeout después de 10 segundos
    setTimeout(() => clearInterval(checkInterval), 10000);
  }
}

// Registrar el Custom Element
customElements.define('fondo-match', FondoMatchElement);

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FondoMatchElement;
}
