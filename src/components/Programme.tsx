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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((event, i) => (
            <RevealOnScroll key={event.id} delay={i % 2 === 0 ? 0 : 1}>
              <article className="group cursor-pointer card-hover rounded-lg overflow-hidden border" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-cream)' }}>
                {/* Event image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>

                {/* Event details */}
                <div className="p-6 md:p-8">
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
                    className="font-display text-2xl md:text-3xl mb-3 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
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
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
