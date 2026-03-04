import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-8"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="section-subheading">{subtitle}</p> : null}
      <div className="mt-10">{children}</div>
    </motion.section>
  );
}
