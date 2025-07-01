import React from "react";
import { CheckCircle } from "lucide-react";

const AboutTwo = () => {
  return (
    <section className="about-two relative py-16">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap items-center">
          {/* Start About Two Img Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__img-box clearfix relative">
              <div className="about-two__img-box-img1 mb-6">
                <div className="about-two__img-box-img1-inner">
                  <img
                    src="/about-v2-img1.webp"
                    alt="Screenshot of the AgriBid AI platform showcasing agricultural data analytics."
                    className="rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-two__img-box-img2 relative">
                <div className="about-two__img-box-img2-inner">
                  <img
                    src="/about-v2-img2.webp"
                    alt="A smiling farmer in a field holding a smartphone with the AgriBid app open."
                    className="rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-two__img-box-badge absolute -top-8 -right-4">
                <img
                  src="/about-v2-logo.webp"
                  alt="Official seal for AgriBid, indicating it is organic certified."
                  className="h-28 w-28 object-contain"
                />
              </div>
            </div>
          </div>
          {/* End About Two Img Box */}

          {/* Start About Two Content Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__content-box">
              <div className="sec-title mb-8 text-left">
                <span className="sec-title__tagline mb-2 block font-semibold tracking-wide text-yellow-600 uppercase">
                  India's Leading AI-Driven Digital Agriculture Platform
                </span>
                <h2 className="sec-title__title text-3xl leading-tight font-bold text-[#334b35]">
                  Revolutionizing Indian Agriculture with AI
                </h2>
              </div>
              <p className="about-two__content-box-text mb-6 text-gray-700">
                At Agribid, we are revolutionizing how Indian agriculture
                connects with markets by harnessing the power of AI and digital
                innovation. As a trusted agritech platform, we empower 1.2
                crore+ farmers across 18 states by offering:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>AI-powered mandi price forecasting</li>
                <li>Transparent online agri-auctions</li>
                <li>Smart input procurement</li>
                <li>Data-driven farm advisory services</li>
              </ul>
              <p className="about-two__content-box-text mb-8 text-gray-700">
                Our platform seamlessly connects FPOs, PACS, processors, and
                government agencies, creating a farm-to-fork digital ecosystem
                that improves profitability, market access, and decision-making
                for every stakeholder in the agri value chain.
              </p>

              <h3 className="mb-4 text-2xl font-bold text-[#334b35]">
                Why Farmers and FPOs Choose Agribid?
              </h3>
              <div className="about-two__content-box-list">
                <ul className="space-y-3">
                  {[
                    "AI meets grassroots – not just software, but on-ground execution with intelligent digital tools",
                    "Network strength – 3,000+ FPOs and 20,000+ PACS already digitized",
                    "Trusted by government – working with NCCF, Markfed, Tribal Boards & more",
                    "All-in-one platform – live mandi auctions, logistics, inputs, and financing",
                    "Decades of expertise – 50+ years of leadership in agriculture and trading",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="icon mt-1 text-green-600">
                        <CheckCircle size={20} />
                      </div>
                      <div className="text text-gray-700">{text}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 font-semibold text-gray-700 italic">
                Agribid's AI-first approach ensures fair pricing, real-time
                transparency, and smart decision-making for India's farmers. We
                don't just digitize agriculture—we empower it.
              </p>

              {/* Our Strengths Section Commented Out */}
              {/*
              <div className="about-two__progress mt-10 space-y-6">
                <h3
                  className="mb-4 text-2xl font-bold"
                  style={{ color: "#334b35" }}
                >
                  Our Strengths
                </h3>
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Foodgrain
                  </h4>
                  <div className="bar h-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bar-inner h-full bg-green-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Pulses
                  </h4>
                  <div className="bar h-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bar-inner h-full bg-yellow-500"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Cereals
                  </h4>
                  <div className="bar h-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bar-inner h-full bg-blue-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Vegetables
                  </h4>
                  <div className="bar h-4 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bar-inner h-full bg-red-500"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
          {/* End About Two Content Box */}
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
