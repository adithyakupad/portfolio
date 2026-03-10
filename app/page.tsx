import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import QuickProfile from "@/components/sections/QuickProfile";
import Lanes from "@/components/sections/Lanes";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Reflection from "@/components/sections/Reflection";
import Strengths from "@/components/sections/Strengths";
import Personal from "@/components/sections/Personal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickProfile />
      <Lanes />
      <Research />
      <Projects />
      <Experience />
      <Awards />
      <Reflection />
      <Strengths />
      <Personal />
      <Contact />
    </main>
  );
}
