import type { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease },
  },
};

export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -60px 0px' } as const;
