import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Bot, Cpu, Satellite, FileText, Landmark } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "AI Powered Digital Marketplace",
    description:
      "Our core marketplace enables real-time online auctions, connecting farmers with national buyers via a transparent, bid-driven portal. Backend quality checks ensure verified produce and trustworthy digital bidding.",
    icon: Bot,
  },
  {
    title: "Smart IoT Devices for Precision Farming",
    description:
      "We're piloting IoT sensor networks—soil moisture, ambient, and plant health monitors—that feed real-time field data into our AI analytics engine, enabling precision irrigation and nutrient management.",
    icon: Cpu,
  },
  {
    title: "Satellite & Weather Driven Insights",
    description:
      "Our platform integrates crop health indices and hyper-local weather forecasting. AI-generated alerts help predict yield, disease risks, and optimal harvest timing, aligning with modern agri-tech advancements.",
    icon: Satellite,
  },
  {
    title: "Contract Farming & Traceable Procurement",
    description:
      "We facilitate contract farming programs with FPOs and processors. Our platform offers smart contracts, traceability, and AI-driven logistics planning for reliable sourcing and transparent pricing.",
    icon: FileText,
  },
  {
    title: "AI Enabled Agri Financing",
    description:
      "Our embedded agrifinance engine leverages AI for credit scoring, analyzing farmer transaction history, yield forecasts, and IoT data to extend working capital, financing, and bridge loans at competitive rates.",
    icon: Landmark,
  },
];

const ProjectCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <div className="mb-3 inline-block">
          <img src="/agribid.png" alt="icon" className="h-20 w-48" />
        </div>
        <p className="text-sm tracking-wider text-green-600 uppercase">
          Recently completed work
        </p>
        <h2 className="mt-2 text-4xl font-bold text-gray-800">
          Explore Our Solutions
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-[350px] overflow-hidden rounded-xl shadow-lg"
            >
              {/* Background with Icon */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <project.icon className="h-24 w-24 text-gray-400 transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Hover Overlay with Slide-Up Effect */}
              <div className="absolute right-0 bottom-0 left-0 flex h-full translate-y-full transform-gpu flex-col justify-end bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 text-left transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
