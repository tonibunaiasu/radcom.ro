"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  className?: string;
  src: string;
  poster?: string;
};

export const HeroVideo = ({ className, src, poster }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const connection = navigator.connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const saveData = Boolean(connection?.saveData);
    const effectiveType = String(connection?.effectiveType || "");
    const isSlowConnection = effectiveType === "slow-2g" || effectiveType === "2g";

    if (prefersReducedMotion || saveData || isSlowConnection) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay failures (browser policies)
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
};
