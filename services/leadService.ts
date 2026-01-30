
import { Lead } from '../types.ts';

export const saveLeadToDatabase = async (lead: Lead): Promise<{ success: boolean }> => {
  console.log('Enviando datos a la base de datos:', lead);
  
  // Simulamos una latencia de red de 1.5 segundos
  return new Promise((resolve) => {
    setTimeout(() => {
      // Aquí iría el fetch real a tu API o Supabase/Firebase
      // fetch('https://api.tu-servidor.com/leads', { method: 'POST', body: JSON.stringify(lead) })
      resolve({ success: true });
    }, 1500);
  });
};
