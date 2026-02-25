import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-8">
      <h2 id={headingId} className="section-heading">
        {title}
      </h2>
      {subtitle ? <p className="section-subheading">{subtitle}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
