import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, Languages, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { StaffMember } from '../../data/clinicData';

interface StaffModalProps {
  staff: StaffMember | null;
  onClose: () => void;
}

export const StaffModal: React.FC<StaffModalProps> = ({ staff, onClose }) => {
  useEffect(() => {
    if (!staff) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [staff, onClose]);

  if (!staff) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/85 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-profile-title"
        className="relative my-auto grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_30px_100px_-30px_rgba(0,0,0,.6)] animate-in zoom-in-95 duration-200 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-5"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close staff profile"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg transition hover:rotate-90 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-500 dark:border-slate-700 dark:bg-slate-800/95 dark:text-white dark:hover:bg-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative min-h-[240px] bg-slate-100 dark:bg-slate-800 md:col-span-2 md:min-h-[560px]">
          <img
            src={staff.photo || '/logo.png'}
            alt={staff.name}
            onError={(event) => { event.currentTarget.src = '/logo.png'; }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent md:bg-gradient-to-t" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
              {staff.roleCategory}
            </span>
            <h2 id="staff-profile-title" className="mt-3 text-2xl font-extrabold font-display">{staff.name}</h2>
            <p className="mt-1 text-sm text-slate-200">{staff.designation}</p>
          </div>
        </div>

        <div className="max-h-[min(78vh,720px)] space-y-6 overflow-y-auto overscroll-contain p-5 sm:p-8 md:col-span-3">
          <div className="pr-10">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal-600 dark:text-teal-400">Team member profile</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">Professional Overview</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><Briefcase className="h-5 w-5" /></span>
              <span><span className="block text-[10px] text-slate-500 dark:text-slate-400">Experience</span><strong className="text-sm text-slate-900 dark:text-white">{staff.experience}</strong></span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300"><Languages className="h-5 w-5" /></span>
              <span><span className="block text-[10px] text-slate-500 dark:text-slate-400">Languages</span><strong className="text-sm text-slate-900 dark:text-white">{staff.languagesSpoken.join(', ')}</strong></span>
            </div>
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"><ShieldCheck className="h-4 w-4 text-teal-600" /> Medical Role Overview</h4>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{staff.bio}</p>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"><CheckCircle className="h-4 w-4 text-emerald-500" /> Clinical Responsibilities</h4>
            <ul className="space-y-3">
              {staff.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" /><span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {staff.servicesOffered && staff.servicesOffered.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"><GraduationCap className="h-4 w-4 text-sky-600" /> Services & Clinical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {staff.servicesOffered.map((service, index) => (
                  <span key={index} className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-800 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-200">{service}</span>
                ))}
              </div>
            </div>
          )}

          <button type="button" onClick={onClose} className="w-full rounded-xl bg-gradient-to-r from-medical-700 to-tealbrand-600 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-500">
            Close Profile
          </button>
        </div>
      </section>
    </div>, document.body);
};
