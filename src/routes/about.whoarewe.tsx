import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/about/HeroSection";
import FeatureGridItem from "@/components/about/FeatureGridItem";
import { Flag, Eye, Heart, Leaf, Users } from "lucide-react";

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

export const Route = createFileRoute("/about/whoarewe")({
  component: WhoAreWeComponent,
});

const featureData = [
  {
    icon: Flag,
    title: "Our Mission",
    description:
      "Our mission at Agribid is to empower farmers and stakeholders across the agricultural value chain with a technologically advanced platform that enhances accessibility, efficiency, and profitability. We aim to bridge the gap between producers and buyers, providing a robust marketplace that drives sustainable growth, promotes fair pricing, and ensures food security for all.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To redefine agriculture with technology, cultivating a world where farmers thrive, trade flourishes, and food security is a global reality.",
  },
  {
    icon: Heart,
    title: "The Purpose That Fuels Us",
    description:
      "Agribid's overarching aim is to make a resounding social impact by simplifying, accelerating, and enhancing the transparency of agricultural transactions. We envisioned a digital marketplace that would usher in a new era of simplicity, speed, and clarity within the realm of agriculture.",
  },
  {
    icon: Leaf,
    title: "Empowering Farmers and Transforming Lives",
    description:
      "Our core purpose revolves around constructing an integrated B2B platform, seamlessly bridging the gap between farmers and a broader local and global market. Our grand vision is to empower farmers by enabling them to vend their produce at the farm gate, reducing intermediary involvement, and ushering in digital payments.",
  },
  {
    icon: Users,
    title: "The Team: A Force of Change",
    description:
      "Today, Agribid thrives with a dedicated team of 40 individuals (and growing), each contributing to our shared mission of revolutionizing agriculture. But our impact doesn't stop at our platform. Through a robust partner network, we've seeded village-level entrepreneurs across four states, igniting employment opportunities in remote rural pockets.",
  },
];

function WhoAreWeComponent() {
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

      <div className="animate-fade-in-up-slow relative z-10 mx-auto max-w-6xl rounded-lg bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm lg:p-12">
        <HeroSection
          title="ABOUT US"
          content="In the midst of October 2020, Agribid took its first step towards reshaping the landscape of agriculture. Behind this innovative endeavor were three remarkable visionaries who believed in harnessing technology to forge connections and catalyze change within the farming community."
        />

        <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature, index) => (
            <FeatureGridItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index + 3} // Stagger delay for animation
            />
          ))}
        </div>

        <p
          className="animate-fade-in-up mb-8 text-lg leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]"
          style={
            {
              animationDelay: `${(featureData.length + 4) * 100}ms`,
            } as CustomCSSProperties
          }
        >
          As we journey forward, Agribid is not merely a marketplace. It's a
          testament to innovation, an ode to empowerment, and a celebration of
          unity within the farming community. Every transaction, every
          connection, and every digital payment echoes our commitment to
          cultivating a brighter future for farmers, one click at a time.
        </p>
      </div>
    </div>
  );
}
