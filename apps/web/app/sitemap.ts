import type { MetadataRoute } from "next";
import { articlesContent } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || "https://dezign.institute";
  const locales = ["en", "ro"];
  const staticPaths = [
    "",
    "compania",
    "compania/istoric",
    "compania/viziune",
    "compania/misiune",
    "compania/valori",
    "compania/echipa",
    "compania/certificari",
    "servicii",
    "servicii/ifleet",
    "servicii/optifare",
    "servicii/exact",
    "articole",
    "cariere",
    "contact",
    "studii-de-caz",
    "premii",
    "recomandari",
    "politica-cookie",
    "politica-confidentialitate"
  ];

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      const url = path ? `${baseUrl}/${locale}/${path}` : `${baseUrl}/${locale}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7
      });
    });
  });

  const articleSlugs = articlesContent.map((article) => article.slug).filter(Boolean);
  locales.forEach((locale) => {
    articleSlugs.forEach((slug) => {
      entries.push({
        url: `${baseUrl}/${locale}/articole/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6
      });
    });
  });

  return entries;
}
