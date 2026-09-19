import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#063F31] bg-pattern-dark relative text-[#F8F5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* Thin Gold Frame Accent */}
            <div className="absolute -inset-3 border border-[#C99B3B]/30 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>
            
            <div className="relative border border-[#C99B3B]/60 p-2 bg-[#084C3B] shadow-2xl">
              <img
                src="/images/story.png"
                alt="Inside Aasina Curry House Restaurant"
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-[#063F31]/95 px-5 py-3 border border-[#C99B3B]/40 text-right">
                <p className="text-xs font-serif text-[#C99B3B] italic">Founded by</p>
                <p className="text-sm font-bold text-[#F8F5EC]">Syed Mohammad</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase">
              OUR STORY
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] leading-tight">
              A Tradition of <br />
              <span className="text-[#C99B3B] italic">Authentic Malaysian Taste</span>
            </h2>

            <p className="text-base text-[#F8F5EC]/85 leading-relaxed font-light">
              Aasina Curry House was established in 2011 by Syed Mohammad. Over the years, the restaurant has developed its identity around Malaysian dining, familiar local flavours, and a menu designed for everyday customers and families.
            </p>

            <p className="text-sm sm:text-base text-[#F8F5EC]/75 leading-relaxed font-light">
              From our crispy hand-crafted Roti Canai and fragrant Nasi Goreng to our rich, slow-simmered specialty curries, every dish reflects our dedication to culinary consistency, warm hospitality, and community dining.
            </p>

            {/* Information Block with Vertical Gold Divider */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#C99B3B]/20">
              <div className="pl-4 border-l-2 border-[#C99B3B]">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                  FOUNDER
                </span>
                <span className="text-sm font-semibold text-[#F8F5EC]">
                  Syed Mohammad
                </span>
              </div>

              <div className="pl-4 border-l-2 border-[#C99B3B]">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                  ESTABLISHED
                </span>
                <span className="text-sm font-semibold text-[#F8F5EC]">
                  2011
                </span>
              </div>

              <div className="pl-4 border-l-2 border-[#C99B3B]">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                  CUISINE
                </span>
                <span className="text-sm font-semibold text-[#F8F5EC]">
                  Malaysian Restaurant
                </span>
              </div>

              <div className="pl-4 border-l-2 border-[#C99B3B]">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                  POSITIONING
                </span>
                <span className="text-sm font-semibold text-[#F8F5EC]">
                  Makan dan Minuman Islam
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
