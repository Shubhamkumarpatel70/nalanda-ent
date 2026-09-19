import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Users, 
  Activity, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';
import { 
  CLINIC_INFO, 
  DOCTOR_PROFILE, 
  BRANCHES, 
  TESTIMONIALS 
} from '../data/clinicData';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-medical-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-medical-400/10 dark:bg-medical-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-tealbrand-400/10 dark:bg-tealbrand-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-100/80 dark:bg-medical-950/80 border border-medical-200 dark:border-medical-800 text-medical-800 dark:text-medical-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-medical-600 dark:text-medical-400" />
                <span>Premier Super Specialty Ear, Nose & Throat Center</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Advanced German Micro-Otology & <span className="text-gradient-primary dark:text-gradient-dark">Endoscopic ENT Care</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Led by <strong>{DOCTOR_PROFILE.name}</strong> ({DOCTOR_PROFILE.qualification}), featuring state-of-the-art Zeiss microscopic surgical suite, Storz HD video endoscopy, and soundproof audiology testing across 2 convenient branches in Patna.
              </p>

              {/* Action Buttons: Call Clinic & Get Directions aligned in the SAME LINE */}
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.emergencyNumber}`}
                  className="flex items-center gap-2 bg-gradient-to-r from-medical-600 to-tealbrand-600 hover:from-medical-700 hover:to-tealbrand-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-glow transition-all hover:-translate-y-0.5 shrink-0"
                >
                  <Phone className="w-5 h-5" /> Call Clinic Desk
                </a>

                <a
                  href={BRANCHES[0].googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 shrink-0"
                >
                  <MapPin className="w-5 h-5 text-medical-500" /> Get Directions
                </a>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Physical Walk-in Registration
                </span>
                <span>•</span>
                <span>Mon - Sat: 10 AM - 8 PM</span>
                <span>•</span>
                <span>Emergency Support Available</span>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-medical-500 to-tealbrand-500 opacity-20 blur-lg animate-pulse-slow" />

                <div className="relative glass-card rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 space-y-6">
                  
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src={DOCTOR_PROFILE.image}
                      alt={DOCTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block bg-medical-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                        Senior ENT Consultant
                      </span>
                      <h3 className="text-xl font-bold font-display">{DOCTOR_PROFILE.name}</h3>
                      <p className="text-xs text-slate-200">{DOCTOR_PROFILE.qualification}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-medical-50 dark:bg-medical-950/50 border border-medical-100 dark:border-medical-900/50">
                      <div className="font-bold text-lg text-medical-700 dark:text-medical-300">18+ Years</div>
                      <div className="text-slate-600 dark:text-slate-400">Surgical Experience</div>
                    </div>

                    <div className="p-3 rounded-xl bg-tealbrand-50 dark:bg-tealbrand-950/50 border border-tealbrand-100 dark:border-tealbrand-900/50">
                      <div className="font-bold text-lg text-tealbrand-700 dark:text-tealbrand-300">12,000+</div>
                      <div className="text-slate-600 dark:text-slate-400">Surgeries Performed</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>4.9 / 5 Rating</span>
                      <span className="text-slate-400 font-normal">(1,200+ Reviews)</span>
                    </div>
                    <Link to="/about" className="text-medical-600 dark:text-medical-400 font-semibold hover:underline flex items-center gap-0.5">
                      Doctor Profile <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-medical-900 via-medical-800 to-tealbrand-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">18+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Years of Medical Excellence</div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-tealbrand-300">50,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Happy Patients Treated</div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-amber-300">99.2%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Surgical Success Rate</div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-300">2</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Super-Specialty Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400">
            Healthcare Standard
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Why Patients Trust Nalanda ENT Center
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Delivering international-standard ENT diagnostic precision, compassionate care, and transparent medical ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Senior AIIMS Alumni Doctor",
              desc: "Consultation by Dr. Rajesh Kumar Nalanda (MS ENT AIIMS), with over 18+ years of advanced surgical expertise."
            },
            {
              icon: Zap,
              title: "German Microscopic Precision",
              desc: "Equipped with Carl Zeiss microscopes for sutureless eardrum repair and delicate middle ear surgery."
            },
            {
              icon: Activity,
              title: "Karl Storz HD Endoscopy",
              desc: "Real-time high-definition monitor display during sinus and vocal cord evaluations for instant accurate diagnostic visual."
            },
            {
              icon: ShieldCheck,
              title: "Strict Sterilization Protocols",
              desc: "Hospital-grade autoclave sterilizations and laminar airflow day-care theater for maximum infection prevention."
            },
            {
              icon: Users,
              title: "Patient-Friendly Staff",
              desc: "Warm nursing officers, experienced audiologists, and friendly front desk guidance ensuring zero stress."
            },
            {
              icon: Phone,
              title: "Emergency Care Support",
              desc: "Dedicated helpline for acute ENT emergencies like severe nosebleeds, ear trauma, and pediatric airway issues."
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 space-y-4 group border border-slate-200/80 dark:border-slate-800"
              >
                <div className="w-12 h-12 rounded-xl bg-medical-50 dark:bg-medical-950/80 text-medical-600 dark:text-medical-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-medical-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. MULTI-BRANCH PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400">
            Multi-Branch Healthcare Network
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Visit Our Clinic Branches
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Convenient physical walk-in consultation centers located at Rajendra Nagar & Kankerbagh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANCHES.map((b) => (
            <div 
              key={b.id}
              className="glass-card rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={b.image} 
                  alt={b.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${
                    b.isMainBranch ? 'bg-medical-600 text-white' : 'bg-tealbrand-600 text-white'
                  }`}>
                    {b.type}
                  </span>
                  <h3 className="text-xl font-bold font-display mt-1">{b.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-medical-500 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Phone className="w-4 h-4 text-tealbrand-500 shrink-0" />
                    <a href={`tel:${b.phone}`} className="hover:underline font-medium">{b.phone}</a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{b.workingHours}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    to={`/branches/${b.id}`}
                    className="flex-1 py-2.5 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs rounded-xl text-center shadow transition-all"
                  >
                    View Branch Details
                  </Link>

                  <a
                    href={b.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl flex items-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5 text-medical-500" /> Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-tealbrand-400">
              Verified Patient Recovery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center gap-3">
                  <img src={t.patientPhoto} alt={t.patientName} className="w-9 h-9 rounded-full object-cover border border-tealbrand-400" />
                  <div>
                    <div className="text-xs font-bold text-white">{t.patientName}</div>
                    <div className="text-[10px] text-tealbrand-300">{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-xs font-semibold text-tealbrand-300 hover:text-tealbrand-200">
              Read All Verified Patient Testimonials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & EMERGENCY CTA BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-medical-600 to-tealbrand-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Need Immediate ENT Care or Consultation?
            </h3>
            <p className="text-sm text-medical-100 max-w-xl">
              Visit Nalanda ENT Center directly at Rajendra Nagar or Kankerbagh. Physical walk-in registrations are open daily.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.emergencyNumber}`}
              className="bg-white text-medical-900 hover:bg-slate-100 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-medical-600" /> Call {CLINIC_INFO.emergencyNumber}
            </a>

            <Link
              to="/contact"
              className="bg-medical-950/60 hover:bg-medical-950 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-tealbrand-300" /> Get Clinic Location
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
