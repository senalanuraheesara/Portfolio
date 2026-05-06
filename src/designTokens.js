/**
 * Shared visual tokens — one palette sitewide (orange accent + slate neutrals + glass dark).
 * Import and compose with other utility classes where needed.
 */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}

/** Full-width alternating section strip (light) / inherits app bg (dark) */
export const sectionBand =
  'border-t border-orange-100/70 bg-orange-50/35 dark:border-transparent dark:bg-transparent transition-colors duration-300';

/** Primary content cards (About, Skills, Experience, Education, Contact) */
export const cardElevated = cn(
  'rounded-2xl border border-orange-100/90 bg-white/95',
  'shadow-lg shadow-orange-950/10 backdrop-blur-md',
  'dark:border-white/10 dark:bg-white/5 dark:shadow-none',
);

/** Hero / small floating panels — same tint as cards in dark mode */
export const panelFloat = cn(
  'rounded-xl border border-orange-100/90 bg-white/95',
  'shadow-lg shadow-orange-950/10 backdrop-blur-md',
  'dark:border-white/10 dark:bg-white/10 dark:shadow-black/30',
);

/** Project grid cards — solid white shell in light (image reads cleaner) */
export const cardProject = cn(
  'rounded-2xl border border-orange-100/90 bg-white',
  'shadow-lg shadow-orange-950/10',
  'dark:border-white/10 dark:bg-white/5 dark:shadow-black/30',
);

/** Shared hover on bordered cards */
export const cardHover = 'transition-all duration-300 hover:border-orange-400/50';

/** Timeline / rails (light gray-orange + dark divider) */
export const lineRail = 'bg-orange-200/90 dark:bg-white/10';

/** Section eyebrow label */
export const textEyebrow = 'font-bold uppercase tracking-widest text-orange-500 text-sm';

/** Tech / muted chips */
export const chipMuted = cn(
  'rounded-lg border border-orange-100/90 bg-orange-50/75',
  'text-[11px] font-medium uppercase tracking-wide text-gray-700',
  'dark:border-white/10 dark:bg-white/5 dark:text-gray-300',
);

/** Contact icon tile */
export const iconTileMuted = cn(
  'flex shrink-0 items-center justify-center rounded-lg bg-orange-50 p-3 transition-colors',
  'group-hover:bg-orange-100',
  'dark:bg-white/5 dark:group-hover:bg-orange-500/20',
);

/** Inline highlight / internship panel */
export const panelHighlight = cn(
  'rounded-xl border border-orange-100/90 bg-orange-50/55 p-6 shadow-sm',
  'dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none',
);

/** Form controls — same edge color as cards */
export const inputField =
  'w-full rounded-xl border border-orange-100/90 bg-white px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500';

