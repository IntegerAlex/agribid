import { createFileRoute } from "@tanstack/react-router";
import OurTeam from "@/components/about/OurTeamV2";

export const Route = createFileRoute("/about/ourteam")({
  component: () => <OurTeam />,
});
