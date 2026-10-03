import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProceduresSection } from './components/ProceduresSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { QuickBooking } from './components/QuickBooking';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ClinicLocation } from './components/ClinicLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CLINIC_INFO, SERVICES } from './data/clinicData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      const srv = SERVICES.find(
        (s) => s.id === serviceId || s.name.toLowerCase().includes(serviceId.toLowerCase())
      );
      if (srv) {
        setSelectedServiceId(srv.id);
      } else {
        setSelectedServiceId(serviceId);
      }
    }

    const bookingEl = document.getElementById('agendamento');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    const resultsEl = document.getElementById('resultados');
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col selection:bg-amber-200 selection:text-stone-900 pb-14 sm:pb-0">
      {/* Top Bar with Contract */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToBooking={() => scrollToBooking()}
          onScrollToResults={scrollToResults}
        />

        {/* 2. Services Catalog (Cabeleireiro, Manicure, Maquiagem, Depilação) */}
        <ProceduresSection
          onSelectServiceForBooking={(srvId) => scrollToBooking(srvId)}
        />

        {/* 3. Interactive Before & After Portfolio (Cabelos e Unhas com Slider) */}
        <BeforeAfterGallery
          onSelectServiceForBooking={(srvName) => scrollToBooking(srvName)}
        />

        {/* 4. High-Converting Quick WhatsApp Booking Funnel */}
        <QuickBooking
          initialServiceId={selectedServiceId}
          onClearInitialService={() => setSelectedServiceId(null)}
        />

        {/* 5. Real Customer Testimonials & Reviews */}
        <TestimonialsSection />

        {/* 6. Beauty Blog & Salon Care Tips */}
        <BlogSection
          onSelectServiceForBooking={(srvId) => scrollToBooking(srvId)}
        />

        {/* 7. Studio Address & Location in Bauru */}
        <ClinicLocation />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar (<15% viewport height) */}
      <MobileQuickBar onOpenBooking={() => scrollToBooking()} />

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40 group">
        <a
          href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
            'Olá equipe Fio a Fio! Gostaria de informações sobre horários disponíveis.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
        </a>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Conversar no WhatsApp: {CLINIC_INFO.phoneDisplay}
        </div>
      </div>
    </div>
  );
}
