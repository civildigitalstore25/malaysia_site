import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Maximize2, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'restaurant' | 'food' | 'dining' | 'interior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'ALL PHOTOS' },
    { id: 'restaurant', label: 'RESTAURANT' },
    { id: 'food', label: 'FOOD & DISHES' },
    { id: 'dining', label: 'DINING EXPERIENCE' },
    { id: 'interior', label: 'INTERIOR' }
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#084C3B] text-[#F8F5EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase flex items-center justify-center space-x-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>VISIT AASINA</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] mt-2 mb-4">
            Inside Aasina Curry House
          </h2>
          <p className="text-base text-[#F8F5EC]/75 leading-relaxed font-light">
            A glimpse into our restaurants, food, and dining experience.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#C99B3B] text-[#063F31] border-[#C99B3B]'
                  : 'bg-[#063F31]/80 text-[#F8F5EC]/80 border-[#C99B3B]/30 hover:border-[#C99B3B] hover:text-[#C99B3B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative h-[300px] bg-[#063F31] border border-[#C99B3B]/30 overflow-hidden cursor-pointer shadow-lg hover:border-[#C99B3B]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay & View Icon */}
                <div className="absolute inset-0 bg-[#063F31]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end p-2 bg-[#C99B3B] text-[#063F31] rounded-full">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C99B3B] uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F8F5EC] mt-1">
                      {item.title}
                    </h3>
                    {item.caption && (
                      <p className="text-xs text-[#F8F5EC]/80 mt-1 line-clamp-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          currentIndex={lightboxIndex}
          totalCount={filteredItems.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
