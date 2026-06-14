import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Assistant from "@/components/Assistant";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Assistant />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
