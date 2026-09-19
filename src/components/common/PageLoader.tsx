import React, { useState, useEffect } from 'react';
import { Activity, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation slightly before 2.0s for ultra smooth transition
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1700);

    // Completely unmount/hide loader after exactly 2.0s (2000ms)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-medical-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-tealbrand-500/15 rounded-full blur-2xl pointer-events-none animate-ping duration-1000" />

      <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-4">
        
        {/* Animated Logo Container with Dual Spinning Rings */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          
          {/* Outer Spinning Ring 1 */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-medical-500 border-r-medical-400 animate-spin" style={{ animationDuration: '1.2s' }} />

          {/* Inner Reverse Spinning Ring 2 */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-tealbrand-400 border-l-tealbrand-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.9s' }} />

          {/* Logo Badge Card */}
          <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 p-2 shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/logo.png" 
              alt="Nalanda ENT Center Logo" 
              className="w-full h-full object-contain animate-pulse"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <Activity className="w-8 h-8 text-medical-500 animate-pulse absolute" />
          </div>

        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-medical-950/80 border border-medical-800 text-tealbrand-300 text-[10px] uppercase font-bold tracking-widest shadow-inner">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Super Specialty ENT Healthcare</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white pt-1">
            NALANDA <span className="text-gradient-primary">ENT CENTER</span>
          </h2>
        </div>

        {/* 2.0 Second Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-medical-500 via-tealbrand-400 to-emerald-400 rounded-full transition-all duration-[2000ms] ease-out"
            style={{ 
              width: fadeOut ? '100%' : '90%',
              animation: 'loadingProgress 2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }}
          />
        </div>

      </div>

      <style>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};
