import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({ name: "title", type: "localizedString" }),
    defineField({ name: "slug", type: "slug", options: { source: "title.ro" } }),
    defineField({ name: "summary", type: "localizedString" }),
    defineField({ name: "body", type: "localizedString" })
  ]
});
