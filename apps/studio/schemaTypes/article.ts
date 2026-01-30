import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({ name: "title", type: "localizedString" }),
    defineField({ name: "slug", type: "slug", options: { source: "title.ro" } }),
    defineField({ name: "excerpt", type: "localizedString" }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "publishedAt", type: "datetime" })
  ]
});
