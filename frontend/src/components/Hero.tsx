import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-pattern-dark overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#084C3B]/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Small Gold Tag */}
            <div className="inline-flex items-center space-x-2 self-start bg-[#084C3B] px-3.5 py-1.5 border border-[#C99B3B]/40">
              <Award className="w-3.5 h-3.5 text-[#C99B3B]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase">
                ESTABLISHED 2011
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F5EC] leading-[1.1]">
              Aasina <br />
              <span className="italic font-normal text-[#C99B3B]">Curry House</span>
            </h1>

            {/* Subheading */}
            <p className="font-serif text-xl sm:text-2xl text-[#C99B3B] italic tracking-wide">
              Heritage Taste. Growing with Malaysia.
            </p>

            {/* Body */}
            <p className="text-sm sm:text-base text-[#F8F5EC]/85 leading-relaxed max-w-xl font-light">
              Established in 2011 by Syed Mohammad, Aasina Curry House brings Malaysian restaurant heritage, diverse cuisine, and a welcoming family dining experience rooted in authentic local flavors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => handleScrollTo('#story')}
                className="px-6 py-3.5 bg-[#C99B3B] text-[#063F31] font-bold text-xs tracking-widest uppercase hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-[#C99B3B]/10"
              >
                <span>EXPLORE OUR STORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('#locations')}
                className="px-6 py-3.5 border border-[#C99B3B]/60 text-[#F8F5EC] font-bold text-xs tracking-widest uppercase hover:border-[#C99B3B] hover:text-[#C99B3B] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-[#C99B3B]" />
                <span>FIND OUR LOCATIONS</span>
              </button>
            </div>

            {/* Quick Micro Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C99B3B]/20 max-w-lg">
              <div>
                <span className="block text-[10px] tracking-widest text-[#C99B3B] uppercase">Cuisine</span>
                <span className="text-xs text-[#F8F5EC] font-medium">Malaysian Restaurant</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-widest text-[#C99B3B] uppercase">Positioning</span>
                <span className="text-xs text-[#F8F5EC] font-medium">Makan & Minuman Islam</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-widest text-[#C99B3B] uppercase">Founder</span>
                <span className="text-xs text-[#F8F5EC] font-medium">Syed Mohammad</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Geometric Gold Offset Frame Backdrop */}
            <div className="absolute -inset-3 border border-[#C99B3B]/40 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>

            {/* Image Container */}
            <div className="relative border border-[#C99B3B] bg-[#084C3B] p-2 shadow-2xl overflow-hidden group">
              <img
                src="/images/hero.png"
                alt="Aasina Curry House Malaysian Cuisine Feast"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#063F31]/90 backdrop-blur-md p-4 border border-[#C99B3B]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif italic text-[#C99B3B]">Signature Dish</p>
                  <p className="text-sm font-bold text-[#F8F5EC]">Roti Canai & Chicken Curry</p>
                </div>
                <span className="text-xs uppercase font-bold text-[#C99B3B] tracking-widest border-l border-[#C99B3B]/30 pl-3">
                  Fresh Daily
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
