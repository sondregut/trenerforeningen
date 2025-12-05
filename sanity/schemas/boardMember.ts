import { defineField, defineType } from "sanity";

export default defineType({
  name: "boardMember",
  title: "Styremedlem",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rolle",
      type: "string",
      options: {
        list: [
          { title: "Leder", value: "leader" },
          { title: "Nestleder", value: "deputy" },
          { title: "Styremedlem", value: "member" },
          { title: "Aeresmedlem", value: "honorary" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-post",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Brukes for sortering (lavere tall vises forst)",
    }),
    defineField({
      name: "active",
      title: "Aktiv",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Rekkefølge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      role: "role",
      media: "image",
    },
    prepare({ title, role, media }) {
      const roleLabels: Record<string, string> = {
        leader: "Leder",
        deputy: "Nestleder",
        member: "Styremedlem",
        honorary: "Aeresmedlem",
      };
      return {
        title,
        subtitle: roleLabels[role] || role,
        media,
      };
    },
  },
});
