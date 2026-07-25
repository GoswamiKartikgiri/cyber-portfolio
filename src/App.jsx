import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ui/ScrollProgress";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;