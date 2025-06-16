import React, { useState } from "react";

const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 ${className}`}
      style={{ minHeight: "150px" }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-8 w-8 animate-spin text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`h-auto w-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </div>
  );
};

const AboutTwo = () => {
  return (
    <section className="about-two relative">
      <div className="about-two__bg absolute inset-0 -z-10">
        <LazyImage
          src="assets/images/backgrounds/about-v2-bg.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          {/* Start About Two Img Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__img-box clearfix relative">
              <div className="about-two__img-box__shape"></div>
              <div className="about-two__img-box-img1 mb-6">
                <div className="about-two__img-box-img1-inner">
                  <LazyImage
                    src="assets/images/about/about-v2-img1.jpg"
                    alt="About Image 1"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="about-two__img-box-img2 relative">
                <div className="about-two__img-box-img2__shape"></div>
                <div className="logo mb-4">
                  <LazyImage
                    src="assets/images/resources/about-v2-logo.png"
                    alt="Logo"
                    className="mx-auto w-32"
                  />
                </div>
                <div className="about-two__img-box-img2-inner">
                  <LazyImage
                    src="assets/images/about/about-v2-img2.jpg"
                    alt="About Image 2"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End About Two Img Box */}

          {/* Start About Two Content Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__content-box">
              <div className="sec-title mb-8 text-center lg:text-left">
                <div className="icon mb-3 inline-block">
                  <LazyImage
                    src="assets/images/resources/sec-title-icon1.png"
                    alt="Section Icon"
                    className="h-10 w-10"
                  />
                </div>
                <span className="sec-title__tagline mb-2 block font-semibold tracking-wide text-yellow-500 uppercase">
                  get to know about us
                </span>
                <h2
                  className="sec-title__title text-3xl leading-tight font-bold"
                  style={{ color: "#334b35" }}
                >
                  We're Leader in Agriculture <br /> Market
                </h2>
              </div>
              <p className="about-two__content-box-text mb-8 text-gray-700">
                There are many variations of passages available but the majority
                have suffered alteration in some form.
              </p>
              <div className="about-two__content-box-list">
                <div className="row -mx-4 flex flex-wrap">
                  <div className="col-xl-6 col-lg-6 col-md-6 w-full px-4 md:w-1/2">
                    <ul className="space-y-4">
                      {[
                        "Lorem is not random text",
                        "Evolved over the years",
                        "Generator on the Internet",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="icon mt-1"
                            style={{ color: "#6d8c54" }}
                          >
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="text text-gray-700">{text}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 w-full px-4 md:w-1/2">
                    <ul className="space-y-4">
                      {[
                        "If you are going to use",
                        "Making this the first true",
                        "Over 50 years of experience",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="icon mt-1"
                            style={{ color: "#6d8c54" }}
                          >
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="text text-gray-700">{text}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-two__progress mt-10 space-y-6">
                {/* Progress 1 */}
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Agriculture
                  </h4>
                  <div
                    className="bar h-4 overflow-hidden rounded-full"
                    style={{ backgroundColor: "#6d8c54" }}
                  >
                    <div
                      className="bar-inner h-full text-center text-white"
                      style={{ width: "78%", backgroundColor: "#f1cf69" }}
                    >
                      <span className="count-text block font-semibold text-gray-900">
                        78%
                      </span>
                    </div>
                  </div>
                </div>
                {/* Progress 2 */}
                <div className="about-two__progress-single">
                  <h4
                    className="about-two__progress-title mb-2 text-lg font-semibold"
                    style={{ color: "#334b35" }}
                  >
                    Organic
                  </h4>
                  <div
                    className="bar h-4 overflow-hidden rounded-full"
                    style={{ backgroundColor: "#6d8c54" }}
                  >
                    <div
                      className="bar-inner h-full text-center text-white"
                      style={{ width: "67%", backgroundColor: "#f1cf69" }}
                    >
                      <span className="count-text block font-semibold text-gray-900">
                        67%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-two__author mt-12 text-center lg:text-left">
                <h2 style={{ color: "#334b35" }} className="text-2xl font-bold">
                  Mike Hardson{" "}
                  <span className="block text-base font-semibold text-yellow-500">
                    CEO Agriox
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* End About Two Content Box */}
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
