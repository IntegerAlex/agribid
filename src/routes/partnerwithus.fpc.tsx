import { createFileRoute } from "@tanstack/react-router";
import FPCregistration from "@/components/forms/FPCregistration";

export const Route = createFileRoute("/partnerwithus/fpc")({
  component: () => <FPCregistration />,
});
