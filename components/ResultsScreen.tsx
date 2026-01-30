
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RecommendationResult, InvestmentProfile, Lead } from '../types.ts';
import { saveLeadToDatabase } from '../services/leadService.ts';
import { INVESTMENT_FUNDS } from '../constants.ts';

interface Props {
  results: RecommendationResult[];
  profile: InvestmentProfile;
  onReset: () => void;
}

const ResultsScreen: React.FC<Props> = ({ results, profile, onReset }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const lead: Lead = {
      ...formData,
      profile,
      timestamp: new Date().toISOString()
    };

    const response = await saveLeadToDatabase(lead);
    if (response.success) {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  const totalAnalyzed = INVESTMENT_FUNDS.length;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 sm:py-12 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-primary text-white rounded-full shadow-lg shadow-primary/20"
          >
            <span className="material-icons text-xs">analytics</span>
            Análisis de {totalAnalyzed} Fondos Completado
          </motion.div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#0a1e4d] dark:text-white">
            Tu Selección Ganadora
          </h1>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            De nuestra base de datos de <span className="text-[#0a1e4d] dark:text-white font-bold">{totalAnalyzed} activos</span>, 
            estos son los 3 que mejor se adaptan a tu perfil <span className="text-primary font-bold">{profile.risk}</span>.
          </p>
        </div>
      </motion.header>

      <main className="pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {results.map((res, idx) => (
            <motion.div
              key={res.fund.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`flex flex-col bg-white dark:bg-slate-800 border-2 transition-all duration-500 rounded-[2rem] overflow-hidden relative group hover:shadow-2xl hover:-translate-y-2 ${
                idx === 0 ? 'border-primary shadow-2xl shadow-primary/10 ring-4 ring-primary/5' : 'border-slate-100 dark:border-slate-700'
              }`}
            >
              <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm z-20 ${
                idx === 0 ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
              }`}>
                #{idx + 1}
              </div>

              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-black px-5 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-10">
                  Mejor Opción
                </div>
              )}
              
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mt-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6 ${
                    idx === 0 ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-700 text-primary'
                  }`}>
                    <span className="material-icons-outlined text-2xl">{res.fund.icon}</span>
                  </div>
                  <div className="text-right">
                    <motion.span className="text-3xl font-black text-primary">
                      {res.compatibility}%
                    </motion.span>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Match Score</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#0a1e4d] dark:text-white group-hover:text-primary transition-colors leading-tight">
                  {res.fund.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {res.fund.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50 dark:border-slate-700">
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Rentabilidad</span>
                    <span className="text-lg font-black text-emerald-500">{res.fund.rentability}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Mínimo</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{res.fund.minAmount}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button className={`w-full py-4 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg ${
                  idx === 0 
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-primary/20' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                }`}>
                  Invertir
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead Capture Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#0a1e4d] text-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form"
                exit={{ opacity: 0, y: -20 }}
                className="relative z-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Te interesa el Top #1?</h2>
                <p className="text-slate-300 mb-8 max-w-lg text-sm leading-relaxed">
                  Nuestros asesores pueden ayudarte a activar el <span className="text-white font-bold">{results[0].fund.name}</span> hoy mismo sin comisiones de apertura.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Nombre"
                      className="bg-white/10 border-white/10 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary text-white w-full placeholder:text-slate-400"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="bg-white/10 border-white/10 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary text-white w-full placeholder:text-slate-400"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span className="material-icons">rocket_launch</span>
                        Solicitar Asesoría VIP
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 relative z-10"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                  <span className="material-icons text-3xl">check</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h2>
                <p className="text-slate-300 mb-8 text-sm">
                  Un experto en fondos de {profile.risk} riesgo te contactará en las próximas 24 horas.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <button
            onClick={onReset}
            className="px-8 py-3 text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2 text-sm"
          >
            <span className="material-icons-outlined text-base">replay</span>
            Reconfigurar perfil de inversión
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default ResultsScreen;
