import { createFileRoute } from "@tanstack/react-router";
import KnowledgeCenter from "../components/KnowledgeCenter";

export const Route = createFileRoute("/knowledgecenter")({
  component: KnowledgeCenter,
});
