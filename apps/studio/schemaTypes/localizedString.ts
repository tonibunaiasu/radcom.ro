import { defineType, defineField } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized string",
  type: "object",
  fields: [
    defineField({ name: "ro", title: "Română", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" })
  ]
});
