import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", type: "localizedString" }),
    defineField({ name: "subtitle", type: "localizedString" }),
    defineField({ name: "slug", type: "slug", options: { source: "title.ro" } }),
    defineField({ name: "description", type: "localizedString" }),
    defineField({ name: "features", type: "array", of: [{ type: "localizedString" }] })
  ]
});
