'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  return (
    <section
      id="visit"
      className="py-24 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="visit-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll>
          <h2
            id="visit-heading"
            className="font-display text-5xl md:text-7xl tracking-tight mb-16"
            style={{ color: 'var(--color-ink)' }}
          >
            Visit
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Address */}
          <RevealOnScroll delay={0}>
            <div>
              <h3
                className="text-xs uppercase tracking-[0.2em] mb-4"
                style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
              >
                Address
              </h3>
              <address
                className="not-italic text-base leading-relaxed"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
              >
                TYRŠ<br />
                Na Kampě 8<br />
                118 00 Praha 1 — Malá Strana<br />
                Czech Republic
              </address>
            </div>
          </RevealOnScroll>

          {/* Hours */}
          <RevealOnScroll delay={1}>
            <div>
              <h3
                className="text-xs uppercase tracking-[0.2em] mb-4"
                style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
              >
                Hours
              </h3>
              <div
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
              >
                <p>Box office: Tue–Sat, 14:00–19:00</p>
                <p>Evening performances: doors 1h before</p>
                <p className="mt-3">
                  Courtyard bar: Wed–Sun, 17:00–23:00
                </p>
                <p className="mt-3" style={{ color: 'var(--color-ink-muted)' }}>
                  Closed Mondays &amp; public holidays
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Transport */}
          <RevealOnScroll delay={2}>
            <div>
              <h3
                className="text-xs uppercase tracking-[0.2em] mb-4"
                style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
              >
                Getting here
              </h3>
              <div
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
              >
                <p>
                  <span className="font-medium">Tram</span> — Lines 12, 20, 22 to{' '}
                  <em>Hellichova</em>, 4 min walk
                </p>
                <p className="mt-2">
                  <span className="font-medium">Metro</span> — Line A to{' '}
                  <em>Malostranská</em>, 8 min walk
                </p>
                <p className="mt-3" style={{ color: 'var(--color-ink-muted)' }}>
                  No parking. Come by foot, tram, or bicycle.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Contact email */}
        <RevealOnScroll delay={3}>
          <div className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <a
              href="mailto:info@tyrs.cz"
              className="font-display text-2xl md:text-3xl transition-colors duration-200"
              style={{ color: 'var(--color-ink)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            >
              info@tyrs.cz
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
