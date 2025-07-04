import { createFileRoute } from "@tanstack/react-router";
import AuctionListing from "../components/AuctionListing";

export const Route = createFileRoute("/auction")({
  component: AuctionListing,
});
