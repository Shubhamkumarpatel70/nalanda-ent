import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Clock, 
  LogOut,
  ShieldCheck,
  LogIn
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { CLINIC_INFO, BRANCHES } from '../../data/clinicData';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setBranchDropdownOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Health Blogs', path: '/blogs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Top Bar */}
      <div className="bg-medical-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <a href={`tel:${CLINIC_INFO.emergencyNumber}`} className="hover:underline font-semibold text-amber-300 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 animate-bounce" /> {CLINIC_INFO.emergencyNumber}
            </a>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-medical-400" /> Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-xs">
            {isAdmin && (
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Admin Mode
              </span>
            )}
            <span className="hidden sm:inline-block bg-tealbrand-600/30 text-tealbrand-200 border border-tealbrand-500/30 px-2 py-0.5 rounded-full">
              Physical Walk-In Registration
            </span>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-md py-3 border-b border-slate-200/80 dark:border-slate-800' 
          : 'bg-white/95 dark:bg-slate-900/95 py-4 border-b border-slate-100 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - NEC & Nalanda ENT Center */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Nalanda ENT Center" 
              className="h-11 w-auto max-w-[140px] object-contain group-hover:scale-105 transition-transform rounded-lg"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 dark:text-white">
                NEC
              </span>
              <span className="block text-[11px] font-bold tracking-wide text-slate-600 dark:text-slate-300">
                Nalanda ENT Center
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/about') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/services') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Services
            </Link>

            <div className="relative group">
              <button
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                onMouseEnter={() => setBranchDropdownOpen(true)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/branches') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Branches <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {branchDropdownOpen && (
                <div 
                  onMouseLeave={() => setBranchDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 mt-1 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <Link to="/branches" className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-slate-400 hover:text-medical-600">
                    View All Branches
                  </Link>
                  <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />
                  {BRANCHES.map((b) => (
                    <Link key={b.id} to={`/branches/${b.id}`} className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-medical-500" />
                        {b.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/gallery') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Gallery</Link>
            <Link to="/testimonials" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/testimonials') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Reviews</Link>
            <Link to="/blogs" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/blogs') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Blogs</Link>
            <Link to="/faq" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/faq') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>FAQ</Link>
            <Link to="/contact" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/contact') ? 'text-medical-600 dark:text-medical-400 bg-medical-50 dark:bg-medical-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Contact</Link>
            
            {isAdmin && (
              <Link to="/admin/queries" className={`px-3 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-1 ${isActive('/admin/queries') ? 'bg-amber-500 text-white' : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/50'}`}>
                <ShieldCheck className="w-4 h-4" /> Admin Queries
              </Link>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-medical-600" />}
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-6 h-6 rounded-full bg-medical-600 text-white flex items-center justify-center text-xs font-bold uppercase">
                    {user?.name.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                    {user?.name}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase ${user?.role === 'admin' ? 'bg-amber-500 text-white' : 'bg-medical-100 text-medical-800'}`}>
                    {user?.role}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-52 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 space-y-1">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate">{user?.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{user?.email}</div>
                    </div>
                    {isAdmin && (
                      <Link to="/admin/queries" className="block px-3 py-2 rounded-lg text-xs font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40">
                        Admin Queries Dashboard
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-1.5"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-1"
                >
                  <LogIn className="w-3.5 h-3.5 text-medical-600" /> Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-medical-600 hover:bg-medical-700 rounded-xl shadow transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-xl text-slate-600 dark:text-slate-300">
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-medical-600" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 fade-in duration-300 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive(link.path) 
                    ? 'bg-medical-50 dark:bg-medical-950/80 text-medical-600 dark:text-medical-400 font-bold border-l-4 border-medical-600' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
              <Link to="/admin/queries" className="block px-4 py-2.5 rounded-xl text-base font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-l-4 border-amber-500">
                Admin Queries Dashboard
              </Link>
            )}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              {isAuthenticated ? (
                <button onClick={logout} className="py-3 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-bold text-sm rounded-xl flex items-center justify-center gap-1.5">
                  <LogOut className="w-4 h-4" /> Sign Out ({user?.name})
                </button>
              ) : (
                <div className="flex gap-2">
                  <Link to="/login" className="flex-1 py-3 text-center bg-slate-100 dark:bg-slate-800 font-semibold text-sm rounded-xl">Log In</Link>
                  <Link to="/signup" className="flex-1 py-3 text-center bg-medical-600 text-white font-semibold text-sm rounded-xl">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
