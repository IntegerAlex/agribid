import { createFileRoute } from "@tanstack/react-router";
import FPOregistration from "@/components/forms/FPOregistration";
export const Route = createFileRoute("/partnerwithus/fpo")({
  component: () => <FPOregistration />,
});
