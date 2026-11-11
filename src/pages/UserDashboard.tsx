import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MyQueries } from './MyQueries';
import { UserRound, MessageSquare, Send, ArrowRight } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[70vh] pb-12">
      <section className="bg-gradient-to-br from-medical-900 via-medical-800 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <UserRound className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-teal-200 font-bold">Patient Account</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">Welcome, {user?.name || 'User'}</h1>
              <p className="text-sm text-slate-300 mt-1">Manage your profile details and track your contact queries.</p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-medical-800 px-5 py-3 text-sm font-bold hover:bg-teal-50 transition-colors">
            <Send className="w-4 h-4" /> Submit a Query
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Account Name</p>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-2">{user?.name || '—'}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email Address</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white mt-2 break-all">{user?.email || '—'}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Mobile Number</p>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-2">{user?.phone || 'Not added'}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-8 mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2"><MessageSquare className="w-5 h-5 text-medical-600" /> My Contact Queries</h2>
            <p className="text-sm text-slate-500 mt-1">Your submitted general inquiries and their latest status.</p>
          </div>
          <Link to="/my-queries" className="inline-flex items-center gap-1 text-sm font-bold text-medical-600 hover:text-medical-700">Open queries page <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
      <MyQueries />
    </div>
  );
};
