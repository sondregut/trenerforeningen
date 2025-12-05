import { defineField, defineType } from "sanity";

export default defineType({
  name: "fagnytt",
  title: "Fagnytt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "F.eks. 'Fagnytt 1/2024'",
    }),
    defineField({
      name: "year",
      title: "Ar",
      type: "number",
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: "issue",
      title: "Utgave",
      type: "number",
      description: "Utgavenummer (1, 2, etc.)",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF-fil",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Forsidebilde",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
      description: "Kort beskrivelse av innholdet i denne utgaven",
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
      title: "Ar og utgave",
      name: "yearDesc",
      by: [
        { field: "year", direction: "desc" },
        { field: "issue", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      year: "year",
      media: "coverImage",
    },
    prepare({ title, year, media }) {
      return {
        title,
        subtitle: `${year}`,
        media,
      };
    },
  },
});
