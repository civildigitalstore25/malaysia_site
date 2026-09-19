import React, { useEffect } from 'react';
import type { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-[#063F31]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#C99B3B] uppercase block">
            INSIDE AASINA CURRY HOUSE
          </span>
          <p className="text-xs text-[#F8F5EC]/70">
            {currentIndex + 1} of {totalCount}
          </p>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="p-2.5 bg-[#084C3B] text-[#F8F5EC] hover:text-[#C99B3B] border border-[#C99B3B]/40 hover:border-[#C99B3B] transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          type="button"
          className="absolute left-2 sm:left-6 z-20 p-3 bg-[#084C3B]/80 hover:bg-[#C99B3B] text-[#F8F5EC] hover:text-[#063F31] border border-[#C99B3B]/40 transition-all rounded-full"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Frame */}
        <div className="max-w-5xl max-h-[75vh] p-2 bg-[#084C3B] border border-[#C99B3B] shadow-2xl overflow-hidden flex flex-col items-center">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[60vh] max-w-full object-contain"
          />
          {item.caption && (
            <div className="p-3 text-center">
              <p className="font-serif text-base font-bold text-[#F8F5EC]">
                {item.title}
              </p>
              <p className="text-xs text-[#F8F5EC]/75 mt-0.5">
                {item.caption}
              </p>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          type="button"
          className="absolute right-2 sm:right-6 z-20 p-3 bg-[#084C3B]/80 hover:bg-[#C99B3B] text-[#F8F5EC] hover:text-[#063F31] border border-[#C99B3B]/40 transition-all rounded-full"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Keyboard Hint */}
      <div className="text-center text-[11px] text-[#C99B3B] tracking-widest uppercase">
        <span>Use ESC to close • Arrow keys to navigate</span>
      </div>
    </div>
  );
};
