"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: "01",
    question: "Agriculture Food Why is it important ?",
    answer:
      "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false,
  },
  {
    id: "02",
    question: "Bennings Appetite This Disposed ?",
    answer:
      "Organic address a range of simply application infrastructure of of available, but the majority have suffered.",
    isOpen: true,
  },
  {
    id: "03",
    question: "Reprehenderit in voluptate ?",
    answer:
      "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false,
  },
  {
    id: "04",
    question: "Refreshing to get such a touch ?",
    answer:
      "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false,
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false },
      ),
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-[80px]">
      {/* Decorative leaf elements */}
      <div className="absolute -bottom-16 -left-16 z-0 h-48 w-48 opacity-30">
        <img src="/images/about-2-shape-2.png" alt="Decorative leaf" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* FAQ Content */}
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl text-[#44a05b]">🌿</span>
                <p className="text-lg font-bold text-[#44a05b]">FAQ US</p>
              </div>
              <h2 className="text-3xl leading-tight font-bold text-[#122f2a] md:text-4xl">
                We Are Any Question Faq
                <br />
                Please Organic Food
              </h2>
              <p className="mt-4 text-lg leading-[1.75] text-[#636363]">
                Organic address a range of simply application and infrastructure
                this of passages of available, but the majority have suffered
                poor alteration in some form.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg border transition-all duration-300 ${
                    faq.isOpen
                      ? "border-[#44a05b] bg-[#f6f4ec] shadow-md"
                      : "border-[#dddddd] bg-[#f6f4ec]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xl font-bold ${
                          faq.isOpen ? "text-[#44a05b]" : "text-gray-400"
                        }`}
                      >
                        {faq.id}.
                      </span>
                      <h3
                        className={`text-lg font-semibold ${
                          faq.isOpen ? "text-[#122f2a]" : "text-gray-700"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`transform transition-transform duration-300 ${
                        faq.isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        className={`h-5 w-5 ${
                          faq.isOpen ? "text-[#44a05b]" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      faq.isOpen
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-3">
                      <div className="pl-6">
                        <p className="leading-[1.75] text-[#636363]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex h-full items-center justify-center">
            <div className="relative max-h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/faq-home.jpg"
                alt="Farmer with organic vegetables"
                className="h-full w-full object-cover"
                style={{ maxHeight: "450px" }}
              />

              {/* Floating question mark icon */}
              <div className="absolute top-4 right-4 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#44a05b] shadow-lg">
                <span className="text-2xl font-bold text-white">?</span>
              </div>

              {/* FAQ badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-lg bg-white p-3 shadow-xl">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">FAQ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
