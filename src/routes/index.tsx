import { createFileRoute } from "@tanstack/react-router";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import AboutTwo from "../components/AboutTwo";
import Partners from "../components/Partners";
import Projects from "../components/Projects";
// import MeetourTeam from "../components/MeetOurTeam";
import BlogSection from "../components/Blogs";
import ScrollEffect from "../components/ScrollEffect";
import FAQSection from "../components/FAQhome";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="flex w-full flex-col">
      <Carousel />
      <Features />
      <AboutTwo />
      <Projects />
      {/* <MeetourTeam /> */}
      <ScrollEffect />
      <BlogSection />
      <FAQSection />
      <Partners />
    </main>
  );
}
