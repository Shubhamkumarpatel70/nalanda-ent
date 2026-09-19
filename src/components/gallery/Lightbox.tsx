import React from 'react';
import { X, Tag, Info } from 'lucide-react';
import { GalleryItem } from '../../data/clinicData';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 bg-black flex items-center justify-center min-h-[300px] max-h-[550px]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="max-h-[550px] w-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col justify-between space-y-4 text-white">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 text-xs uppercase font-bold tracking-wider text-tealbrand-400 bg-tealbrand-950/80 border border-tealbrand-800 px-3 py-1 rounded-full">
                <Tag className="w-3.5 h-3.5" /> {item.category}
              </span>
              <h3 className="text-xl font-bold font-display text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-medical-400 shrink-0" />
              <span>Nalanda ENT Center Facilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
