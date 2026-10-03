import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Star, CheckCircle2, Scissors } from 'lucide-react';

interface HeroProps {
  onScrollToBooking: () => void;
  onScrollToResults: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBooking, onScrollToResults }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EC] to-[#FAF8F5]">
      {/* Subtle organic pastel gradient background glows */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-rose-100/40 via-amber-100/30 to-blue-100/20 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Decorative brand wave motif */}
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M 20 60 C 50 10, 150 20, 180 80 C 190 120, 140 170, 90 160 C 40 150, 10 90, 60 70"
            stroke="#1D64EC"
            strokeWidth="8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Human unboxed metadata trust marker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600 mb-4 tracking-wide uppercase">
              <span className="text-brand-blue font-semibold">15 Anos em Bauru</span>
              <span aria-hidden="true">·</span>
              <span>Cabeleireiro</span>
              <span aria-hidden="true">·</span>
              <span>Manicure & Pedicure</span>
              <span aria-hidden="true">·</span>
              <span>Maquiagem</span>
              <span aria-hidden="true">·</span>
              <span>Depilação</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-[1.12] mb-6 max-w-2xl">
              Aqui é o lugar onde você realça sua beleza e se{' '}
              <span className="italic font-serif-luxury font-medium text-stone-900 relative">
                apaixona
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 to-rose-300 opacity-60 rounded-full" />
              </span>{' '}
              pela sua autoestima.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-xl mb-8">
              Alinhamento capilar orgânico, cortes visagistas, unhas em fibra de vidro, esmaltação em gel, maquiagens de festa e depilação suave. 15 anos cuidando de você com excelência e carinho na Vila Universitária, em Bauru.
            </p>

            {/* Primary Action Zone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onScrollToBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <span>Agendar Horário Rápido</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent('Olá equipe Fio a Fio! Gostaria de agendar um horário com vocês em Bauru.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-200 rounded-full shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-500/20" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust points bar */}
            <div className="pt-6 border-t border-stone-200/80 w-full grid grid-cols-3 gap-4 text-stone-700">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-stone-900">
                  15 <span className="text-sm font-sans font-normal text-stone-500">anos</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Tradição em Bauru</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-stone-900">
                  +18k <span className="text-sm font-sans font-normal text-stone-500">atendimentos</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Autoestimas renovadas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-stone-900 flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Nota média dos clientes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Anchor & Experience Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 to-blue-200/30 rounded-3xl transform rotate-2 scale-[1.02] filter blur-xs" />

              {/* Main Card Surface */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xl">
                {/* Header of feature card */}
                <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">
                      Destaques do Studio
                    </span>
                    <h2 className="text-lg font-serif-luxury font-semibold text-stone-900">
                      Nossos 4 Pilares de Beleza
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                    <Sparkles className="w-5 h-5 text-[#1D64EC]" />
                  </div>
                </div>

                {/* Treatment highlights list */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800">
                        1. Cabeleireiro & Alinhamento
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Alinhamento orgânico sem formol com brilho espelhado, mechas e cortes visagistas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800">
                        2. Manicure & Pedicure
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Alongamento em fibra de vidro fino, esmaltação em gel duradoura e spa dos pés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-stone-200/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800">
                        3. Maquiagem & 4. Depilação
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Pele blindada para festas e noivas, e depilação feminina com cera suave 100% descartável.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive button on card */}
                <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
                  <button
                    onClick={onScrollToResults}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100/90 hover:bg-stone-200/90 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver fotos reais do Antes & Depois (Cabelo e Unhas)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-stone-400 px-1 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Materiais esterilizados em autoclave
                    </span>
                    <span>Bauru - SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
