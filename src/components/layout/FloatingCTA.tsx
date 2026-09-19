import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const FloatingCTA: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Floating Call Button */}
      <a
        href={`tel:${CLINIC_INFO.emergencyNumber}`}
        aria-label="Call Clinic Directly"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-medical-600 to-medical-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-glow hover:scale-110 active:scale-95 transition-all group relative"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call Clinic Desk
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Clinic Desk"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all group relative"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Assistant
        </span>
      </a>

      {/* Back to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll Back to Top"
          className="w-10 h-10 bg-slate-800/80 hover:bg-slate-900 text-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all backdrop-blur-sm"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
