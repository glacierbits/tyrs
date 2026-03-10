import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Label column */}
          <div className="md:col-span-4 lg:col-span-3">
            <RevealOnScroll>
              <h2
                id="about-heading"
                className="font-display text-5xl md:text-7xl tracking-tight mb-4"
                style={{ color: 'var(--color-ink)' }}
              >
                About
              </h2>
              <p
                className="text-sm uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-body)' }}
              >
                O nás
              </p>
            </RevealOnScroll>
          </div>

          {/* Content column */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
            <RevealOnScroll delay={1}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
              >
                TYRŠ exists because Prague deserves a space that refuses to separate
                disciplines. We don&apos;t programme music, theatre, and dance as parallel tracks —
                we treat them as a single conversation about what it means to be alive in a
                body, in a city, in this moment. Our stage is not neutral ground. It is a
                position.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-12"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
              >
                Named after Miroslav Tyrš — gymnast, philosopher, and believer in the
                inseparability of physical and intellectual culture — we carry forward a
                simple conviction: the best art makes you feel something you didn&apos;t know you
                were missing. We invite artists who have something to say, and audiences
                willing to listen differently.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={3}>
              {/* Pull quote */}
              <blockquote
                className="border-l-2 pl-6 md:pl-10"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <p
                  className="font-display text-3xl md:text-4xl leading-snug italic"
                  style={{ color: 'var(--color-ink)' }}
                >
                  &ldquo;The stage is not neutral ground. It is a position.&rdquo;
                </p>
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>

        {/* Atmospheric image */}
        <RevealOnScroll delay={4}>
          <div className="mt-16 md:mt-24 aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80"
              alt="Prague cityscape from Kampa Island"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
