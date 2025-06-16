import { createFileRoute } from "@tanstack/react-router";
import OurTeam from "../components/about/OurTeam";
export const Route = createFileRoute("/about/ourteam-legacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <OurTeam />
    </div>
  );
}
