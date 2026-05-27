import React, { useCallback, useId, useState } from 'react';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cardHover, cardProject, chipMuted, cn, sectionBand } from '../designTokens';
import supportSystemImg from '../assets/Screenshot 2026-02-11 222316.png';
import taxiBookingImg from '../assets/Screenshot 2026-02-12 001906.png';
import diabetesPredictionImg from '../assets/AIML Project.png';
import shanartsHeroImg from '../assets/ChatGPT Image May 27, 2026, 12_39_25 PM.png';
import avuruduNakathPosterImg from '../assets/ChatGPT Image May 27, 2026, 12_06_36 PM.png';
import doggyPetCareImg from '../assets/ChatGPT Image May 27, 2026, 12_17_42 AM (1).png';

const DESCRIPTION_PREVIEW_CHARS = 220;

const projects = [
  {
    id: 5,
    title: 'ShanArts — Printing management',
    description:
      'A predictive machine learning-driven printing operations platform for Shan Art Advertising. The core features a custom-trained XGBoost classification model served via a Python FastAPI backend to predict shop order delay risks, computing confidence levels and probabilities. These delay predictions dynamically optimize scheduling workflows, automatically triggering administrative alerts and Ollama AI-powered notification updates to clients for high-risk orders. The full-stack ecosystem is completed with a React (CRA) frontend and a Node.js/Express/MongoDB API.',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'FastAPI', 'XGBoost', 'Ollama'],
    image: shanartsHeroImg,
    liveLink: 'https://shan-arts.vercel.app',
    demoLabel: 'Live app',
    githubLink: 'https://github.com/senalanuraheesara/ShanArts',
    imageAlt: 'Shan Arts Printing Management — promotional poster with application UI',
    imageObjectPositionClass: 'object-center',
    imageAspectRatioClass: 'aspect-[4/5]',
    imageBgClass: 'bg-zinc-950 dark:bg-zinc-900',
  },
  {
    id: 4,
    title: 'Avurudu Nakath',
    description:
      'An offline-first, cross-platform mobile application built using Expo and React Native to track Sinhala & Hindu New Year auspicious times (Nakath) for 2026. Featuring support for Sinhala, English, and Tamil, the app includes a dynamic countdown timer, a themed active-ritual hero banner with motion animations, and local notifications to remind users of upcoming events. It also incorporates a custom-built digital compass for direction-based rituals. The architecture is completely serverless, storing the timetable locally in structured TypeScript and managing user preferences on-device using AsyncStorage.',
    tech: ['Expo', 'React Native', 'TypeScript', 'i18n', 'AsyncStorage'],
    image: avuruduNakathPosterImg,
    liveLink: 'https://expo.dev/accounts/senalanuraheesara/projects/avurudu-nakath',
    demoLabel: 'Expo hub',
    githubLink: 'https://github.com/senalanuraheesara/Avurudu-Nakath',
    imageAlt: 'Avurudu Nakath app — promotional poster with phone UI and QR code',
    imageObjectPositionClass: 'object-center',
    imageAspectRatioClass: 'aspect-[4/5]',
    imageBgClass: 'bg-[#fbf4e5] dark:bg-[#1f1a14]',
  },
  {
    id: 6,
    title: 'Smart Pet Care Management System',
    description:
      'A full-stack pet care ecosystem comprising an Expo (React Native) mobile client and a Node.js/Express API backed by MongoDB. It enables pet owners to manage pet profiles, request boarding and grooming bookings, and track appointments, vaccinations, diet schedules, and medications. Administrators benefit from a dedicated dashboard to manage vet schedules, booking approvals, and service catalogs. Features role-based JWT auth and a custom OTP-based signup flow.',
    tech: ['Expo', 'React Native', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: doggyPetCareImg,
    liveLink: '#',
    githubLink: 'https://github.com/senalanuraheesara/PetCare-Management-System',
    imageAlt: 'Doggy — Smart Pet Care Mobile App presentation poster',
    imageObjectPositionClass: 'object-center',
    imageAspectRatioClass: 'aspect-[4/5]',
    imageBgClass: 'bg-[#e6f8f5] dark:bg-[#0c1816]',
  },
  {
    id: 1,
    title: 'Web-Based Customer Support System',
    description:
      'A full-stack customer support platform built using Spring Boot, Java, and MS SQL to streamline ticket management and real-time communication. The system features role-based authentication, live chat, FAQ management, and feedback tracking. Designed with MVC architecture and Agile methodology, it improves response efficiency and service quality. Includes complete CRUD operations and an admin analytics dashboard.',
    tech: ['Java', 'Spring Boot', 'Tailwind', 'MySQL'],
    image: supportSystemImg,
    liveLink: '#',
    githubLink: 'https://github.com/senalanuraheesara/Customer-Care-Support-System',
  },
  {
    id: 2,
    title: 'Diabetes Prediction Using Machine Learning',
    description:
      'Developed a machine learning-based diabetes risk prediction system using healthcare data. Implemented multiple classification models including Decision Tree, Random Forest, SVM, and XGBoost, with SMOTE for class imbalance handling. Achieved up to 99% accuracy, selecting a tuned Decision Tree model for its high recall and interpretability in healthcare applications.',
    tech: ['Random Forest', 'Neural Net (MLP)', 'Decision Tree', 'SVM', 'Logistic Regression', 'XGBoost'],
    image: diabetesPredictionImg,
    liveLink: '#',
    githubLink: 'https://github.com/senalanuraheesara/Diabetes-Prediction-Using-Machine-Learning',
  },
  {
    id: 3,
    title: 'Taxi Booking Platform',
    description:
      'A Java-based web application built using JSP and Servlets that enables passengers to book rides, drivers to accept requests, and admins to manage operations. The system applies core OOP principles and uses Queue (FIFO) and Bubble Sort for ride handling and driver ranking. Data is managed through file handling (read/write operations) instead of a database, demonstrating practical CRUD implementation in Java.',
    tech: ['Maven', 'Java', 'Tailwind'],
    image: taxiBookingImg,
    liveLink: '#',
    githubLink: 'https://github.com/senalanuraheesara/Taxibooking-platform',
  },
];

