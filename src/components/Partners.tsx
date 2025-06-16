import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanyLogos = () => {
  return (
    <section
      className="company-logos"
      style={{ padding: "60px 0", backgroundColor: "#fff" }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 20 },
            375: { slidesPerView: 2, spaceBetween: 20 },
            575: { slidesPerView: 3, spaceBetween: 20 },
            767: { slidesPerView: 4, spaceBetween: 30 },
            991: { slidesPerView: 5, spaceBetween: 40 },
            1199: { slidesPerView: 5, spaceBetween: 50 },
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  width: "100%",
                  height: "100px", // Increased height
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <span style={{ color: "#bbb", fontSize: "16px" }}>
                  Logo {i + 1}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyLogos;
