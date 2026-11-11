import React, { useEffect, useState } from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 1250);
    const hideTimer = window.setTimeout(() => setVisible(false), 1550);
    return () => { window.clearTimeout(fadeTimer); window.clearTimeout(hideTimer); };
  }, []);
  if (!visible) return null;
  return (
    <div role="status" aria-label="Loading Nalanda ENT Center" className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-opacity duration-300 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400" />
      <div className="w-full max-w-sm px-6 text-center">
        <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] border border-sky-200 dark:border-sky-900 animate-pulse" />
          <div className="absolute inset-2 rounded-[1.6rem] border-2 border-transparent border-t-medical-600 border-r-teal-500 animate-spin" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
            <img src="/logo.png" alt="" className="h-full w-full object-contain" onError={e => { (e.currentTarget as HTMLImageElement).style.display='none'; }} />
            <Activity className="absolute h-7 w-7 text-medical-600 dark:text-medical-400" />
          </div>
        </div>
        <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-medical-700 dark:text-medical-300">Super Specialty ENT Healthcare</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">NALANDA <span className="text-gradient-primary">ENT CENTER</span></h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Preparing your care experience</p>
        <div className="mx-auto mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full w-full origin-left animate-[clinic-loading_1.3s_ease-out_forwards] rounded-full bg-gradient-to-r from-medical-600 to-teal-500" /></div>
        <p className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400"><ShieldCheck className="h-3.5 w-3.5" /> A patient-first clinic experience</p>
      </div>
      <style>{`@keyframes clinic-loading { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) { * { animation-duration: .01ms !important; } }`}</style>
    </div>
  );
};
