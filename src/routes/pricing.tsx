import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/site/pages";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Hope Theory Labs" },
      {
        name: "description",
        content:
          "Custom engineering is quoted after discovery. Standard website packages remain Starter ৳10,000, Counter ৳25,000 and Showroom ৳45,000.",
      },
    ],
  }),
  component: PricingPage,
});
