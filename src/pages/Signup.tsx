import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config/api';
import { UserRound, Mail, Lock, ArrowRight, Phone, ShieldCheck, Activity } from 'lucide-react';

export const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const normalizedPhone = phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: normalizedPhone, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create account');
      signup(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = 'w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-medical-500';
  return (
    <div className="min-h-[78vh] flex items-center justify-center px-4 py-12 sm:py-16 bg-gradient-to-b from-sky-50/70 to-transparent dark:from-slate-900/50">
      <div className="w-full max-w-5xl grid md:grid-cols-[.9fr_1.1fr] overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5">
        <aside className="hidden md:flex flex-col justify-between bg-gradient-to-br from-sky-950 via-medical-900 to-teal-900 p-10 text-white">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="Nalanda ENT Center" className="w-full h-full object-contain" />
            </div>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-teal-200">Nalanda ENT Center</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight">Your care, connected.</h1>
            <p className="mt-4 text-sm leading-7 text-sky-100/80">Create your patient portal account to submit general queries and follow their progress from one place.</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
            <ShieldCheck className="w-6 h-6 text-teal-200 shrink-0" />
            <p className="text-xs leading-5 text-sky-100">Your account details help us match your general inquiries to your portal.</p>
          </div>
        </aside>
        <section className="p-6 sm:p-9 lg:p-11">
          <div className="flex items-center gap-3 md:hidden mb-7">
            <img src="/logo.png" alt="Nalanda ENT Center" className="w-12 h-12 rounded-xl object-contain border border-slate-200 p-1" />
            <div><p className="font-extrabold text-slate-900 dark:text-white">Nalanda ENT Center</p><p className="text-xs text-slate-500">Patient Portal</p></div>
          </div>
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-widest text-medical-600 dark:text-medical-400">Patient registration</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Create your account</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Enter your details to get started.</p>
          </div>
          {error && <div role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Full name</label>
              <div className="relative"><UserRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input id="signup-name" autoComplete="name" type="text" required maxLength={80} placeholder="Enter your full name" value={name} onChange={e=>setName(e.target.value)} className={fieldClass} /></div>
            </div>
            <div>
              <label htmlFor="signup-email" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Email address</label>
              <div className="relative"><Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input id="signup-email" autoComplete="email" type="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} className={fieldClass} /></div>
            </div>
            <div>
              <label htmlFor="signup-phone" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile number <span className="text-rose-500">*</span></label>
              <div className="relative"><Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-slate-500">+91</span><input id="signup-phone" autoComplete="tel-national" type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} required placeholder="10-digit mobile number" value={phone} onChange={e=>setPhone(e.target.value.replace(/\D/g,'').slice(0,10))} className={fieldClass.replace('pl-11','pl-[4.5rem]')} /></div>
              
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label htmlFor="signup-password" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label><div className="relative"><Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input id="signup-password" autoComplete="new-password" type="password" minLength={6} required placeholder="At least 6 characters" value={password} onChange={e=>setPassword(e.target.value)} className={fieldClass} /></div></div>
              <div><label htmlFor="signup-confirm" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm password</label><div className="relative"><Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input id="signup-confirm" autoComplete="new-password" type="password" required placeholder="Re-enter password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} className={fieldClass} /></div></div>
            </div>
            <button type="submit" disabled={loading} className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-medical-700 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-medical-900/15 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70">
              {loading ? <><Activity className="w-4 h-4 animate-spin" /> Creating secure account…</> : <>Create patient account <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">Already registered? <Link to="/login" className="font-bold text-medical-700 hover:underline dark:text-medical-400">Sign in</Link></p>
        </section>
      </div>
    </div>
  );
};
