"use client";

export function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        w-12 sm:w-14 md:w-16
        h-12 sm:h-14 md:h-16
        flex items-center justify-center
        group
        rounded-full
        transition-transform
        hover:scale-105
        focus:outline-none
      "
    >
      {/* Ping effect */}
      <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50" />
      
      {/* Outer border */}
      <span className="absolute inset-0 rounded-full border border-white" />
      
      {/* Play icon */}
      <span className="relative z-10 text-white text-base sm:text-lg md:text-xl">
        ▶
      </span>
    </button>
  );
}