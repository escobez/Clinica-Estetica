import React, { useState } from 'react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem, ServiceCategory } from '../types';
import { Sparkles, Clock, Check, ArrowRight, X, MessageCircle, Heart, Scissors, Sparkle } from 'lucide-react';

interface ProceduresSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ProceduresSection: React.FC<ProceduresSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'cabeleireiro', label: 'Cabeleireiro & Alinhamento' },
    { id: 'manicure', label: 'Manicure & Pedicure' },
    { id: 'maquiagem', label: 'Maquiagem Profissional' },
    { id: 'depilacao', label: 'Depilação Suave' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="procedimentos" className="py-20 md:py-28 bg-[#F6F2EC]/60 border-t border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
            Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
            Cabeleireiro, manicure, maquiagem e depilação em Bauru
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Há 15 anos oferecendo os melhores cuidados para o seu visual. Materiais 100% esterilizados em autoclave, produtos profissionais homologados e atendimento com hora marcada.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Unboxed clean metadata (NO PILLS) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-stone-700">{service.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif-luxury font-semibold text-stone-900 mb-2.5 leading-snug group-hover:text-brand-blue transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-light">
                  {service.shortDesc}
                </p>

                {/* Benefits List */}
                <div className="pt-4 border-t border-stone-100 mb-6 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                    Diferenciais do Studio:
                  </div>
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setModalService(service)}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline underline-offset-4 cursor-pointer py-1.5"
                >
                  Ver detalhes
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Agendar</span>
                  <ArrowRight className="w-3 h-3 text-amber-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Full Details Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95">
            {/* Close Button */}
            <button
              onClick={() => setModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <span className="font-semibold text-brand-blue uppercase tracking-wider">{modalService.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Duração: {modalService.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{modalService.frequency}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-stone-900 mb-4 leading-tight">
              {modalService.name}
            </h3>

            {/* Full Explanation */}
            <div className="text-sm text-stone-600 leading-relaxed font-light mb-6 space-y-3">
              <p>{modalService.fullDesc}</p>
            </div>

            {/* Benefits */}
            <div className="mb-6 bg-stone-50 rounded-2xl p-4 border border-stone-200/70">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                Destaques e Vantagens
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {modalService.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended for & Care notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-stone-600">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="font-semibold text-stone-800 mb-1">Indicado para:</div>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  {modalService.recommendedFor.map((rec, rIdx) => (
                    <li key={rIdx}>{rec}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60">
                <div className="font-semibold text-amber-900 mb-1 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-amber-700" />
                  Cuidados recomendados:
                </div>
                <p className="text-stone-700 leading-relaxed">{modalService.careNotes}</p>
              </div>
            </div>

            {/* Action Bar inside Modal */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                  `Olá! Gostaria de tirar uma dúvida sobre o serviço: ${modalService.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Tirar Dúvida no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const id = modalService.id;
                  setModalService(null);
                  onSelectServiceForBooking(id);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer"
              >
                <span>Agendar Este Serviço</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
