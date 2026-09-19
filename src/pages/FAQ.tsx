import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Patient Support & Clarity
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find answers regarding walk-in registrations, clinic branch locations, ear surgeries, endoscopic sinus procedures, and audiology testing.
          </p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. appointment, eardrum, sinus, timing)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 rounded-2xl text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-md focus:outline-none focus:ring-2 focus:ring-medical-500"
          />
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full px-6 py-4 text-left font-bold font-display text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:text-medical-600 dark:hover:text-medical-400 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-medical-500 shrink-0" />
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-medical-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold font-display">Have More Questions?</h3>
          <p className="text-xs text-slate-300">Contact our front desk team directly via phone call or WhatsApp for quick guidance.</p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.emergencyNumber}`}
              className="bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Clinic Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
