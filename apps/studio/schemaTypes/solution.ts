import { defineType, defineField } from "sanity";

export const solution = defineType({
  name: "solution",
  title: "Solutions",
  type: "document",
  fields: [
    defineField({ name: "title", type: "localizedString" }),
    defineField({ name: "slug", type: "slug", options: { source: "title.ro" } }),
    defineField({ name: "description", type: "localizedString" }),
    defineField({
      name: "benefits",
      type: "array",
      of: [{ type: "localizedString" }]
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true }
    })
  ]
});
