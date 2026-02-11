import React from 'react';
import { Code2, Database, Layout, Brain } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left Column: Text Content */}
                <div className="md:w-1/2 space-y-8" data-aos="fade-right">
                    <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                        About Me
                    </h3>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Passionate about <span className="text-orange-500">Data Science</span>, <br />
                        <span className="text-orange-500">Software Engineering</span> <br />
                        & <span className="text-orange-500">Web Development</span>
                    </h2>

                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I’m Senal Anuraheesara, a second-year undergraduate at SLIIT specializing in Data Science. My academic journey has provided me with a strong foundation in statistics, programming, and data analysis, allowing me to approach complex problems with analytical precision and creative thinking. I am passionate about leveraging data to drive smarter decisions and build intelligent solutions.
                        </p>
                        <p>
                            I enjoy transforming raw data into meaningful insights through exploratory data analysis, data visualization, and machine learning using Python. From uncovering hidden patterns within complex datasets to developing predictive models, I am deeply interested in data-driven decision-making and intelligent system development that creates real-world impact.
                        </p>
                        <p>
                            In addition to my data science expertise, I have hands-on experience in full-stack web development with technologies such as React, Node.js, Spring Boot, MySQL, HTML, CSS, and JavaScript. I enjoy building scalable, user-focused applications that integrate data intelligence into practical software solutions, continuously striving to learn, innovate, and contribute to impactful projects at the intersection of data science and software engineering.
                        </p>
                    </div>
                </div>

                {/* Right Column: Feature Grid */}
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
                    {/* Card 1: Data Science & Analytics */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                            <Brain className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Data Science & Analytics</h3>
                        <p className="text-gray-400 text-sm">
                            Extracting insights from data using Python, Pandas, and visualization tools like Tableau.
                        </p>
                    </div>

                    {/* Card 2: Machine Learning */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                            <Code2 className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
                        <p className="text-gray-400 text-sm">
                            Building predictive models and intelligent systems using Scikit-learn and TensorFlow.
                        </p>
                    </div>

                    {/* Card 3: Web Development */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                            <Layout className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                        <p className="text-gray-400 text-sm">
                            Developing responsive full-stack applications with React, Node.js, and Spring Boot.
                        </p>
                    </div>

                    {/* Card 4: Database Management */}
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                            <Database className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Database Management</h3>
                        <p className="text-gray-400 text-sm">
                            Designing and optimizing relational databases using MySQL and SQL for efficient data storage.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
