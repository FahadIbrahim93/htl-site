import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/pages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hope Theory Labs" },
      {
        name: "description",
        content:
          "Forward-deployed engineering, custom web and mobile software, AI integration, enterprise systems, and managed engineering.",
      },
    ],
  }),
  component: ServicesPage,
});
