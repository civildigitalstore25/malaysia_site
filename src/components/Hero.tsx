import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin, Award, ChevronDown } from 'lucide-react';
import { easeOut, staggerContainer, rise } from './motion/variants';

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-24 flex items-center bg-pattern-dark overflow-hidden"
    >
      {/* Solid ambient glow — no CSS blur */}
      <div
        aria-hidden
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(8,76,59,0.55)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -top-10 right-[-8%] w-72 h-72 rounded-full pointer-events-none hidden md:block bg-[radial-gradient(circle,rgba(201,155,59,0.14)_0%,transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={rise}
              className="inline-flex items-center space-x-2 self-start bg-[#084C3B] px-3.5 py-1.5 border border-[#C99B3B]/40"
            >
              <Award className="w-3.5 h-3.5 text-[#C99B3B]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                ESTABLISHED 2011
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F5EC] leading-[1.1]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
                >
                  Aasina
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block italic font-normal text-[#C99B3B]"
                  initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.28, ease: easeOut }}
                >
                  Curry House
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={rise}
              className="font-serif text-xl sm:text-2xl text-[#C99B3B] italic tracking-wide"
            >
              Heritage Taste. Growing with Malaysia.
            </motion.p>

            <motion.p
              variants={rise}
              className="text-sm sm:text-base text-[#F8F5EC]/85 leading-relaxed max-w-xl font-light"
            >
              Established in 2011 by Syed Mohammad at Taman Satriya, Menggatal, Sabah. Aasina Curry House brings Malaysian restaurant heritage, diverse cuisine, and a welcoming family dining experience — call 016-8709786.
            </motion.p>

            <motion.div
              variants={rise}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('#story')}
                className="px-6 py-3.5 bg-[#C99B3B] text-[#063F31] font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 group shadow-lg shadow-[#C99B3B]/15 hover:bg-[#D4AF37] transition-colors"
              >
                <span>EXPLORE OUR STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#locations')}
                className="px-6 py-3.5 border border-[#C99B3B]/60 text-[#F8F5EC] font-bold text-xs tracking-widest uppercase hover:border-[#C99B3B] hover:text-[#C99B3B] transition-colors flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-[#C99B3B]" />
                <span>FIND OUR LOCATIONS</span>
              </button>
            </motion.div>

            <motion.div
              variants={rise}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C99B3B]/20 max-w-lg"
            >
              {[
                { label: 'Home', value: 'Sabah, Malaysia' },
                { label: 'Positioning', value: 'Makanan & Minuman Islam' },
                { label: 'Founder', value: 'Syed Mohammad' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block text-[10px] tracking-widest text-[#C99B3B] uppercase">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#F8F5EC] font-medium">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image card — one-shot entrance only (no tilt / float / hover scale = no flicker) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: easeOut }}
          >
            <div className="absolute -inset-3 border border-[#C99B3B]/40 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

            <div className="relative border border-[#C99B3B] bg-[#084C3B] p-2 shadow-2xl overflow-hidden">
              <motion.div
                initial={reduceMotion ? false : { clipPath: 'inset(14% 14% 14% 14%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1, delay: 0.3, ease: easeOut }}
              >
                <img
                  src="/images/hero.png"
                  alt="Aasina Curry House Malaysian Cuisine Feast"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[480px] object-cover"
                  draggable={false}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-[#063F31] p-4 border border-[#C99B3B]/30 flex items-center justify-between pointer-events-none"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5, ease: easeOut }}
              >
                <div>
                  <p className="text-xs font-serif italic text-[#C99B3B]">Signature Dish</p>
                  <p className="text-sm font-bold text-[#F8F5EC]">Roti Canai & Chicken Curry</p>
                </div>
                <span className="text-xs uppercase font-bold text-[#C99B3B] tracking-widest border-l border-[#C99B3B]/30 pl-3">
                  Fresh Daily
                </span>
              </motion.div>
            </div>

            {/* Decorative chips — never capture clicks */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-4 top-10 hidden lg:flex items-center gap-2 bg-[#063F31] border border-[#C99B3B]/50 px-3 py-2 text-[10px] font-bold tracking-widest text-[#C99B3B] uppercase shadow-xl"
            >
              Halal Dining
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-2 bottom-28 hidden lg:flex items-center gap-2 bg-[#C99B3B] text-[#063F31] px-3 py-2 text-[10px] font-bold tracking-widest uppercase shadow-xl"
            >
              Est. 2011
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to story"
        onClick={() => handleScrollTo('#story')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C99B3B]/80 hover:text-[#C99B3B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.button>
    </section>
  );
};
