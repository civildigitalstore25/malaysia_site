import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#063F31] shadow-lg border-b border-[#C99B3B]/20 py-3'
          : 'bg-gradient-to-b from-[#063F31]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <img
              src="/logo.svg"
              alt="Aasina Curry House"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0"
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F8F5EC] group-hover:text-[#C99B3B] transition-colors">
                  AASINA
                </span>
                <span className="h-4 w-px bg-[#C99B3B]/40"></span>
                <span className="text-xs font-semibold tracking-widest text-[#C99B3B] uppercase">
                  Est. 2011
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#C99B3B]/90 uppercase font-medium">
                Curry House • Malaysian Heritage
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-widest uppercase transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C99B3B]'
                      : 'text-[#F8F5EC]/80 hover:text-[#C99B3B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C99B3B] transition-all duration-300"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#locations"
              onClick={(e) => handleNavClick(e, '#locations')}
              className="px-4 py-2 border border-[#C99B3B] text-[#C99B3B] text-xs font-bold tracking-widest uppercase hover:bg-[#C99B3B] hover:text-[#063F31] transition-all duration-300 flex items-center space-x-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locations</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-[#F8F5EC] hover:text-[#C99B3B] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C99B3B]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#063F31] border-t border-[#C99B3B]/20 z-40 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex flex-col space-y-4 pt-4">
            <div className="text-[10px] tracking-[0.25em] text-[#C99B3B] uppercase font-bold border-b border-[#C99B3B]/20 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif tracking-wider text-[#F8F5EC] hover:text-[#C99B3B] py-2 border-b border-[#F8F5EC]/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#C99B3B] text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-3 pt-6 border-t border-[#C99B3B]/20">
            <a
              href="#locations"
              onClick={(e) => handleNavClick(e, '#locations')}
              className="w-full py-3 bg-[#C99B3B] text-[#063F31] text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>FIND OUR LOCATIONS</span>
            </a>
            <a
              href="tel:0168709786"
              className="w-full py-3 border border-[#C99B3B]/50 text-[#F8F5EC] text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C99B3B]" />
              <span>CALL 016-8709786</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
