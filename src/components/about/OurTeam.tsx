import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import TeamMemberCard from "./TeamMemberCard";
import AdvisoryMemberCard from "./AdvisoryMemberCard";
import { ArrowRight, Users, Award, Target } from "lucide-react";

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

const Team = () => {
  const founders = [
    {
      name: "MANOJ SUVARNA",
      title: "Co-Founder",
      description:
        "An adept Co-Founder, Manoj holds an SMP from IIM Calcutta and an MBA from Welingkar. His illustrious journey includes stints at REFCO, MAN Financial, Anand Rathi, Reliance Commodities, and Inditrade. With over 20 years of experience in financial markets and agri commodities, Manoj's expertise shines through",
      imageUrl: "/images/manoj-suvarna.jpg", // Example image path
    },
    {
      name: "ASHUTOSH MISHRA",
      title: "Co-Founder",
      description:
        "A Co-Founder with an unwavering commitment, Ashutosh an alumni of the prestigious BHU holds an MBA and a BSc in Agriculture from BHU. His distinguished career journey comprises impactful roles at CDSL, ICICI Direct, and Reliance Capital, where he amassed 20 years of experience in financial markets and agri commodities.",
      imageUrl: "/images/ashutosh-mishra.jpg", // Example image path
    },
    {
      name: "CHETAN SUVARNA",
      title: "Co-Founder",
      description:
        "Another trailblazing Co-Founder, Chetan's journey has encompassed pivotal roles at Yes Bank, Reliance Commodities, Reliance Communications, and Inditrade. With an MBA and a B.Com from CSJM, his 15-year expertise in financial markets and agri commodities adds immense value.",
      imageUrl: "/images/chetan-suvarna.jpg", // Example image path
    },
  ];

  const advisoryBoard = [
    {
      name: "Smt. Latha Rajinikanth",
      title: "Advisory Board Member",
      description:
        "Smt. Latha Rajinikanth is a devoted advocate for the underprivileged, especially children and agricultural communities. Born to a culturally rich family, she is the wife of global icon Superstar Rajinikanth and a proud mother of two accomplished daughters.",
      fullDescription:
        "A multi-talented artist, Latha ji has inspired youth through initiatives like 'Dayaa 2000' and celebrated her husband's career with landmark productions. Beyond the arts, she empowers farmers through workshops and sustainable practices, emphasizing agriculture's vital role. Her guiding principle, \"Don't talk About Change, be The Change Maker,\" encapsulates her passionate commitment to compassion, cultural revival, and community upliftment through her Esteemed Organisation \"Bharat Seva\"",
      imageUrl: "/images/latha-rajinikanth.jpg", // Example image path
    },
    {
      name: "VIVEK OBEROI",
      title: "Actor | Investor | Chief Strategy Advisor",
      description:
        "Educationist and a renowned celebrity. He is a director: swarrnim startup & innovation university, gujarat, And an active partner in the education eco-system & education hub creation.",
      imageUrl: "/images/vivek-oberoi.jpg", // Example image path
    },
    {
      name: "ASHOK NARAYANAN",
      title: "Founder and Director of Orion Group",
      description:
        "A post-graduate from the Indian Institute of Foreign Trade, class of 85. 35 years of experience in International trade of Agri-Commodities",
      imageUrl: "/images/ashok-narayanan.jpg", // Example image path
    },
    {
      name: "SRIDHAR RAMANI",
      title: "Director",
      description:
        "A diverse and illustrious career path, starting from N.T.T.F, Shriram Fibres and Ministry of Defence Production. Lends his expertise to companies such as M/s. Vassman and M/s. Reep Automobiles, particularly in the electric vehicle (EV) segment. Throughout his career, he demonstrated proficiency as a Financial Analyst, accruing invaluable experience in P.E closure.",
      imageUrl: "/images/sridhar-ramani.jpg", // Example image path
    },
    {
      name: "PRASAD KIRAN THAKUR",
      title:
        "Editor | Tarun Bharat | Director | Lokmanya Multipurpose Co. Op. Society Ltd.",
      description:
        "15 yrs of experience in Media, Finance, Commodity Trading and Logistics.",
      imageUrl: "/images/prasad-thakur.jpg", // Example image path
    },
    {
      name: "PRADEEP LOKHANDE",
      title: "Founder Rural Relations",
      description:
        "Founder Rural Relations, which has the largest rural network covering 2/3rd of India's rural population. Facilitating customized marketing efforts of a diverse range of industries, ranging from local brands to multinationals through a unique relationship-building approach.",
      imageUrl: "/images/pradeep-lokhande.jpg", // Example image path
    },
    {
      name: "RAHUL SANGAMLAL GUPTA",
      title: "Director & Co-Founder",
      description:
        "MBA & MEM (University of Sydney, Australia), B.E. Civil Engineering (Mumbai University). Director - Sangam International School, Co-Founder/ Managing Director - Dhanraji Infra Pvt Ltd, Director - Bestbrew Alcobev Pvt Ltd, Proprietor - Shri Sangam Filling Station",
      imageUrl: "/images/rahul-gupta.jpg", // Example image path
    },
  ];

  const consultants = [
    {
      name: "Pranav Bhaskaran",
      title: "Chartered Accountant",
      description: "Pranav Bhaskar & associates, Chartered Accountant",
      imageUrl: "/images/pranav-bhaskaran.jpg", // Example image path
    },
    {
      name: "Chitrasen Singh",
      title: "Advertising & Marketing",
      description:
        "MBA BHU | BSc Purvanchal University. Ex MBPL | Jagran Prakashan| Sun Group |Bhaskar | Business Standard. 20 Year of experience in Advertising and Marketing",
      imageUrl: "/images/chitrasen-singh.jpg", // Example image path
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[rgba(var(--agriox-base-rgb),0.1)] via-[rgba(var(--agriox-secondary-rgb),0.05)] to-[rgba(var(--agriox-primary-rgb),0.1)]"
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
      {/* Founders Section */}
      <section className="px-6 py-20" aria-labelledby="founders-heading">
        <div className="mx-auto max-w-7xl">
          <div className="animate-fade-in-up mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[rgba(var(--agriox-primary-rgb),0.1)] px-4 py-2 text-[var(--agriox-primary)]">
              <Award className="mr-2 h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-[var(--agriox-font)] font-medium tracking-wider uppercase">
                Leadership
              </span>
            </div>
            <h2
              id="founders-heading"
              className="mb-6 text-4xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] lg:text-5xl"
            >
              Meet Our Founders
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
              The visionary leaders who dared to reimagine agriculture and built
              the foundation for a sustainable future.
            </p>
            <div className="mx-auto mt-8 h-1 w-24 bg-[linear-gradient(to_r,var(--agriox-base),var(--agriox-secondary))]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="animate-fade-in-up transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <TeamMemberCard
                  name={founder.name}
                  title={founder.title}
                  description={founder.description}
                  isFounder={true}
                  imageUrl={founder.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section
        className="bg-[linear-gradient(to_r,rgba(var(--agriox-secondary-rgb),0.05),rgba(var(--agriox-base-rgb),0.05),rgba(var(--agriox-primary-rgb),0.05))] px-6 py-20"
        aria-labelledby="advisory-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="animate-fade-in-up mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[rgba(var(--agriox-secondary-rgb),0.1)] px-4 py-2 text-[var(--agriox-secondary)]">
              <Target className="mr-2 h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-[var(--agriox-font)] font-medium tracking-wider uppercase">
                Guidance
              </span>
            </div>
            <h2
              id="advisory-heading"
              className="mb-6 text-4xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] lg:text-5xl"
            >
              Advisory Board
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
              Distinguished experts and industry veterans who guide our
              strategic vision and ensure sustainable growth.
            </p>
            <div className="mx-auto mt-8 h-1 w-24 bg-[linear-gradient(to_r,var(--agriox-secondary),var(--agriox-base))]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {advisoryBoard.map((member, index) => (
              <div
                key={index}
                className="animate-fade-in-up transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <AdvisoryMemberCard
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  fullDescription={member.fullDescription}
                  imageUrl={member.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="px-6 py-20" aria-labelledby="consultants-heading">
        <div className="mx-auto max-w-7xl">
          <div className="animate-fade-in-up mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[rgba(var(--agriox-base-rgb),0.1)] px-4 py-2 text-[var(--agriox-base)]">
              <Users className="mr-2 h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-[var(--agriox-font)] font-medium tracking-wider uppercase">
                Expertise
              </span>
            </div>
            <h2
              id="consultants-heading"
              className="mb-6 text-4xl font-[var(--agriox-font-2)] font-bold text-[var(--agriox-primary)] lg:text-5xl"
            >
              Strategic Consultants
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]">
              Specialized professionals who bring domain expertise and strategic
              insights to accelerate our mission.
            </p>
            <div className="mx-auto mt-8 h-1 w-24 bg-[linear-gradient(to_r,var(--agriox-base),var(--agriox-color-1))]"></div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {consultants.map((consultant, index) => (
              <div
                key={index}
                className="animate-fade-in-up transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <TeamMemberCard
                  name={consultant.name}
                  title={consultant.title}
                  description={consultant.description}
                  isFounder={false}
                  imageUrl={consultant.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section
        className="relative overflow-hidden bg-[linear-gradient(to_br,var(--agriox-primary),var(--agriox-secondary),var(--agriox-color-1))] px-6 py-20"
        aria-labelledby="cta-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="animate-float-slow absolute top-0 right-0 h-96 w-96 rounded-full bg-[rgba(var(--agriox-base-rgb),0.1)] blur-3xl delay-100"></div>
          <div className="animate-float-slow absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white/5 blur-2xl delay-300"></div>
        </div>

        <div className="animate-fade-in-up-slow relative mx-auto max-w-5xl text-center">
          <h2
            id="cta-heading"
            className="mb-6 text-4xl font-[var(--agriox-font-2)] font-bold text-white lg:text-5xl"
          >
            Ready to Transform Agriculture Together?
          </h2>
          <p className="mb-10 text-xl leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-base)] lg:text-2xl">
            Join us in revolutionizing the agricultural sector and building a
            sustainable future for farmers worldwide.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              className="group inline-flex transform items-center rounded-xl bg-[var(--agriox-base)] px-8 py-4 text-lg font-semibold text-[var(--agriox-primary)] transition-all duration-300 hover:scale-105 hover:bg-[rgba(var(--agriox-base-rgb),0.9)] hover:shadow-xl"
              aria-label="Get In Touch"
            >
              Get In Touch
            </button>
            <button
              className="rounded-xl border-2 border-[var(--agriox-base)] px-8 py-4 text-lg font-semibold text-[var(--agriox-base)] transition-all duration-300 hover:border-[rgba(var(--agriox-base-rgb),0.9)] hover:bg-[var(--agriox-base)] hover:text-[var(--agriox-primary)]"
              aria-label="Learn More About Our Mission"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
