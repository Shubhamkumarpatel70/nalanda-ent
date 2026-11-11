import React, { useEffect, useState } from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 1250);
    const hideTimer = window.setTimeout(() => setVisible(false), 1580);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading Nalanda ENT Center"
      aria-live="polite"
      className={`fixed inset-0 z-[100] isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f7fbfd] px-5 transition-opacity duration-500 dark:bg-[#071522] ${fadeOut ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/25" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-900/20" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:22px_22px] dark:opacity-[0.12]" />
      </div>

      <div className="w-full max-w-[390px] text-center">
        <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-[2.4rem] border border-sky-200/90 dark:border-sky-800/70" />
          <div className="absolute inset-2 rounded-[2rem] border-2 border-transparent border-t-sky-500 border-r-teal-400 animate-spin [animation-duration:2.4s]" />
          <div className="absolute inset-4 rounded-[1.6rem] border border-teal-200/80 dark:border-teal-800/70 animate-pulse" />
          <div className="relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[1.55rem] bg-white shadow-[0_14px_40px_-16px_rgba(2,132,199,.45)] ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-700">
            {logoFailed ? (
              <Activity className="h-9 w-9 text-sky-600 dark:text-teal-400" strokeWidth={1.8} />
            ) : (
              <img
                src="/logo.png"
                alt="Nalanda ENT Center"
                className="h-full w-full object-contain p-2"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
          <span className="absolute -right-0.5 bottom-3 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#f7fbfd] bg-teal-500 text-white shadow-md dark:border-[#071522]">
            <ShieldCheck className="h-3.5 w-3.5" />
          </span>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
          Super Specialty ENT Healthcare
        </p>
        <h1 className="mt-3 text-[26px] font-black tracking-[-0.04em] text-slate-900 dark:text-white sm:text-3xl">
          NALANDA <span className="text-teal-600 dark:text-teal-400">ENT CENTER</span>
        </h1>
        <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
          Preparing your care experience
        </p>

        <div className="mx-auto mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-slate-200/90 dark:bg-slate-800">
          <div className="h-full w-full origin-left animate-[clinic-loading_1.25s_cubic-bezier(.22,1,.36,1)_forwards] rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-400" />
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
          Patient-first care
        </div>
      </div>

      <style>{`@keyframes clinic-loading {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
      }`}</style>
    </div>
  );
};
