import { defineField, defineType } from "sanity";

export default defineType({
  name: "seminar",
  title: "Trenerseminar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "F.eks. 'Trenerseminar 2026'",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Ar",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Startdato",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "Sluttdato",
      type: "date",
    }),
    defineField({
      name: "location",
      title: "Sted",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "time", title: "Tid", type: "string" },
            { name: "title", title: "Tittel", type: "string" },
            { name: "presenter", title: "Foreleser", type: "string" },
            { name: "description", title: "Beskrivelse", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "highlights",
      title: "Hoydepunkter",
      type: "array",
      of: [{ type: "string" }],
      description: "Viktige punkter fra seminaret",
    }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Bildetekst",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "registrationOpen",
      title: "Pamelding apen",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "registrationUrl",
      title: "Pameldingslenke",
      type: "url",
    }),
    defineField({
      name: "published",
      title: "Publisert",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Ar",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      year: "year",
    },
    prepare({ title, year }) {
      return {
        title,
        subtitle: `${year}`,
      };
    },
  },
});
