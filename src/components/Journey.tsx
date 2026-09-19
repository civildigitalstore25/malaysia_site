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
      description:
        'Syed Mohammad starts the restaurant business by opening Restoran Aasina Curry House at Taman Satriya, Menggatal — our flagship home of heritage taste.',
      icon: Award,
    },
    {
      year: '2015',
      title: 'Aasina Cafe Established (4th Branch)',
      location: 'Sabah, Malaysia',
      description:
        'Expanding into casual cafe dining with specialty drinks, roti, and everyday family meals across Sabah.',
      icon: Coffee,
    },
    {
      year: '2023',
      title: 'Restoran Aasina Curry House 2 (2nd Branch)',
      location: 'Taman Canggih Commercial Centre, Jalan Tuaran Bypass, Kota Kinabalu',
      description:
        'Our 2nd branch opens along Jalan Tuaran Bypass, bringing signature curries and flatbreads to more families in Kota Kinabalu.',
      icon: Store,
    },
    {
      year: '2024',
      title: 'Restoran Aasina Maju (3rd Branch)',
      location: 'Kampung Indai, Tuaran, Sabah',
      description:
        'Our 3rd branch opens in Kampung Indai, Tuaran — authentic Malaysian favourites with extended community hours.',
      icon: Compass,
    },
    {
      year: '2026',
      title: 'Aasina Curry House (5th Branch)',
      location: 'Sabah, Malaysia',
      description:
        'Continuing our culinary heritage, quality halal dining, and commitment to Malaysian food lovers across Sabah.',
      icon: Calendar,
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 lg:py-28 bg-[#EDE6D6] text-[#151515] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern-cream opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#8A6A28] uppercase">
            OUR TIMELINE & MILESTONES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#063F31] mt-2 mb-4">
            Our Journey
          </h2>
          <p className="text-base text-readable-on-light leading-relaxed">
            Founded in 2011 by Syed Mohammad in Taman Satriya, Menggatal — discover how Aasina Curry House has grown across Sabah.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C99B3B]/40 -translate-x-1/2 origin-top"
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
                  className={`flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                >
                  <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-6 sm:mb-0">
                    <div className="card-hover bg-[#F8F5EC] border border-[#C99B3B]/40 p-6 shadow-xl relative group">
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
                        <h3 className="font-serif text-xl font-bold text-[#063F31] mb-1 group-hover:text-[#8A6A28] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-[#8A6A28] font-medium mb-2">
                          📍 {step.location}
                        </p>
                        <p className="text-sm text-readable-on-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    variants={expand}
                    className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#C99B3B] text-[#063F31] font-bold shadow-lg border-4 border-[#EDE6D6] shrink-0"
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
