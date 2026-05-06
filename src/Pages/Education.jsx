import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { cardElevated, cardHover, cn, lineRail, sectionBand, textEyebrow } from "../designTokens";

const education = [
  {
    id: "sliit",
    period: "2024 — Present",
    title:
      "BSc (Hons) in Information Technology — Specializing in Data Science",
    institute:
      "Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka",
    description:
      "Building a strong foundation in data science, software engineering, and modern technologies through academic coursework and practical projects.",
  },
  {
    id: "al",
    period: "2023 (2024)",
    title: "G.C.E. Advanced Level — Physical Science",
    institute: "Bandaranayake College, Gampaha",
    description: "Physical Science Stream | 2C’s & 1S",
  },
  {
    id: "ol",
    period: "2020 (2021)",
    title: "G.C.E. Ordinary Level",
    institute: "Bandaranayake College, Gampaha",
    description: "7A’s & 2B’s",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className={cn(
        "relative overflow-x-clip py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-24",
        sectionBand,
      )}
    >
      {/* Decorative glow — no duplicate noise (App already provides grain). */}
      <div className="pointer-events-none absolute top-28 left-[8%] w-72 h-72 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-500/10 -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-[8%] -z-10 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-orange-600/10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className={textEyebrow}>Education</p>
          <h2 className="mt-2 text-balance text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            My Academic Journey
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            A snapshot of my education path and the milestones that shaped my
            technical foundation.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-10">
          {/* timeline rail */}
          <div className="relative hidden lg:block">
            <div className={cn('absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2', lineRail)} />
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-orange-500/80 via-orange-500/30 to-transparent"
                style={{ height: "100%", transformOrigin: "top" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </div>

          {/* timeline content */}
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 md:space-y-10"
          >
            {education.map((e, idx) => (
              <motion.div
                key={e.id}
                variants={item}
                className="relative"
              >
                {/* dot */}
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
                      <GraduationCap className="w-6 h-6 text-orange-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-xs font-bold tracking-widest uppercase text-orange-500">
                          {e.period}
                        </span>
                        {idx === 0 && (
                          <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-700 dark:text-orange-400">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 break-words text-lg font-bold leading-snug text-gray-900 sm:text-xl md:text-2xl dark:text-white">
                        {e.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {e.institute}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

