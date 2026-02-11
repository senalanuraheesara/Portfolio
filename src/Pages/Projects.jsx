import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import supportSystemImg from '../assets/Screenshot 2026-02-11 222316.png';
import taxiBookingImg from '../assets/Screenshot 2026-02-12 001906.png';

const projects = [
    {
        id: 1,
        title: 'Web-Based Customer Support System',
        description: 'A full-stack customer support platform built using Spring Boot, Java, and MS SQL to streamline ticket management and real-time communication. The system features role-based authentication, live chat, FAQ management, and feedback tracking. Designed with MVC architecture and Agile methodology, it improves response efficiency and service quality. Includes complete CRUD operations and an admin analytics dashboard.',
        tech: ['java', 'spring-boot', 'Tailwind', 'MySQL'],
        image: supportSystemImg,
        liveLink: '#',
        githubLink: 'https://github.com/senalanuraheesara/Customer-Care-Support-System'
    },
    {
        id: 2,
        title: 'Diabetes Prediction Using Machine Learning',
        description: 'Developed a machine learning-based diabetes risk prediction system using healthcare data. Implemented multiple classification models including Decision Tree, Random Forest, SVM, and XGBoost, with SMOTE for class imbalance handling. Achieved up to 99% accuracy, selecting a tuned Decision Tree model for its high recall and interpretability in healthcare applications.',
        tech: ['Random Forest', 'Neural Network(MLP)', 'Decision Tree ', 'Support Vector Machine', 'Logistic Regression', 'XGBoost'],
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 3,
        title: 'Taxi Booking Platform',
        description: 'A Java-based web application built using JSP and Servlets that enables passengers to book rides, drivers to accept requests, and admins to manage operations. The system applies core OOP principles and uses Queue (FIFO) and Bubble Sort for ride handling and driver ranking. Data is managed through file handling (read/write operations) instead of a database, demonstrating practical CRUD implementation in Java.',
        tech: ['Maven', 'Java', 'Tailwind'],
        image: taxiBookingImg,
        liveLink: '#',
        githubLink: 'https://github.com/senalanuraheesara/Taxibooking-platform'
    },

];

const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 relative transition-colors duration-300" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-20 flex gap-4">
                                    <a href={project.githubLink} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-orange-500 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.liveLink} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-orange-500 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.githubLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium border border-gray-200 dark:border-transparent"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium shadow-lg shadow-orange-500/20"
                                    >
                                        <ExternalLink size={18} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
