import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Antes & Depois', href: '#resultados' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Blog & Dicas', href: '#blog' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-stone-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single element brand wordmark / logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 shrink-0"
            aria-label="Fio a Fio Studio de Beleza & Estética"
          >
            <Logo size="sm" showSubtitle={true} />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-stone-600 hover:text-stone-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-stone-900 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>Agendar Horário</span>
            </button>

            <a
              href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent('Olá! Gostaria de informações sobre os procedimentos da clínica Fio a Fio.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors whitespace-nowrap"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-500/20" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 lg:hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-stone-900 rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Agendar Horário Online</span>
              </button>
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent('Olá equipe Fio a Fio! Gostaria de agendar um horário com vocês.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-sm font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-300 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Conversar no WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
