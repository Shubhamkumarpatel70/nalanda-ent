import React from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export const LegalPages: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Privacy Policy";
  let icon = ShieldCheck;

  if (path === '/terms') {
    title = "Terms & Conditions";
    icon = FileText;
  } else if (path === '/disclaimer') {
    title = "Medical Disclaimer";
    icon = AlertTriangle;
  }

  const Icon = icon;

  return (
    <div className="space-y-12 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <Icon className="w-10 h-10 text-tealbrand-400 mx-auto" />
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Nalanda ENT Center Official Policy Documentation • Last updated January 2026
          </p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {path === '/privacy-policy' && (
            <>
              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">1. Information Collection</h2>
              <p>
                At Nalanda ENT Center, patient confidentiality and data security are our top priorities. When you register at our clinic counter, we collect minimal essential health data such as patient name, contact phone, age, and clinical symptoms necessary for medical records.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">2. Medical Records Security</h2>
              <p>
                All diagnostic audiograms, endoscopic video captures, and clinical notes are maintained in encrypted hospital records. We do not sell or share patient contact details with third-party telemarketing agencies under any circumstances.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">3. Cookies & Website Analytics</h2>
              <p>
                This website uses basic anonymous performance cookies solely to measure page speed, responsive loading, and visitor count to optimize user experience.
              </p>
            </>
          )}

          {path === '/terms' && (
            <>
              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">1. Physical Walk-in Consultations</h2>
              <p>
                Nalanda ENT Center provides medical consultations on a physical walk-in registration basis. Token order is managed sequentially by front desk officers during official OPD hours.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">2. Emergency Triage</h2>
              <p>
                Acute ENT emergencies (severe nosebleeds, airway obstruction, acute trauma) receive immediate medical triage priority over standard routine consultations.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">3. Surgical Consent</h2>
              <p>
                All microscopic ear surgeries, endoscopic sinus procedures, and pediatric adenoidectomies require written informed consent signed by the patient or legal guardian after thorough clinical counseling.
              </p>
            </>
          )}

          {path === '/disclaimer' && (
            <>
              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">1. General Educational Information</h2>
              <p>
                The medical information and blog articles published on this website are intended strictly for educational awareness. They do not constitute a formal doctor-patient diagnosis.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">2. Mandatory Clinical Examination</h2>
              <p>
                Every ENT symptom (such as eardrum perforation, sinus headache, or vertigo) requires an in-person physical examination with Dr. Rajesh Kumar Nalanda using video endoscopy or microscope tools before starting medication.
              </p>

              <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">3. Emergency Advisory</h2>
              <p>
                If you are experiencing severe breathing difficulty or massive hemorrhage, please visit the emergency room immediately or call our emergency hotline without delay.
              </p>
            </>
          )}

        </div>
      </article>

    </div>
  );
};
