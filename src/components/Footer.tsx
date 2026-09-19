import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from './motion';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#story' },
    { name: 'CUISINE', href: '#cuisine' },
    { name: 'MENU', href: '#menu' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'LOCATIONS', href: '#locations' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#042E24] text-[#F8F5EC] border-t border-[#C99B3B]/30 pt-16 pb-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C99B3B]/20">
          <motion.div variants={fadeUp} className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-3xl font-bold tracking-wider text-[#F8F5EC]">AASINA</span>
              <span className="h-4 w-px bg-[#C99B3B]" />
              <span className="text-xs font-semibold tracking-widest text-[#C99B3B] uppercase">
                CURRY HOUSE
              </span>
            </div>

            <p className="text-xs tracking-[0.25em] text-[#C99B3B] font-semibold uppercase">
              MAKANAN DAN MINUMAN ISLAM
            </p>

            <p className="text-sm text-readable-on-dark leading-relaxed max-w-md">
              Established 2011 by Syed Mohammad. Dedicated to serving traditional Malaysian restaurant heritage, hand-spun flatbreads, fragrant fried rice, and slow-cooked specialty curries.
            </p>

            <div className="text-sm text-readable-on-dark">Malaysian Restaurant · Sabah, Malaysia</div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#C99B3B] uppercase block mb-4">
                QUICK NAVIGATION
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs tracking-wider text-[#F8F5EC]/75 hover:text-[#C99B3B] transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C99B3B]/10 flex flex-wrap gap-4 text-[11px] text-[#F8F5EC]/50">
              <a href="tel:0168709786" className="hover:text-[#C99B3B] transition-colors">
                Phone: 016-8709786
              </a>
              <span>•</span>
              <span>Founded 2011 · Menggatal</span>
              <span>•</span>
              <span>Makanan & Minuman Islam</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F5EC]/60 gap-4"
        >
          <p>© 2026 Aasina Curry House. All rights reserved.</p>
          <p className="italic text-[#C99B3B]/80 font-serif">Heritage Taste. Growing with Malaysia.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
