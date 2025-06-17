import React from "react";
import HeroSection from "@/components/about/HeroSection";

interface CustomCSSProperties extends React.CSSProperties {
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

interface AwardItem {
  title: string;
  description: string;
  imageUrl: string;
}

const Awards = () => {
  const awardsData: AwardItem[] = [
    {
      title: "AEGIS GRAHAM BELL AWARDS",
      description:
        'Winner at the prestigious 12th Aegis Graham Bell Awards in the category of "Innovation in Agritech"',
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+1",
    },
    {
      title: "ASIA-PACIFIC STEVIE AWARD",
      description:
        "Awarded the MOST INNOVATIVE STARTUP OF THE YEAR 2022 amongst all the entries received from Asia-Pacific countries",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+2",
    },
    {
      title: "BHARAT SAMMAN BY ÉCOLE SUPÉRIEURE ROBERT DE SORBON",
      description:
        "Awarded the Bharat Samman at Burj Khalifa, Dubai for revolutionizing agriculture through digital market access and our impactful work in the agri sector.",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+3",
    },
    {
      title: "Industry outlook-Top 10 Commodities Stratups 2022",
      description:
        "Recognized and awarded by Industry outlook magazine for being amongst the leading Startups in the year 2022",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+4",
    },
    {
      title: "Indo-Asian Business Excellence Summit 2022",
      description: "Awarded startup of the year 2022",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+5",
    },
    {
      title: "ALL INDIA ACHIVER FOUNDATION",
      description:
        "Outstanding Achievement for Business Excellence awarded to our Co-Founder Mr. Manoj Suvarna",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+6",
    },
    {
      title: "AGRI INDIA STARTUP ASSEMBLY & AWARDS (AISAA)",
      description: "Awarded as the startup of the year 2022-23",
      imageUrl:
        "https://via.placeholder.com/400x250/F0F8FF/334b35?text=Award+Image+7",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-16"
      style={
        {
          "--agriox-font": "'DM Sans', sans-serif",
          "--agriox-font-2": "'Averia Sans Libre', cursive",
          "--agriox-primary": "#334b35",
          "--agriox-secondary": "#6d8c54",
          "--agriox-color-1": "#687469",
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
        aria-hidden="true"
      ></div>
      <div
        className="animate-pulse-slow absolute inset-0 z-0 opacity-50"
        style={{ background: "url(/images/grain-pattern.png) repeat" }}
        aria-hidden="true"
      ></div>

      <div className="animate-fade-in-up-slow relative z-10 h-full w-full rounded-none bg-white/80 p-4 shadow-none backdrop-blur-sm">
        <HeroSection
          title="Our Awards and Recognition"
          content="Celebrating milestones and achievements that drive us forward."
          className="mb-12 rounded-xl bg-white/60 px-4 py-12 text-center shadow-lg"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {awardsData.map((award, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up relative transform overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:ring-4 hover:ring-[var(--agriox-secondary)]"
                  // data-aos="fade-up"
                  // data-aos-delay={index * 100}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--agriox-primary)]/5 to-[var(--agriox-secondary)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <img
                    src={award.imageUrl}
                    alt={award.title}
                    className="mb-6 h-48 w-full rounded-md object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:border-2 group-hover:border-[var(--agriox-secondary)]"
                  />
                  <h3 className="mb-3 text-2xl leading-tight font-extrabold text-[var(--agriox-primary)] transition-colors duration-300 group-hover:text-[var(--agriox-secondary)]">
                    {award.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-[var(--agriox-color-1)]">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
