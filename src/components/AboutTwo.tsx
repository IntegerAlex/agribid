import React from "react";

const AboutTwo = () => {
  return (
    <section className="about-two relative">
      <div className="about-two__bg absolute inset-0 -z-10">
        {/* <img
          src="assets/images/backgrounds/about-v2-bg.webp"
          alt="Background"
          className="h-full w-full object-cover"
          loading="lazy"
        /> */}
      </div>
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          {/* Start About Two Img Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__img-box clearfix relative">
              <div className="about-two__img-box__shape"></div>
              <div className="about-two__img-box-img1 mb-6">
                <div className="about-two__img-box-img1-inner">
                  <img
                    src="/about-v2-img1.webp"
                    alt="About Image 1"
                    className="rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-two__img-box-img2 relative">
                <div className="about-two__img-box-img2__shape"></div>
                <div className="logo mb-4">
                  <img
                    src="assets/images/resources/about-v2-logo.webp"
                    alt="Logo"
                    className="mx-auto w-32"
                    loading="lazy"
                  />
                </div>
                <div className="about-two__img-box-img2-inner">
                  <img
                    src="/about-v2-img2.webp"
                    alt="About Image 2"
                    className="rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Organic Badge */}
              <div className="about-two__img-box-badge absolute">
                <img
                  src="/about-v2-logo.webp"
                  alt="Organic Badge"
                  className="h-28 w-28 object-contain"
                />
              </div>
              {/* Decorative shapes */}
              <div className="about-two__img-box-shape1 absolute bg-green-700"></div>
              <div className="about-two__img-box-shape2 absolute bg-yellow-400"></div>
            </div>
          </div>
          {/* End About Two Img Box */}

          {/* Start About Two Content Box */}
          <div className="col-xl-6 col-lg-6 w-full p-4 lg:w-1/2">
            <div className="about-two__content-box">
              <div className="sec-title mb-8 text-center lg:text-left">
                <div className="icon mb-3 inline-block">
                  <img
                    src="assets/images/resources/sec-title-icon1.webp"
                    alt="Section Icon"
                    className="h-10 w-10"
                    loading="lazy"
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
