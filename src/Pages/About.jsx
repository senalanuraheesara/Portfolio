import React from 'react';
import { Code2, Database, Layout, Brain } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cardElevated, cardHover, cn, sectionBand, textEyebrow } from '../designTokens';

const cardClass = cn(
  'group p-6 backdrop-blur-sm',
  cardElevated,
  cardHover,
  'hover:-translate-y-[10px]',
  'hover:shadow-[0_16px_36px_-12px_rgba(249,115,22,0.2)]',
  'dark:hover:shadow-[0_14px_38px_-16px_rgba(249,115,22,0.12)]',
);

const cards = [
  {
    Icon: Brain,
    title: 'Data Science & Analytics',
    body: 'Extracting insights from data using Python, Pandas, and visualization tools like Tableau.',
  },
  {
    Icon: Code2,
    title: 'Machine Learning',
    body: 'Building predictive models and intelligent systems using Scikit-learn and TensorFlow.',
  },
  {
    Icon: Layout,
    title: 'Web Development',
    body: 'Developing responsive full-stack applications with React, Node.js, and Spring Boot.',
  },
  {
    Icon: Database,
    title: 'Database Management',
    body: 'Designing and optimizing relational databases using MySQL and SQL for efficient data storage.',
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className={cn(
        'flex min-h-screen items-center justify-center overflow-x-clip py-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-20',
        sectionBand,
      )}
    >
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <motion.div
          className="min-w-0 space-y-6 sm:space-y-8 md:w-1/2"
          initial={reduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className={textEyebrow}>About Me</h3>

          <h2 className="text-balance text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl">
            Passionate about <span className="text-orange-500">Data Science</span>, <br />
            <span className="text-orange-500">Software Engineering</span> <br />&{' '}
            <span className="text-orange-500">Web Development</span>
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
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
        </motion.div>

        <motion.div
          className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:w-1/2"
          variants={stagger}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {cards.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
            >
              <div className={cardClass}>
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 transition-colors group-hover:bg-orange-200 dark:bg-orange-500/15 dark:group-hover:bg-orange-500/25"
                  whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0], scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon className="h-6 w-6 text-orange-600 dark:text-orange-500" />
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
