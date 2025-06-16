import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, ChevronDown, ChevronUp, Award } from "lucide-react";

// Define a custom interface to extend React.CSSProperties
interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-font-3"?: string;
  "--agriox-base"?: string;
  "--agriox-base-rgb"?: string;
  "--agriox-primary"?: string;
  "--agriox-primary-rgb"?: string;
  "--agriox-secondary"?: string;
  "--agriox-secondary-rgb"?: string;
  "--agriox-color-1"?: string;
  "--agriox-color-1-rgb"?: string;
}

interface AdvisoryMemberCardProps {
  name: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string; // Added for potential image
}

const AdvisoryMemberCard: React.FC<AdvisoryMemberCardProps> = ({
  name,
  title,
  description,
  fullDescription,
  imageUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative h-full transform overflow-hidden rounded-3xl border-0 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_br,var(--agriox-secondary),var(--agriox-base))] opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      {/* Advisory Badge */}
      <div
        className="absolute top-4 right-4 z-10"
        aria-label="Advisory Board Member"
      >
        <div className="flex items-center rounded-full bg-[rgba(var(--agriox-secondary-rgb),0.2)] px-3 py-1 backdrop-blur-sm">
          <Award
            className="mr-1 h-3 w-3 text-[var(--agriox-secondary)]"
            aria-hidden="true"
          />
          <span className="text-xs font-[var(--agriox-font)] font-medium text-[var(--agriox-secondary)]">
            Advisory
          </span>
        </div>
      </div>

      <CardContent className="relative z-10 flex flex-col p-8">
        <div className="mb-6 text-center">
          <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(to_br,var(--agriox-secondary),var(--agriox-base))] transition-transform duration-300 group-hover:scale-110">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="h-full w-full rounded-3xl object-cover"
              />
            ) : (
              <User className="h-12 w-12 text-white" aria-hidden="true" />
            )}
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          <h3 className="mb-3 text-xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] transition-colors duration-300 group-hover:text-[var(--agriox-secondary)]">
            {name}
          </h3>

          <div className="mb-6 inline-block rounded-full bg-[rgba(var(--agriox-secondary-rgb),0.1)] px-4 py-2 text-sm font-[var(--agriox-font)] font-semibold text-[var(--agriox-secondary)]">
            {title}
          </div>
        </div>

        <div className="relative flex-grow">
          <p className="mb-4 text-sm leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
            {description}
          </p>

          {fullDescription && (
            <>
              {isExpanded && (
                <div className="mb-4 overflow-hidden" aria-live="polite">
                  <p className="animate-fade-in text-sm leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
                    {fullDescription}
                  </p>
                </div>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group/btn flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-[var(--agriox-secondary)] transition-colors duration-300 hover:bg-[rgba(var(--agriox-secondary-rgb),0.1)] hover:text-[var(--agriox-primary)]"
                aria-expanded={isExpanded}
                aria-controls={`full-description-${name.replace(/\s/g, "-")}`}
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp
                      className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:transform"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown
                      className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-y-0.5 group-hover/btn:transform"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </>
          )}
          <div
            id={`full-description-${name.replace(/\s/g, "-")}`}
            className="sr-only"
          >
            {fullDescription}
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute -bottom-4 left-0 h-1 w-full origin-left scale-x-0 transform rounded-full bg-[linear-gradient(to_r,var(--agriox-secondary),var(--agriox-base))] transition-transform duration-500 group-hover:scale-x-100"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisoryMemberCard;
