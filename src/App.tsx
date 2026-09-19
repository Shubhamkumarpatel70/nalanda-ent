import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Facilities } from './pages/Facilities';
import { Branches } from './pages/Branches';
import { BranchDetail } from './pages/BranchDetail';
import { Gallery } from './pages/Gallery';
import { Testimonials } from './pages/Testimonials';
import { HealthBlogs } from './pages/HealthBlogs';
import { BlogDetail } from './pages/BlogDetail';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AdminQueries } from './pages/AdminQueries';
import { LegalPages } from './pages/LegalPages';
import { Activity, Home as HomeIcon } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center space-y-6">
    <div className="max-w-md space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-medical-50 dark:bg-medical-950 text-medical-600 dark:text-medical-400 mx-auto flex items-center justify-center">
        <Activity className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold font-display text-slate-900 dark:text-white">404 - Page Not Found</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400">The requested route does not exist.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-medical-600 text-white font-semibold text-xs px-6 py-3 rounded-xl shadow">
        <HomeIcon className="w-4 h-4" /> Return to Homepage
      </Link>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
          
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/branches/:branchId" element={<BranchDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blogs" element={<HealthBlogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Admin Protected Route */}
              <Route
                path="/admin/queries"
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <AdminQueries />
                  </ProtectedRoute>
                }
              />

              <Route path="/privacy-policy" element={<LegalPages />} />
              <Route path="/terms" element={<LegalPages />} />
              <Route path="/disclaimer" element={<LegalPages />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          
          <FloatingCTA />

        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};
