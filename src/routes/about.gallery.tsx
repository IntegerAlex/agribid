import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import HeroSection from "@/components/about/HeroSection";
import EventCard from "@/components/about/EventCard";
import { ArrowLeft } from "lucide-react";

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

interface Event {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const Route = createFileRoute("/about/gallery")({
  component: AboutGalleryComponent,
});

const events: Event[] = [
  {
    id: "event-1",
    title: "Events",
    description: "Happenings at Agribid",
    coverImage: "/gallery/event.jpg",
    images: [
      "/gallery/Event 001.jpg",
      "/gallery/Event-003.jpg",
      "/gallery/Event-004.jpg",
      "/gallery/Event-005.jpg",
      "/gallery/Event-006.jpg",
      "/gallery/Event-007.jpg",
      "/gallery/Event-008.jpg",
      "/gallery/Event-009.jpg",
      "/gallery/Event-010.jpg",
      "/gallery/Event-011.jpg",
    ],
  },
  {
    id: "event-2",
    title: "Birthday Celebrations",
    description: "Celebration of Agribid team",
    coverImage: "/gallery/img2.png",
    images: [
      "/gallery/Bday-001.jpg",
      "/gallery/Bday-002.jpg",
      "/gallery/Bday-003.jpg",
      "/gallery/Bday-004.jpg",
      "/gallery/Bday-005.jpg",
      "/gallery/Bday-006.jpg",
      "/gallery/Bday-007.jpg",
      "/gallery/Bday-008.jpg",
    ],
  },
];

function AboutGalleryComponent() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20"
      style={
        {
          "--agriox-font": "'DM Sans', sans-serif",
          "--agriox-font-2": "'Averia Sans Libre', cursive",
          "--agriox-font-3": "'Shadows Into Light', cursive",
          "--agriox-base": "#f1cf69",
          "--agriox-base-rgb": "241, 207, 105",
          "--agriox-primary": "#334b35",
          "--agriox-primary-rgb": "51, 75, 53",
          "--agriox-secondary": "#6d8c54",
          "--agriox-secondary-rgb": "109, 140, 84",
          "--agriox-color-1": "#687469",
          "--agriox-color-1-rgb": "104, 116, 105",
          fontFamily: "var(--agriox-font)",
        } as CustomCSSProperties
      }
    >
      {/* Background Elements */}
      <div
        className="animate-fade-in-up-slow absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(var(--agriox-primary-rgb), 0.1) 0%, transparent 70%), radial-gradient(ellipse at top, rgba(var(--agriox-secondary-rgb), 0.1) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="animate-pulse-slow absolute inset-0 z-0 opacity-50"
        style={{ background: "url(/images/grain-pattern.png) repeat" }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl rounded-lg bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm lg:p-12">
        {!selectedEvent ? (
          <HeroSection
            title="Our Events Gallery"
            content="Discover moments from our past events, showcasing our engagement with the agricultural community and innovation."
          />
        ) : (
          <HeroSection
            title={selectedEvent.title}
            content={`Images from the ${selectedEvent.title}.`}
          />
        )}

        {!selectedEvent ? (
          <div className="my-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                imageUrl={event.coverImage}
                onClick={() => setSelectedEvent(event)}
                delay={index + 3}
              />
            ))}
          </div>
        ) : (
          <div className="my-16">
            <button
              onClick={handleBackClick}
              className="mb-8 inline-flex items-center font-semibold text-[var(--agriox-primary)] transition-colors duration-300 hover:text-[var(--agriox-secondary)]"
              style={
                { fontFamily: "var(--agriox-font)" } as CustomCSSProperties
              }
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Events
            </button>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selectedEvent.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="animate-fade-in-up overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  style={
                    {
                      animationDelay: `${index * 100}ms`,
                    } as CustomCSSProperties
                  }
                >
                  <img
                    src={image}
                    alt={`${selectedEvent.title} Image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
