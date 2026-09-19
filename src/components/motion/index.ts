export { Tilt3D } from './Tilt3D';
export { Reveal3D } from './Reveal3D';
export {
  easeOut,
  staggerContainer,
  rise,
  pop,
  slideLeft,
  slideRight,
  wipeUp,
  dropIn,
  expand,
  lift,
  swingIn,
  cornerIn,
  headerReveal,
} from './variants';

/** Alias used by Footer */
export { rise as fadeUp } from './variants';

export const viewportOnce = { once: true, amount: 0.2 } as const;
