import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hope Theory Labs — AI engineering and custom software" },
      {
        name: "description",
        content:
          "Founder-led AI engineering and custom software in Dhaka. Forward-deployed engineering, web and mobile products, and AI integration. Your data. Connected. Your business. Smarter.",
      },
    ],
  }),
  component: HomePage,
});
