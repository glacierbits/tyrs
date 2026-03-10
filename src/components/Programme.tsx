'use client';

import { useState } from 'react';
import { events, disciplineLabels, type Discipline } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';

const filters: (Discipline | 'all')[] = ['all', 'hudba', 'divadlo', 'tanec'];

const filterLabels: Record<string, string> = {
  all: 'All',
  hudba: 'Music',
  divadlo: 'Theatre',
  tanec: 'Dance',
};

export default function Programme() {
  const [active, setActive] = useState<Discipline | 'all'>('all');

  const filtered = active === 'all' ? events : events.filter((e) => e.discipline === active);

  return (
    <section
      id="programme"
      className="py-24 md:py-36 px-6 md:px-10"
      aria-labelledby="programme-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2
              id="programme-heading"
              className="font-display text-5xl md:text-7xl tracking-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Programme
            </h2>

            {/* Filter buttons */}
            <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter events by discipline">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`text-sm uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                    active === f ? 'text-white' : ''
                  }`}
                  style={{
                    borderColor: active === f ? 'var(--color-accent)' : 'var(--color-border)',
                    backgroundColor: active === f ? 'var(--color-accent)' : 'transparent',
                    color: active === f ? 'var(--color-cream)' : 'var(--color-ink-light)',
                    fontFamily: 'var(--font-body)',
                  }}
                  aria-pressed={active === f}
                >
                  {filterLabels[f]}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {filtered.map((event, i) => (
            <RevealOnScroll key={event.id} delay={i % 2 === 0 ? 0 : 1}>
              <article
                className="p-6 md:p-10 group cursor-pointer transition-colors duration-300"
                style={{ backgroundColor: 'var(--color-cream)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'var(--color-surface)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'var(--color-cream)')
                }
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="text-xs uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-ink-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {disciplineLabels[event.discipline]}
                  </span>
                  <time
                    dateTime={event.date}
                    className="text-sm tabular-nums"
                    style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {new Date(event.date + 'T00:00:00').toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                    {' · '}
                    {event.time}
                  </time>
                </div>

                <h3
                  className="font-display text-2xl md:text-3xl mb-3 transition-colors duration-200"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {event.title}
                </h3>

                <p
                  className="text-sm leading-relaxed max-w-lg"
                  style={{ color: 'var(--color-ink-light)', fontFamily: 'var(--font-body)' }}
                >
                  {event.description}
                </p>

                {/* Arrow indicator */}
                <div
                  className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                >
                  <span>Details</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
