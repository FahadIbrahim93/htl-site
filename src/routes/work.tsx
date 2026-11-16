import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/site/pages";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Hope Theory Labs" },
      {
        name: "description",
        content:
          "Labelled work: Rollers Republic is a concept, EMBERFALL is a shipped browser game, and the studio site is internal.",
      },
    ],
  }),
  component: WorkPage,
});
