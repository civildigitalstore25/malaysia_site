import React from 'react';
import { motion } from 'framer-motion';
import { headerReveal, pop, staggerContainer } from './motion/variants';

export const Stats: React.FC = () => {
  const stats = [
    { number: '2011', label: 'Established Year', sub: 'Founded by Syed Mohammad in Menggatal' },
    { number: '5', label: 'Restaurant Branches', sub: 'Growing across Menggatal & Tuaran' },
    { number: 'Sabah', label: 'Home Base', sub: 'Proudly serving Malaysian families' },
    { number: 'Halal', label: 'Makanan Islam', sub: 'Quality food prepared with care' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F0E4] text-[#151515] border-y border-[#C99B3B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#8A6A28] uppercase">
            BUSINESS AT A GLANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#063F31] mt-2 mb-3">
            Heritage & Dedication
          </h2>
          <p className="text-sm sm:text-base text-readable-on-light leading-relaxed">
            A Sabah restaurant built on Malaysian culinary heritage — from Taman Satriya in 2011 to five branches today.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={pop}
              className="card-hover--light bg-[#FFFCFA] p-4 sm:p-6 border border-[#C99B3B]/30 text-center shadow-sm"
            >
              <span className="card-hover__shine" aria-hidden />
              <div className="font-serif text-2xl sm:text-4xl font-bold text-[#063F31] mb-1 relative z-[1]">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#C99B3B] uppercase mb-2 relative z-[1]">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-readable-on-light relative z-[1]">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
