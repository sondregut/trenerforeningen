import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "trenerforeningen",
  title: "Friidrettens Trenerforening",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Innhold")
          .items([
            S.listItem()
              .title("Kunngjoringer")
              .child(S.documentTypeList("announcement").title("Kunngjoringer")),
            S.divider(),
            S.listItem()
              .title("Trenerseminarer")
              .child(S.documentTypeList("seminar").title("Trenerseminarer")),
            S.listItem()
              .title("Fagnytt")
              .child(S.documentTypeList("fagnytt").title("Fagnytt")),
            S.listItem()
              .title("Fagstoff")
              .child(S.documentTypeList("resource").title("Fagstoff")),
            S.listItem()
              .title("Videoer")
              .child(S.documentTypeList("video").title("Videoer")),
            S.divider(),
            S.listItem()
              .title("Bildegallerier")
              .child(S.documentTypeList("gallery").title("Bildegallerier")),
            S.listItem()
              .title("Styremedlemmer")
              .child(S.documentTypeList("boardMember").title("Styremedlemmer")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
