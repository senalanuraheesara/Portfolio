import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left Column: Image & Star Background */}
                <div className="md:w-1/2 relative flex justify-center">
                    {/* Star Background (CSS/SVG) */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[500px] h-[500px] animate-spin-slow text-orange-500/20 fill-current">
                            <path transform="translate(100 100)" d="M0 -70 L20 -20 L70 -20 L30 10 L45 60 L0 30 L-45 60 L-30 10 L-70 -20 L-20 -20 Z" />
                        </svg>
                        {/* A more distinct star shape wrapper */}
                        <div className="absolute w-96 h-96 bg-orange-500 rotate-12 rounded-3xl opacity-20 blur-3xl"></div>
                    </div>

                    {/* Avatar Image */}
                    <div className="relative">
                        <img
                            src="https://avatar.iran.liara.run/public/girl?username=AboutMe"
                            alt="About Me Avatar"
                            className="w-64 h-64 md:w-80 md:h-80 object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                        />

                        {/* Floating Icons */}
                        <div className="absolute top-0 -left-8 p-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 animate-bounce delay-100">
                            <span className="text-2xl text-cyan-400">⚛️</span>
                        </div>
                        <div className="absolute bottom-10 -right-4 p-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 animate-bounce delay-300">
                            <span className="text-2xl text-yellow-400">JS</span>
                        </div>
                        <div className="absolute top-10 right-0 p-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 animate-bounce delay-500">
                            <span className="text-2xl text-purple-400">🎨</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:w-1/2 space-y-8 text-center md:text-left">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                        About Me
                    </h2>

                    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit impedita blanditiis temporibus nostrum nulla fugit consequuntur! Ullam earum perspiciatis sit ea, asperiores dolorum illum temporibus quidem? Iusto, officia mollitia!
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-orange-500">5+</h3>
                            <p className="text-gray-400 text-sm mt-1">Education</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-orange-500">10+</h3>
                            <p className="text-gray-400 text-sm mt-1">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-orange-500">100+</h3>
                            <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
                        </div>
                    </div>

                    <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,165,0,0.3)]">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;
