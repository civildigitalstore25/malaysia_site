import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function Tilt3D({
  children,
  className = '',
  intensity = 12,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const glareX = useTransform(springX, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(springY, [-0.5, 0.5], [10, 90]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(201,155,59,0.18), transparent 55%)`
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Skip tilt on mobile — transforms can soft-blur text/images on phones.
  if (reduceMotion || isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-3d ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="tilt-3d-content">{children}</div>
      {glare && (
        <motion.div aria-hidden className="tilt-3d-glare" style={{ background: glareBg }} />
      )}
    </motion.div>
  );
}
