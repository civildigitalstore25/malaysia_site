import type { Variants } from 'framer-motion';

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = (stagger = 0.1, delay = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Hero-style: rise + fade */
export const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Stats: scale pop from below */
export const pop: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.88 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

/** Story / split: slide from side */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/** Cuisine: wipe up with slight scale */
export const wipeUp: Variants = {
  hidden: { opacity: 0, y: 56, clipPath: 'inset(20% 0 0 0)' },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.75, ease: easeOut },
  },
};

/** Menu: cascade from top */
export const dropIn: Variants = {
  hidden: { opacity: 0, y: -28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Journey: expand from center */
export const expand: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Locations: soft fade + slight lift */
export const lift: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Gallery: rotate-in (2D only, no blur) */
export const swingIn: Variants = {
  hidden: { opacity: 0, rotate: -4, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    rotate: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Contact: stagger from bottom-right */
export const cornerIn: Variants = {
  hidden: { opacity: 0, x: 24, y: 24 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const headerReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};
