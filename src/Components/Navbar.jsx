import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const linkBase =
  'relative py-0.5 text-xs font-medium transition-colors duration-300 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition-transform after:duration-300 hover:after:scale-x-100 xl:text-sm';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Education', link: '#education' },
    { name: 'Contact', link: '#contact' },
  ];

  const navShell =
    isMenuOpen
      ? 'bg-white dark:bg-portfolio-dark'
      : darkMode
        ? 'bg-transparent'
        : 'border-b border-orange-100/70 bg-white/88 shadow-sm shadow-orange-950/10 backdrop-blur-md';

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 pb-4 pt-[max(env(safe-area-inset-top,0px),1rem)] transition-all duration-300 ${navShell}`}
      initial={reduceMotion ? false : { y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:gap-3 sm:px-6">
        <motion.a
          href="#home"
          className="flex shrink-0 items-center gap-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 460, damping: 28 }}
        >
          SA<span className="inline-block text-orange-500">.</span>
        </motion.a>

        <div
          className={
            darkMode
              ? 'hidden min-w-0 max-w-[min(920px,calc(100vw-13rem))] items-center rounded-full border border-white/10 bg-black/40 px-4 py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl motion-safe:transition-shadow motion-safe:duration-500 hover:shadow-orange-500/10 lg:flex xl:px-7 xl:py-3'
              : 'hidden min-w-0 max-w-[min(920px,calc(100vw-13rem))] items-center rounded-full border border-orange-100/90 bg-white/95 px-4 py-2.5 shadow-lg shadow-orange-950/10 backdrop-blur-md lg:flex xl:px-8 xl:py-3'
          }
        >
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 xl:gap-x-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`${linkBase} whitespace-nowrap ${
                    darkMode
                      ? 'text-gray-400 hover:text-orange-400'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
          <motion.button
            onClick={toggleDarkMode}
            type="button"
            className={
              darkMode
                ? 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-white'
                : 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-orange-200/80 bg-orange-50 p-2 text-gray-900 transition-colors hover:bg-orange-100'
            }
            whileHover={reduceMotion ? undefined : { rotate: darkMode ? 18 : -18 }}
            whileTap={reduceMotion ? undefined : { scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/45 transition-colors hover:bg-orange-600 xl:px-6 xl:text-base"
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          >
            Hire Me
          </motion.a>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 lg:hidden">
          <motion.button
            onClick={toggleDarkMode}
            type="button"
            className={
              darkMode
                ? 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition-colors hover:bg-white/10 hover:text-white'
                : 'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-orange-200/80 bg-orange-50 text-gray-900 transition-colors hover:bg-orange-100'
            }
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-cream dark:text-white dark:focus-visible:ring-offset-portfolio-dark"
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="absolute left-0 right-0 top-full max-h-[min(82dvh,26rem)] overflow-y-auto overscroll-y-contain border-t border-orange-100/70 bg-white/98 py-4 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] shadow-lg shadow-orange-950/10 backdrop-blur-md dark:border-white/10 dark:bg-portfolio-dark/98 sm:max-h-[min(75vh,30rem)] lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-col space-y-1">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
              >
                <a
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center rounded-xl px-2 text-center text-base font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600 active:scale-[0.99] dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-orange-500"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li>
              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 block w-full rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-orange-500/45 transition-colors hover:bg-orange-600"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Hire Me
              </motion.a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
