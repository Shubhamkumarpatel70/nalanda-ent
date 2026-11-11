import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Nalanda ENT Center Logo" 
                className="h-12 w-auto max-w-[160px] object-contain group-hover:scale-105 transition-transform rounded-lg" 
              />
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-1">
                  NALANDA <span className="text-medical-400">ENT</span> CENTER
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                  Super Specialty Center
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized Ear, Nose & Throat care in Patna, with expertise in ear microsurgery and endoscopic ENT procedures. Physical walk-in consultation available..
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Clean & Safe Clinical Environment
              </div>
              <div className="flex items-center gap-2 text-medical-400 font-medium">
                <Heart className="w-4 h-4 text-medical-400" /> Over {CLINIC_INFO.totalPatientsServed} Happy Patients Served
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Specialties */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold font-display text-white tracking-wide border-l-2 border-medical-500 pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About Clinic & Doctor', path: '/about' },
                { name: 'Advanced Facilities', path: '/facilities' },
                { name: 'Our Clinic Branches', path: '/branches' },
                { name: 'Photo & Facility Gallery', path: '/gallery' },
                { name: 'ENT Health Blogs', path: '/blogs' },
                { name: 'Frequently Asked Questions', path: '/faq' },
                { name: 'Contact & Directions', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="hover:text-medical-400 flex items-center gap-1.5 transition-colors text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-medical-500" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Branch Information */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold font-display text-white tracking-wide border-l-2 border-tealbrand-500 pl-3">
              Our Clinic Branches
            </h3>
            <div className="space-y-4 text-sm">
              {BRANCHES.map((b) => (
                <div key={b.id} className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50 space-y-1.5">
                  <div className="font-semibold text-white flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-tealbrand-400 shrink-0" />
                    {b.name}
                  </div>
                  <p className="text-xs text-slate-400 pl-5 leading-tight">
                    {b.address}
                  </p>
                  <div className="flex items-center gap-3 pl-5 text-[11px] text-slate-300 pt-1">
                    <a href={`tel:${b.phone}`} className="hover:text-medical-400 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-medical-400" /> {b.phone}
                    </a>
                    <a href={b.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-tealbrand-400 flex items-center gap-1 text-tealbrand-300">
                      <ExternalLink className="w-3 h-3" /> Map
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Clinic Hours */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold font-display text-white tracking-wide border-l-2 border-amber-500 pl-3">
              Contact the Clinic
            </h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${CLINIC_INFO.emergencyNumber}`} className="flex items-start gap-3 rounded-xl bg-slate-800/60 border border-slate-700/60 p-3 hover:border-medical-500/60 transition-colors">
                <Phone className="w-4 h-4 text-medical-400 mt-0.5 shrink-0" />
                <span><span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Call clinic desk</span><span className="font-semibold text-white">{CLINIC_INFO.emergencyNumber}</span></span>
              </a>
              <a href={`mailto:${CLINIC_INFO.email}`} className="flex items-start gap-3 rounded-xl bg-slate-800/60 border border-slate-700/60 p-3 hover:border-tealbrand-500/60 transition-colors">
                <Mail className="w-4 h-4 text-tealbrand-400 mt-0.5 shrink-0" />
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email</span><span className="font-semibold text-white break-all">{CLINIC_INFO.email}</span></span>
              </a>
              <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 border border-slate-700/60 p-3">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><span className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Walk-in OPD</span><span className="text-slate-200">Monday – Saturday</span><span className="block text-xs text-slate-400">09:00 AM – 08:00 PM</span></span>
              </div>
              <a href={`https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-xs font-bold text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Legal Links & ASKC TECHNOLOGIES Developer Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Nalanda ENT Center. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-slate-200 transition-colors">Medical Disclaimer</Link>
          </div>

          {/* Mandatory ASKC TECHNOLOGIES Link with hover underline animation */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 shadow-sm">
            <span className="text-slate-400">Designed & Developed by</span>
            <a 
              href="https://askctechnologies.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center gap-1 font-bold text-tealbrand-300 hover:text-tealbrand-200 transition-colors"
            >
              <span>ASKC TECHNOLOGIES</span>
              <ExternalLink className="w-3 h-3 group-hover:rotate-12 transition-transform" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tealbrand-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
