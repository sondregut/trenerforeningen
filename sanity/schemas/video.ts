import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
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
      name: "presenter",
      title: "Foreleser",
      type: "string",
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
          { title: "Mental trening", value: "mental" },
          { title: "Generelt", value: "general" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "videoUrl",
      title: "Video-URL",
      type: "url",
      description: "YouTube eller Vimeo-lenke",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Miniatyrbilde",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "duration",
      title: "Varighet",
      type: "string",
      description: "F.eks. '45:30'",
    }),
    defineField({
      name: "seminarYear",
      title: "Fra seminar",
      type: "number",
      description: "Ar seminaret ble holdt",
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
      presenter: "presenter",
      media: "thumbnail",
    },
    prepare({ title, presenter, media }) {
      return {
        title,
        subtitle: presenter,
        media,
      };
    },
  },
});
