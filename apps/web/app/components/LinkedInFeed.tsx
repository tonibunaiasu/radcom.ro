"use client";

import { useState } from "react";

type LinkedInFeedProps = {
  locale: "en" | "ro";
};

const copy = {
  en: {
    button: "Load LinkedIn updates",
    note: "Loads an external feed from Juicer."
  },
  ro: {
    button: "Încarcă noutățile LinkedIn",
    note: "Încarcă un feed extern din Juicer."
  }
} as const;

export const LinkedInFeed = ({ locale }: LinkedInFeedProps) => {
  const [loaded, setLoaded] = useState(false);
  const t = copy[locale] || copy.en;

  if (!loaded) {
    return (
      <div className="linkedin-placeholder">
        <p className="section-lead">{t.note}</p>
        <button className="primary" type="button" onClick={() => setLoaded(true)}>
          {t.button}
        </button>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.juicer.io/api/feeds/radcom-romania/iframe"
      title="RADCOM LinkedIn feed"
      width="100%"
      height="420"
      style={{ border: "0", display: "block" }}
      loading="lazy"
      scrolling="no"
    />
  );
};
