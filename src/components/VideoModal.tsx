import React, { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative mx-4 w-full max-w-5xl transform rounded-xl bg-white p-4 shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-2 -right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-2xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:bg-red-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div
          className="relative overflow-hidden rounded-lg"
          style={{ paddingBottom: "56.25%" }}
        >
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute inset-0 h-full w-full"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
