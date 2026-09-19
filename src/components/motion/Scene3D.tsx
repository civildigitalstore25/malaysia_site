import { useEffect, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface Scene3DProps {
  children: ReactNode;
}

/** Soft global mouse parallax depth layer for the whole page. */
export function Scene3D({ children }: Scene3DProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 22, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 40, damping: 22, mass: 0.8 });
  const invX = useSpring(0, { stiffness: 32, damping: 24, mass: 0.9 });
  const invY = useSpring(0, { stiffness: 32, damping: 24, mass: 0.9 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(!reduceMotion && finePointer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx * 36);
      my.set(ny * 28);
      invX.set(nx * -22);
      invY.set(ny * -18);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled, mx, my, invX, invY]);

  return (
    <div className="scene-3d relative min-h-screen overflow-x-hidden">
      {enabled && (
        <>
          <motion.div
            aria-hidden
            className="scene-3d-orb scene-3d-orb--a pointer-events-none fixed z-0"
            style={{ x: sx, y: sy }}
          />
          <motion.div
            aria-hidden
            className="scene-3d-orb scene-3d-orb--b pointer-events-none fixed z-0"
            style={{ x: invX, y: invY }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
