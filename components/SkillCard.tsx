
import React from 'react';
import { SkillItem } from '../types';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div
      className="bg-[var(--theme-card-bg)] p-6 rounded-lg shadow-lg border border-[var(--theme-border)] animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="flex items-center mb-3">
          {skill.icon && <skill.icon className="h-8 w-8 mr-4 text-[var(--brand-primary)]" />}
          <h3 className="text-xl font-semibold text-[var(--theme-text-primary)] font-display">{skill.name}</h3>
        </div>
        {skill.description && <p className="text-sm text-[var(--theme-text-secondary)] mb-3">{skill.description}</p>}
        <div className="w-full bg-[var(--theme-border)] rounded-full h-3 mb-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label={`${skill.name} proficiency`}
          />
        </div>
        <p className="text-xs text-right text-[var(--brand-primary)] font-medium">{skill.level}%</p>
      </div>
    </div>
  );
};

export default SkillCard;