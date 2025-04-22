import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Header from "@/components/sections/Header";
import WorkExp from "@/components/sections/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <WorkExp />
      <Education />
      <Contact />
    </div>
  );
}
