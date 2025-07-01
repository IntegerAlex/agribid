import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/about/HeroSection";
import FeatureGridItem from "@/components/about/FeatureGridItem";
import { Flag, Eye, Heart, Users } from "lucide-react";

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
      "Empowering Farmers. Digitizing Agriculture. Transforming Rural India with AI. At Agribid Private Limited, our mission is to bridge the gap between Indian farmers and markets by building a transparent, AI-powered digital agriculture ecosystem. We are committed to empowering smallholder farmers, FPOs, PACS, and agri stakeholders with intelligent tools and inclusive innovations. Our goal is to build a scalable Agritouch platform that ensures fair trade, timely payments, and sustainable income growth for millions of farmers across India—powered by technology, grounded in trust.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To Be India’s Most Trusted AI-Powered Digital Agritech (Agritouch) Platform. Our vision is to transform Indian agriculture through artificial intelligence, data connectivity, and financial inclusion. We imagine a future where every Indian farmer—regardless of land size or location—can thrive with access to a self-sustaining digital ecosystem built on trust, technology, and inclusivity. By combining deep rural outreach with continuous AI innovation, Agribid aims to lead India’s agricultural transformation—fueling farmer prosperity and national food security.",
  },
  {
    icon: Heart,
    title: "The Purpose That Fuels Us",
    description:
      "At Agribid, our purpose is to blend AI-powered innovation with grassroots empowerment, ensuring that every Indian farmer benefits from a smarter, fairer, and more inclusive agri-value chain. We focus on Empowerment, Transparency, Inclusivity, and Innovation. Empowering Farmers and Transforming Lives—through AI, trust, and Agritouch.",
  },
  {
    icon: Users,
    title: "The Team: A Force of Change",
    description:
      "At our core, we are a passionate team of agritech innovators, AI integrators, trade professionals, and logistics experts, working to uplift the livelihoods of India’s farming community through technology and trust. Our leadership, core team, and national field presence are rooted in compassion, collaboration, and AI-powered empowerment—driven by one shared vision: a digitally connected, prosperous future for Indian agriculture.",
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
          title="ABOUT US / Who we are"
          content="Founded in 2020 and headquartered in Mumbai, Agribid Private Limited is India’s pioneering Agritouch company, dedicated to transforming Indian agriculture through AI-powered, inclusive, and sustainable innovations. We combine advanced technologies like artificial intelligence, satellite data, and IoT with deep rural engagement, ensuring that farmers, FPOs, PACS, and agri stakeholders benefit from smarter decisions, better prices, and seamless market access."
        />

        <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featureData.map((feature, index) => (
            <FeatureGridItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index + 3}
            />
          ))}
        </div>

        <h3
          className="animate-fade-in-up mb-4 text-2xl font-bold text-[var(--agriox-primary)]"
          style={
            {
              animationDelay: `${(featureData.length + 1) * 100}ms`,
            } as CustomCSSProperties
          }
        >
          Our mission is clear:
        </h3>
        <p
          className="animate-fade-in-up mb-8 text-lg leading-relaxed font-[var(--agriox-font)] text-[var(--agriox-color-1)]"
          style={
            {
              animationDelay: `${(featureData.length + 2) * 100}ms`,
            } as CustomCSSProperties
          }
        >
          To digitally uplift Indian agriculture while staying rooted in
          empathy, transparency, and farmer-first innovation—touching lives at
          every step of the value chain.
        </p>
      </div>
    </div>
  );
}
