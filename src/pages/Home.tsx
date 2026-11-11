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
  TESTIMONIALS,
  SPECIALTY_SERVICES
} from '../data/clinicData';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="home-hero relative isolate overflow-hidden bg-[#061b2b] text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(13,148,136,.28),transparent_42%),radial-gradient(ellipse_at_10%_5%,rgba(14,116,144,.24),transparent_40%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <div className="lg:col-span-7 text-center lg:text-left space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-[.16em] text-teal-200">
                <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,.9)]" />
                NALANDA ENT CENTER
              </div>
              <div className="space-y-5">
                <p className="text-sm sm:text-base font-semibold tracking-wide text-cyan-200">Specialist Ear, Nose & Throat Care</p>
                <h1 className="font-display text-[2.45rem] leading-[1.08] tracking-tight font-extrabold sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
                  Consultant ENT Surgeon & Specialist in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-300">Endoscopic ENT Care</span>
                </h1>
                <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-300 lg:mx-0">
                  Led by <strong className="text-white">{DOCTOR_PROFILE.name}</strong> ({DOCTOR_PROFILE.qualification}), Consultant ENT Surgeon and Specialist in Endoscopy & Ear Microsurgery, providing specialized ENT care in Patna and Bihar Sharif.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
                <a href={`tel:${CLINIC_INFO.emergencyNumber}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_12px_35px_rgba(13,148,136,.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(13,148,136,.35)]">
                  <Phone className="h-5 w-5"/> Call Clinic Desk <ArrowRight className="h-4 w-4"/>
                </a>
                <a href={BRANCHES[0].googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.13]">
                  <MapPin className="h-5 w-5 text-teal-200"/> Get Directions
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal-300"/> Physical Walk-in Registration</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-300"/> Mon - Sat: 09 AM - 8 PM</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none lg:ml-auto">
                <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal-400/25 via-cyan-400/10 to-blue-500/20 blur-2xl"/>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-2.5 shadow-[0_30px_90px_rgba(0,0,0,.38)] backdrop-blur-sm">
                  <div className="relative h-[360px] sm:h-[430px] overflow-hidden rounded-[1.45rem] bg-slate-800">
                    <img src={DOCTOR_PROFILE.image} alt={DOCTOR_PROFILE.name} className="h-full w-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061b2b] via-transparent to-transparent"/>
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left">
                      <span className="inline-flex rounded-full border border-teal-200/30 bg-teal-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-teal-100">Consultant ENT Surgeon</span>
                      <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">{DOCTOR_PROFILE.name}</h2>
                      <p className="mt-1 text-sm text-slate-200">{DOCTOR_PROFILE.qualification}</p>
                      <Link to="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-200 hover:text-white transition-colors">View Doctor Profile <ArrowRight className="h-4 w-4"/></Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 p-1 pt-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[.07] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
                      <div className="mt-1 text-xs leading-5 text-slate-300">Years Surgical Experience</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[.07] p-4 text-left">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">5000+</div>
                      <div className="mt-1 text-xs leading-5 text-slate-300">Surgeries Performed</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 top-8 hidden sm:flex items-center gap-2 rounded-2xl border border-white/15 bg-[#102f43]/95 px-4 py-3 shadow-xl backdrop-blur">
                  <div className="rounded-xl bg-amber-400/15 p-2 text-amber-300"><Star className="h-5 w-5 fill-amber-300"/></div>
                  <div><div className="text-sm font-extrabold text-white">4.9 / 5 Rating</div><div className="text-[10px] text-slate-300">1,200+ Reviews</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"/>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="home-stat-strip bg-gradient-to-r from-medical-900 via-medical-800 to-tealbrand-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">20+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Years of Medical Excellence</div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-tealbrand-300">1,00,000+</div>
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
            Providing specialized ENT care with precise diagnosis, compassionate treatment, and transparent medical practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "Experienced ENT Specialist",
              desc: `Consultation by ${DOCTOR_PROFILE.name} (${DOCTOR_PROFILE.qualification}), with over ${DOCTOR_PROFILE.experienceYears}+ years of advanced surgical expertise.`
            },
            {
              icon: Zap,
              title: "Advanced Ear Microsurgery",
              desc: "Specialized ENT care with expertise in microsurgery and endoscopic procedures."
            },
            {
              icon: Activity,
              title: "Advanced ENT Endoscopy",
              desc: "Clear endoscopic evaluation for detailed assessment of ear, nose and throat conditions."
            },
            {
              icon: ShieldCheck,
              title: "Patient safety & Hygiene",
              desc: "Maintaining high standards of cleanliness, hygiene, and sterilization throughout patient care."
            },
            {
              icon: Users,
              title: "Patient-Centred Care",
              desc: "Warm nursing officers, experienced audiologists, and friendly front desk guidance ensuring zero stress."
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


      {/* Specialist services preview — sourced from the clinic's existing content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-[.2em] text-medical-600 dark:text-medical-400">ENT specialties</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">Focused care across ear, nose & throat</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">Explore the specialist services available at Nalanda ENT Center.</p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-xl bg-medical-700 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-medical-800 transition-colors">Explore all services <ArrowRight className="w-4 h-4"/></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPECIALTY_SERVICES.map((service) => (
            <Link key={service.id} to={`/services#${service.id}`} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-medical-300 dark:hover:border-medical-700 transition-all">
              <div className="flex items-start justify-between gap-3"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-medical-50 dark:bg-medical-950/60 text-medical-700 dark:text-medical-300"><Activity className="w-5 h-5"/></span><ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-medical-600 group-hover:translate-x-1 transition-all"/></div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{service.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. MULTI-BRANCH PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400">
            Our Clinic Locations 
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Visit Our ENT Clinic
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Convenient consultation facilities serving patients in Patna and Bihar Sharif.
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
                    <MapPin className="w-3.5 h-3.5 text-medical-500" /> Location
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
              Need ENT Care or Consultation?
            </h3>
            <p className="text-sm text-medical-100 max-w-xl">
              Visit Nalanda ENT Center for consultation with {DOCTOR_PROFILE.name} in Patna and Bihar Sharif.
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
