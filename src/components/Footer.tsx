'use client';

import { useState } from 'react';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer
      className="py-12 md:py-16 px-6 md:px-10 border-t"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-cream)' }}
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div className="md:col-span-3">
            <span
              className="font-display text-3xl tracking-tight block mb-2"
              style={{ color: 'var(--color-ink)' }}
            >
              TYRŠ
            </span>
            <p
              className="text-sm"
              style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
            >
              Music · Theatre · Dance
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-5 md:col-start-5">
            <h3
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
            >
              Newsletter
            </h3>
            {submitted ? (
              <p
                className="text-sm"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
              >
                Thank you. You&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 text-sm border rounded-l-md bg-transparent"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-ink)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium rounded-r-md transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--color-ink)',
                    color: 'var(--color-cream)',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = 'var(--color-accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'var(--color-ink)')
                  }
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div className="md:col-span-3 md:col-start-10">
            <h3
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
            >
              Follow
            </h3>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full border transition-all duration-200"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-ink-light)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-ink-light)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
          >
            © {new Date().getFullYear()} TYRŠ. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
          >
            Na Kampě 8, Praha 1
          </p>
        </div>
      </div>
    </footer>
  );
}
