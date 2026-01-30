
import { InvestmentFund } from './types.ts';

/**
 * BASE DE DATOS DE FONDOS
 * 
 * Para agregar un fondo nuevo:
 * 1. Copia el bloque "TEMPLATE" al final de la lista.
 * 2. Asegúrate de usar un 'id' único.
 * 3. Selecciona el 'objective', 'horizon' y 'risk' de las opciones permitidas en types.ts.
 * 4. Elige un icono de: https://fonts.google.com/icons (solo el nombre).
 */

export const INVESTMENT_FUNDS: InvestmentFund[] = [
  // --- GRUPO 1: BAJO RIESGO (CONSERVADOR) ---
  { id: '1', name: 'FIC Liquidez Inmediata', description: 'Disponibilidad diaria de tu dinero con bajo riesgo.', objective: 'Liquidez', horizon: 'Corto plazo', risk: 'Bajo', rentability: '8.20%', minAmount: '$10,000', icon: 'payments' },
  { id: '2', name: 'Bonos Gobierno Pro', description: 'Inversión en deuda pública de alta seguridad.', objective: 'Estabilidad', horizon: 'Corto plazo', risk: 'Bajo', rentability: '9.10%', minAmount: '$50,000', icon: 'account_balance' },
  { id: '3', name: 'Ahorro Seguro Plus', description: 'Fondo de acumulación con capital protegido.', objective: 'Estabilidad', horizon: 'Corto plazo', risk: 'Bajo', rentability: '7.80%', minAmount: '$20,000', icon: 'security' },
  { id: '4', name: 'Renta Fija Digital', description: 'Bonos corporativos de corto plazo gestionados digitalmente.', objective: 'Liquidez', horizon: 'Corto plazo', risk: 'Bajo', rentability: '8.50%', minAmount: '$100,000', icon: 'devices' },
  { id: '5', name: 'Fondo Tesorería', description: 'Optimización de excedentes de caja para empresas y personas.', objective: 'Liquidez', horizon: 'Corto plazo', risk: 'Bajo', rentability: '8.00%', minAmount: '$1,000,000', icon: 'work' },
  { id: '29', name: 'FIC Agua y Recursos', description: 'Inversión en el recurso más vital del planeta.', objective: 'Estabilidad', horizon: 'Largo plazo', risk: 'Bajo', rentability: '7.50%', minAmount: '$100,000', icon: 'water_drop' },
  { id: '30', name: 'Microfinanzas Impacto', description: 'Ayuda a emprendedores mientras generas rentabilidad.', objective: 'Liquidez', horizon: 'Mediano plazo', risk: 'Bajo', rentability: '6.80%', minAmount: '$50,000', icon: 'groups' },

  // --- GRUPO 2: MEDIO RIESGO (MODERADO) ---
  { id: '6', name: 'Balanceado Global', description: 'Mix de acciones y bonos internacionales equilibrado.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '11.40%', minAmount: '$200,000', icon: 'public', popular: true },
  { id: '7', name: 'FIC Alternativo 180', description: 'Estrategia de diversificación en activos reales tangibles.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '12.45%', minAmount: '$500,000', icon: 'reorder' },
  { id: '8', name: 'Inmobiliario Rentas', description: 'Participación en proyectos de propiedad raíz comercial.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '10.20%', minAmount: '$1,000,000', icon: 'apartment' },
  { id: '9', name: 'Dividendos Aristócratas', description: 'Inversión en empresas que pagan dividendos crecientes.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '9.80%', minAmount: '$300,000', icon: 'stars' },
  { id: '10', name: 'Deuda Corporativa Latam', description: 'Bonos de las mejores empresas de Latinoamérica.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '10.50%', minAmount: '$150,000', icon: 'business_center' },
  { id: '11', name: 'Fondo Sostenible ESG', description: 'Empresas con altos estándares éticos y ambientales.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '11.10%', minAmount: '$100,000', icon: 'eco' },
  { id: '12', name: 'Multiactivo Dinámico', description: 'Ajuste automático de cartera según el sentimiento del mercado.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '11.90%', minAmount: '$400,000', icon: 'speed' },
  { id: '13', name: 'Consumo Masivo Global', description: 'Inversión en marcas líderes de consumo diario.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '9.50%', minAmount: '$200,000', icon: 'shopping_bag' },
  { id: '14', name: 'Infraestructura Viva', description: 'Carreteras, puentes y proyectos de energía renovable.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '10.80%', minAmount: '$2,000,000', icon: 'construction' },
  { id: '15', name: 'Bonos Emergentes', description: 'Captura el crecimiento de países con economías en desarrollo.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '13.10%', minAmount: '$500,000', icon: 'trending_up' },
  { id: '24', name: 'Fondo Oro y Metales', description: 'Protección contra la inflación con activos refugio.', objective: 'Estabilidad', horizon: 'Largo plazo', risk: 'Medio', rentability: '8.90%', minAmount: '$100,000', icon: 'diamond' },
  { id: '26', name: 'FIC Salud Global', description: 'Farmacéuticas y servicios hospitalarios mundiales.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '9.20%', minAmount: '$200,000', icon: 'medication' },
  { id: '27', name: 'Fondo de Fondos Lux', description: 'Acceso a fondos exclusivos de Europa y Luxemburgo.', objective: 'Crecimiento', horizon: 'Mediano plazo', risk: 'Medio', rentability: '10.50%', minAmount: '$2,000,000', icon: 'auto_awesome_motion' },
  { id: '28', name: 'Deuda Privada USA', description: 'Préstamos directos a empresas americanas en expansión.', objective: 'Estabilidad', horizon: 'Mediano plazo', risk: 'Medio', rentability: '11.20%', minAmount: '$1,000,000', icon: 'monetization_on' },

  // --- GRUPO 3: ALTO RIESGO (AGRESIVO) ---
  { id: '16', name: 'Global Tech Giants', description: 'Inversión en Apple, Microsoft, NVIDIA y líderes tech.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '18.50%', minAmount: '$500,000', icon: 'rocket_launch' },
  { id: '17', name: 'Crypto Index Fund', description: 'Exposición diversificada a Bitcoin y activos digitales.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '24.30%', minAmount: '$1,000,000', icon: 'currency_bitcoin' },
  { id: '18', name: 'Biotech Discovery', description: 'Futuro de la medicina, vacunas y genómica avanzada.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '16.70%', minAmount: '$400,000', icon: 'biotech' },
  { id: '19', name: 'Inteligencia Artificial', description: 'Enfoque puro en hardware y software de IA generativa.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '21.40%', minAmount: '$500,000', icon: 'psychology' },
  { id: '20', name: 'Energías del Futuro', description: 'Hidrógeno verde, solar y almacenamiento de energía.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '15.20%', minAmount: '$300,000', icon: 'wb_sunny' },
  { id: '21', name: 'E-commerce Mastery', description: 'Plataformas de comercio digital globales y logística.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '17.30%', minAmount: '$200,000', icon: 'shopping_cart' },
  { id: '22', name: 'Cybersecurity Pro', description: 'Protegiendo el ecosistema digital mundial.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '14.90%', minAmount: '$400,000', icon: 'admin_panel_settings' },
  { id: '23', name: 'India Growth Fund', description: 'Invierte en la economía de más rápido crecimiento actual.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '15.80%', minAmount: '$500,000', icon: 'star' },
  { id: '25', name: 'Venture Capital Select', description: 'Inversión en startups unicornio de etapa temprana.', objective: 'Crecimiento', horizon: 'Largo plazo', risk: 'Alto', rentability: '28.00%', minAmount: '$5,000,000', icon: 'hub' },

  /* --- TEMPLATE PARA AGREGAR MANUALMENTE ---
  { 
    id: '31', 
    name: 'Nombre del Fondo', 
    description: 'Descripción breve.', 
    objective: 'Crecimiento', // Opciones: 'Crecimiento' | 'Estabilidad' | 'Liquidez'
    horizon: 'Largo plazo',   // Opciones: 'Corto plazo' | 'Mediano plazo' | 'Largo plazo'
    risk: 'Alto',             // Opciones: 'Bajo' | 'Medio' | 'Alto'
    rentability: '15.00%', 
    minAmount: '$100,000', 
    icon: 'trending_up' 
  },
  */
];
