/**
 * Configuración de Client Extension para Liferay 7.4
 * FondoMatch - Asesor de Inversiones
 */

module.exports = {
  // Identificador único de la extensión
  id: 'fondo-match-app',
  
  // Nombre legible
  name: 'FondoMatch - Asesor de Inversiones',
  
  // Versión
  version: '1.0.0',
  
  // Descripción
  description: 'Asesor de inversiones inteligente e independiente con IA generativa',
  
  // Autor
  author: 'FondoMatch Team',
  
  // Punto de entrada global
  globalEntry: {
    js: '/dist/index.js',
    css: '/dist/index.css'
  },
  
  // Configuración de seguridad
  security: {
    allowedDomains: [
      'generativelanguage.googleapis.com'
    ]
  },
  
  // Compatibilidad
  compatibility: {
    minVersion: '7.4',
    maxVersion: '7.4'
  }
};
