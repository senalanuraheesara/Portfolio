import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cloud, Megaphone, Sparkles } from "lucide-react";
import { cardElevated, cardHover, cn, lineRail, sectionBand, textEyebrow } from "../designTokens";

const experiences = [
  {
    id: "ms-champs",
    year: "2026",
    title: "Microsoft Student Champs Participant",
    subtitle: "Microsoft Student Ambassadors Sri Lanka",
    description:
      "Engaged with the Microsoft Student Champs program through hands-on workshops and community-focused learning focused on Azure, cloud fundamentals, and practical collaboration.",
    Icon: Cloud,
  },
  {
    id: "cursor-meetup",
    year: "2026",
    title: "Cursor AI Meetup Attendee",
    subtitle: "tech talk 360 (Colombo)",
    description:
      "Attended discussions and demos on AI-assisted development workflows, tooling, and best practices alongside peers in the Colombo tech community.",
    Icon: Sparkles,
  },
  {
    id: "ieee-publicity",
    year: "2026",
    title: "Publicity Team Member – IEEE IAS SLIIT",
    subtitle: "IEEE Industry Applications Society of SLIIT",
    description:
      "Publicity Team Member at IEEE IAS SLIIT, contributing to digital marketing and branding efforts by designing creative promotional materials and managing social media campaigns for large-scale events such as Path to Internship ’26.",
    Icon: Megaphone,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className={cn(
        "relative overflow-x-clip py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-24",
        sectionBand,
      )}
    >
      {/* Decorative glow only — avoid extra noise overlay (matches global App bg and removes seam vs Projects). */}
      <div className="pointer-events-none absolute top-24 right-[10%] w-72 h-72 rounded-full bg-orange-500/8 blur-3xl dark:bg-orange-500/12 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/8" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className={textEyebrow}>Experience</p>
          <h2 className="mt-2 text-balance text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Hands-on & community
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Practical learning through projects, events, and technical collaboration.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-10">
          <div className="relative hidden lg:block">
            <div className={cn('absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2', lineRail)} />
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-orange-500/80 via-orange-500/30 to-transparent"
                style={{ height: "100%", transformOrigin: "top" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </div>

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8 md:space-y-10"
          >
            {experiences.map((exp) => {
              const Icon = exp.Icon;
              return (
                <motion.div key={exp.id} variants={item} className="relative">
                  <div className="hidden lg:block absolute -left-[86px] top-10">
                    <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_0_6px_rgba(249,115,22,0.15)] dark:shadow-[0_0_0_6px_rgba(249,115,22,0.18)]" />
                  </div>

                  <div
                    className={cn(
                      'group max-lg:border-l-4 max-lg:border-l-orange-500/50 p-5 md:p-8',
                      cardElevated,
                      cardHover,
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100/90 bg-orange-50/70 dark:border-white/10 dark:bg-white/10">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold tracking-widest uppercase text-orange-500">
                          {exp.year}
                        </p>
                        <h3 className="mt-2 break-words text-lg font-bold leading-snug text-gray-900 sm:text-xl md:text-2xl dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                          {exp.subtitle}
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
