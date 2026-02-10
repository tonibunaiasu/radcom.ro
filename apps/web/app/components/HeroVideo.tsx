"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  className?: string;
  src: string;
  poster?: string;
};

export const HeroVideo = ({ className, src, poster }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canAutoPlay, setCanAutoPlay] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [requestPlay, setRequestPlay] = useState(false);

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
    setCanAutoPlay(true);
    const idle = typeof window !== "undefined" ? (window as any).requestIdleCallback : undefined;
    if (idle) {
      idle(() => setShouldLoad(true));
    } else {
      setTimeout(() => setShouldLoad(true), 800);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onPause);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();
    if (!requestPlay && !canAutoPlay) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay failures (browser policies)
      });
    }
  }, [shouldLoad, requestPlay, canAutoPlay]);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) {
      setShouldLoad(true);
      setRequestPlay(true);
      return;
    }
    setShouldLoad(true);
    setRequestPlay(true);
  };

  return (
    <div className="hero-video-wrap">
      <video
        ref={videoRef}
        className={className}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
      />
      {!isPlaying && (
        <button
          className="hero-video-cta"
          type="button"
          onClick={handlePlay}
          aria-label="Play hero video"
        >
          {canAutoPlay ? "Play video" : "Play preview"}
        </button>
      )}
    </div>
  );
};
