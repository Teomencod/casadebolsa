
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InvestmentProfile, RecommendationResult } from './types.ts';
import InvestmentForm from './components/InvestmentForm.tsx';
import ResultsScreen from './components/ResultsScreen.tsx';
import { getRecommendedFunds } from './services/recommendationEngine.ts';

const LoadingScreen: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-6 text-center"
  >
    <div className="relative w-24 h-24 mb-8">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="material-icons text-4xl text-primary">insights</span>
      </motion.div>
    </div>
    <h2 className="text-2xl font-bold text-[#0a1e4d] dark:text-white mb-2">Personalizando tu cartera</h2>
    <p className="text-slate-500 dark:text-slate-400">Analizando el mercado en tiempo real...</p>
  </motion.div>
);

const App: React.FC = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
  const [profile, setProfile] = useState<InvestmentProfile>({
    objective: 'Crecimiento',
    horizon: 'Mediano plazo',
    risk: 'Medio'
  });
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);

  const handleProfileChange = useCallback((updates: Partial<InvestmentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  }, []);

  const handleCalculate = useCallback(() => {
    setStep('loading');
    setTimeout(() => {
      const results = getRecommendedFunds(profile);
      setRecommendations(results);
      setStep('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  }, [profile]);

  const handleReset = useCallback(() => {
    setStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-slate-900 transition-colors duration-300">
      <AnimatePresence mode="wait">
        {step === 'loading' && <LoadingScreen key="loading" />}
        
        <main className="w-full max-w-screen-xl mx-auto px-4 py-8">
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <InvestmentForm
                profile={profile}
                onChange={handleProfileChange}
                onNext={handleCalculate}
              />
            </motion.div>
          )}
          
          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ResultsScreen
                results={recommendations}
                profile={profile}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </main>
      </AnimatePresence>

      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
      >
        <span className="material-icons-outlined block dark:hidden text-slate-700">dark_mode</span>
        <span className="material-icons-outlined hidden dark:block text-slate-200">light_mode</span>
      </button>
    </div>
  );
};

export default App;
