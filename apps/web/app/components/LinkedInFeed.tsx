type LinkedInFeedProps = {
  locale: "en" | "ro";
};

export const LinkedInFeed = ({ locale }: LinkedInFeedProps) => {
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
