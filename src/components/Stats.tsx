import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const stats = [
    { number: '2011', label: 'Established Year', sub: 'Over a decade of culinary excellence' },
    { number: 'Malaysian', label: 'Authentic Cuisine', sub: 'Traditional recipes & local flavours' },
    { number: 'Aasina', label: 'Curry House', sub: 'Makan dan Minuman Islam' },
    { number: 'Kuala Lumpur', label: 'Malaysia Heritage', sub: 'Serving everyday Malaysian families' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F4EDDD] text-[#151515] border-y border-[#C99B3B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#084C3B] uppercase">
            BUSINESS AT A GLANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#063F31] mt-2 mb-3">
            Heritage & Dedication
          </h2>
          <p className="text-sm sm:text-base text-[#151515]/75 leading-relaxed">
            A restaurant built on Malaysian culinary heritage and a commitment to serving memorable food.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F5EC] p-6 border border-[#C99B3B]/30 text-center shadow-sm hover:border-[#084C3B] transition-colors"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#063F31] mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-bold tracking-widest text-[#C99B3B] uppercase mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-[#151515]/70">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
