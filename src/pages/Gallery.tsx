import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clinicData';
import { Lightbox } from '../components/gallery/Lightbox';
import { Maximize2, Tag } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Clinic', 'Reception', 'Equipment', 'Treatment Room', 'Staff', 'Building'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-12 pb-16">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-b from-medical-900 via-medical-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block bg-tealbrand-500/20 text-tealbrand-300 border border-tealbrand-500/30 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            Visual Experience
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">
            Clinic Infrastructure & Equipment Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our sterilized operating rooms, Zeiss microscope setup, soundproof audiology booth, and waiting lounges.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-medical-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID / MASONRY - Displays only image title and tag */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer bg-slate-900 aspect-video sm:aspect-square"
            >
              <img
                src={item.image || '/logo.png'}
                alt={item.title}
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-tealbrand-300 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-tealbrand-800/60">
                  <Tag className="w-3 h-3" /> {item.category}
                </span>
                <h3 className="text-base font-bold font-display leading-tight">{item.title}</h3>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <Lightbox
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </div>
  );
};
