import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HEALTH_BLOGS } from '../data/clinicData';
import { ChevronLeft, User, Clock, Calendar, CheckCircle2, Phone, Share2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = HEALTH_BLOGS.find(b => b.slug === slug) || HEALTH_BLOGS[0];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Top Back Navigation Bar */}
      <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/blogs" className="inline-flex items-center gap-1 text-xs font-semibold text-medical-600 dark:text-medical-400 hover:underline">
            <ChevronLeft className="w-4 h-4" /> Back to All ENT Blogs
          </Link>
          <span className="text-xs text-slate-500 font-medium">Medical Category: {blog.category}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Article Header */}
        <div className="space-y-4">
          <span className="inline-block bg-medical-50 dark:bg-medical-950/80 text-medical-700 dark:text-medical-300 border border-medical-200 dark:border-medical-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <User className="w-4 h-4 text-medical-500" /> By {blog.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-tealbrand-500" /> Published {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {blog.content.map((para, idx) => (
            <p key={idx} className="text-base leading-relaxed">
              {para}
            </p>
          ))}

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-tealbrand-50 dark:bg-tealbrand-950/60 border border-tealbrand-200 dark:border-tealbrand-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-tealbrand-800 dark:text-tealbrand-300">
              Doctor's Key Takeaways:
            </h3>
            <ul className="space-y-2">
              {blog.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-tealbrand-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct Doctor Consultation CTA */}
        <div className="bg-gradient-to-r from-medical-900 to-tealbrand-900 text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-display">Experiencing Similar ENT Symptoms?</h3>
            <p className="text-xs text-slate-300">Consult Dr. Rajesh Kumar Nalanda directly at Rajendra Nagar or Kankerbagh branch.</p>
          </div>
          <a
            href={`tel:${CLINIC_INFO.emergencyNumber}`}
            className="bg-white text-medical-900 hover:bg-slate-100 font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4 text-medical-600" /> Call Clinic Desk
          </a>
        </div>

      </article>

    </div>
  );
};
