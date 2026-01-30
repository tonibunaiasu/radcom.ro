import { defineType, defineField } from "sanity";

export const job = defineType({
  name: "job",
  title: "Jobs",
  type: "document",
  fields: [
    defineField({ name: "title", type: "localizedString" }),
    defineField({ name: "department", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string" }),
    defineField({ name: "description", type: "localizedString" })
  ]
});
