import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-800/80">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="md" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm pt-2">
              Aqui é o lugar onde você realça sua Beleza e se apaixona pela sua Autoestima! Há 15 anos transformando olhares, cabelos e unhas com excelência em Bauru.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp do Studio"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram do Studio"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Cabeleireiro & Alinhamento
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Manicure & Pedicure (Fibra & Gel)
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Maquiagem Profissional & Noivas
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Depilação Suave 100% Descartável
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Antes & Depois (Cabelo e Unhas)
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors">
                  Agendamento no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Atendimento em Bauru
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address} · {CLINIC_INFO.neighborhood}
                  <br />
                  {CLINIC_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Fio a Fio | Studio de Beleza. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-stone-500">
            <span>Bauru - São Paulo · Há 15 anos realçando sua beleza</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
