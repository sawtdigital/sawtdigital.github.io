import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    // { name: 'Work', href: '#work' },
    { name: 'Our team', href: '#our-team' },
    // { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-sm shadow-sm py-4' : 'bg-white md:bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 py-3 md:py-1 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src="/assets/sawt.svg" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-black hover:text-sawt-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-sawt-primary text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-sawt-secondary transition-colors">
            Talk to us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-sawt-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden pt-6"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 w-full flex justify-center items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-sawt-primary text-white px-5 py-3 rounded-full text-base font-medium w-full mt-6">
                Talk to us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
