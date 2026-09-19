import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Store, Coffee, Compass, Award } from 'lucide-react';
import { expand, headerReveal, staggerContainer, slideLeft, slideRight } from './motion/variants';

export const Journey: React.FC = () => {
  const milestones = [
    {
      year: '2011',
      title: 'First Restaurant Established (1st Branch)',
      location: 'Taman Satriya, Menggatal, Kota Kinabalu, Sabah',
      description: 'Syed Mohammad starts the Aasina Curry House journey by opening our first flagship restaurant at Taman Satriya, Menggatal.',
      icon: Award
    },
    {
      year: '2015',
      title: 'Aasina Cafe Established (4th Branch)',
      location: 'Sabah, Malaysia',
      description: 'Expanding into casual Malaysian cafe dining, specialty teas, roti, and everyday family meals.',
      icon: Coffee
    },
    {
      year: '2023',
      title: 'Restoran Ashina Curry House 2 (2nd Branch)',
      location: 'Tuaran, Sabah, Malaysia',
      description: 'Opening our 2nd branch in Tuaran, Sabah, bringing signature curries and flatbreads to the Tuaran community.',
      icon: Store
    },
    {
      year: '2024',
      title: 'Aasina Maju Established (3rd Branch)',
      location: 'Sabah, Malaysia',
      description: 'Establishing our 3rd branch to serve local street food classics and authentic Malaysian dishes.',
      icon: Compass
    },
    {
      year: '2026',
      title: 'Aasina Curry House (5th Branch)',
      location: 'Sabah, Malaysia',
      description: 'Continuing our culinary heritage, quality halal dining, and commitment to Malaysian food lovers.',
      icon: Calendar
    }
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#084C3B] text-[#F8F5EC] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase">
            OUR TIMELINE & MILESTONES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] mt-2 mb-4">
            Our Journey
          </h2>
          <p className="text-base text-[#F8F5EC]/75 leading-relaxed font-light">
            Founded in 2011 by Syed Mohammad in Taman Satriya, Menggatal, discover how Aasina Curry House has grown over the years.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C99B3B]/30 -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="space-y-12 sm:space-y-14"
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {milestones.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const side = isEven ? slideLeft : slideRight;

              return (
                <motion.div
                  key={idx}
                  variants={side}
                  className={`flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-6 sm:mb-0">
                    <div className="card-hover bg-[#063F31] border border-[#C99B3B]/40 p-6 shadow-xl relative group">
                      <span className="card-hover__shine" aria-hidden />
                      <div className="relative z-[1]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold tracking-widest text-[#C99B3B] uppercase">
                          YEAR {step.year}
                        </span>
                        <span className="text-[10px] font-bold text-[#063F31] bg-[#C99B3B] px-2 py-0.5 uppercase tracking-wider">
                          MILESTONE
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#F8F5EC] mb-1 group-hover:text-[#C99B3B] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-[#C99B3B]/90 font-medium mb-2">
                        📍 {step.location}
                      </p>
                      <p className="text-xs text-[#F8F5EC]/80 leading-relaxed font-light">
                        {step.description}
                      </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    variants={expand}
                    className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#C99B3B] text-[#063F31] font-bold shadow-lg border-4 border-[#084C3B] shrink-0"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  <div className="w-full sm:w-1/2 px-4 sm:px-8 hidden sm:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
