import React from 'react';
import { Mail, Github, Linkedin, Code2, Database, Brain } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import heroImg from '../assets/hero.JPG';
import cvFile from '../assets/CV_Senal Anuraheesara.pdf';
import { cn, panelFloat } from '../designTokens';

const fullName = 'Senal Anuraheesara';

const hiImClass =
  'block text-base font-bold text-gray-900 sm:text-lg dark:text-white';

const nameGradientClass =
  'hero-gradient-shift bg-gradient-to-r from-orange-500 to-gray-900 bg-clip-text text-transparent dark:from-orange-400 dark:via-orange-500 dark:to-white';

const spring = { type: 'spring', stiffness: 380, damping: 28 };

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 flex min-h-[100dvh] w-full max-w-[100vw] flex-col items-center justify-between gap-4 overflow-x-clip pb-[max(2.75rem,env(safe-area-inset-bottom,0px))] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-14 font-sans sm:pb-24 sm:pt-20 md:min-h-screen md:flex-row md:gap-0 md:px-12 md:pb-10 md:pt-10 lg:px-20">
      <motion.div
        className="w-full min-w-0 space-y-6 text-center md:w-1/2 md:max-w-[50%] md:text-left"
        variants={stagger}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="mb-4 flex flex-wrap justify-center gap-3 md:justify-start md:gap-3"
        >
          {[
            {
              href: 'mailto:senalanuraheesara@gmail.com',
              label: 'Email',
              className:
                'rounded-lg bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600',
              icon: <Mail size={20} />,
            },
            {
              href: 'https://github.com/senalanuraheesara',
              label: 'GitHub',
              external: true,
              className:
                'rounded-lg bg-gray-800 text-white shadow-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
              icon: <Github size={20} />,
            },
            {
              href: 'https://www.linkedin.com/in/senal-anuraheesara',
              label: 'LinkedIn',
              external: true,
              className:
                'rounded-lg bg-[#0A66C2] text-white shadow-lg shadow-blue-900/30 hover:bg-[#095195]',
              icon: <Linkedin size={20} />,
            },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              {...(s.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={s.label}
              className={`flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center transition-colors ${s.className}`}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.08 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={spring}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.h1 variants={fadeUp} className="mb-6 space-y-1 break-words text-balance">
          <span className={hiImClass}>Hi, I&apos;m</span>
          <motion.span
            className={`block max-w-full text-[clamp(1.75rem,5.5vw+0.85rem,3.75rem)] font-bold leading-[1.12] tracking-tight sm:text-[clamp(2rem,6vw+1rem,3.75rem)] md:text-6xl md:leading-[1.08] lg:text-7xl ${nameGradientClass}`}
            initial={reduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {fullName}
          </motion.span>
          <motion.span
            className="mx-auto mt-3 block h-1 w-16 max-w-full origin-center rounded-full bg-gradient-to-r from-transparent via-orange-500/85 to-transparent md:mx-0 md:origin-left"
            aria-hidden
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:mx-0"
        >
          An undergraduate pursuing a BSc (Hons) in Information Technology specializing in Data Science at SLIIT. Driven by a passion for data analysis, machine learning, and software engineering. Eager to build scalable applications that uncover actionable insights and contribute to innovative data-driven solutions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex w-full flex-col flex-wrap gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <motion.a
            href={cvFile}
            download="CV_Senal_Anuraheesara.pdf"
            className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/35 transition-colors hover:bg-orange-600 sm:w-auto"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={spring}
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full border border-orange-500 bg-transparent px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50 dark:text-white dark:hover:bg-orange-500/15 sm:w-auto"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={spring}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-6 flex w-full min-w-0 justify-center px-1 pb-2 sm:mt-12 sm:px-2 md:mt-0 md:w-1/2 md:max-w-[50%] md:pb-0"
        initial={reduceMotion ? false : { opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative isolate mx-auto h-[min(16.5rem,76vw)] w-[min(16.5rem,76vw)] max-sm:scale-[0.96] sm:h-72 sm:w-72 sm:scale-100 md:h-96 md:w-96">
          <div className="animate-orb-breathe absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/35 via-purple-600/25 to-orange-400/20 blur-3xl motion-reduce:animate-none dark:from-orange-500/45 dark:via-purple-600/35 dark:to-orange-600/25" />

          <motion.div
            className="absolute inset-4 z-10 overflow-hidden rounded-full bg-gray-900 shadow-[0_0_42px_-4px_rgba(249,115,22,0.52)] ring-4 ring-orange-500 motion-safe:animate-ring-glow dark:shadow-[0_0_52px_-6px_rgba(249,115,22,0.48)]"
            initial={reduceMotion ? false : { scale: 0.86, rotate: -4 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.15 }}
          >
            <motion.img
              src={heroImg}
              alt="Senal Anuraheesara"
              className="h-full w-full object-cover"
              initial={reduceMotion ? false : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className={cn(
              panelFloat,
              'animate-float-chip-1 motion-reduce:animate-none absolute right-0 top-0 z-20 p-3 max-[360px]:right-1 max-[360px]:top-1 max-[360px]:scale-90 max-[360px]:p-2',
            )}
            initial={reduceMotion ? false : { opacity: 0, y: -12, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.35 }}
          >
            <Code2 className="h-6 w-6 text-orange-500" aria-hidden />
          </motion.div>
          <motion.div
            className={cn(
              panelFloat,
              'animate-float-chip-2 motion-reduce:animate-none absolute bottom-8 left-0 z-20 p-3 max-[360px]:bottom-6 max-[360px]:left-1 max-[360px]:scale-90 max-[360px]:p-2',
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 14, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.5 }}
          >
            <Database className="h-6 w-6 text-blue-500 dark:text-blue-400" aria-hidden />
          </motion.div>
          <motion.div
            className={cn(
              panelFloat,
              'animate-float-chip-3 motion-reduce:animate-none absolute -right-1 top-1/2 z-20 p-2.5 max-[360px]:-right-0.5 max-[360px]:scale-90 max-[360px]:p-2 sm:-right-4 sm:p-3',
            )}
            initial={reduceMotion ? false : { opacity: 0, x: 16, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.65 }}
          >
            <Brain className="h-6 w-6 text-purple-500 dark:text-purple-400" aria-hidden />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
