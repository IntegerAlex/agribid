import { createFileRoute } from "@tanstack/react-router";
import News from "@/components/events/News";

export const Route = createFileRoute("/events/news")({
  component: () => <News />,
});
