import { useState, useEffect } from "react";

const colors = {
  base: "#f1cf69",
  primary: "#334b35",
  secondary: "#6d8c54",
  accent: "#687469",
};

const images = [
  "/main-slider-v2-1.webp",
  "/main-slider-v2-2.webp",
  "/main-slider-v2-3.webp",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [textKey, setTextKey] = useState(0); // Key to trigger text animations
  const total = images.length;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  // Trigger text animation when slide changes
  useEffect(() => {
    setTextKey((prev) => prev + 1);
  }, [current]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      // Define CSS variables here
      style={{
        "--color-base": colors.base,
        "--color-primary": colors.primary,
      }}
    >
      {/* Image Slides with individual overlays */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              index === current ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content overlay with animations */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
        <p
          key={`subtitle-${textKey}`}
          className="animate-fade-in-up mb-8 text-lg font-medium tracking-[0.3em] uppercase opacity-0 md:text-xl"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "forwards",
          }}
        >
          WE'RE PRODUCING NATURAL GOODS
        </p>
        <h1
          key={`title-${textKey}`}
          className="animate-fade-in-up mb-12 max-w-6xl text-6xl leading-[0.9] font-bold opacity-0 md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Averia Sans Libre', cursive",
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
        >
          Agriculture &<br />
          Organic Products
        </h1>
        <button
          key={`button-${textKey}`}
          // Use the CSS variables in your Tailwind classes
          className="animate-fade-in-up rounded-md bg-[var(--color-base)] px-16 py-6 text-xl font-bold text-[var(--color-primary)] opacity-0 transition-all duration-300 hover:scale-105 hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] hover:shadow-xl"
          style={{
            animationDelay: "0.9s",
            animationFillMode: "forwards",
          }}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Controls (bottom-right) */}
      <div className="absolute right-20 bottom-10 z-30 flex flex-col space-y-3">
        <button
          onClick={goPrev}
          className="group inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/60 hover:bg-white/20"
        >
          <svg
            className="h-6 w-6 text-white/80 transition-colors duration-300 group-hover:text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              d="M5 1L1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={goNext}
          className="group inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/60 hover:bg-white/20"
        >
          <svg
            className="h-6 w-6 text-white/80 transition-colors duration-300 group-hover:text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              d="M1 1l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-20 z-30 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current
                ? "scale-125 bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
