import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MyQueries } from './MyQueries';
import { UserRound, Mail, Phone, MessageSquare, Send, ShieldCheck, ArrowRight } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-[75vh] pb-16">
      <section className="page-banner text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"><UserRound className="w-7 h-7" /></div>
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-200">Patient portal</p><h1 className="mt-1 text-2xl sm:text-3xl font-extrabold">Welcome, {user?.name || 'Patient'}</h1><p className="mt-1 text-sm text-sky-100/80">Your account and general inquiry updates, all in one place.</p></div>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-medical-900 shadow-lg transition hover:bg-sky-50"><Send className="w-4 h-4" /> Submit a query</Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between gap-3 mb-4"><div><p className="text-xs font-bold uppercase tracking-widest text-medical-600 dark:text-medical-400">Your details</p><h2 className="mt-1 text-xl font-extrabold text-slate-900 dark:text-white">Account overview</h2></div><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"><ShieldCheck className="w-3.5 h-3.5" /> Account active</span></div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"><div className="flex items-center gap-2 text-slate-500"><UserRound className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wide">Full name</span></div><p className="mt-3 font-bold text-slate-900 dark:text-white break-words">{user?.name || '—'}</p></div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"><div className="flex items-center gap-2 text-slate-500"><Mail className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wide">Email address</span></div><p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white break-all">{user?.email || '—'}</p></div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"><div className="flex items-center gap-2 text-slate-500"><Phone className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wide">Mobile number</span></div><p className="mt-3 font-bold text-slate-900 dark:text-white">{user?.phone ? `+91 ${user.phone}` : 'Not available'}</p></div>
        </div>
        <div className="mt-10 mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-medical-600 dark:text-medical-400">Stay informed</p><h2 className="mt-1 flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white"><MessageSquare className="w-5 h-5 text-medical-600" /> My contact queries</h2><p className="mt-1 text-sm text-slate-500">Track the status of your general inquiries to the clinic.</p></div><Link to="/my-queries" className="inline-flex items-center gap-1 text-sm font-bold text-medical-700 hover:underline dark:text-medical-400">View all queries <ArrowRight className="w-4 h-4" /></Link></div>
      </section>
      <MyQueries embedded />
    </div>
  );
};
