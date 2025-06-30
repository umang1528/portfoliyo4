 
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="bg-[var(--theme-card-bg)] rounded-xl overflow-hidden shadow-lg border border-[var(--theme-border)] flex flex-col h-full group animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }} 
    >
      <div className="flex flex-col flex-grow">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold font-display text-[var(--brand-primary)] mb-2">{project.title}</h3>
          <p className="text-[var(--theme-text-secondary)] text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-[var(--theme-border)] text-xs text-[var(--theme-text-secondary)] rounded-full">{tag}</span>
            ))}
          </div>
          <Link
            to={`/portfolio/${project.id}`}
            className="mt-auto inline-block text-[var(--brand-secondary)] hover:text-[var(--brand-accent)] font-semibold transition-colors duration-300 group-hover:translate-x-1 transform"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;