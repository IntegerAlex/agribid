import React from "react";

interface VideoItem {
  title: string;
  url: string;
}

interface VideoListModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: VideoItem[];
  onVideoSelect: (videoUrl: string) => void;
}

const VideoListModal: React.FC<VideoListModalProps> = ({
  isOpen,
  onClose,
  videos,
  onVideoSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div
        className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Select a Video
        </h2>
        <div className="space-y-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-md border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
              onClick={() => onVideoSelect(video.url)}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
        <button
          className="mt-8 rounded-md bg-red-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoListModal;
