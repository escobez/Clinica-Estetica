import React, { useState } from 'react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
            Tire suas dúvidas antes de agendar
          </h2>
          <p className="mt-3 text-base text-stone-600 font-light">
            Transparência e clareza sobre cada etapa da sua experiência estética na Fio a Fio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-stone-900 text-white' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F6F2EC] border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-900">
                Tem alguma dúvida específica não listada aqui?
              </div>
              <div className="text-xs text-stone-500">
                Nossa recepcionista responde você no WhatsApp em instantes.
              </div>
            </div>
          </div>

          <a
            href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Olá equipe Fio a Fio! Gostaria de tirar uma dúvida sobre os procedimentos.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full transition-colors whitespace-nowrap shrink-0 shadow-2xs"
          >
            Falar com Atendente
          </a>
        </div>
      </div>
    </section>
  );
};
