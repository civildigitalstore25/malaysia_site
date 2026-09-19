import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

type Direction = 'up' | 'down' | 'left' | 'right';

interface Reveal3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number; rotateX: number; rotateY: number }> = {
  up: { x: 0, y: 40, rotateX: 10, rotateY: 0 },
  down: { x: 0, y: -40, rotateX: -10, rotateY: 0 },
  left: { x: 40, y: 0, rotateX: 0, rotateY: -8 },
  right: { x: -40, y: 0, rotateX: 0, rotateY: 8 },
};

export function Reveal3D({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: Reveal3DProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const from = offsets[direction];

  // No CSS filter blur — it leaves text soft/fuzzy on mobile Safari.
  // On mobile, use simple fade + slide only (no 3D rotate).
  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.35, delay } },
      }
    : isMobile
      ? {
          hidden: { opacity: 0, y: direction === 'left' || direction === 'right' ? 0 : 28, x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
          },
        }
      : {
          hidden: {
            opacity: 0,
            x: from.x,
            y: from.y,
            rotateX: from.rotateX,
            rotateY: from.rotateY,
            scale: 0.97,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: '0px 0px -40px 0px' }}
      style={isMobile ? undefined : { transformStyle: 'preserve-3d', transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
