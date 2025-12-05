import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Fagstoff",
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
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Løp", value: "lop" },
          { title: "Hopp", value: "hopp" },
          { title: "Kast", value: "kast" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subcategory",
      title: "Underkategori",
      type: "string",
      description: "F.eks. Sprint, Hoydehopp, Diskos",
    }),
    defineField({
      name: "author",
      title: "Forfatter",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "resourceType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "pdf" },
          { title: "Presentasjon", value: "presentation" },
          { title: "Video", value: "video" },
          { title: "Artikkel", value: "article" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "Fil",
      type: "file",
      description: "Last opp PDF eller PowerPoint",
    }),
    defineField({
      name: "videoUrl",
      title: "Video-URL",
      type: "url",
      description: "YouTube eller Vimeo-lenke",
      hidden: ({ document }) => document?.resourceType !== "video",
    }),
    defineField({
      name: "content",
      title: "Innhold",
      type: "array",
      of: [{ type: "block" }],
      description: "For artikler - skriv innholdet her",
      hidden: ({ document }) => document?.resourceType !== "article",
    }),
    defineField({
      name: "published",
      title: "Publisert",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      type: "resourceType",
    },
    prepare({ title, category, type }) {
      return {
        title,
        subtitle: `${category} - ${type}`,
      };
    },
  },
});
