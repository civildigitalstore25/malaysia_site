import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Calendar, Store, ArrowRight } from 'lucide-react';
import { cornerIn, headerReveal, lift, staggerContainer } from './motion/variants';

export const Contact: React.FC = () => {
  const handleScrollToLocations = () => {
    const el = document.querySelector('#locations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const infoBlocks = [
    {
      label: 'FOUNDER',
      value: 'Syed Mohammad',
      sub: 'Established Vision & Heritage',
      icon: User
    },
    {
      label: 'ESTABLISHED',
      value: '2011',
      sub: 'Malaysian Restaurant Heritage',
      icon: Calendar
    },
    {
      label: 'PRIMARY PHONE',
      value: '016-8709786',
      sub: 'Direct Customer Inquiries',
      isPhone: true,
      href: 'tel:0168709786',
      icon: Phone
    },
    {
      label: 'BUSINESS POSITIONING',
      value: 'Aasina Curry House',
      sub: 'Makan dan Minuman Islam',
      icon: Store
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4EDDD] text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#084C3B] uppercase">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#063F31] mt-2 mb-4">
            Connect With Aasina Curry House
          </h2>
          <p className="text-base text-[#151515]/75 leading-relaxed font-light">
            We welcome you and your family to experience authentic Malaysian dining at our restaurant locations.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {infoBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={cornerIn}
                className="card-hover--light bg-[#F8F5EC] p-6 border border-[#C99B3B]/30 flex flex-col justify-between"
              >
                <span className="card-hover__shine" aria-hidden />
                <div className="relative z-[1]">
                  <div className="w-10 h-10 bg-[#084C3B] text-[#C99B3B] flex items-center justify-center mb-4 border border-[#C99B3B]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#C99B3B] uppercase block">
                    {block.label}
                  </span>
                  {block.isPhone ? (
                    <a
                      href={block.href}
                      className="font-serif text-xl sm:text-2xl font-bold text-[#063F31] hover:text-[#C99B3B] transition-colors block mt-1"
                    >
                      {block.value}
                    </a>
                  ) : (
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#063F31] mt-1">
                      {block.value}
                    </h3>
                  )}
                </div>
                <p className="text-xs text-[#151515]/65 mt-3 pt-3 border-t border-[#C99B3B]/15 relative z-[1]">
                  {block.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={lift}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#063F31] border border-[#C99B3B] p-8 sm:p-12 text-[#F8F5EC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-[#C99B3B] uppercase">
              VISIT OUR RESTAURANTS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Looking for our restaurant address & directions?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EC]/75 font-light max-w-xl">
              Use our interactive map directory to locate Aasina Curry House branches and launch Google Maps directions directly.
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToLocations}
            className="px-8 py-4 bg-[#C99B3B] text-[#063F31] font-bold text-xs tracking-widest uppercase hover:bg-[#D4AF37] transition-colors flex items-center justify-center space-x-2 shrink-0 shadow-lg"
          >
            <span>FIND OUR LOCATIONS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
