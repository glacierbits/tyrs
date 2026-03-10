export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24"
      aria-label="Hero"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Oversized venue name */}
        <h1
          className="font-display leading-[0.85] tracking-tight mb-6"
          style={{
            fontSize: 'clamp(6rem, 20vw, 18rem)',
            color: 'var(--color-ink)',
            marginLeft: '-0.04em',
          }}
        >
          TYRŠ
        </h1>

        {/* City + discipline tags */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-8">
          <span
            className="text-sm md:text-base uppercase tracking-[0.2em] font-medium"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Praha
          </span>
          <span
            className="w-[1px] h-4 hidden md:block"
            style={{ backgroundColor: 'var(--color-border)' }}
            aria-hidden="true"
          />
          {['Hudba', 'Divadlo', 'Tanec'].map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm uppercase tracking-[0.15em] px-3 py-1 rounded-full border"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-ink-light)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Manifesto */}
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--color-ink-light)', fontFamily: 'var(--font-body)' }}
        >
          Nestled on the enchanting Kampa Island beneath Petřín Hill, this living
          ecosystem fuses movement, culture, science, and the arts into an
          unparalleled global hub for creativity, education, and wellbeing.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span
          className="block w-[1px] h-12 animate-pulse"
          style={{ backgroundColor: 'var(--color-ink-muted)' }}
        />
      </div>
    </section>
  );
}
