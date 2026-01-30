
export type Objective = 'Crecimiento' | 'Estabilidad' | 'Liquidez';
export type Horizon = 'Corto plazo' | 'Mediano plazo' | 'Largo plazo';
export type RiskLevel = 'Bajo' | 'Medio' | 'Alto';

export interface InvestmentProfile {
  objective: Objective;
  horizon: Horizon;
  risk: RiskLevel;
}

export interface InvestmentFund {
  id: string;
  name: string;
  description: string;
  objective: Objective;
  horizon: Horizon;
  risk: RiskLevel;
  rentability: string;
  minAmount: string;
  icon: string;
  popular?: boolean;
}

export interface RecommendationResult {
  fund: InvestmentFund;
  compatibility: number;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  profile: InvestmentProfile;
  timestamp: string;
}
