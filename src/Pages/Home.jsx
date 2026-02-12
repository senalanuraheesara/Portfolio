import React from 'react';
import { Mail, Github, Linkedin, Code2, Database, Brain } from 'lucide-react';
// Import your local image here. Place 'hero.JPG' in the 'src/assets' folder.
// If your file has a different name or extension, update this line.
import heroImg from '../assets/hero.JPG';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 md:py-10">
      <div className="md:w-1/2 space-y-6" data-aos="fade-right" data-aos-duration="1000">
        <div className="flex space-x-4 mb-4">
          {/* Social Icons */}
          <a
            href="mailto:senalanuraheesara@gmail.com"
            className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/senalanuraheesara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-200 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-700 dark:text-white hover:scale-110 transition-transform shadow-lg border border-gray-300 dark:border-white/10"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/senal-anuraheesara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:to-white">Senal Anuraheesara</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed">
          An undergraduate pursuing a BSc (Hons) in Information Technology specializing in Data Science at SLIIT. Driven by a passion for data analysis, machine learning, and software engineering. Eager to build scalable applications that uncover actionable insights and contribute to innovative data-driven solutions.
        </p>

        <div className="flex space-x-4 mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg">
            <span>Download CV</span>
          </button>

          <a href="#contact" className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 relative flex justify-center mt-12 md:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
          <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full border-4 border-orange-500/20 z-10 overflow-hidden">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 right-0 p-3 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/20 animate-bounce delay-100 shadow-lg" data-aos="zoom-in" data-aos-delay="600">
            <Code2 className="text-orange-500 w-6 h-6" />
          </div>
          <div className="absolute bottom-10 left-0 p-3 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/20 animate-bounce delay-300 shadow-lg" data-aos="zoom-in" data-aos-delay="800">
            <Database className="text-blue-500 w-6 h-6" />
          </div>
          <div className="absolute top-1/2 -right-4 p-3 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/20 animate-bounce delay-500 shadow-lg" data-aos="zoom-in" data-aos-delay="1000">
            <Brain className="text-purple-500 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
