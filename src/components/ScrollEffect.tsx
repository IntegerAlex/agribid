import React, { useState, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import VideoModal from "./VideoModal";
import VideoListModal from "./VideoListModal";

const ParallaxVideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideoListModal, setShowVideoListModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    "https://www.youtube.com/embed/tYOFF1d8ttw?autoplay=1",
  );
  const playButtonRef = useRef<HTMLAnchorElement>(null);

  const videos = [
    {
      title: "Female farmer from Darjeeling discovers a digital app..",
      url: "https://www.youtube.com/embed/tYOFF1d8ttw?autoplay=1",
    },
    {
      title: "Proud moment for AgriBid",
      url: "https://www.youtube.com/embed/F-h8mG-2hP8?autoplay=1",
    },
    {
      title: "Agribid KisanBiz show 2022",
      url: "https://www.youtube.com/embed/CZaV28g7vik?autoplay=1",
    },
  ];

  const handleOpenVideoListModal = () => {
    setShowVideoListModal(true);
  };

  const handleCloseVideoListModal = () => {
    setShowVideoListModal(false);
  };

  const handleVideoSelect = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setShowVideoListModal(false);
    setIsModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsModalOpen(false);
    playButtonRef.current?.focus();
  };

  return (
    <ParallaxProvider>
      <section className="relative min-h-[150vh] overflow-hidden">
        {/* Fixed Background Image - only for this section */}
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://pixydrops.com/agriox/assets/images/backgrounds/video-one-bg.jpg)",
          }}
        />

        {/* Moving Content Overlay */}
        <Parallax speed={15}>
          <div className="relative z-10 flex min-h-[150vh] items-center">
            <div className="container mx-auto px-6 text-white">
              <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
                {/* Left Content */}
                <div className="max-w-xl text-center lg:text-left">
                  <h2 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
                    Agriculture Matters to <br />
                    the Future of Development
                  </h2>
                  <a
                    href="#"
                    onClick={handleOpenVideoListModal}
                    className="inline-block rounded bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    Discover more
                  </a>
                </div>

                {/* Right Video Icon */}
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    {/* Animated Wave Rings - all same size as button */}
                    <div className="absolute h-20 w-20 animate-ping rounded-full border-4 border-white opacity-30"></div>
                    <div className="absolute h-20 w-20 animate-ping rounded-full border-4 border-white opacity-20 delay-300"></div>
                    <div className="absolute h-20 w-20 animate-ping rounded-full border-4 border-white opacity-10 delay-700"></div>

                    {/* Play Button */}
                    <a
                      href="#"
                      onClick={() => handleVideoSelect(videos[0].url)}
                      ref={playButtonRef}
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white transition hover:scale-105"
                    >
                      <svg
                        className="ml-1 h-12 w-12 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Watch the video
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseVideoModal}
        videoUrl={currentVideoUrl}
      />
      <VideoListModal
        isOpen={showVideoListModal}
        onClose={handleCloseVideoListModal}
        videos={videos}
        onVideoSelect={handleVideoSelect}
      />
    </ParallaxProvider>
  );
};

export default ParallaxVideoSection;
