import React from "react";
import { LucideIcon } from "lucide-react";

interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

interface FeatureGridItemProps {
  icon: LucideIcon; // Corrected type to LucideIcon from lucide-react
  title: string;
  description: string;
  delay: number;
}

const FeatureGridItem: React.FC<FeatureGridItemProps> = ({
  icon: IconComponent,
  title,
  description,
  delay,
}) => {
  return (
    <div
      className="group animate-fade-in-up flex translate-y-0 flex-col items-center rounded-lg bg-white/70 p-8 text-center opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
      style={{ animationDelay: `${delay * 100}ms` } as CustomCSSProperties}
    >
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(to_br,var(--agriox-primary),var(--agriox-secondary))] text-white transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={
          {
            background:
              "linear-gradient(to bottom right, var(--agriox-primary), var(--agriox-secondary))",
          } as CustomCSSProperties
        }
      >
        <IconComponent className="h-10 w-10" aria-hidden="true" />
      </div>
      <h3
        className="mb-3 text-2xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] transition-colors duration-300 group-hover:text-[var(--agriox-secondary)]"
        style={{ fontFamily: "var(--agriox-font-2)" } as CustomCSSProperties}
      >
        {title}
      </h3>
      <p
        className="text-base leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]"
        style={{ fontFamily: "var(--agriox-font)" } as CustomCSSProperties}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureGridItem;
