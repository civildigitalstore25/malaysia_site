import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menu';
import { Star } from 'lucide-react';
import { dropIn, headerReveal, staggerContainer, easeOut } from './motion/variants';

export const MenuHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'roti' | 'nasi' | 'specialty' | 'noodles' | 'biryani'>('all');

  const filteredItems = activeTab === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'ALL DISHES' },
    { id: 'roti', label: 'ROTI & MURTABAK' },
    { id: 'nasi', label: 'NASI GORENG' },
    { id: 'specialty', label: 'SPECIALTY DISHES' },
    { id: 'noodles', label: 'NOODLES & SOUPS' },
    { id: 'biryani', label: 'NASI BIRYANI' },
  ];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#063F31] bg-pattern-dark relative text-[#F8F5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase">
            SELECTED HIGHLIGHTS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] mt-2 mb-4">
            Selected Menu Highlights
          </h2>
          <p className="text-base text-readable-on-dark leading-relaxed">
            Signature dishes from our Sabah kitchens — roti, nasi goreng, specialty curries, noodles, and biryani.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              variants={dropIn}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 border ${activeTab === tab.id
                ? 'bg-[#C99B3B] text-[#063F31] border-[#C99B3B]'
                : 'bg-[#084C3B]/60 text-[#F8F5EC]/80 border-[#C99B3B]/30 hover:border-[#C99B3B] hover:text-[#C99B3B]'
                }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: easeOut }}
                className="card-hover bg-[#084C3B]/80 border border-[#C99B3B]/30 overflow-hidden flex flex-col justify-between group"
              >
                <span className="card-hover__shine" aria-hidden />
                {item.image && (
                  <div className="relative z-[1] w-full h-40 overflow-hidden border-b border-[#C99B3B]/20 card-hover__media">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="relative z-[1] p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-[#C99B3B] uppercase bg-[#063F31] px-2.5 py-1 border border-[#C99B3B]/30">
                      {item.category.toUpperCase()}
                    </span>
                    {item.isPopular && (
                      <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-[#063F31] bg-[#C99B3B] px-2 py-0.5 uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-current" />
                        <span>POPULAR</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F8F5EC] group-hover:text-[#C99B3B] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-readable-on-dark leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="pt-3 border-t border-[#C99B3B]/15 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-[#C99B3B]/90 font-medium">
                          • {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12 pt-8 border-t border-[#C99B3B]/20">
          <p className="text-xs text-readable-on-dark italic">
            * Visit our restaurant locations for full daily menu offerings and daily specials.
          </p>
        </div>
      </div>
    </section>
  );
};
