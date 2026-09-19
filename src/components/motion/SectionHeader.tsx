import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  fadeUp,
  lineGrow,
  staggerContainer,
  viewportOnce,
} from './sectionVariants';

interface SectionHeaderProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Cream sections use darker text; dark sections use light. */
  tone?: 'dark' | 'light';
  className?: string;
  align?: 'center' | 'left';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'dark',
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  const eyebrowColor = tone === 'dark' ? 'text-[#084C3B]' : 'text-[#C99B3B]';
  const titleColor = tone === 'dark' ? 'text-[#063F31]' : 'text-[#F8F5EC]';
  const descColor = tone === 'dark' ? 'text-readable-on-light' : 'text-readable-on-dark';
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-3xl mb-12 lg:mb-16 ${alignCls} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.div variants={fadeUp} className={`text-[11px] font-bold tracking-[0.25em] uppercase ${eyebrowColor}`}>
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-3 lg:mb-4 ${titleColor}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className={`text-sm sm:text-base leading-relaxed ${descColor}`}>
          {description}
        </motion.p>
      )}
      <motion.div
        variants={lineGrow}
        className="w-16 h-0.5 bg-[#C99B3B] mt-4 origin-center"
        style={{ marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined }}
      />
    </motion.div>
  );
}
