import React from "react";
import { ChevronRight } from "lucide-react";

interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  delay,
}) => {
  return (
    <div
      className="group animate-fade-in-up flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-white/70 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-xl"
      style={{ animationDelay: `${delay * 100}ms` } as CustomCSSProperties}
      onClick={onClick}
    >
      <div className="mb-4 h-48 w-full overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3
        className="mb-2 text-2xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] transition-colors duration-300 group-hover:text-[var(--agriox-secondary)]"
        style={{ fontFamily: "var(--agriox-font-2)" } as CustomCSSProperties}
      >
        {title}
      </h3>
      <p
        className="mb-4 flex-grow text-base leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]"
        style={{ fontFamily: "var(--agriox-font)" } as CustomCSSProperties}
      >
        {description}
      </p>
      <button
        className="mt-4 inline-flex items-center font-semibold text-[var(--agriox-primary)] transition-colors duration-300 group-hover:text-[var(--agriox-secondary)]"
        onClick={onClick}
      >
        View Gallery
        <ChevronRight
          className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default EventCard;
