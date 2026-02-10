import React from 'react';
// Import your local image here. Place 'hero.JPG' in the 'src/assets' folder.
// If your file has a different name or extension, update this line.
import heroImg from '../assets/hero.JPG';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-10">
      <div className="md:w-1/2 space-y-6">
        <div className="flex space-x-4 mb-4">
          {/* Social Icons - replace with actual SVGs or Lucide icons later if needed */}
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">IG</div>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">TK</div>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">GH</div>
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">YT</div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Hi, I'm <br />
          <span className="text-white">Senal Anuraheesara</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis et harum dolorem sit minus illo nostrum? Tempore, nobis. Recusandae neque exercitationem voluptates tempore tempora sequi.
        </p>

        <div className="flex space-x-4 mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg">
            <span>Download CV</span>
          </button>

          <button className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        {/* Abstract Background Blur */}
        <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-b from-orange-400/20 to-transparent rounded-full absolute blur-3xl -z-10"></div>

        <div className="relative z-10">
          {/* 3D Character Image */}
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <img
              src={heroImg}
              alt="3D Avatar"
              className="w-full h-full object-cover rounded-full border-4 border-orange-500/50 shadow-[0_0_30px_rgba(255,165,0,0.3)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 right-0 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce delay-100 shadow-lg">
            <span className="text-2xl">Ai</span>
          </div>
          <div className="absolute bottom-10 left-0 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce delay-300 shadow-lg">
            <span className="text-2xl">Pr</span>
          </div>
          <div className="absolute top-1/2 -right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce delay-500 shadow-lg">
            <span className="text-2xl">Hi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
