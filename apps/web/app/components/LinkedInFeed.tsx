"use client";

import { useEffect, useRef, useState } from "react";

type LinkedInFeedProps = {
  locale: "en" | "ro";
};

export const LinkedInFeed = ({ locale }: LinkedInFeedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="linkedin-feed" ref={containerRef}>
      {isVisible ? (
        <iframe
          src="https://www.juicer.io/api/feeds/radcom-romania/iframe"
          title="RADCOM LinkedIn feed"
          width="100%"
          height="420"
          style={{ border: "0", display: "block" }}
          loading="lazy"
          scrolling="no"
        />
      ) : (
        <div className="linkedin-placeholder">
          <p className="eyebrow">
            {locale === "ro" ? "Actualizări LinkedIn" : "LinkedIn updates"}
          </p>
          <h3>{locale === "ro" ? "Se încarcă feed-ul..." : "Loading the feed..."}</h3>
          <p>
            {locale === "ro"
              ? "Conținutul LinkedIn se va încărca când ajungi aici."
              : "LinkedIn content will load when you reach this section."}
          </p>
        </div>
      )}
    </div>
  );
};
