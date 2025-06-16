import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardV2Props {
  name: string;
  title: string;
  description: string;
  isFounder?: boolean;
  imageUrl: string;
}

const TeamMemberCardV2: React.FC<TeamMemberCardV2Props> = ({
  name,
  title,
  description,
  isFounder = false,
  imageUrl,
}) => {
  return (
    <Card className="group relative h-[500px] w-full max-w-sm overflow-hidden rounded-xl border-[rgba(var(--agriox-primary-rgb),0.3)] bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        {/* Image container - takes up 3/4 of the height */}
        <div className="relative h-3/4 w-full">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Container (Name & Title) - takes up 1/4 of the height, always visible */}
        <div className="flex flex-1 flex-col justify-center border-t border-[rgba(var(--agriox-primary-rgb),0.2)] bg-white p-4 text-center">
          <h3
            className="mb-1 text-lg font-bold text-[var(--agriox-primary)]"
            style={{ fontFamily: "var(--agriox-font-2)" }}
          >
            {name}
          </h3>
          <p
            className="text-sm font-medium text-[var(--agriox-color-1)]"
            style={{ fontFamily: "var(--agriox-font)" }}
          >
            {title}
          </p>
        </div>

        {/* Glassmorphism Overlay - Full Height on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 p-6 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-center">
            <h3
              className="mb-2 text-xl font-bold text-white drop-shadow-lg"
              style={{ fontFamily: "var(--agriox-font-2)" }}
            >
              {name}
            </h3>
            <p
              className="mb-4 text-sm font-medium text-white/90 drop-shadow"
              style={{ fontFamily: "var(--agriox-font)" }}
            >
              {title}
            </p>
            <p
              className="text-sm leading-relaxed text-white drop-shadow"
              style={{ fontFamily: "var(--agriox-font)" }}
            >
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCardV2;
