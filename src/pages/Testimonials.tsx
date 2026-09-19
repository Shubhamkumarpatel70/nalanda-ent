import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, Quote, CheckCircle2, MapPin, Activity } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Patient Trust & Feedback
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Patient Stories & Surgical Reviews
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real feedback from patients who underwent microscopic ear surgery, endoscopic sinus clearance, vertigo treatment, and pediatric ENT procedures at Nalanda ENT Center.
          </p>
        </div>
      </section>

      {/* RATING SUMMARY STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-medical-900 to-tealbrand-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-extrabold font-display text-amber-300 flex items-center justify-center gap-2">
              4.9 <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-sm text-slate-300 font-semibold">Overall Patient Satisfaction Rating</div>
            <div className="text-xs text-slate-400">Based on 1,200+ verified Google & OPD reviews</div>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l md:border-r border-white/10 pt-4 md:pt-0 px-4">
            <div className="text-3xl font-bold font-display text-emerald-300">50,000+</div>
            <div className="text-sm text-slate-300 font-semibold">Patients Successfully Treated</div>
            <div className="text-xs text-slate-400">Across Patna, Muzaffarpur & Bihar</div>
          </div>

          <div className="space-y-2 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
            <div className="text-3xl font-bold font-display text-white">99.2%</div>
            <div className="text-sm text-slate-300 font-semibold">Surgical Hearing Restoration Rate</div>
            <div className="text-xs text-slate-400">In Microscopic Tympanoplasty procedures</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID - Line 1: Name, Line 2: Address, Line 3: Disease */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Patient
                  </span>
                </div>

                <Quote className="w-8 h-8 text-medical-300 dark:text-medical-800" />

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Patient Card Footer: Line 1 Name, Line 2 Address, Line 3 Disease */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-4">
                <img src={t.patientPhoto} alt={t.patientName} className="w-12 h-12 rounded-full object-cover border-2 border-medical-500 shrink-0 mt-1" />
                
                <div className="space-y-1 text-xs">
                  {/* Line 1: Name */}
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white leading-tight">
                    {t.patientName}
                  </h3>

                  {/* Line 2: Address */}
                  <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-medical-500 shrink-0" />
                    <span>{t.location}</span>
                  </div>

                  {/* Line 3: Disease / Treatment */}
                  <div className="text-medical-600 dark:text-medical-400 font-semibold flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-tealbrand-500 shrink-0" />
                    <span>{t.treatment}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
