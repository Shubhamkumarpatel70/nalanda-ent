import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BRANCHES, DOCTOR_PROFILE, SPECIALTY_SERVICES, TESTIMONIALS } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft, 
  Calendar,
  Star,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

export const BranchDetail: React.FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const branch = BRANCHES.find(b => b.id === branchId) || BRANCHES[0];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Top Back Navigation Bar */}
      <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/branches" className="inline-flex items-center gap-1 text-xs font-semibold text-medical-600 dark:text-medical-400 hover:underline">
            <ChevronLeft className="w-4 h-4" /> Back to Branches
          </Link>

        </div>
      </div>

      {/* HERO BANNER FOR BRANCH */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-40">
          <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className={`inline-block text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
              branch.isMainBranch ? 'bg-medical-600 text-white' : 'bg-tealbrand-600 text-white'
            }`}>
              {branch.type}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
              {branch.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 flex items-start gap-2 max-w-2xl">
              <MapPin className="w-5 h-5 text-medical-400 shrink-0 mt-0.5" />
              <span>{branch.address}</span>
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`tel:${branch.phone}`}
                className="flex items-center gap-2 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {branch.phone}
              </a>

              <a
                href={branch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm px-5 py-3 rounded-xl shadow transition-colors"
              >
                <MapPin className="w-4 h-4 text-medical-600" /> Get Directions
              </a>

              <a
                href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-3 rounded-xl shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm space-y-3 text-xs">
            <div className="font-bold text-sm text-tealbrand-300 flex items-center gap-2 border-b border-slate-700 pb-2">
              <Clock className="w-4 h-4" /> OPD Timings
            </div>
            <div className="space-y-1">
              <div className="text-slate-200 font-semibold">{branch.workingHours}</div>
              <div className="text-slate-400">{branch.sundayHours}</div>
            </div>
            <div className="pt-2 border-t border-slate-700 text-slate-300">
              <span className="font-bold text-white">Emergency Phone:</span> {branch.emergencyPhone}
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Doctor Schedule & Available Facilities */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Doctor Schedule Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-medical-600" /> Doctor Availability Schedule
              </h2>
              <div className="p-4 rounded-2xl bg-medical-50 dark:bg-medical-950/60 border border-medical-100 dark:border-medical-900/60 flex items-center gap-4">
                <img src={DOCTOR_PROFILE.image} alt={DOCTOR_PROFILE.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{DOCTOR_PROFILE.name}</div>
                  <div className="text-xs text-medical-600 dark:text-medical-400 font-medium">{DOCTOR_PROFILE.qualification}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">{branch.doctorSchedule}</div>
                </div>
              </div>
            </div>

            {/* Facilities Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tealbrand-600" /> Facilities at {branch.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
                {branch.facilitiesAvailable.map((fac, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center gap-2 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-medium">{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Patient Reviews */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" /> Patient Feedback for this Branch
              </h2>
              <div className="space-y-3">
                {TESTIMONIALS.slice(0, 2).map((t) => (
                  <div key={t.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs space-y-2 border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 dark:text-white">{t.patientName}</span>
                      <span className="text-[10px] text-tealbrand-600 dark:text-tealbrand-400 font-semibold">{t.treatment}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 italic">"{t.review}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Contact Box */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-medical-600" /> Location
              </h3>
              
              <div className="h-72 rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <iframe
                  title={`Google Maps location for ${branch.name}`}
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>

              <a
                href={branch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Open Maps
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <h4 className="text-base font-bold font-display text-tealbrand-300">
                Direct Physical Walk-in
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No online appointment token is needed. Simply visit the clinic during OPD consultation hours and register at the reception desk.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition-colors">
                  <PhoneCall className="w-4 h-4 text-medical-400" /> Call {branch.phone}
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
