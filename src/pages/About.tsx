import React, { useState } from 'react';
import { 
  DOCTOR_PROFILE, 
  STAFF_MEMBERS, 
  CLINIC_INFO,
  StaffMember 
} from '../data/clinicData';
import { StaffModal } from '../components/team/StaffModal';
import { 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Clock, 
  Languages, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  UserCheck,
  Eye,
  Info
} from 'lucide-react';

export const About: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Healthcare Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            About Nalanda ENT Center
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence in Micro-Otology, Endoscopic Sinus Surgery, and Hearing Rehabilitation since {CLINIC_INFO.established}.
          </p>
        </div>
      </section>

      {/* CLINIC STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400">
              Our Legacy & Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white leading-tight">
              Pioneering Advanced ENT Surgical Care with Human Compassion
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded by {DOCTOR_PROFILE.name} in {CLINIC_INFO.established}, Nalanda ENT Center was established with a clear vision: to bring high-precision German microscopic ear surgery and German video endoscopic diagnostics to Patna at affordable costs.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Over the past 18+ years, our clinic has treated over 50,000 patients across Bihar and neighbouring regions, establishing an unblemished reputation for surgical success, hygiene, and ethical medical advice.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-medical-50 dark:bg-medical-950/60 border border-medical-100 dark:border-medical-900/60">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                  <ShieldCheck className="w-5 h-5 text-medical-600" /> Hygiene Standard
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">100% Autoclave Sterilization & Clean Ward Environment</p>
              </div>

              <div className="p-4 rounded-2xl bg-tealbrand-50 dark:bg-tealbrand-950/60 border border-tealbrand-100 dark:border-tealbrand-900/60">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                  <Heart className="w-5 h-5 text-tealbrand-600" /> Patient First
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Transparent medical diagnosis without unnecessary procedures</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Nalanda ENT Center Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-semibold text-tealbrand-300">Modern Medical Infrastructure</div>
                <div className="text-lg font-bold font-display">Rajendra Nagar Super-Specialty Center</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SINGLE DOCTOR ARCHITECTURE SECTION (SECTION 11 IN SPEC) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-10">
          
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Doctor Photo */}
            <div className="w-full lg:w-4/12 shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                <img
                  src={DOCTOR_PROFILE.image || '/logo.png'}
                  alt={DOCTOR_PROFILE.name}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-medical-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    Senior ENT Surgeon
                  </span>
                  <h3 className="text-xl font-bold font-display">{DOCTOR_PROFILE.name}</h3>
                  <p className="text-xs text-slate-200">{DOCTOR_PROFILE.qualification}</p>
                </div>
              </div>

              {/* Consultation Timings Badge */}
              <div className="mt-4 p-4 rounded-xl bg-medical-50 dark:bg-medical-950/60 border border-medical-200 dark:border-medical-800 text-xs space-y-1.5">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-medical-600" /> OPD Consultation Hours
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  {DOCTOR_PROFILE.consultationTimings}
                </div>
                <div className="text-[11px] text-tealbrand-600 dark:text-tealbrand-400 font-semibold pt-1">
                  Languages: {DOCTOR_PROFILE.languages.join(', ')}
                </div>
              </div>
            </div>

            {/* Doctor Detailed Profile */}
            <div className="w-full lg:w-8/12 space-y-6">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400">
                  Lead Consultant ENT Surgeon
                </span>
                <h2 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                  {DOCTOR_PROFILE.name}
                </h2>
                <p className="text-sm font-semibold text-medical-600 dark:text-medical-400 mt-0.5">
                  {DOCTOR_PROFILE.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {DOCTOR_PROFILE.biography}
              </p>

              {/* Qualifications & Degrees */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-medical-500" /> Qualifications & Fellowships
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DOCTOR_PROFILE.degrees.map((deg, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-medical-500 shrink-0 mt-0.5" />
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-tealbrand-500" /> Surgical Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR_PROFILE.areasOfExpertise.map((exp, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-tealbrand-50 dark:bg-tealbrand-950/80 text-tealbrand-800 dark:text-tealbrand-200 border border-tealbrand-200 dark:border-tealbrand-800 px-3 py-1 rounded-full font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Award className="w-4 h-4 text-amber-500" /> Awards & Honors
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {DOCTOR_PROFILE.awards.map((award, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-medical-500" /> Professional Certifications
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {DOCTOR_PROFILE.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-medical-500 font-bold">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OUR TEAM SECTION WITH LIGHTBOX MODAL (SECTION 15A IN SPEC) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-tealbrand-600 dark:text-tealbrand-400">
            Clinic Staff & Healthcare Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
            Meet Our Dedicated Medical Team
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Click on any staff member photo to view their detailed experience, clinical responsibilities, and qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STAFF_MEMBERS.map((staff) => (
            <div
              key={staff.id}
              onClick={() => setSelectedStaff(staff)}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={staff.photo || '/logo.png'}
                    alt={staff.name}
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-medical-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View Profile
                    </span>
                  </div>
                  <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {staff.roleCategory}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">
                    {staff.name}
                  </h3>
                  <p className="text-xs font-medium text-medical-600 dark:text-medical-400 line-clamp-1">
                    {staff.designation}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    Experience: {staff.experience}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 text-[11px] text-tealbrand-600 dark:text-tealbrand-400 font-semibold flex items-center gap-1">
                <Info className="w-3 h-3" /> Click for details
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* STAFF MODAL LIGHTBOX */}
      <StaffModal
        staff={selectedStaff}
        onClose={() => setSelectedStaff(null)}
      />

    </div>
  );
};