function hasLiveDemo(link) {
  return typeof link === 'string' && link !== '#' && /^https?:\/\//i.test(link.trim());
}

function ProjectCard({ project, index }) {
  const bodyId = useId();
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const liveOk = hasLiveDemo(project.liveLink);
  const longDescription = project.description.length > DESCRIPTION_PREVIEW_CHARS;

  const onToggleDesc = useCallback(() => {
    setExpanded((v) => !v);
  }, []);

  const linkCls =
    'inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-cream dark:focus-visible:ring-offset-portfolio-dark';

  return (
    <motion.article
      className={cn(
        'group flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:shadow-xl',
        cardProject,
        cardHover,
      )}
      aria-labelledby={`${bodyId}-title`}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -8, transition: { type: 'spring', stiffness: 380, damping: 26 } }}
    >
      <div className={cn("relative shrink-0 overflow-hidden", project.imageAspectRatioClass ?? "h-44 sm:h-52", project.imageBgClass ?? "bg-orange-50 dark:bg-portfolio-dark")}>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-gray-950/65 via-transparent to-transparent opacity-95 dark:from-portfolio-dark/90" />
        {liveOk && (
          <span className="absolute right-3 top-3 z-20 rounded-full bg-orange-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/30 backdrop-blur-sm">
            Demo available
          </span>
        )}
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            className={`h-full w-full ${project.imageFitClass ?? 'object-cover'} transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${project.imageObjectPositionClass ?? 'object-top'}`}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.imageGradientClass ?? 'from-orange-500 to-gray-900'}`}
            aria-hidden
          >
            <span className="select-none px-6 text-center text-xl font-bold tracking-tight text-white/95 drop-shadow-md sm:text-2xl">
              {project.title.replace(/—.*/, '').trim()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 id={`${bodyId}-title`} className="mb-3 text-xl font-bold leading-snug text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech, i) => (
            <span
              key={`${project.id}-${i}-${tech}`}
                          className={cn(chipMuted, 'px-2.5 py-1')}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative flex-1">
          <p
            id={`${bodyId}-desc`}
            className={`text-sm leading-relaxed text-gray-600 dark:text-gray-400 ${longDescription && !expanded ? 'line-clamp-5' : ''}`}
          >
            {project.description}
          </p>
          {longDescription && (
            <button
              type="button"
              onClick={onToggleDesc}
              aria-expanded={expanded}
              aria-controls={`${bodyId}-desc`}
              className="mt-2 inline-flex min-h-9 items-center gap-1 rounded-lg px-1 text-xs font-semibold text-orange-600 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 dark:text-orange-400 dark:hover:text-orange-300"
            >
              {expanded ? 'Show less' : 'Show more'}
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden />
            </button>
          )}
        </div>

        <div className={`mt-6 grid gap-3 ${liveOk ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub (opens new tab)`}
            className={`${linkCls} border border-orange-100/90 bg-orange-50/75 text-gray-900 hover:bg-orange-100/90 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10`}
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            Source code
          </a>
          {liveOk && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.demoLabel ?? 'Live demo'}: ${project.title} (opens new tab)`}
              className={`${linkCls} bg-orange-500 text-white shadow-md shadow-orange-500/25 hover:bg-orange-600`}
            >
              {project.demoLabel ?? 'Live demo'}
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <section
      className={cn(
        'min-h-screen overflow-x-clip py-12 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-20',
        sectionBand,
      )}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto min-w-0 max-w-7xl">
        <motion.header
          className="mb-12 text-center md:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="projects-heading"
            className="mb-3 px-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Highlights from coursework and personal repos. Use{' '}
            <strong className="font-semibold text-gray-800 dark:text-gray-200">Show more</strong> for the full blurb — then open{' '}
            <strong className="font-semibold text-gray-800 dark:text-gray-200">Source code</strong> on GitHub or a{' '}
            <strong className="font-semibold text-gray-800 dark:text-gray-200">live link</strong> when you see{' '}
            <span className="whitespace-nowrap rounded-md bg-orange-500/15 px-1.5 py-0.5 text-sm font-semibold text-orange-700 dark:bg-orange-500/20 dark:text-orange-400">
              Demo available
            </span>
            .
          </p>
        </motion.header>

        {/* Featured Projects - Vertical Posters */}
        <div className="mx-auto mb-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="border-t border-gray-150 pt-16 dark:border-white/5">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + featuredProjects.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
