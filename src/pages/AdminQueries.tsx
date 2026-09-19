import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config/api';
import { 
  ShieldCheck, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  RefreshCw,
  MessageSquare
} from 'lucide-react';

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  branchPreference: string;
  subject: string;
  message: string;
  status: 'New' | 'In Progress' | 'Resolved';
  createdAt: string;
  updatedAt?: string;
}

export const AdminQueries: React.FC = () => {
  const { token } = useAuth();
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchQueries = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch contact queries.');
      }

      setQueries(data.queries || []);

    } catch (err: any) {
      setError(err.message || 'Error loading contact queries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [token]);

  const updateStatus = async (id: string, newStatus: 'New' | 'In Progress' | 'Resolved') => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${API_BASE_URL}/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update query status');
      }

      setQueries(prev => prev.map(q => q.id === id ? { ...q, status: newStatus } : q));

    } catch (err: any) {
      alert(err.message || 'Status update failed.');
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredQueries = queries.filter(q => {
    const matchesStatus = filterStatus === 'All' || q.status === filterStatus;
    const matchesSearch = q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.phone.includes(searchTerm) ||
                          q.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.branchPreference.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return <span className="bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border border-rose-200 dark:border-rose-800 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">New Query</span>;
      case 'In Progress':
        return <span className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">In Progress</span>;
      case 'Resolved':
        return <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">Resolved</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4" /> Admin Portal
            </span>
            <h1 className="text-3xl font-extrabold font-display">
              Patient Contact Queries Dashboard
            </h1>
            <p className="text-xs text-slate-300">
              Manage physical walk-in inquiries, patient consultation calls, and branch questions.
            </p>
          </div>

          <button
            onClick={fetchQueries}
            disabled={loading}
            className="bg-medical-600 hover:bg-medical-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh Queries
          </button>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', 'New', 'In Progress', 'Resolved'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filterStatus === st
                    ? 'bg-medical-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {st} ({st === 'All' ? queries.length : queries.filter(q => q.status === st).length})
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, phone, branch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-900 rounded-xl text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-medical-500"
            />
          </div>

        </div>
      </section>

      {/* QUERIES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            Loading contact inquiries from backend API...
          </div>
        ) : error ? (
          <div className="p-6 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200 text-center text-xs">
            {error}
          </div>
        ) : filteredQueries.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm space-y-2">
            <MessageSquare className="w-8 h-8 mx-auto text-slate-400" />
            <div>No contact queries found matching the selected filter.</div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredQueries.map((q) => (
              <div 
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                        {q.name}
                      </h3>
                      {getStatusBadge(q.status)}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-medical-500" /> Submitted on {new Date(q.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 mr-2 font-semibold">Change Status:</span>
                    <button
                      onClick={() => updateStatus(q.id, 'New')}
                      disabled={updatingId === q.id || q.status === 'New'}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        q.status === 'New' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      New
                    </button>
                    <button
                      onClick={() => updateStatus(q.id, 'In Progress')}
                      disabled={updatingId === q.id || q.status === 'In Progress'}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        q.status === 'In Progress' ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => updateStatus(q.id, 'Resolved')}
                      disabled={updatingId === q.id || q.status === 'Resolved'}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        q.status === 'Resolved' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Resolved
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="font-bold uppercase tracking-wider text-slate-400">Patient Details:</div>
                    
                    <div className="space-y-2 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                        <a href={`tel:${q.phone}`} className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">{q.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-medical-500 shrink-0" />
                        <span>{q.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-tealbrand-500 shrink-0" />
                        <span>{q.branchPreference}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Subject & Inquiry Message:</div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="font-bold text-sm text-slate-900 dark:text-white">{q.subject}</div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{q.message}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
