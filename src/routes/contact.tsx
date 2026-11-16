import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hope Theory Labs" },
      {
        name: "description",
        content:
          "Discuss a project with Hope Theory Labs. The form opens WhatsApp or email and does not store the enquiry.",
      },
    ],
  }),
  component: ContactPage,
});
