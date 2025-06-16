import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  isFounder: boolean;
  imageUrl?: string; // Added for potential image
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  description,
  isFounder,
  imageUrl,
}) => {
  return (
    <Card className="group relative h-full transform overflow-hidden rounded-3xl border-0 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${
          isFounder
            ? "bg-[linear-gradient(to_br,var(--agriox-primary),var(--agriox-secondary))]"
            : "bg-[linear-gradient(to_br,var(--agriox-secondary),var(--agriox-base))]"
        }`}
      ></div>

      {/* Founder Badge */}
      {isFounder && (
        <div className="absolute top-4 right-4 z-10" aria-label="Founder">
          <div className="flex items-center rounded-full bg-[rgba(var(--agriox-base-rgb),0.2)] px-3 py-1 backdrop-blur-sm">
            <Star
              className="mr-1 h-3 w-3 fill-current text-[var(--agriox-base)]"
              aria-hidden="true"
            />
            <span className="text-xs font-[var(--agriox-font)] font-medium text-[var(--agriox-base)]">
              Founder
            </span>
          </div>
        </div>
      )}

      <CardContent className="relative z-10 flex flex-col p-8">
        <div className="mb-6 text-center">
          <div
            className={`relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl ${
              isFounder
                ? "bg-[linear-gradient(to_br,var(--agriox-primary),var(--agriox-secondary))]"
                : "bg-[linear-gradient(to_br,var(--agriox-secondary),var(--agriox-base))]"
            } transition-transform duration-300 group-hover:scale-110`}
          >
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

          <div
            className={`mb-6 inline-block rounded-full px-4 py-2 text-sm font-[var(--agriox-font)] font-semibold ${
              isFounder
                ? "bg-[rgba(var(--agriox-primary-rgb),0.1)] text-[var(--agriox-primary)]"
                : "bg-[rgba(var(--agriox-secondary-rgb),0.1)] text-[var(--agriox-secondary)]"
            }`}
          >
            {title}
          </div>
        </div>

        <div className="relative flex-grow">
          <p className="text-sm leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
            {description}
          </p>

          {/* Bottom Accent Line */}
          <div
            className={`absolute -bottom-4 left-0 h-1 w-full rounded-full ${
              isFounder
                ? "bg-[linear-gradient(to_r,var(--agriox-primary),var(--agriox-secondary))]"
                : "bg-[linear-gradient(to_r,var(--agriox-secondary),var(--agriox-base))]"
            } origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100`}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
