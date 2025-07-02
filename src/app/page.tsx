import Hero from "@/components/Hero";
import TechStackTicker from "@/components/TechStackTicker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Hero />
      
      {/* Tech Stack Section - Added after Hero */}
      <TechStackTicker />
      
      <section id="about" className="py-16">
        <About />
      </section>
      
      <section id="skills" className="py-20">
        <Skills />
      </section>
      
      <section id="experience" className="py-20">
        <Experience />
      </section>
      
      <section id="education" className="py-16">
        <Education />
      </section>
      
      <section id="projects" className="py-16">
        <Projects />
      </section>
      
      <section id="blog" className="py-20">
        <Blog />
      </section>
      
      <section id="contact" className="py-16">
        <Contact />
      </section>
      
    </main>
  );
}
