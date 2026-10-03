import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import {
  MapPin,
  Clock,
  Instagram,
  Navigation,
  Coffee,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Scissors,
} from 'lucide-react';

export const ClinicLocation: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#F6F2EC]/60 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
              Nosso Studio em Bauru
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight mb-6">
              15 anos cuidando do seu visual na Vila Universitária
            </h2>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-8">
              Localizado na Rua Abrahão Rahal, nosso salão oferece estações dedicadas para cabeleireiro e alinhamento, bancada de manicure e pedicure, camarim de maquiagem profissional e sala exclusiva para depilação suave com total privacidade e higiene.
            </p>

            {/* Address & Hours Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1D64EC]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">Endereço</div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    {CLINIC_INFO.address} · {CLINIC_INFO.neighborhood}
                  </div>
                  <div className="text-xs text-stone-500">{CLINIC_INFO.city}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">Horário de Atendimento</div>
                  <div className="text-xs text-stone-600 mt-0.5">{CLINIC_INFO.hours}</div>
                  <div className="text-[11px] text-stone-400">Atendimento com hora marcada</div>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-stone-200/80">
                <Coffee className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Café & Chá Aconchegante</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-stone-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Autoclave & Descartáveis</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-stone-200/80">
                <Scissors className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Estações Climatizadas</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-stone-200/80">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Fácil Estacionamento</span>
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-full transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-200" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-stone-300 bg-white shadow-lg p-2">
              <div className="relative rounded-2xl bg-stone-100 h-80 sm:h-96 w-full overflow-hidden flex flex-col justify-between p-6">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#1D64EC 0.75px, transparent 0.75px), radial-gradient(#d6d3d1 0.75px, #f5f5f4 0.75px)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <path d="M 0 100 Q 150 120 400 80 T 800 120" stroke="#a8a29e" strokeWidth="12" fill="none" />
                  <path d="M 120 0 Q 180 200 200 400" stroke="#d6d3d1" strokeWidth="8" fill="none" />
                  <path d="M 280 0 Q 320 200 350 400" stroke="#1D64EC" strokeWidth="5" fill="none" />
                </svg>

                {/* Map Header Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-stone-200 shadow-xs max-w-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-900">
                    <MapPin className="w-4 h-4 text-[#1D64EC]" />
                    <span>Fio a Fio | Studio de Beleza</span>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Rua Abrahão Rahal, 14-29 · Bauru - SP
                  </div>
                </div>

                {/* Center Pin Indicator */}
                <div className="relative z-10 self-center my-auto flex flex-col items-center animate-bounce duration-1000">
                  <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white">
                    <MapPin className="w-6 h-6 text-amber-300" />
                  </div>
                  <div className="mt-1 px-3 py-1 bg-stone-900 text-white text-[11px] font-semibold rounded-full shadow-md whitespace-nowrap">
                    Fio a Fio Studio 🌸
                  </div>
                </div>

                {/* Bottom Route Bar */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                  <div className="text-stone-600">
                    Vila Universitária, Bauru
                  </div>
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-blue hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Abrir no GPS</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
