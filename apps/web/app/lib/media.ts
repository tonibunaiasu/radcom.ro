export function getMediaURL(media: any, fallback = "") {
  if (!media) return fallback;
  if (typeof media === "string") return media;
  if (typeof media?.url === "string") return media.url;
  if (typeof media?.sizes?.card?.url === "string") return media.sizes.card.url;
  if (typeof media?.sizes?.thumbnail?.url === "string") return media.sizes.thumbnail.url;
  return fallback;
}
