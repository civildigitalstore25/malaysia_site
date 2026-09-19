import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Story } from './components/Story';
import { Cuisine } from './components/Cuisine';
import { MenuHighlights } from './components/MenuHighlights';
import { Journey } from './components/Journey';
import { Branches } from './components/Branches';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#063F31] text-[#F8F5EC] selection:bg-[#C99B3B] selection:text-[#063F31]">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Stats />
        <Story />
        <Cuisine />
        <MenuHighlights />
        <Journey />
        <Branches />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
