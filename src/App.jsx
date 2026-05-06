import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 48,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(id);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        darkMode
          ? 'relative w-full min-h-[100dvh] overflow-x-clip bg-portfolio-dark text-white'
          : 'relative w-full min-h-[100dvh] overflow-x-clip bg-gradient-to-br from-orange-50/80 via-portfolio-cream to-amber-50/65 text-gray-900'
      }
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden"
        aria-hidden
      >
        <div className="animate-aurora-1 absolute -left-[20%] top-[-25%] h-[62vmin] w-[62vmin] rounded-full bg-orange-400/30 blur-[100px] dark:bg-orange-500/22" />
        <div className="animate-aurora-2 absolute -right-[28%] bottom-[-20%] h-[72vmin] w-[72vmin] rounded-full bg-purple-500/26 blur-[120px] dark:bg-purple-500/18" />
        <div className="animate-aurora-1 absolute left-1/2 top-[40%] h-[40vmin] w-[48vmin] -translate-x-1/2 rounded-full bg-amber-300/22 blur-[90px] [animation-duration:31s] dark:bg-orange-600/14" />
      </div>

      <div
        className={`pointer-events-none fixed inset-0 z-0 bg-noise transition-opacity duration-500 dark:opacity-[0.35] ${
          darkMode ? '' : 'opacity-[0.18]'
        }`}
        aria-hidden
      />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative z-[1] pb-[max(env(safe-area-inset-bottom,0px),1rem)] pt-[max(5rem,calc(env(safe-area-inset-top,0px)+4.75rem))] sm:pt-24 sm:pb-10">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
