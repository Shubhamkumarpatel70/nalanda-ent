import React, { useState } from 'react';
import { BRANCHES } from '../data/clinicData';
import { API_BASE_URL } from '../config/api';
import {
  MapPin,
  Phone,
  ExternalLink,
  UserCheck,
  CheckCircle2,
  Send,
  Sparkles,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branchPreference, setBranchPreference] = useState(BRANCHES[0].name);
  const [subject, setSubject] = useState('General Consultation Query');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, branchPreference, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit query.');
      }

      setSuccessMsg(`Thank you ${name}! ${data.message}`);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission failed. Please check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-medical-500';

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Physical Walk-In Clinic &amp; Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Contact &amp; Location Guidance
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visit Nalanda ENT Center for in-person ENT consultation in Patna and Bihar Sharif, or send your inquiry using the form below.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-amber-900 dark:text-amber-200">
                <UserCheck className="w-6 h-6 text-amber-600 shrink-0" />
                <h3 className="text-base font-bold font-display">Manual On-Site Registration</h3>
              </div>
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                Patients register manually at the reception desk upon physical arrival during OPD consultation hours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-medical-600 dark:text-medical-400 flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Message Desk
                </span>
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mt-1">
                  Send a Message to Clinic Desk
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Submit your consultation question, timing inquiry, or branch location query below.
                </p>
              </div>

              {successMsg && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}
              {errorMsg && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                    <input type="text" required placeholder="e.g. Ramesh Kumar" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Phone Number *</label>
                    <input type="tel" required placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Email Address (Optional)</label>
                    <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Preferred Clinic Branch</label>
                    <select value={branchPreference} onChange={(e) => setBranchPreference(e.target.value)} className={inputClass}>
                      {BRANCHES.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Subject / Category</label>
                  <input type="text" required placeholder="e.g. Microscopic ear surgery query, Sinus consultation" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Your Inquiry Message *</label>
                  <textarea rows={4} required placeholder="Describe your query or symptoms here..." value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-gradient-to-r from-medical-600 to-tealbrand-600 hover:from-medical-700 hover:to-tealbrand-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  {loading ? 'Submitting Inquiry...' : 'Submit Inquiry to Clinic Desk'} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {BRANCHES.map((branch) => (
          <div key={branch.id} className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className={`inline-block text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-2 ${branch.isMainBranch ? 'bg-medical-600 text-white' : 'bg-tealbrand-600 text-white'}`}>
                    {branch.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{branch.name}</h2>
                </div>

                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <MapPin className="w-5 h-5 text-medical-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs uppercase text-slate-400">Address:</div>
                      <div className="font-semibold text-slate-900 dark:text-white pt-0.5">{branch.address}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <Phone className="w-5 h-5 text-tealbrand-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs uppercase text-slate-400">Clinic Phone:</div>
                        <a href={`tel:${branch.phone}`} className="font-bold text-slate-900 dark:text-white hover:underline pt-0.5 block">{branch.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={`tel:${branch.phone}`} className="flex-1 py-3 bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call {branch.name}
                  </a>
                  <a href={branch.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold text-xs rounded-xl text-center shadow-sm transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4 text-medical-500" /> Open Locations
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-medical-500" /> Locations
                </div>
                <div className="h-[360px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700">
                  <iframe title={`Google Map for ${branch.name}`} src={branch.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
