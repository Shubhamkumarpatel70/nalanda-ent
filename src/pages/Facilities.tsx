import React from 'react';
import { FACILITIES, CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Facilities: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Modern Medical Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Clinic Facilities & Technology
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Equipped with imported Carl Zeiss microscopes, Karl Storz HD endoscopy towers, ISO soundproof acoustic booth, and hygienic daycare operating ward.
          </p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold font-display text-white">
                    {facility.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs uppercase font-bold tracking-wider text-medical-600 dark:text-medical-400">
                      Technical Highlights:
                    </div>
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tealbrand-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Available at Main Rajendra Nagar Branch</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Experience International Healthcare Standards
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Physical walk-in OPD registrations are open daily from Monday to Saturday.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0 justify-center">
            <a
              href={`tel:${CLINIC_INFO.emergencyNumber}`}
              className="bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Clinic Desk
            </a>
            <Link
              to="/branches"
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-medical-500" /> View Branch Locations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
