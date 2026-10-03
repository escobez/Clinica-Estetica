import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Ações rápidas de contato"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg"
      style={{ maxHeight: '12vh' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenBooking}
          className="flex-1 h-10 px-3 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-stone-700" />
          <span>Agendar Horário</span>
        </button>

        <a
          href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
            'Olá! Gostaria de agendar um horário na clínica Fio a Fio Bauru.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-10 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp Direto</span>
        </a>
      </div>
    </aside>
  );
};
