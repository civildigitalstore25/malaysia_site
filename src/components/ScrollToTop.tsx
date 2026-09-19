import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#C99B3B] text-[#063F31] shadow-2xl hover:bg-[#D4AF37] border border-[#063F31] focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
