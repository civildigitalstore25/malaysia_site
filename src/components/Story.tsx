import React from 'react';
import { motion } from 'framer-motion';
import { slideLeft, slideRight, rise, staggerContainer } from './motion/variants';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#063F31] bg-pattern-dark relative text-[#F8F5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 relative"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="absolute -inset-3 border border-[#C99B3B]/30 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
            <div className="relative border border-[#C99B3B]/60 p-2 bg-[#084C3B] shadow-2xl overflow-hidden">
              <motion.img
                src="/images/story.png"
                alt="Inside Aasina Curry House Restaurant"
                className="w-full h-[380px] sm:h-[480px] object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute bottom-6 right-6 bg-[#063F31] px-5 py-3 border border-[#C99B3B]/40 text-right"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                <p className="text-xs font-serif text-[#C99B3B] italic">Founded by</p>
                <p className="text-sm font-bold text-[#F8F5EC]">Syed Mohammad</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span variants={slideRight} className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase block">
              OUR STORY
            </motion.span>

            <motion.h2 variants={slideRight} className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] leading-tight">
              A Tradition of <br />
              <span className="text-[#C99B3B] italic">Authentic Malaysian Taste</span>
            </motion.h2>

            <motion.p variants={rise} className="text-base text-[#F8F5EC]/85 leading-relaxed font-light">
              In 2011, Syed Mohammad started the restaurant business at Taman Satriya, Menggatal, Sabah. From that first curry house, Aasina has grown into a trusted name for Malaysian dining, familiar local flavours, and meals made for everyday families.
            </motion.p>

            <motion.p variants={rise} className="text-sm sm:text-base text-[#F8F5EC]/75 leading-relaxed font-light">
              From crispy hand-crafted Roti Canai and fragrant Nasi Goreng to slow-simmered specialty curries, every plate reflects our dedication to consistency, warm hospitality, and community dining across Kota Kinabalu and Tuaran.
            </motion.p>

            <motion.div variants={rise} className="grid grid-cols-2 gap-6 pt-6 border-t border-[#C99B3B]/20">
              {[
                { label: 'FOUNDER', value: 'Syed Mohammad' },
                { label: 'ESTABLISHED', value: '2011 · Menggatal' },
                { label: 'CONTACT', value: '016-8709786' },
                { label: 'POSITIONING', value: 'Makanan dan Minuman Islam' },
              ].map((item) => (
                <div key={item.label} className="pl-4 border-l-2 border-[#C99B3B]">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-[#F8F5EC]">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
