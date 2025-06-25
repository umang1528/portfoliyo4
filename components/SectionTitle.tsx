
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center animate-fadeInUp"> 
      <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--brand-primary)] mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-24 bg-[var(--brand-secondary)] mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;