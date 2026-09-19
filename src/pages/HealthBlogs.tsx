import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEALTH_BLOGS, DOCTOR_PROFILE } from '../data/clinicData';
import { Search, Clock, User, ArrowRight, BookOpen } from 'lucide-react';

export const HealthBlogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ear Care', 'Sinus & Allergy', 'Vertigo Care'];

  const filteredBlogs = HEALTH_BLOGS.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Patient Education & Knowledge
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            ENT Health & Medical Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Medical articles written by {DOCTOR_PROFILE.name} covering ear care, sinus infection management, hearing aid tuning, and vertigo prevention.
          </p>
        </div>
      </section>

      {/* SEARCH & CATEGORY BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-medical-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search medical articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-800 rounded-xl text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-medical-500"
            />
          </div>

        </div>
      </section>

      {/* BLOGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-medical-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-medical-500" /> {blog.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-tealbrand-500" /> {blog.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white leading-snug group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-medical-600 hover:text-white dark:hover:bg-medical-600 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl flex items-center justify-center gap-1 transition-colors"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
