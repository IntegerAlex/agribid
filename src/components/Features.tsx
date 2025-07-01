import React from "react";
import {
  Bot, // For AI-Powered Agri-Auctions
  Users, // For Smart Farmer Aggregation
  Truck, // For Intelligent Agri Procurement
  Wallet,
} from "lucide-react"; // For Embedded Agri-Fintech

const features = [
  {
    icon: <Bot size={40} />,
    title: "AI-Powered Agri-Auctions & Price Discovery",
    description:
      "AI-driven e-auctions for real-time price intelligence and fair value.",
  },
  {
    icon: <Users size={40} />,
    title: "Smart Farmer Aggregation & Digital Onboarding",
    description:
      "AI-based profiling and clustering for digital onboarding of agri stakeholders.",
  },
  {
    icon: <Truck size={40} />,
    title: "Intelligent Agri Procurement & Predictive Logistics",
    description:
      "Agritouch AI streamlines procurement with automated quality checks and optimized logistics.",
  },
  {
    icon: <Wallet size={40} />,
    title: "Embedded Agri-Fintech & Credit Scoring",
    description:
      "AI-backed credit engine provides instant working capital and scalable finance.",
  },
];

const FeaturesTwo = () => {
  return (
    <section className="relative overflow-hidden bg-[#f1cf69] py-20">
      <div
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url(/features.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">
          Our Core Features
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-lg text-gray-700">
          Agribid with Agritouch AI bridges the digital divide, ensuring fair
          prices, instant payments, and full transparency in agriculture.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-hover group relative overflow-hidden rounded-xl bg-white p-6 text-left shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div className="icon-color relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-200 text-green-800 transition-colors group-focus-within:text-white group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="relative z-10 mb-2 text-xl font-semibold text-gray-800 transition-colors group-focus-within:text-white group-hover:text-white">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm text-gray-600 transition-colors group-focus-within:text-white group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
