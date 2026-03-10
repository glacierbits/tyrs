'use client';

import { events, disciplineLabels } from '@/lib/data';

export default function Marquee() {
  const items = [...events, ...events];

  return (
    <div
      className="overflow-hidden py-4 border-t border-b"
      style={{ borderColor: 'var(--color-border)' }}
      aria-label="Upcoming events ticker"
      role="marquee"
    >
      <div className="marquee-track">
        {items.map((event, i) => (
          <span
            key={`${event.id}-${i}`}
            className="flex items-center gap-3 px-8 whitespace-nowrap text-sm"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-light)' }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--color-accent)' }}
              aria-hidden="true"
            />
            <span className="font-medium" style={{ color: 'var(--color-ink)' }}>
              {event.title}
            </span>
            <span className="uppercase text-xs tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
              {disciplineLabels[event.discipline]}
            </span>
            <time dateTime={event.date} style={{ color: 'var(--color-ink-muted)' }}>
              {new Date(event.date + 'T00:00:00').toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
              })}
            </time>
          </span>
        ))}
      </div>
    </div>
  );
}
