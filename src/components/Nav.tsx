'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#programme', label: 'Programme' },
  { href: '#about', label: 'About' },
  { href: '#spaces', label: 'Spaces' },
  { href: '#visit', label: 'Visit' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-md border-b'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.9)' : 'transparent',
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl tracking-tight transition-colors duration-200"
          style={{ color: scrolled ? 'var(--color-ink)' : 'var(--color-cream)' }}
          aria-label="TYRŠ — Back to top"
        >
          TYRŠ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:opacity-60"
              style={{
                color: scrolled ? 'var(--color-ink)' : 'var(--color-cream)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programme"
            className="text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-full transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            Tickets
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: scrolled ? 'var(--color-ink)' : 'var(--color-cream)',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: scrolled ? 'var(--color-ink)' : 'var(--color-cream)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: scrolled ? 'var(--color-ink)' : 'var(--color-cream)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-cream)', zIndex: 40 }}
      >
        <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl transition-colors duration-200"
              style={{ color: 'var(--color-ink)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programme"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium uppercase tracking-wide px-6 py-3 rounded-full mt-4"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Tickets
          </a>
        </div>
      </div>
    </nav>
  );
}
