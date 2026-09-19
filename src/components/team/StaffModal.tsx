import React from 'react';
import { X, CheckCircle, Languages, Briefcase, Award } from 'lucide-react';
import { StaffMember } from '../../data/clinicData';

interface StaffModalProps {
  staff: StaffMember | null;
  onClose: () => void;
}

export const StaffModal: React.FC<StaffModalProps> = ({ staff, onClose }) => {
  if (!staff) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Staff Modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          
          {/* Photo Side */}
          <div className="md:col-span-2 relative min-h-[260px] md:min-h-full bg-slate-100 dark:bg-slate-800">
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 right-4 md:hidden text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-medical-300 bg-medical-950/80 px-2 py-0.5 rounded-full">
                {staff.roleCategory}
              </span>
              <h3 className="text-xl font-bold font-display mt-1">{staff.name}</h3>
              <p className="text-xs text-slate-200">{staff.designation}</p>
            </div>
          </div>

          {/* Details Side */}
          <div className="md:col-span-3 p-6 sm:p-8 space-y-5">
            
            <div className="hidden md:block">
              <span className="inline-block text-xs uppercase font-bold tracking-wider text-medical-700 dark:text-medical-300 bg-medical-50 dark:bg-medical-950/80 px-3 py-1 rounded-full border border-medical-200 dark:border-medical-800">
                {staff.roleCategory}
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mt-2">
                {staff.name}
              </h3>
              <p className="text-sm font-medium text-medical-600 dark:text-medical-400">
                {staff.designation}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300">
                <Briefcase className="w-4 h-4 text-medical-500" />
                <span className="font-semibold">{staff.experience} Experience</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300">
                <Languages className="w-4 h-4 text-tealbrand-500" />
                <span>{staff.languagesSpoken.join(', ')}</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                About Medical Role
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {staff.bio}
              </p>
            </div>

            {/* Key Clinical Responsibilities */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Clinical Responsibilities
              </h4>
              <ul className="space-y-2">
                {staff.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl transition-colors"
              >
                Close Staff Profile
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
