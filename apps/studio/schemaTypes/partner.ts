import { defineType, defineField } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "website", type: "url" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "order", type: "number" }),
    defineField({ name: "description", type: "localizedString" }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true }
    })
  ]
});
