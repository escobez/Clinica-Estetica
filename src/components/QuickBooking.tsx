import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { ServiceCategory } from '../types';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle,
  Copy,
  ExternalLink,
  ShieldCheck,
  Scissors,
} from 'lucide-react';

interface QuickBookingProps {
  initialServiceId?: string | null;
  onClearInitialService?: () => void;
}

export const QuickBooking: React.FC<QuickBookingProps> = ({
  initialServiceId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('cabeleireiro');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || 'alinhamento-capilar-organico'
  );
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Tarde (13h às 17h)');
  const [preferredDay, setPreferredDay] = useState<string>('Esta semana');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync initialServiceId if passed
  React.useEffect(() => {
    if (initialServiceId) {
      const srv = SERVICES.find((s) => s.id === initialServiceId || s.name.toLowerCase().includes(initialServiceId.toLowerCase()));
      if (srv) {
        setSelectedCategory(srv.category);
        setSelectedServiceId(srv.id);
      }
    }
  }, [initialServiceId]);

  const filteredServices = SERVICES.filter(
    (s) => s.category === selectedCategory
  );

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) || filteredServices[0];

  // Auto phone formatting (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    setClientPhone(val);
  };

  // Generate personalized WhatsApp message
  const generatedMessage = `Olá, equipe Fio a Fio! 🌸
Meu nome é ${clientName.trim() || '[Meu Nome]'}.

Gostaria de agendar no Studio de Beleza:
✨ *${selectedService?.name || 'Serviço'}*
📅 *Preferência:* ${preferredDay} no período da *${selectedPeriod}*
${clientPhone ? `📱 *Meu WhatsApp:* ${clientPhone}\n` : ''}${
    notes.trim() ? `💬 *Observações:* ${notes.trim()}\n` : ''
}
Poderiam me informar os horários disponíveis e valores para confirmação? Muito obrigada!`;

  const encodedUrl = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
            Agendamento Rápido no WhatsApp
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
            Reserve seu horário no Studio Fio a Fio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Escolha seu serviço de cabeleireiro, manicure, maquiagem ou depilação e envie a solicitação direto para nossa recepcionista no WhatsApp oficial da clínica.
          </p>
        </div>

        {/* Booking Card Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Form Column (7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-stone-200">
              {/* Step 1: Category Selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                  1. Área de Atendimento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'cabeleireiro', label: 'Cabelos' },
                    { id: 'manicure', label: 'Unhas' },
                    { id: 'maquiagem', label: 'Maquiagem' },
                    { id: 'depilacao', label: 'Depilação' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id as ServiceCategory);
                        const firstInCat = SERVICES.find((s) => s.category === cat.id);
                        if (firstInCat) setSelectedServiceId(firstInCat.id);
                      }}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all cursor-pointer text-center ${
                        selectedCategory === cat.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="mb-6">
                <label
                  htmlFor="service-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5"
                >
                  2. Serviço Desejado
                </label>
                <select
                  id="service-select"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full py-3 px-4 text-sm font-medium text-stone-800 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 transition-colors"
                >
                  {filteredServices.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} ({srv.duration})
                    </option>
                  ))}
                </select>

                {selectedService && (
                  <div className="mt-2 text-xs text-stone-500 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Duração média: {selectedService.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedService.frequency}</span>
                  </div>
                )}
              </div>

              {/* Step 3: Date & Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="preferred-day"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2"
                  >
                    3. Preferência de Data
                  </label>
                  <select
                    id="preferred-day"
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs sm:text-sm font-medium text-stone-800 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900"
                  >
                    <option value="Esta semana (o quanto antes)">Esta semana (o quanto antes)</option>
                    <option value="Próxima semana">Próxima semana</option>
                    <option value="Terça ou Quarta-feira">Terça ou Quarta-feira</option>
                    <option value="Quinta ou Sexta-feira">Quinta ou Sexta-feira</option>
                    <option value="Sábado">Sábado</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferred-period"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2"
                  >
                    Período do Dia
                  </label>
                  <select
                    id="preferred-period"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs sm:text-sm font-medium text-stone-800 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900"
                  >
                    <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                    <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
                    <option value="Fim de tarde (17h às 19h)">Fim de tarde (17h às 19h)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="space-y-4 mb-6">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5"
                  >
                    4. Seu Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Ex: Carolina Mendonça"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-stone-900 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5"
                  >
                    Seu WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="(14) 99999-9999"
                      value={clientPhone}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-stone-900 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-notes"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5"
                  >
                    Observações ou Dúvidas (Opcional)
                  </label>
                  <textarea
                    id="client-notes"
                    rows={2}
                    placeholder="Ex: Gostaria de saber sobre teste de mecha ou cor de esmalte."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Confirmar e Agendar no WhatsApp</span>
                <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-stone-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Atendimento humanizado direto no WhatsApp oficial: {CLINIC_INFO.phoneDisplay}</span>
              </div>
            </form>

            {/* Preview & Trust Info Column (5 cols) */}
            <div className="lg:col-span-5 bg-stone-50/80 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  <span>Prévia da Mensagem</span>
                </div>

                {/* WhatsApp simulated balloon */}
                <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 text-xs sm:text-sm text-stone-800 font-sans shadow-xs relative">
                  <div className="font-semibold text-emerald-950 mb-1 flex items-center justify-between">
                    <span>Fio a Fio Bauru</span>
                    <span className="text-[10px] text-stone-400 font-normal">Agora</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-stone-700 text-xs leading-relaxed">
                    {generatedMessage}
                  </pre>
                </div>

                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="text-xs text-stone-600 hover:text-stone-900 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-stone-200/60 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copiar texto</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Studio Guarantee Info */}
                <div className="mt-8 pt-6 border-t border-stone-200 space-y-3.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                    Por que agendar na Fio a Fio?
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>15 anos de excelência</strong> em Bauru (Rua Abrahão Rahal, 14-29).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Cabeleireiro, Manicure, Maquiagem e Depilação</strong> em um só lugar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Biossegurança total:</strong> materiais descartáveis e esterilização em autoclave.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Working hours banner */}
              <div className="mt-8 p-3.5 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-blue" />
                  <span>{CLINIC_INFO.hours}</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Horários disponíveis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
