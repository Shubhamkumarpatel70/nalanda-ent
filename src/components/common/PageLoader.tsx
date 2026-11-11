import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

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
      className={`fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center bg-white px-5 transition-opacity duration-300 dark:bg-slate-950 ${fadeOut ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-slate-200 dark:border-slate-800" />
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-sky-600 border-r-teal-500 dark:border-t-sky-400 dark:border-r-teal-400" />
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-slate-900">
            {logoFailed ? (
              <Activity className="h-7 w-7 text-sky-600 dark:text-sky-400" strokeWidth={1.8} />
            ) : (
              <img
                src="/logo.png"
                alt="Nalanda ENT Center"
                className="h-full w-full rounded-full object-contain p-1"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
        </div>

        <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Loading...
        </p>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
          Nalanda ENT Center
        </p>
      </div>
    </div>
  );
};
