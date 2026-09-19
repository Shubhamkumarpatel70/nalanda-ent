import React from 'react';
import { X, CheckCircle, Languages, Briefcase } from 'lucide-react';
import { StaffMember } from '../../data/clinicData';

interface StaffModalProps {
  staff: StaffMember | null;
  onClose: () => void;
}

export const StaffModal: React.FC<StaffModalProps> = ({ staff, onClose }) => {
  if (!staff) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-y-auto border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Staff Profile"
          className="sticky top-3 right-3 float-right z-20 w-9 h-9 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors shadow-md backdrop-blur-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 clear-both">
          
          {/* Photo Side */}
          <div className="md:col-span-2 relative min-h-[200px] sm:min-h-[260px] md:min-h-full bg-slate-100 dark:bg-slate-800">
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-full h-full object-cover max-h-[280px] md:max-h-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-3 right-3 md:hidden text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-medical-300 bg-medical-950/80 px-2 py-0.5 rounded-full">
                {staff.roleCategory}
              </span>
              <h3 className="text-lg font-bold font-display mt-0.5">{staff.name}</h3>
              <p className="text-xs text-slate-200">{staff.designation}</p>
            </div>
          </div>

          {/* Details Side */}
          <div className="md:col-span-3 p-5 sm:p-7 space-y-4">
            
            <div className="hidden md:block">
              <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-medical-700 dark:text-medical-300 bg-medical-50 dark:bg-medical-950/80 px-2.5 py-1 rounded-full border border-medical-200 dark:border-medical-800">
                {staff.roleCategory}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mt-1">
                {staff.name}
              </h3>
              <p className="text-xs font-semibold text-medical-600 dark:text-medical-400">
                {staff.designation}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-medical-500" />
                <span className="font-semibold">{staff.experience} Experience</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300">
                <Languages className="w-3.5 h-3.5 text-tealbrand-500" />
                <span>{staff.languagesSpoken.join(', ')}</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                Medical Role Overview
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {staff.bio}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                Clinical Responsibilities
              </h4>
              <ul className="space-y-1.5">
                {staff.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl transition-colors"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
