import { createFileRoute } from "@tanstack/react-router";
import Awards from "@/components/events/Awards";
export const Route = createFileRoute("/events/awards")({
  component: () => <Awards />,
});
