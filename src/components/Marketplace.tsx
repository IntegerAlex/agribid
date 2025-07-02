import React from "react";
import { ArrowRight } from "lucide-react";

const Marketplace = () => {
  const cards = [
    {
      image: "/kb.jpg",
      title: "Best Quality<br/>Standards",
      link: "#",
    },
    {
      image: "/nccf.jpg",
      title: "Fresh & Organic<br/>Produce",
      link: "#",
    },
    {
      image: "/auction-image.jpg",
      title: "Fair Price<br/>Guarantee",
      link: "#",
    },
    {
      image: "/fertilizers.jpeg",
      title: "Fertilizers &<br/>Seeds",
      link: "#",
    },
    {
      image: "/farm-equipment.jpg",
      title: "Farm<br/>Equipments",
      link: "#",
    },
  ];

  return (
    <section
      className="agriox-marketplace font-agriox bg-cover bg-center px-2 pt-28 pb-12 lg:py-20"
      style={{
        backgroundImage: "url('/features.png')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="font-agriox mb-4 text-4xl font-bold text-[#334b35] lg:text-5xl">
            Marketplace
          </h2>
          <p className="text-lg text-[#687469]">
            Discover the best agricultural products and services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title.replace(/<br\/>/g, " ")}
                loading="lazy"
                className="h-64 w-full object-cover"
              />

              {/* Title Overlay */}
              <div className="absolute right-0 bottom-0 left-0 bg-[#334b35]/80 p-5 text-center transition-all duration-300 group-hover:bg-[#334b35]/90">
                <h3 className="text-xl leading-tight font-semibold text-white">
                  <a href={card.link} className="hover:text-[#f1cf69]">
                    {card.title.split("<br/>").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < card.title.split("<br/>").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </a>
                </h3>
              </div>

              {/* Arrow Button */}
              <a
                href={card.link}
                aria-label={`Learn more about ${card.title}`}
                className="absolute right-4 bottom-4 z-10 rounded-full bg-[#f1cf69] p-3 transition-colors hover:bg-[#6d8c54]"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
