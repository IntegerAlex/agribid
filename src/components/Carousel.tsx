import { useState, useEffect } from "react";

const images = [
  "/main-slider-v2-1.webp",
  "/main-slider-v2-2.webp",
  "/main-slider-v2-3.webp",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slides with overlay and zoom effect */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={`h-full w-full transform object-cover transition-transform duration-[5000ms] ${
              index === current ? "scale-105" : "scale-100"
            } relative z-10`}
          />
          {/* Overlay behind image with lower z-index */}
          <div className="bg-opacity-40 pointer-events-none absolute inset-0 z-0 bg-black" />
        </div>
      ))}

      {/* Controls (bottom-right) */}
      <div className="absolute right-20 bottom-10 z-30 flex flex-col space-y-2">
        <button
          onClick={goPrev}
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black/60 bg-transparent transition hover:bg-black/10"
        >
          <svg
            className="h-6 w-6 text-black/60 group-hover:text-black"
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
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black/60 bg-transparent transition hover:bg-black/10"
        >
          <svg
            className="h-6 w-6 text-black/60 group-hover:text-black"
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
    </div>
  );
};

export default Carousel;
