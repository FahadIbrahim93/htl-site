import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hope Theory Labs" },
      {
        name: "description",
        content:
          "Hope Theory Labs is co-founded by Fahad Ibrahim and Tamim Abir, a founder-led engineering studio in Dhaka.",
      },
    ],
  }),
  component: AboutPage,
});
