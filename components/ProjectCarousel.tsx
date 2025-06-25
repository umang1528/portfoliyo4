
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/ArrowIcons';

interface ProjectCarouselProps {
  projects: ProjectItem[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setCurrentProject(projects[currentIndex]);
    }
  }, [currentIndex, projects]);

  if (!projects || projects.length === 0) {
    return <p className="text-center text-[var(--theme-text-secondary)]">No projects to display.</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  if (!currentProject) {
    return <p className="text-center text-[var(--theme-text-secondary)]">Loading project...</p>;
  }

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto group"
    >
      <div className="overflow-hidden rounded-xl shadow-2xl bg-[var(--theme-card-bg)] border border-[var(--theme-border)] transition-all duration-300 ease-in-out">
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={currentProject.imageUrl}
            alt={currentProject.title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            key={currentProject.id} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-[var(--brand-primary)] mb-2">{currentProject.title}</h3>
          <p className="text-sm md:text-base text-[var(--theme-text-secondary)] mb-4 h-12 md:h-16 overflow-hidden text-ellipsis leading-relaxed">
            {currentProject.description.substring(0, 120)}{currentProject.description.length > 120 ? '...' : ''}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {currentProject.tags.slice(0, 4).map(tag => (
              <span key={tag} className="px-3 py-1 bg-[var(--theme-border)] text-xs md:text-sm text-[var(--theme-text-secondary)] rounded-full">{tag}</span>
            ))}
          </div>
          <Link
            to={`/portfolio/${currentProject.id}`}
            className="inline-block text-[var(--brand-secondary)] hover:text-[var(--brand-accent)] font-semibold transition-colors duration-300 group-hover:translate-x-1 transform text-sm md:text-base"
            aria-label={`View details for ${currentProject.title}`}
          >
            View Details &rarr;
          </Link>
        </div>
      </div>

      {projects.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-[var(--theme-card-bg)]/70 hover:bg-[var(--theme-card-bg)] text-[var(--brand-primary)] p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] z-10 border border-[var(--theme-border)]"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-7 md:h-7" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-[var(--theme-card-bg)]/70 hover:bg-[var(--theme-card-bg)] text-[var(--brand-primary)] p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] z-10 border border-[var(--theme-border)]"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </>
      )}
      
      {projects.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                ${currentIndex === index ? 'bg-[var(--brand-primary)] scale-125' : 'bg-[var(--theme-border)] hover:bg-[var(--theme-text-secondary)]'}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;