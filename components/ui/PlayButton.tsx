"use client";

export function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-16 h-16 flex items-center justify-center group"
    >
      <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75" />
      <span className="absolute inset-0 rounded-full border border-white" />
      <span className="relative z-10 text-white text-lg">▶</span>
    </button>
  );
}