"use client";

import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  youtubeId?: string;
  videoSrc?: string;
}

export default function VideoModal({
  open,
  onClose,
  youtubeId,
  videoSrc,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        {youtubeId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}