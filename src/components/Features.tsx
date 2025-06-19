import React from "react";
import {
  FaSeedling,
  FaUsers,
  FaTruck,
  FaCertificate,
  FaPhoneAlt,
  FaMoneyBillWave,
  FaTractor,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSeedling />,
    title: "Quality",
    description: "Quality produce for a healthier lifestyle.",
  },
  {
    icon: <FaUsers />,
    title: "Training",
    description: "Training for sustainable farming.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Financing",
    description: "Financing options for your farming needs.",
  },
  {
    icon: <FaTractor />,
    title: "Soil Testing",
    description: "Soil testing to ensure the best possible growth.",
  },
];

const FeaturesTwo = () => {
  return (
    <section className="relative overflow-hidden bg-[#f1cf69] py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
          Cultivate success with Agribid's services built for the agri-value
          chain.
        </p>
        <p className="mb-14 text-base text-gray-600 italic">
          From crop to click – pioneering digital reach for farmers.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-hover group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300"
            >
              <div className="icon-color relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-200 text-2xl text-green-800 transition-colors group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="relative z-10 mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-white">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm text-gray-600 transition-colors group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 flex flex-col items-center gap-6 rounded-xl bg-white p-8 shadow-md sm:flex-row sm:justify-between sm:gap-12"> */}
        {/* <div className="flex items-center gap-4">
             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
              <FaPhoneAlt />
            </div> 
            <img
              src="assets/images/resources/features-v2-call-box-img.jpg"
              alt="Farmers"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div> */}
        {/* <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-green-700">
              We Grow with Love
            </p>
            <h2 className="text-2xl font-bold text-gray-800">
              Our farmers grow the healthiest products
            </h2>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default FeaturesTwo;
