import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { title: "Harvest Innovations", category: "Agriculture", img: "" },
  { title: "Urban Farming", category: "Agriculture", img: "" },
  { title: "Smart Irrigation", category: "Agriculture", img: "" },
  { title: "Greenhouse Tech", category: "Agriculture", img: "" },
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
          Explore Our Projects
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
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Placeholder Image with Gray/White Background */}
              <div className="flex h-[300px] w-full items-center justify-center bg-gradient-to-br from-gray-200 to-white">
                <span className="text-xl text-gray-400">{project.title}</span>
              </div>

              {/* Hover Overlay */}
              <div className="bg-opacity-0 group-hover:bg-opacity-5 absolute inset-0 flex items-center justify-center bg-green-500 transition duration-300">
                <div className="text-center text-gray-900 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">{project.category}</p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
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
