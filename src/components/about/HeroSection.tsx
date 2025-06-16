import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-color-1"?: string;
}

interface HeroSectionProps {
  title: string;
  content: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <div className={className}>
      <h1
        className="animate-fade-in-up mb-4 text-5xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] delay-100 lg:text-6xl"
        style={{ fontFamily: "var(--agriox-font-2)" } as CustomCSSProperties}
      >
        {title}
      </h1>
      <p
        className="animate-fade-in-up mb-4 text-lg leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)] delay-200"
        style={{ fontFamily: "var(--agriox-font)" } as CustomCSSProperties}
      >
        {content}
      </p>
    </div>
  );
};

export default HeroSection;
