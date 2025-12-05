import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Kunngjoring",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "link",
      title: "Lenke",
      type: "string",
      description: "Intern lenke til mer informasjon (f.eks. /trenerseminar)",
    }),
    defineField({
      name: "highlight",
      title: "Fremhevet",
      type: "boolean",
      description: "Vis som fremhevet kunngjoring",
      initialValue: false,
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
      date: "date",
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date,
      };
    },
  },
});
