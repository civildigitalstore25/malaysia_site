import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Maximize2, Camera } from 'lucide-react';
import { headerReveal, swingIn, staggerContainer, easeOut } from './motion/variants';

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

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#1A1510] text-[#F8F5EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase flex items-center justify-center space-x-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>VISIT AASINA</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] mt-2 mb-4">
            Inside Aasina Curry House
          </h2>
          <p className="text-base text-[#F8F5EC]/75 leading-relaxed font-light">
            A glimpse into our Sabah restaurants, food, and dining experience.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          variants={staggerContainer(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              variants={swingIn}
              type="button"
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#C99B3B] text-[#063F31] border-[#C99B3B]'
                  : 'bg-[#1A1510] text-[#F8F5EC]/80 border-[#C99B3B]/30 hover:border-[#C99B3B] hover:text-[#C99B3B]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, rotate: -3, y: 20 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: easeOut }}
                onClick={() => setLightboxIndex(idx)}
                className="card-hover--media group relative h-[300px] bg-[#241E18] border border-[#C99B3B]/30 overflow-hidden cursor-pointer shadow-lg"
              >
                <span className="card-hover__shine" aria-hidden />
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#1A1510]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-[2]">
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

      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          currentIndex={lightboxIndex}
          totalCount={filteredItems.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
            )
          }
        />
      )}
    </section>
  );
};
