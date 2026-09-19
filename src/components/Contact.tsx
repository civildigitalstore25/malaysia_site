import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Calendar, Store, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleScrollToLocations = () => {
    const el = document.querySelector('#locations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="bg-[#F8F5EC] p-6 border border-[#C99B3B]/30 hover:border-[#084C3B] transition-colors flex flex-col justify-between"
              >
                <div>
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
                <p className="text-xs text-[#151515]/65 mt-3 pt-3 border-t border-[#C99B3B]/15">
                  {block.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
            onClick={handleScrollToLocations}
            className="px-8 py-4 bg-[#C99B3B] text-[#063F31] font-bold text-xs tracking-widest uppercase hover:bg-[#D4AF37] transition-all flex items-center justify-center space-x-2 shrink-0 shadow-lg"
          >
            <span>FIND OUR LOCATIONS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
