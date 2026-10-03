import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { BeforeAfterItem } from '../types';
import {
  Sparkles,
  MoveHorizontal,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Columns,
  SplitSquareVertical,
  Scissors,
  HandMetal,
} from 'lucide-react';

interface BeforeAfterGalleryProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  onSelectServiceForBooking,
}) => {
  // 0: Cabelos e Alinhamento, 1: Unhas e Manicure
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  return (
    <section id="resultados" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
            Portfólio Real do Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
            Antes & Depois: Resultados reais da Fio a Fio Bauru
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Confira as transformações realizadas pela nossa equipe de cabeleireiras e manicures. Arraste a barra para comparar o antes e o depois de cada procedimento.
          </p>
        </div>

        {/* Tab Selector: Hair vs Nails */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => {
              setActiveItemIndex(0);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              activeItemIndex === 0
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
            }`}
          >
            <Scissors className="w-4 h-4 text-amber-300" />
            <span>1. Cabelos & Alinhamento</span>
          </button>

          <button
            onClick={() => {
              setActiveItemIndex(1);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              activeItemIndex === 1
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>2. Unhas & Manicure</span>
          </button>
        </div>

        {/* View Mode Toggle (Slider vs Lado a Lado) */}
        <div className="flex justify-end max-w-5xl mx-auto mb-3">
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1 font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>Slider Interativo</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-3 py-1 font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Lado a Lado</span>
            </button>
          </div>
        </div>

        {/* Main Comparison Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[480px] bg-stone-950 select-none overflow-hidden flex flex-col justify-between">
              {viewMode === 'slider' ? (
                /* Slider Comparison Mode */
                <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px]">
                  {/* Layer DEPOIS (Underneath, 100% full width) */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {currentItem.visualType === 'hair' ? (
                      /* Hair AFTER: Silk straight, shiny golden-caramel hair */
                      <div className="w-full h-full bg-[#181513] relative overflow-hidden flex flex-col justify-between p-6">
                        {/* Salon chair background representation */}
                        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 opacity-90" />
                        {/* Salon mirror lights */}
                        <div className="absolute top-8 left-1/4 w-1 h-3/4 bg-white/20 blur-xs rounded-full" />
                        <div className="absolute top-8 right-1/4 w-1 h-3/4 bg-white/20 blur-xs rounded-full" />

                        {/* Hair Silhouette - Smooth, straight, mirror reflection */}
                        <div className="absolute inset-x-8 top-0 bottom-4 flex justify-center">
                          <div className="w-72 sm:w-80 h-full relative">
                            {/* Base hair flow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#8C6239] via-[#A67C52] to-[#734A26] rounded-b-[40px] shadow-2xl" />
                            {/* Liquid gloss light reflection strips */}
                            <div className="absolute inset-y-0 left-1/3 w-8 bg-gradient-to-r from-transparent via-amber-100/35 to-transparent" />
                            <div className="absolute inset-y-0 left-1/2 w-12 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
                            <div className="absolute inset-y-0 right-1/3 w-6 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent" />
                            {/* Neatly trimmed rounded ends */}
                            <div className="absolute bottom-0 inset-x-2 h-16 bg-gradient-to-t from-stone-900/60 to-transparent rounded-b-[38px]" />
                          </div>
                        </div>

                        {/* After Tag */}
                        <div className="relative z-10 flex justify-end">
                          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white rounded-md shadow-lg border border-stone-700">
                            Depois
                          </span>
                        </div>

                        {/* Description Pill */}
                        <div className="relative z-10 self-end bg-stone-900/85 backdrop-blur-md p-3.5 rounded-xl border border-stone-700/80 max-w-xs text-white shadow-xl">
                          <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Resultado Fio a Fio</span>
                          </div>
                          <div className="text-[11px] text-stone-300 leading-tight">
                            Liso perfeito com caimento solto e brilho espelhado da raiz às pontas.
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Nails AFTER: Magenta/Fuchsia Glossy Nails */
                      <div className="w-full h-full bg-[#EAE8E4] relative overflow-hidden flex flex-col justify-between p-6">
                        {/* Hands on white background representation */}
                        <div className="absolute inset-0 bg-[#F5F3EF]" />

                        {/* Magenta Nails representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-72 h-80 flex flex-col items-center justify-center">
                            {/* Stylized Hands silhouette with glossy magenta nails */}
                            <div className="relative w-64 h-64 bg-[#EAD4C7] rounded-3xl shadow-inner border border-stone-300/40 flex flex-col items-center justify-center p-4">
                              <div className="text-xs font-semibold text-stone-700 mb-3 uppercase tracking-wider">
                                Esmaltação em Gel Magenta
                              </div>
                              {/* 5 Glossy Magenta Nails */}
                              <div className="flex gap-2.5 justify-center">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-6 h-12 bg-gradient-to-b from-[#C2185B] via-[#D81B60] to-[#880E4F] rounded-t-lg rounded-b-md shadow-md border border-pink-400/50 relative overflow-hidden"
                                  >
                                    {/* High gloss shine reflection */}
                                    <div className="absolute top-1 left-1 w-1.5 h-8 bg-white/60 rounded-full blur-[0.5px]" />
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 text-[11px] font-medium text-pink-900 bg-pink-100/90 py-1 px-3 rounded-full">
                                Acabamento fino & Cuticulagem impecável
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* After Tag */}
                        <div className="relative z-10 flex justify-end">
                          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-stone-900 text-white rounded-md shadow-lg border border-stone-700">
                            Depois
                          </span>
                        </div>

                        {/* Description Box */}
                        <div className="relative z-10 self-end bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-stone-200 max-w-xs text-stone-900 shadow-xl">
                          <div className="text-xs font-semibold text-pink-700 flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Mãos Transformadas</span>
                          </div>
                          <div className="text-[11px] text-stone-600 leading-tight">
                            Fibra de vidro moldada com formato harmônico e cor magenta vítrea.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Layer ANTES (Clipped horizontally by sliderPosition) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <div className="w-full h-full relative flex flex-col justify-between p-6">
                      {currentItem.visualType === 'hair' ? (
                        /* Hair BEFORE: Dry, wavy, frizzy, porous ends */
                        <div className="absolute inset-0 bg-[#181513] overflow-hidden flex flex-col justify-between p-6">
                          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 opacity-95" />

                          {/* Hair Silhouette - Frizzy, wavy, porous ends */}
                          <div className="absolute inset-x-8 top-0 bottom-4 flex justify-center">
                            <div className="w-72 sm:w-80 h-full relative">
                              <div className="absolute inset-0 bg-gradient-to-b from-[#7A5633] via-[#8C6239] to-[#6E4829] rounded-b-[10px] opacity-90" />
                              {/* Texture lines for frizzy split ends */}
                              <svg className="absolute inset-0 w-full h-full opacity-40">
                                <line x1="20%" y1="10%" x2="25%" y2="90%" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="3 3" />
                                <line x1="40%" y1="15%" x2="38%" y2="85%" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4 2" />
                                <line x1="60%" y1="12%" x2="65%" y2="95%" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="2 3" />
                                <line x1="80%" y1="10%" x2="75%" y2="88%" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="3 4" />
                              </svg>
                              {/* Uneven frizzy tips */}
                              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-stone-900/80 to-transparent flex justify-around items-end pb-2">
                                <span className="w-1.5 h-12 bg-[#8C6239] -rotate-6 rounded-full" />
                                <span className="w-1.5 h-16 bg-[#7A5633] rotate-3 rounded-full" />
                                <span className="w-1.5 h-10 bg-[#8C6239] -rotate-3 rounded-full" />
                                <span className="w-1.5 h-14 bg-[#7A5633] rotate-6 rounded-full" />
                              </div>
                            </div>
                          </div>

                          {/* Before Tag */}
                          <div className="relative z-10 flex justify-start">
                            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-stone-800 text-stone-200 rounded-md shadow-lg border border-stone-600">
                              Antes
                            </span>
                          </div>

                          {/* Description Box */}
                          <div className="relative z-10 self-start bg-stone-900/85 backdrop-blur-md p-3.5 rounded-xl border border-stone-700/80 max-w-xs text-white shadow-xl">
                            <div className="text-xs font-semibold text-amber-400 mb-1">
                              Queixa Inicial
                            </div>
                            <div className="text-[11px] text-stone-300 leading-tight">
                              Fios porosos, frizz e pontas ressecadas com perda de definição.
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Nails BEFORE: Short bare natural nails */
                        <div className="absolute inset-0 bg-[#E5E3DF] overflow-hidden flex flex-col justify-between p-6">
                          <div className="absolute inset-0 bg-[#EFECE8]" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-72 h-80 flex flex-col items-center justify-center">
                              <div className="relative w-64 h-64 bg-[#E2CBC0] rounded-3xl shadow-inner border border-stone-300/40 flex flex-col items-center justify-center p-4">
                                <div className="text-xs font-semibold text-stone-600 mb-3 uppercase tracking-wider">
                                  Unhas Curtas Naturais
                                </div>
                                {/* Short Bare Nails */}
                                <div className="flex gap-2.5 justify-center">
                                  {[...Array(5)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-5 h-6 bg-gradient-to-b from-[#F3E5DC] to-[#E5CBC0] rounded-t-sm rounded-b-xs shadow-xs border border-stone-300"
                                    />
                                  ))}
                                </div>
                                <div className="mt-4 text-[11px] font-medium text-stone-500 bg-stone-200/80 py-1 px-3 rounded-full">
                                  Cutículas ressecadas e lâminas irregulares
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Before Tag */}
                          <div className="relative z-10 flex justify-start">
                            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-stone-800 text-stone-200 rounded-md shadow-lg border border-stone-600">
                              Antes
                            </span>
                          </div>

                          <div className="relative z-10 self-start bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-stone-200 max-w-xs text-stone-900 shadow-xl">
                            <div className="text-xs font-semibold text-stone-700 mb-1">
                              Estado Pré-Procedimento
                            </div>
                            <div className="text-[11px] text-stone-600 leading-tight">
                              Unhas curtas e quebradiças com cutículas sem contorno.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Slider Divider Bar */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-stone-900 rounded-full shadow-2xl border-2 border-stone-900 flex items-center justify-center">
                      <MoveHorizontal className="w-4 h-4 text-stone-900" />
                    </div>
                  </div>

                  {/* HTML Range Slider overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                    aria-label="Controle deslizante de comparação Antes e Depois"
                  />

                  {/* Mobile hint */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-stone-900/80 text-white text-[10px] uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                    <MoveHorizontal className="w-3 h-3 text-amber-300" />
                    <span>Arraste para comparar</span>
                  </div>
                </div>
              ) : (
                /* Side-by-Side Mode */
                <div className="grid grid-cols-2 h-full min-h-[420px] sm:min-h-[480px]">
                  {/* Left: Antes */}
                  <div className="border-r border-stone-800 p-4 sm:p-6 flex flex-col justify-between bg-stone-900 text-stone-200">
                    <span className="self-start px-3 py-1 text-xs font-bold uppercase bg-stone-800 rounded border border-stone-700">
                      Antes
                    </span>
                    <div className="my-auto py-6 text-center">
                      <div className="text-sm font-serif-luxury font-bold text-amber-300 mb-2">
                        {currentItem.visualType === 'hair' ? 'Cabelos Antes' : 'Unhas Antes'}
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                        {currentItem.beforeLabel}
                      </p>
                    </div>
                    <div className="text-[11px] text-stone-400 bg-stone-850 p-2 rounded-lg">
                      {currentItem.beforeDetails[0]}
                    </div>
                  </div>

                  {/* Right: Depois */}
                  <div className="p-4 sm:p-6 flex flex-col justify-between bg-stone-950 text-white">
                    <span className="self-end px-3 py-1 text-xs font-bold uppercase bg-emerald-700 text-white rounded">
                      Depois
                    </span>
                    <div className="my-auto py-6 text-center">
                      <div className="text-sm font-serif-luxury font-bold text-amber-200 mb-2">
                        {currentItem.visualType === 'hair' ? 'Cabelos Depois' : 'Unhas Depois'}
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                        {currentItem.afterLabel}
                      </p>
                    </div>
                    <div className="text-[11px] text-emerald-300 bg-emerald-950/60 p-2 rounded-lg border border-emerald-900">
                      ✨ {currentItem.afterDetails[0]}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Details & CTA Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-stone-50/60 border-t lg:border-t-0 lg:border-l border-stone-200">
              <div>
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                  {currentItem.categoryLabel}
                </div>

                <h3 className="text-2xl font-serif-luxury font-semibold text-stone-900 mb-2.5 leading-snug">
                  {currentItem.title}
                </h3>

                <div className="text-xs font-medium text-stone-800 bg-white border border-stone-200 py-1.5 px-3 rounded-lg inline-block mb-4 shadow-2xs">
                  Serviço: <span className="font-semibold">{currentItem.serviceName}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6">
                  {currentItem.description}
                </p>

                {/* Details Breakdown */}
                <div className="space-y-3 pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-700">
                    <span className="font-semibold text-stone-900">Tempo de procedimento:</span>{' '}
                    {currentItem.timeframe}
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1.5">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase">
                      O que foi transformado:
                    </div>
                    {currentItem.afterDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-stone-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion CTA */}
              <div className="pt-6 border-t border-stone-200 mt-6">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(currentItem.serviceName)}
                  className="w-full py-3.5 px-5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Quero agendar este resultado no WhatsApp</span>
                  <ChevronRight className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Procedimentos reais realizados no Studio Fio a Fio Bauru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
