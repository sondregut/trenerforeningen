import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Bildegalleri",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "date",
      title: "Dato",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 2,
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
            {
              name: "alt",
              title: "Alt-tekst",
              type: "string",
              description: "Viktig for tilgjengelighet",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
      title: "Dato",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "images.0",
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date,
        media,
      };
    },
  },
});
