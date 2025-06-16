import { createFileRoute } from "@tanstack/react-router";
import PACSregistration from "@/components/forms/PACSregistration";

export const Route = createFileRoute("/partnerwithus/pacs")({
  component: () => <PACSregistration />,
});
