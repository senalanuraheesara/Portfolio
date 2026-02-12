import React from 'react';

const skills = [
    {
        id: 1,
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        level: 95,
        color: 'bg-orange-500',
    },
    {
        id: 2,
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        level: 90,
        color: 'bg-blue-500',
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        level: 85,
        color: 'bg-yellow-400',
    },
    {
        id: 4,
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        level: 80,
        color: 'bg-cyan-400',
    },
    {
        id: 5,
        name: 'Graphic Design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', // Using Photoshop as proxy for Graphic Design
        level: 85,
        color: 'bg-pink-500',
    },
    {
        id: 6,
        name: 'SQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        level: 90,
        color: 'bg-blue-600',
    },
    {
        id: 7,
        name: 'Machine Learning',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
        level: 75,
        color: 'bg-orange-600',
    },
    {
        id: 8,
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        level: 85,
        color: 'bg-blue-400',
    },
    {
        id: 9,
        name: 'Data Visualization',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg', // Using D3 as proxy for Data Viz
        level: 80,
        color: 'bg-orange-400',
    },
    {
        id: 10,
        name: 'Deep Learning',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', // Using PyTorch for Deep Learning
        level: 75,
        color: 'bg-red-600',
    },
    {
        id: 11,
        name: 'Probability',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', // Using LaTeX as a math proxy or similar
        level: 85,
        color: 'bg-indigo-500',
    },
    {
        id: 12,
        name: 'Problem Solving',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg', // Using TheAlgorithms logo
        level: 95,
        color: 'bg-green-500',
    },
];

const Skills = () => {
    return (
        <section className="min-h-screen bg-white dark:bg-gray-900 py-10 md:py-20 px-6 transition-colors duration-300" id="skills">
            {/* Background Decorative Elements */}
            {/* <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -z-10"></div> */}
            {/* <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div> */}

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my technical expertise and proficiency in various technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-gray-50 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,165,0,0.1)] shadow-md dark:shadow-none"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors shadow-sm dark:shadow-none border border-gray-100 dark:border-transparent">
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{skill.level}%</span>
                                </div>
                                {/* Progress Bar Container */}
                                <div className="w-full bg-gray-200 dark:bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                                    {/* Animated Progress Bar */}
                                    <div
                                        className={`h-full rounded-full ${skill.color} shadow-lg shadow-${skill.color.replace('bg-', '')}/50 relative overflow-hidden group-hover:animate-pulse`}
                                        style={{ width: `${skill.level}%` }}
                                    >
                                        {/* Shine Effect */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:animate-shimmer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
