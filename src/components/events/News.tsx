import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "@/components/about/HeroSection";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}

interface CustomCSSProperties extends React.CSSProperties {
  "--aos-duration"?: string;
  "--aos-delay"?: string;
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "AgriBid Secures Major Funding for Expansion",
    date: "October 26, 2023",
    imageUrl: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=News+1",
    content:
      "AgriBid, a leading agricultural technology platform, announced today it has successfully secured a significant round of funding to accelerate its expansion into new markets and enhance its digital platform capabilities. The investment will primarily be used to scale operations, develop innovative features, and strengthen its network of farmers and buyers across the region. This strategic investment underscores investor confidence in AgriBid's mission to revolutionize the agricultural supply chain through technology and sustainable practices. The company plans to roll out new features, including advanced analytics for crop yield prediction and real-time market price alerts, aimed at empowering farmers with critical information to make informed decisions. Furthermore, a portion of the funding will be allocated to expand AgriBid's outreach programs, providing training and support to smallholder farmers to improve productivity and market access. The CEO expressed enthusiasm about the future, stating, 'This funding is a testament to our team's hard work and dedication, and it will enable us to reach more farmers and bring greater efficiency to the agricultural sector.'",
  },
  {
    id: 2,
    title: "Innovations in Sustainable Farming Practices",
    date: "September 15, 2023",
    imageUrl: "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=News+2",
    content:
      "AgriBid hosted a series of workshops focusing on sustainable farming techniques, attracting hundreds of farmers and agricultural experts. Topics included organic pest control, water conservation, and soil health management. The workshops featured interactive sessions and practical demonstrations, providing attendees with actionable insights to adopt more environmentally friendly farming methods. Experts from various agricultural research institutions shared their latest findings and best practices, emphasizing the long-term benefits of sustainable agriculture for both the environment and farmer livelihoods. AgriBid believes that promoting sustainable practices is crucial for ensuring food security and resilience in the face of climate change. Future initiatives include pilot projects in selected regions to implement and monitor the impact of these practices on a larger scale, aiming to create case studies that can inspire wider adoption across the agricultural community.",
  },
  {
    id: 3,
    title: "AgriBid Partners with Rural Banks for Farmer Loans",
    date: "August 01, 2023",
    imageUrl: "https://via.placeholder.com/600x400/5733FF/FFFFFF?text=News+3",
    content:
      "In a move to support agricultural communities, AgriBid announced a new partnership with several rural banks to facilitate easier access to credit for farmers. This initiative aims to address the financial challenges faced by many farmers, enabling them to invest in better seeds, equipment, and technology. The partnership will streamline the loan application process and offer preferential rates to farmers registered on the AgriBid platform. This collaboration is expected to significantly boost agricultural productivity and empower farmers to overcome financial hurdles. The joint effort will also involve financial literacy programs for farmers, helping them understand credit management and investment opportunities. AgriBid is committed to fostering an ecosystem where farmers have comprehensive support, from market access to financial stability.",
  },
  {
    id: 4,
    title: "Expansion into New Regional Markets",
    date: "July 20, 2023",
    imageUrl: "https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=News+4",
    content:
      "AgriBid continues its growth trajectory by expanding its services to three new regional markets, bringing its innovative platform to a wider network of agricultural producers and consumers. The expansion is supported by a robust logistical framework and a dedicated team focused on understanding and addressing the specific needs of these new regions. This strategic move is expected to increase market access for local farmers and provide consumers with fresh, high-quality produce. The company's local teams have been conducting extensive outreach to onboard new farmers and buyers, ensuring a smooth integration into the AgriBid ecosystem. The success of this expansion is vital for AgriBid's long-term vision of creating a pan-national agricultural trading network that benefits all stakeholders.",
  },
  {
    id: 5,
    title: "AgriBid Launches New Analytics Dashboard",
    date: "June 10, 2023",
    imageUrl: "https://via.placeholder.com/600x400/33A1FF/FFFFFF?text=News+5",
    content:
      "Empowering farmers with data-driven insights, AgriBid has rolled out its new analytics dashboard, offering detailed reports on market trends, crop performance, and buyer behavior. The dashboard is designed to be user-friendly, providing actionable intelligence that can help farmers optimize their production and sales strategies. Early feedback from pilot users has been overwhelmingly positive, with many reporting significant improvements in their decision-making processes. The dashboard integrates data from various sources, including real-time market data, historical yield information, and weather patterns, presenting it in an intuitive visual format. AgriBid is committed to continuously enhancing its technological offerings to ensure farmers have access to the best tools available for maximizing their profitability and operational efficiency.",
  },
  {
    id: 6,
    title: "Community Outreach: Supporting Local Farmers",
    date: "May 05, 2023",
    imageUrl: "https://via.placeholder.com/600x400/A1FF33/FFFFFF?text=News+6",
    content:
      "AgriBid's commitment to community development was highlighted through its recent outreach program, which provided training and resources to local farmers in underserved areas. The program focused on modern farming techniques, financial literacy, and direct market access. Volunteers from AgriBid worked closely with farmers, offering personalized guidance and support to help them overcome challenges. This initiative is part of AgriBid's broader social responsibility efforts aimed at fostering sustainable agricultural growth and improving the livelihoods of farming communities. The positive impact of the program was evident in increased crop yields and improved economic conditions for participating farmers, reinforcing AgriBid's dedication to making a tangible difference in the agricultural sector.",
  },
];

const News = () => {
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
          title="Latest News & Updates"
          content="Stay informed with the latest developments from AgriBid, including company announcements, industry insights, and community initiatives."
          className="mb-12 rounded-xl bg-white/60 px-4 py-12 text-center shadow-lg"
        />
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
            <div className="flex flex-col space-y-6">
              {newsData.map((item, index) => (
                <div
                  key={item.id}
                  className="group animate-fade-in-up relative transform overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all duration-300 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--agriox-primary)]/5 to-[var(--agriox-secondary)]/5 opacity-0 transition-opacity duration-300"></div>
                  <div className="items-center md:flex">
                    <div className="mb-6 flex-shrink-0 md:mr-8 md:mb-0">
                      <img
                        className="h-48 w-full rounded-md object-cover shadow-md transition-transform duration-300 md:w-64"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between rounded-lg bg-white p-6">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[var(--agriox-secondary)]">
                          <time dateTime={item.date}>{item.date}</time>
                        </p>
                        <div className="mt-2 block">
                          <p className="text-xl font-semibold text-[var(--agriox-primary)]">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base text-[var(--agriox-color-1)]">
                            {expandedNews === item.id
                              ? item.content
                              : `${item.content.substring(0, 250)}...`}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="inline-flex items-center rounded-full border border-transparent bg-[var(--agriox-secondary)] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[var(--agriox-primary)] focus:ring-2 focus:ring-[var(--agriox-secondary)] focus:ring-offset-2 focus:outline-none"
                          aria-label={
                            expandedNews === item.id ? "Read less" : "Read more"
                          }
                        >
                          {expandedNews === item.id ? (
                            <>
                              Read Less <ChevronUp className="ml-1 h-3 w-3" />
                            </>
                          ) : (
                            <>
                              Read More <ChevronDown className="ml-1 h-3 w-3" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
