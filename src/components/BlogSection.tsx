import React, { useState } from 'react';
import { BLOG_POSTS, CLINIC_INFO } from '../data/clinicData';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X, Sparkles, MessageCircle, Check } from 'lucide-react';

interface BlogSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase mb-2">
            Dicas & Tendências de Beleza
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-stone-900 tracking-tight leading-tight">
            Cuidados práticos para manter cabelos e unhas impecáveis
          </h2>
          <p className="mt-3 text-base text-stone-600 font-light">
            Orientações práticas preparadas pelas profissionais do Studio Fio a Fio para você cuidar da sua beleza no dia a dia.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-stone-300 hover:shadow-xs transition-all group"
            >
              <div>
                {/* Unboxed metadata without pills */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-brand-blue">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-semibold text-stone-900 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6">
                  {post.summary}
                </p>

                {/* Quick Key Tips Preview */}
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/60 mb-6 space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                    Destaques do post:
                  </div>
                  {post.keyTips.slice(0, 2).map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Por {post.author}</span>

                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 group-hover:text-brand-blue cursor-pointer"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-stone-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative animate-in fade-in zoom-in-95">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
              <span className="font-semibold text-brand-blue">{selectedPost.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.date}</span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-semibold text-stone-900 mb-4 leading-tight">
              {selectedPost.title}
            </h3>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pb-6 border-b border-stone-200 mb-6 text-xs text-stone-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue font-bold flex items-center justify-center text-xs">
                FF
              </div>
              <div>
                <div className="font-semibold text-stone-900">{selectedPost.author}</div>
                <div className="text-[11px] text-stone-400">{selectedPost.authorRole}</div>
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-light mb-8">
              {selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Tips Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200 mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                Guia Rápido de Cuidados no Dia a Dia
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                {selectedPost.keyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article CTA to Book Related Service */}
            <div className="p-5 bg-stone-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-semibold font-serif-luxury">
                  Gostaria de agendar seu horário com nossa equipe?
                </h5>
                <p className="text-xs text-stone-300 mt-0.5">
                  Atendimento na Rua Abrahão Rahal, 14-29 em Bauru.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const srvId = selectedPost.relatedServiceId;
                  setSelectedPost(null);
                  onSelectServiceForBooking(srvId);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-900 bg-amber-200 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer shrink-0 whitespace-nowrap"
              >
                Agendar Horário
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
