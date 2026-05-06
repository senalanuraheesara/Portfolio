import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cardElevated, cardHover, cn, sectionBand } from '../designTokens';

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
        color: 'bg-amber-400',
    },
    {
        id: 4,
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        level: 80,
        color: 'bg-violet-500',
    },
    {
        id: 5,
        name: 'Graphic Design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
        level: 85,
        color: 'bg-purple-500',
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
        color: 'bg-sky-500',
    },
    {
        id: 9,
        name: 'Data Visualization',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg',
        level: 80,
        color: 'bg-amber-500',
    },
    {
        id: 10,
        name: 'Deep Learning',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
        level: 75,
        color: 'bg-rose-600',
    },
    {
        id: 11,
        name: 'Probability',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg',
        level: 85,
        color: 'bg-indigo-500',
    },
    {
        id: 12,
        name: 'Problem Solving',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg',
        level: 95,
        color: 'bg-orange-700',
    },
];

const gridStagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.065, delayChildren: 0.05 },
    },
};

const cardReveal = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const Skills = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section
            className={cn(
                'min-h-screen overflow-x-clip py-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-20',
                sectionBand,
            )}
            id="skills"
        >
            <div className="mx-auto min-w-0 max-w-7xl">
                <motion.div
                    className="mb-16 text-center"
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="mb-4 px-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                        My Skills
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                        A showcase of my technical expertise and proficiency in various technologies.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    variants={gridStagger}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.08 }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={cardReveal}
                            whileHover={
                                reduceMotion
                                    ? undefined
                                    : {
                                          y: -8,
                                          transition: { type: 'spring', stiffness: 420, damping: 22 },
                                      }
                            }
                            className={cn(
                                'group min-w-0 p-5 transition-colors duration-300 sm:p-6',
                                cardElevated,
                                cardHover,
                                'hover:shadow-[0_12px_32px_-10px_rgba(249,115,22,0.15)]',
                                'dark:hover:shadow-[0_12px_36px_-14px_rgba(249,115,22,0.1)]',
                            )}
                        >
                            <div className="mb-6 flex min-w-0 items-center gap-3 sm:gap-4">
                                <motion.div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100/90 bg-orange-50/70 p-2 shadow-sm transition-colors group-hover:bg-orange-50 sm:h-14 sm:w-14 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:group-hover:bg-white/10"
                                    whileHover={reduceMotion ? undefined : { rotate: 6, scale: 1.05 }}
                                >
                                    <img src={skill.icon} alt="" className="h-full w-full object-contain" />
                                </motion.div>
                                <h3 className="break-words text-lg font-bold tracking-wide text-gray-900 dark:text-white sm:text-xl">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{skill.level}%</span>
                                </div>
                                <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700/40">
                                    <motion.div
                                        className={`relative h-full overflow-hidden rounded-full shadow-sm shadow-orange-500/15 ${skill.color}`}
                                        initial={reduceMotion ? false : { scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.22, 1, 0.36, 1],
                                            delay: 0.06,
                                        }}
                                        style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 motion-reduce:hidden transform -translate-x-full group-hover:animate-shimmer" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
