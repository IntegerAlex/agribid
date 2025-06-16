import { createFileRoute } from "@tanstack/react-router";
import DSAregistration from "@/components/forms/DSAregistration";

export const Route = createFileRoute("/partnerwithus/dsa")({
  component: () => <DSAregistration />,
});
