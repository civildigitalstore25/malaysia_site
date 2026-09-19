import React from 'react';
import { motion } from 'framer-motion';
import { foodCategories } from '../data/menu';
import { headerReveal, wipeUp, staggerContainer } from './motion/variants';

export const Cuisine: React.FC = () => {
  return (
    <section id="cuisine" className="py-20 lg:py-28 bg-[#E8DFCE] text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#8A6A28] uppercase">
            THE MENU
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#063F31] mt-2 mb-4">
            Our Culinary Identity
          </h2>
          <p className="text-base text-[#151515]/75 leading-relaxed">
            A diverse menu rooted in Sabah Malaysian restaurant culture — roti, nasi goreng, curries, and noodles prepared with traditional techniques.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {foodCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={wipeUp}
              className="card-hover--media group relative bg-[#063F31] border border-[#C99B3B]/40 overflow-hidden shadow-xl h-[420px] flex flex-col justify-between"
            >
              <span className="card-hover__shine" aria-hidden />
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063F31] via-[#063F31]/60 to-transparent" />
              </div>

              <div className="relative z-10 p-6 flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest text-[#C99B3B] bg-[#063F31] px-3 py-1 border border-[#C99B3B]/30">
                  CAT {cat.number}
                </span>
              </div>

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
        </motion.div>
      </div>
    </section>
  );
};
