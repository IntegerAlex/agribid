import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CustomCSSProperties extends React.CSSProperties {
  "--aos-duration"?: string;
  "--aos-delay"?: string;
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is AgriBidAI?",
    answer:
      "AgriBidAI is a platform that connects farmers with buyers, leveraging AI for better pricing and market insights.",
  },
  {
    id: 2,
    question: "How does the bidding process work?",
    answer:
      "Farmers can list their produce, and buyers can place bids. Our AI helps in suggesting optimal bid prices, ensuring fair deals for both parties. Once a bid is accepted, the platform facilitates the transaction process.",
  },
  {
    id: 3,
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security measures to protect your data, including encryption, secure authentication (JWT), and regular security audits. Your privacy is our top priority.",
  },
  {
    id: 4,
    question: "What types of produce can I sell on AgriBidAI?",
    answer:
      "You can sell a wide variety of agricultural produce including grains, fruits, vegetables, dairy products, and livestock. Our platform is designed to cater to diverse farming needs.",
  },
  {
    id: 5,
    question: "How do I register as a farmer or buyer?",
    answer:
      "Registration is simple! Click on the 'Registration' link, choose your role (farmer or buyer), and fill in the required details. Our team will verify your account, and you'll be ready to go.",
  },
  {
    id: 6,
    question: "What are the fees for using AgriBidAI?",
    answer:
      "AgriBidAI operates on a transparent fee structure. For farmers, there's a small commission on successful sales. Buyers pay a minimal service fee. Detailed information on fees is available in our Terms and Conditions.",
  },
  {
    id: 7,
    question: "Can I track my orders and deliveries?",
    answer:
      "Absolutely! Our platform provides real-time tracking for all orders and deliveries. You'll receive updates at every stage, from listing to delivery to completion.",
  },
  {
    id: 8,
    question: "How does AI help in pricing and insights?",
    answer:
      "Our AI algorithms analyze vast amounts of market data, including historical prices, demand-supply trends, weather patterns, and regional specifics, to provide optimal pricing suggestions and market insights. This helps you make informed decisions.",
  },
];

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-32 pb-16"
      style={
        {
          "--agriox-font": "'DM Sans', sans-serif",
          "--agriox-font-2": "'Averia Sans Libre', cursive",
          "--agriox-primary": "#334b35",
          "--agriox-secondary": "#6d8c54",
          "--agriox-color-1": "#687469",
        } as CustomCSSProperties
      }
    >
      <div
        className="animate-fade-in-up-slow absolute inset-0 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(var(--agriox-primary-rgb), 0.1) 0%, transparent 70%), radial-gradient(ellipse at top, rgba(var(--agriox-secondary-rgb), 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>
      <div
        className="animate-pulse-slow absolute inset-0 z-0 opacity-50"
        style={{ background: "url(/images/grain-pattern.png) repeat" }}
        aria-hidden="true"
      ></div>

      <div className="animate-fade-in-up-slow relative z-10 h-full w-full rounded-none bg-white/80 p-4 shadow-none backdrop-blur-sm">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-[var(--agriox-primary)]">
          Frequently Asked Questions
        </h1>
        <div className="mx-auto max-w-4xl space-y-6 px-6 lg:px-8">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fade-in-up relative transform overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-xl transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--agriox-primary)]/5 to-[var(--agriox-secondary)]/5 opacity-0 transition-opacity duration-300"></div>
              <button
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleExpanded(item.id)}
              >
                <h2 className="text-lg font-semibold text-[var(--agriox-secondary)]">
                  {item.question}
                </h2>
                {expandedFAQ === item.id ? (
                  <ChevronUp className="h-5 w-5 text-[var(--agriox-primary)]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[var(--agriox-primary)]" />
                )}
              </button>
              {expandedFAQ === item.id && (
                <div className="px-6 pb-6">
                  <p className="mt-2 text-base text-[var(--agriox-color-1)]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
