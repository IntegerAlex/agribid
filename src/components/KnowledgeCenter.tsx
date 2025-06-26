import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CustomCSSProperties extends React.CSSProperties {
  "--aos-duration"?: string;
  "--aos-delay"?: string;
  "--agriox-font"?: string;
  "--agriox-font-2"?: string;
  "--agriox-primary"?: string;
  "--agriox-secondary"?: string;
  "--agriox-color-1"?: string;
}

const KnowledgeCenter = () => {
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
          Knowledge Center
        </h1>

        <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Videos Section */}
            <div
              className="rounded-lg bg-white p-6 shadow-xl"
              data-aos="fade-right"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[var(--agriox-secondary)]">
                Video Tutorials
              </h2>
              <div className="space-y-4">
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <p className="text-gray-500">Placeholder for Video 1</p>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <p className="text-gray-500">Placeholder for Video 2</p>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <p className="text-gray-500">Placeholder for Video 3</p>
                </div>
              </div>
            </div>

            {/* Q&A Section */}
            <div
              className="rounded-lg bg-white p-6 shadow-xl"
              data-aos="fade-left"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[var(--agriox-secondary)]">
                Questions & Answers
              </h2>
              <div className="space-y-4">
                <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                  <h3 className="font-semibold text-[var(--agriox-primary)]">
                    What payment methods are supported?
                  </h3>
                  <p className="text-gray-700">
                    We support various payment methods including bank transfers
                    and major credit cards.
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                  <h3 className="font-semibold text-[var(--agriox-primary)]">
                    How do I update my profile information?
                  </h3>
                  <p className="text-gray-700">
                    You can update your profile information in the 'Settings'
                    section of your dashboard.
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                  <h3 className="font-semibold text-[var(--agriox-primary)]">
                    Is there a mobile app available?
                  </h3>
                  <p className="text-gray-700">
                    Yes, our mobile app is available for both iOS and Android
                    devices on their respective app stores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Chat Section */}
          <div
            className="rounded-lg bg-white p-6 text-center shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[var(--agriox-primary)]">
              Need More Help?
            </h2>
            <p className="mb-6 text-gray-700">
              Our support team is ready to assist you. Reach out via live chat
              or email.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="rounded-full bg-[var(--agriox-primary)] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[var(--agriox-secondary)]">
                Live Chat
              </button>
              <button className="rounded-full bg-gray-200 px-6 py-3 font-semibold text-[var(--agriox-primary)] transition duration-300 hover:bg-gray-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;
