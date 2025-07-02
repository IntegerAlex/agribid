import { createFileRoute } from "@tanstack/react-router";
import Marketplace from "../components/Marketplace";

export const Route = createFileRoute("/marketplace")({
  component: Marketplace,
});
