import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactElement;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4 text-center">
        <div className="max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="w-14 h-14 bg-rose-100 dark:bg-rose-950 text-rose-600 rounded-2xl mx-auto flex items-center justify-center">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Access Denied</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            This section requires Administrator privileges. Your account has standard <span className="font-semibold text-medical-600">user</span> access.
          </p>
          <a
            href="/"
            className="inline-block py-2.5 px-5 bg-medical-600 text-white font-semibold text-xs rounded-xl shadow"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  return children;
};
