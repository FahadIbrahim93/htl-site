import { createFileRoute } from "@tanstack/react-router";
import { ApproachPage } from "@/components/site/pages";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Hope Theory Labs" },
      {
        name: "description",
        content:
          "How Hope Theory Labs engages: discover, scope, prototype, deploy and improve. A website is optional, not a gate.",
      },
    ],
  }),
  component: ApproachPage,
});
