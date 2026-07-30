"use client";

export function BackgroundVideo() {
  return (
    <video
      className="absolute inset-0 z-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/videos/website main video.mp4" type="video/mp4" />
      Your browser does not support the background video.
    </video>
  );
}