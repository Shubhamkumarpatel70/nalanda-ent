import React, { useState } from 'react';
import { SPECIALTY_SERVICES } from '../data/clinicData';
import { CheckCircle2, Phone, MessageSquare, Filter } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SPECIALTY_SERVICES 
    : SPECIALTY_SERVICES.filter(s => s.id === activeCategory);

  return (
    <div className="space-y-12 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Specialized Medical Treatments
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            ENT Specialty Services & Procedures
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Advanced microscopic ear surgery, Karl Storz endoscopic sinus procedures, voice rehabilitation, soundproof audiology, and pediatric ENT care.
          </p>
        </div>
      </section>

      {/* MOBILE-FIRST REDESIGNED HORIZONTAL FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pl-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-medical-500" /> Filter:
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-1 w-full text-xs font-semibold">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl shrink-0 transition-all ${
                activeCategory === 'all'
                  ? 'bg-medical-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Specialties ({SPECIALTY_SERVICES.length})
            </button>

            {SPECIALTY_SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.id)}
                className={`px-4 py-2 rounded-xl shrink-0 transition-all ${
                  activeCategory === s.id
                    ? 'bg-medical-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAILED LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, idx) => (
          <div 
            key={service.id}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-medical-950/80 text-white text-xs font-bold px-3 py-1 rounded-full border border-medical-700/50 backdrop-blur-xs">
                  {service.title}
                </span>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-rose-600 dark:text-rose-400">
                      Common Symptoms Treated
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {service.symptoms.map((sym, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-tealbrand-600 dark:text-tealbrand-400">
                      Procedures & Care Options
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {service.treatments.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tealbrand-500 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mr-2">Key Advantages:</span>
                  {service.benefits.map((b, i) => (
                    <span key={i} className="text-[11px] bg-medical-50 dark:bg-medical-950/80 text-medical-700 dark:text-medical-300 border border-medical-200 dark:border-medical-800 px-2.5 py-0.5 rounded-full font-medium">
                      {b}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${CLINIC_INFO.emergencyNumber}`}
                    className="inline-flex items-center gap-2 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Clinic Desk
                  </a>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Query
                  </a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
};
