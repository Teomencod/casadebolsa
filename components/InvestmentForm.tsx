
import React from 'react';
import { motion } from 'framer-motion';
import { Objective, Horizon, RiskLevel, InvestmentProfile } from '../types.ts';

interface Props {
  profile: InvestmentProfile;
  onChange: (updates: Partial<InvestmentProfile>) => void;
  onNext: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const InvestmentForm: React.FC<Props> = ({ profile, onChange, onNext }) => {
  const objectives: { id: Objective; title: string; desc: string; icon: string }[] = [
    { id: 'Crecimiento', title: 'Crecimiento', desc: 'Maximiza rendimientos.', icon: 'trending_up' },
    { id: 'Estabilidad', title: 'Estabilidad', desc: 'Controla la volatilidad.', icon: 'gps_fixed' },
    { id: 'Liquidez', title: 'Liquidez', desc: 'Dinero disponible.', icon: 'account_balance_wallet' },
  ];

  const horizons: { id: Horizon; duration: string }[] = [
    { id: 'Corto plazo', duration: '3-6m' },
    { id: 'Mediano plazo', duration: '7-12m' },
    { id: 'Largo plazo', duration: '12-36m' },
  ];

  const risks: { id: RiskLevel }[] = [
    { id: 'Bajo' },
    { id: 'Medio' },
    { id: 'Alto' },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10 text-slate-900"
    >
      <motion.header variants={itemVariants} className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e4d] dark:text-white mb-2 sm:mb-3">Configura tu perfil</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-xs sm:text-sm leading-relaxed font-medium">
          Personaliza tu estrategia de inversión en segundos.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Column 1: Objetivo Principal */}
        <motion.section variants={itemVariants} className="lg:col-span-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#2b59da] mb-4 sm:mb-6">Objetivo Principal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {objectives.map((obj) => {
              const isActive = profile.objective === obj.id;
              return (
                <motion.button
                  key={obj.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onChange({ objective: obj.id })}
                  className={`relative p-3 sm:p-4 rounded-2xl flex flex-row sm:flex-col items-center text-left sm:text-center transition-all border-2 sm:min-h-[190px] shadow-sm overflow-hidden gap-3 sm:gap-0 ${
                    isActive
                      ? 'bg-[#2b59da] border-[#2b59da] text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/40'
                      : 'bg-white dark:bg-slate-800 border-slate-50 dark:border-slate-700 hover:border-slate-200 text-slate-900 dark:text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center sm:mb-4 transition-colors ${
                    isActive ? 'bg-white/20' : 'bg-slate-50 dark:bg-slate-700'
                  }`}>
                    <span className={`material-icons text-xl ${isActive ? 'text-white' : 'text-[#2b59da]'}`}>
                      {obj.icon}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-extrabold text-sm sm:text-base mb-0.5 sm:mb-2 leading-tight">{obj.title}</h3>
                    <p className={`text-[10px] sm:text-[11px] leading-tight font-medium ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      {obj.desc}
                    </p>
                  </div>
                  
                  <div className="sm:mt-auto">
                    <motion.div 
                      animate={{ rotate: isActive ? 180 : 0 }}
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-50 dark:bg-slate-700 text-[#2b59da]'
                      }`}
                    >
                      <span className="material-icons text-base">{isActive ? 'remove' : 'add'}</span>
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Column 2: Horizonte */}
        <motion.section variants={itemVariants} className="lg:col-span-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#2b59da] mb-4 sm:mb-6">Horizonte</h2>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {horizons.map((h) => {
              const isActive = profile.horizon === h.id;
              return (
                <motion.button
                  key={h.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onChange({ horizon: h.id })}
                  className={`flex items-center p-3 sm:p-4 rounded-xl border-2 transition-all shadow-sm ${
                    isActive
                      ? 'bg-[#2b59da] border-[#2b59da] text-white shadow-md shadow-blue-100 dark:shadow-blue-900/30'
                      : 'bg-white dark:bg-slate-800 border-slate-50 dark:border-slate-700 hover:border-slate-200 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center mr-3 ${
                    isActive ? 'bg-white/20' : 'bg-slate-50 dark:bg-slate-700'
                  }`}>
                    <span className={`material-icons text-xs sm:text-sm transition-transform ${isActive ? 'text-white rotate-90' : 'text-[#2b59da]'}`}>
                      {isActive ? 'remove' : 'add'}
                    </span>
                  </div>
                  <span className="font-bold flex-1 text-left text-xs sm:text-sm">{h.id}</span>
                  <span className={`text-[9px] font-bold ${isActive ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>
                    {h.duration}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Column 3: Riesgo */}
        <motion.section variants={itemVariants} className="lg:col-span-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#2b59da] mb-4 sm:mb-6">Nivel riesgo</h2>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {risks.map((r) => {
              const isActive = profile.risk === r.id;
              return (
                <motion.button
                  key={r.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onChange({ risk: r.id })}
                  className={`flex items-center p-3 sm:p-4 rounded-xl border-2 transition-all shadow-sm ${
                    isActive
                      ? 'bg-[#2b59da] border-[#2b59da] text-white shadow-md shadow-blue-100 dark:shadow-blue-900/30'
                      : 'bg-white dark:bg-slate-800 border-slate-50 dark:border-slate-700 hover:border-slate-200 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center mr-3 ${
                    isActive ? 'bg-white/20' : 'bg-slate-50 dark:bg-slate-700'
                  }`}>
                    <span className={`material-icons text-xs sm:text-sm transition-transform ${isActive ? 'text-white rotate-90' : 'text-[#2b59da]'}`}>
                      {isActive ? 'remove' : 'add'}
                    </span>
                  </div>
                  <span className="font-bold text-left text-xs sm:text-sm">{r.id}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.section>
      </div>

      <motion.footer variants={itemVariants} className="mt-10 sm:mt-16 flex justify-center sm:justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full sm:w-auto bg-[#2b59da] hover:bg-[#1e4dc4] text-white font-bold py-3.5 sm:py-4 px-10 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 dark:shadow-blue-900/40 transition-all"
        >
          <span className="text-sm sm:text-base tracking-wide">Analizar Fondos</span>
          <span className="material-icons text-lg sm:text-xl">arrow_forward</span>
        </motion.button>
      </motion.footer>
    </motion.div>
  );
};

export default InvestmentForm;
