import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Testimonial } from '../types';
import { Star, CheckCircle2, MessageSquarePlus, X, Send } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userService, setUserService] = useState('Alinhamento Capilar Orgânico');
  const [userRating, setUserRating] = useState(5);
  const [userQuote, setUserQuote] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const filteredTestimonials =
    filterCategory === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filterCategory);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFeedback(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmittedFeedback(false);
      setUserName('');
      setUserRole('');
      setUserQuote('');
    }, 2500);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F6F2EC]/50 border-t border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
              Histórias Reais de Autoestima
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
              O que nossas clientes em Bauru dizem sobre a experiência
            </h2>
            <p className="mt-3 text-base text-stone-600 font-light">
              15 anos transformando cabelos, unhas e olhares com excelência técnica e acolhimento feminino na Vila Universitária.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-full transition-colors cursor-pointer shadow-2xs"
            >
              <MessageSquarePlus className="w-4 h-4 text-brand-blue" />
              <span>Deixar Depoimento</span>
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: 'Todos os Depoimentos' },
            { id: 'cabeleireiro', label: 'Cabeleireiro & Alinhamento' },
            { id: 'manicure', label: 'Manicure & Pedicure' },
            { id: 'maquiagem', label: 'Maquiagem' },
            { id: 'depilacao', label: 'Depilação' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === cat.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div>
                {/* Star rating & verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                    ))}
                  </div>

                  {testimonial.verified && (
                    <span className="text-[10px] font-medium text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verificada
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-xs text-stone-700 leading-relaxed font-light mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author footer with unboxed metadata */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center font-serif-luxury font-semibold text-stone-800 text-xs shrink-0">
                  {testimonial.avatarText}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-stone-900 truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate">
                    {testimonial.role} · {testimonial.timeAsClient}
                  </div>
                  <div className="text-[10px] text-brand-blue font-medium mt-0.5 truncate">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall social proof summary bar */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
            </div>
            <div>
              <div className="text-base font-semibold text-stone-900">
                4.9 de 5 estrelas no Instagram e Google
              </div>
              <div className="text-xs text-stone-500">
                Mais de 15 anos atendendo famílias e clientes de Bauru com máxima dedicação.
              </div>
            </div>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-blue hover:text-blue-800 underline underline-offset-4"
          >
            Ver fotos e feedbacks no Instagram {CLINIC_INFO.instagramHandle}
          </a>
        </div>
      </div>

      {/* Modal: Deixar Depoimento */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-stone-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif-luxury font-bold text-stone-900">
                  Muito obrigada pelo carinho!
                </h3>
                <p className="text-xs text-stone-600 max-w-xs mx-auto">
                  Seu relato foi recebido com imensa gratidão por toda a equipe do Studio Fio a Fio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">
                  Sua Experiência
                </div>
                <h3 className="text-2xl font-serif-luxury font-semibold text-stone-900 mb-2">
                  Conte como foi seu atendimento na Fio a Fio
                </h3>
                <p className="text-xs text-stone-500 mb-6 font-light">
                  Seu feedback nos ajuda a manter a excelência há 15 anos em Bauru.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amanda Costa"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Cidade / Bairro
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Bauru (Vila Universitária)"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Sua Nota
                      </label>
                      <div className="flex items-center gap-1 py-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= userRating
                                  ? 'text-amber-500 fill-amber-400'
                                  : 'text-stone-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Serviço Realizado
                    </label>
                    <input
                      type="text"
                      value={userService}
                      onChange={(e) => setUserService(e.target.value)}
                      placeholder="Ex: Alinhamento Capilar ou Fibra de Vidro"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Seu Relato sobre o Cuidado & Autoestima
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Como você se sentiu com o atendimento e o resultado?"
                      value={userQuote}
                      onChange={(e) => setUserQuote(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 resize-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Depoimento</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
