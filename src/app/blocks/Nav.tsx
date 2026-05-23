'use client';

import { useEffect, useState } from 'react';
import logo from '@/imports/sawt-logo.svg';
import Logo from '../components/Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 50) {
        setScrolled(true);
      } else if (scrolled && window.scrollY < 40) {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className="sticky top-0 z-[100] border-b-2 border-black bg-canvas overflow-hidden" id="nav">
      <div
        className={`flex items-center justify-between px-6 md:px-10 transition-[height] duration-300 ${scrolled ? 'h-15' : 'h-16'}`}
      >
        <a href="#hero" className="flex items-baseline gap-3">
          <Logo className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-5 lg:gap-8 font-mono text-label tracking-nav uppercase">
          <a href="#about" className="hover:opacity-60">
            About
          </a>
          <a href="#capabilities" className="hover:opacity-60">
            Capabilities
          </a>
          <a href="#industries" className="hover:opacity-60">
            Industries
          </a>
          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="font-mono text-label tracking-nav uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-canvas transition-colors"
        >
          Start →
        </a>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0' : 'max-h-10'}`}>
        <div className="flex justify-between border-t border-black/40 px-6 md:px-10 py-1.5 font-mono text-micro tracking-caps uppercase opacity-70">
          <span>EST · 2026</span>
          <span>MEL / AUS</span>
          <span>
            v{new Date().getFullYear() - 2026}.{`${new Date().getMonth() + 1}`}
          </span>
        </div>
      </div>
    </nav>
  );
}
