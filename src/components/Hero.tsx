export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24"
      aria-label="Hero"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,26,24,0.75) 0%, rgba(26,26,24,0.4) 40%, rgba(26,26,24,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Oversized venue name */}
        <h1
          className="font-display leading-[0.85] tracking-tight mb-6"
          style={{
            fontSize: 'clamp(6rem, 20vw, 18rem)',
            color: 'var(--color-cream)',
            marginLeft: '-0.04em',
          }}
        >
          TYRŠ
        </h1>

        {/* City + discipline tags */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-8">
          <span
            className="text-sm md:text-base uppercase tracking-[0.2em] font-medium"
            style={{ color: 'rgba(250, 247, 242, 0.6)' }}
          >
            Praha
          </span>
          <span
            className="w-[1px] h-4 hidden md:block"
            style={{ backgroundColor: 'rgba(250, 247, 242, 0.3)' }}
            aria-hidden="true"
          />
          {['Hudba', 'Divadlo', 'Tanec'].map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm uppercase tracking-[0.15em] px-3 py-1 rounded-full border"
              style={{
                borderColor: 'rgba(250, 247, 242, 0.3)',
                color: 'rgba(250, 247, 242, 0.8)',
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
          style={{ color: 'rgba(250, 247, 242, 0.85)', fontFamily: 'var(--font-body)' }}
        >
          Nestled on the enchanting Kampa Island beneath Petřín Hill, this living
          ecosystem fuses movement, culture, science, and the arts into an
          unparalleled global hub for creativity, education, and wellbeing.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="rgba(250, 247, 242, 0.8)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
