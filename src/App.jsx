import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // Enforcing dark mode class on body/html for Tailwind dark mode to work if configured that way
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen text-white'
          : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-900'
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
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
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
