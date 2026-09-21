import React from 'react';
import { Link } from 'react-router-dom';
import { BRANCHES } from '../data/clinicData';
import { MapPin, Phone, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Branches: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Our Clinic 
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Our Clinic Locations
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nalanda ENT Center operates two physical consultation centers located in Patna and Bihar Sharif.
          </p>
        </div>
      </section>

      {/* BRANCHES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANCHES.map((b) => (
            <div 
              key={b.id}
              className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${
                      b.isMainBranch ? 'bg-medical-600 text-white' : 'bg-tealbrand-600 text-white'
                    }`}>
                      {b.type}
                    </span>
                    <h2 className="text-2xl font-bold font-display mt-1">{b.name}</h2>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <MapPin className="w-4 h-4 text-medical-500 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Phone className="w-4 h-4 text-tealbrand-500 shrink-0" />
                      <a href={`tel:${b.phone}`} className="hover:underline font-semibold">{b.phone}</a>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{b.workingHours}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                      Available Facilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {b.facilitiesAvailable.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tealbrand-500 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <Link
                  to={`/branches/${b.id}`}
                  className="flex-1 py-3 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs rounded-xl text-center shadow transition-colors flex items-center justify-center gap-1"
                >
                  View Branch Details <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={b.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-medical-500" /> Location
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
