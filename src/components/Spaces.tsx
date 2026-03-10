import { spaces } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';

export default function Spaces() {
  return (
    <section
      id="spaces"
      className="py-24 md:py-36 px-6 md:px-10"
      aria-labelledby="spaces-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll>
          <h2
            id="spaces-heading"
            className="font-display text-5xl md:text-7xl tracking-tight mb-20"
            style={{ color: 'var(--color-ink)' }}
          >
            Spaces
          </h2>
        </RevealOnScroll>

        <div className="space-y-0">
          {spaces.map((space, i) => (
            <RevealOnScroll key={space.name} delay={i}>
              <article
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-t"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Name & meta */}
                <div className="md:col-span-4">
                  <h3
                    className="font-display text-3xl md:text-4xl mb-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {space.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-[0.15em] mb-3"
                    style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {space.subtitle}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
                  >
                    {space.capacity}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-7 md:col-start-6">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: 'var(--color-ink-light)', fontFamily: 'var(--font-body)' }}
                  >
                    {space.description}
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
