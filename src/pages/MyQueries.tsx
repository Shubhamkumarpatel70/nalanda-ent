import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config/api';
import { MessageSquare, RefreshCw, Clock, MapPin, Phone, Mail, ClipboardList } from 'lucide-react';

type QueryStatus = 'New' | 'In Progress' | 'Resolved';
interface PatientQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  branchPreference: string;
  subject: string;
  message: string;
  status: QueryStatus;
  createdAt: string;
}

const formatIndiaDate = (value: string) => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).formatToParts(new Date(value));
  const get = (type: string) => parts.find(part => part.type === type)?.value || '';
  return `${get('day')}-${get('month')}-${get('year')}, ${get('hour')}:${get('minute')} ${get('dayPeriod').toUpperCase()} IST`;
};

export const MyQueries: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const { token, user } = useAuth();
  const [queries, setQueries] = useState<PatientQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadQueries = async () => {
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/contact/mine`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to load your queries.');
      setQueries(Array.isArray(data.queries) ? data.queries : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load your queries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadQueries(); }, [token]);

  const counts = {
    total: queries.length,
    new: queries.filter(q => q.status === 'New').length,
    progress: queries.filter(q => q.status === 'In Progress').length,
    resolved: queries.filter(q => q.status === 'Resolved').length
  };

  const statusStyle: Record<QueryStatus, string> = {
    New: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200 border-sky-200 dark:border-sky-800',
    'In Progress': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    Resolved: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
  };

  return (
    <div className="min-h-[70vh] pb-16 space-y-8">
      {!embedded && <section className="page-banner px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wider uppercase"><ClipboardList className="w-4 h-4" /> Patient Portal</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display">My Contact Queries</h1>
            <p className="text-sm text-slate-200 max-w-xl">Track inquiries submitted to Nalanda ENT Center and check the latest response status.</p>
            <p className="text-xs text-slate-300">Signed in as {user?.name} · {user?.email}</p>
          </div>
          <button onClick={loadQueries} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm font-semibold hover:bg-white/20 disabled:opacity-60">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </button>
        </div>
      </section>}

      <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 ${embedded ? "pb-2" : ""}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Total Queries', value: counts.total, color: 'text-slate-900 dark:text-white' },
            { label: 'New', value: counts.new, color: 'text-sky-600 dark:text-sky-400' },
            { label: 'In Progress', value: counts.progress, color: 'text-amber-600 dark:text-amber-400' },
            { label: 'Resolved', value: counts.resolved, color: 'text-emerald-600 dark:text-emerald-400' }
          ].map(item => <div key={item.label} className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5"><p className="text-xs text-slate-500">{item.label}</p><p className={`text-2xl sm:text-3xl font-extrabold mt-1 ${item.color}`}>{item.value}</p></div>)}
        </div>

        {loading ? <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center"><div className="mx-auto mb-3 h-9 w-9 rounded-full border-2 border-medical-200 border-t-medical-600 animate-spin" /><p className="text-sm font-medium text-slate-600 dark:text-slate-300">Fetching your clinic queries…</p></div> :
          error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-900 p-5 text-sm text-rose-700 dark:text-rose-300">{error}<button onClick={loadQueries} className="ml-3 underline font-semibold">Try again</button></div> :
          queries.length === 0 ? <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 sm:p-14 text-center space-y-3"><MessageSquare className="w-10 h-10 mx-auto text-slate-400" /><h2 className="text-xl font-bold text-slate-900 dark:text-white">No matching queries found</h2><p className="text-sm text-slate-500 max-w-lg mx-auto">Queries appear here when the email address or mobile number in your contact form matches the details saved in your patient account.</p><Link to="/contact" className="inline-flex mt-2 rounded-xl bg-medical-600 px-5 py-3 text-sm font-semibold text-white">Submit a Contact Query</Link></div> :
          <div className="space-y-4">{queries.map(q => <article key={q.id} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div><p className="text-xs uppercase tracking-wider font-bold text-medical-600 dark:text-medical-400">{q.subject}</p><h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">{q.name}</h2><p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Submitted {formatIndiaDate(q.createdAt)}</p></div>
              <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-bold ${statusStyle[q.status] || statusStyle.New}`}>{q.status}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{q.message}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100 dark:border-slate-800 pt-4 text-xs text-slate-500">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" />{q.phone}</span>
              <span className="flex items-center gap-2 min-w-0"><Mail className="w-4 h-4 shrink-0" /><span className="break-all">{q.email}</span></span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{q.branchPreference}</span>
            </div>
          </article>)}</div>
        }
      </section>
    </div>
  );
};
