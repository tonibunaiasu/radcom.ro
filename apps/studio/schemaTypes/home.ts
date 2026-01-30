import { defineType, defineField } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "title", type: "localizedString" }),
        defineField({ name: "subtitle", type: "localizedString" }),
        defineField({ name: "ctaPrimary", type: "localizedString" }),
        defineField({ name: "ctaSecondary", type: "localizedString" })
      ]
    }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "localizedString" }
          ]
        }
      ]
    }),
    defineField({
      name: "industries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "localizedString" },
            { name: "desc", type: "localizedString" }
          ]
        }
      ]
    }),
    defineField({
      name: "infrastructure",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "localizedString" },
            { name: "desc", type: "localizedString" }
          ]
        }
      ]
    }),
    defineField({
      name: "advantages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "localizedString" },
            { name: "desc", type: "localizedString" }
          ]
        }
      ]
    }),
    defineField({
      name: "partners",
      type: "object",
      fields: [
        defineField({ name: "title", type: "localizedString" }),
        defineField({ name: "subtitle", type: "localizedString" })
      ]
    })
  ]
});
