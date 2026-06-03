import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { AIExperience } from "@/components/AIExperience";
import { CloudExperience } from "@/components/CloudExperience";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIExperience />
        <CloudExperience />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
