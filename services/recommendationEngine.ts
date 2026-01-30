
import { InvestmentProfile, InvestmentFund, RecommendationResult } from '../types.ts';
import { INVESTMENT_FUNDS } from '../constants.ts';

export function getRecommendedFunds(profile: InvestmentProfile): RecommendationResult[] {
  // 1. Mapeamos todos los fondos calculando su compatibilidad
  const scoredFunds = INVESTMENT_FUNDS.map(fund => {
    let score = 0;

    // --- PESO: OBJETIVO (45%) ---
    if (fund.objective === profile.objective) {
      score += 45;
    } else {
      // Compatibilidad cruzada menor
      const relationMap: Record<string, string[]> = {
        'Crecimiento': ['Estabilidad'],
        'Estabilidad': ['Crecimiento', 'Liquidez'],
        'Liquidez': ['Estabilidad']
      };
      if (relationMap[profile.objective].includes(fund.objective)) score += 15;
    }

    // --- PESO: HORIZONTE (30%) ---
    const horizonWeights: Record<string, number> = { 'Corto plazo': 1, 'Mediano plazo': 2, 'Largo plazo': 3 };
    const horizonDiff = Math.abs(horizonWeights[fund.horizon] - horizonWeights[profile.horizon]);
    
    if (horizonDiff === 0) {
      score += 30;
    } else if (horizonDiff === 1) {
      score += 15;
    }

    // --- PESO: RIESGO (25%) ---
    const riskWeights: Record<string, number> = { 'Bajo': 1, 'Medio': 2, 'Alto': 3 };
    const riskDiff = Math.abs(riskWeights[fund.risk] - riskWeights[profile.risk]);

    if (riskDiff === 0) {
      score += 25;
    } else if (riskDiff === 1) {
      score += 10;
    } else {
      // Penalización fuerte si el riesgo es opuesto (ej. pide Bajo y el fondo es Alto)
      score -= 20;
    }

    // Normalizamos el score entre 40 y 99 para que siempre se vea atractivo en la UI
    const compatibility = Math.min(Math.max(score, 40), 99);

    return { fund, compatibility };
  });

  // 2. Ordenamos por compatibilidad de mayor a menor
  // 3. Tomamos solo los 3 mejores (Top 3)
  return scoredFunds
    .sort((a, b) => b.compatibility - a.compatibility)
    .slice(0, 3);
}
