import React from 'react';
import { motion } from 'framer-motion';
import { foodCategories } from '../data/menu';

export const Cuisine: React.FC = () => {
  return (
    <section id="cuisine" className="py-20 lg:py-28 bg-[#F4EDDD] text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#084C3B] uppercase">
            THE MENU
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#063F31] mt-2 mb-4">
            Our Culinary Identity
          </h2>
          <p className="text-base text-[#151515]/75 leading-relaxed">
            A diverse menu rooted in Malaysian restaurant culture, prepared with fresh ingredients and traditional techniques.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-[#063F31] border border-[#C99B3B]/40 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[420px] flex flex-col justify-between"
            >
              {/* Full Bleed Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063F31] via-[#063F31]/60 to-transparent group-hover:via-[#063F31]/70 transition-all duration-300"></div>
              </div>

              {/* Top Category Badge */}
              <div className="relative z-10 p-6 flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest text-[#C99B3B] bg-[#063F31]/80 px-3 py-1 border border-[#C99B3B]/30 backdrop-blur-sm">
                  CAT {cat.number}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#F8F5EC] group-hover:text-[#C99B3B] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#F8F5EC]/80 leading-relaxed font-light line-clamp-3">
                  {cat.description}
                </p>
                <div className="pt-2 flex items-center text-xs font-bold tracking-widest text-[#C99B3B] uppercase group-hover:translate-x-1 transition-transform">
                  <span>EXPLORE CATEGORY</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
