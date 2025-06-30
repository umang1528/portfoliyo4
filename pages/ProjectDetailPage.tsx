
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/icons/ArrowIcons';

// Declare GSAP and ScrollTrigger if they are loaded globally (e.g., via CDN)
declare const gsap: any;
declare const ScrollTrigger: any;

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const perspectiveWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const projectIndex = portfolioData.findIndex(p => p.id === projectId);
  const project = projectIndex !== -1 ? portfolioData[projectIndex] : null;

  useEffect(() => {
    if (project && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && perspectiveWrapperRef.current && imageRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const isEven = projectIndex % 2 === 0;

      const anim = gsap.to(imageRef.current, {
        rotationY: isEven ? -8 : 8, // Tilt left/right
        rotationX: 4,              // Tilt slightly forward/backward
        z: -40,                   // Move slightly back in Z space for depth
        scale: 0.97,              // Slightly scale down to enhance depth
        ease: "power1.out",
        scrollTrigger: {
          trigger: perspectiveWrapperRef.current,
          start: "top bottom", // When the top of the trigger hits the bottom of the viewport
          end: "bottom top",   // When the bottom of thetrigger hits the top of the viewport
          scrub: 1.5,          // Smooth scrubbing
        }
      });

      return () => {
        // Cleanup GSAP animations and ScrollTriggers
        if (anim.scrollTrigger) {
          anim.scrollTrigger.kill();
        }
        anim.kill();
      };
    }
  }, [project, projectIndex]); // projectIndex is derived from project, so project is sufficient if it covers changes to projectIndex logic

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-4">Project Not Found</h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8">
            Sorry, we couldn't find the project you were looking for.
          </p>
          <Link
            to="/portfolio"
            className="px-8 py-3 bg-[var(--brand-secondary)] text-white font-semibold rounded-lg text-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const isEven = projectIndex % 2 === 0;

  const hasNextProject = projectIndex < portfolioData.length - 1;
  const hasPrevProject = projectIndex > 0;

  const nextProjectId = hasNextProject ? portfolioData[projectIndex + 1].id : null;
  const prevProjectId = hasPrevProject ? portfolioData[projectIndex - 1].id : null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-8 md:mb-12 animate-fadeInUp">
        <Link to="/portfolio" className="text-[var(--brand-secondary)] hover:text-[var(--brand-accent)] font-medium inline-flex items-center group">
          <ChevronLeftIcon className="w-5 h-5 mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </div>

      <div className="animate-fadeInUp" style={{animationDelay: '100ms'}}>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--brand-primary)] mb-3 text-center">
          {project.title}
        </h1>
        <div className="mt-2 mb-10 h-1 w-24 bg-[var(--brand-secondary)] mx-auto rounded-full"></div>
      </div>
      
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start mb-12 md:mb-16`}>
        <div 
          ref={perspectiveWrapperRef}
          style={{ perspective: '1800px' }}
          className="w-full md:w-1/2" // Removed animate-fadeInUp, GSAP can handle if needed
        >
          <div 
            ref={imageRef}
            className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-2xl border border-[var(--theme-border)]"
            style={{ transformOrigin: 'center center' }}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div 
          className="w-full md:w-1/2 space-y-6 animate-fadeInUp" // Kept standard fadeInUp for text content
           style={{animationDelay: isEven ? '300ms' : '200ms' }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-[var(--theme-text-primary)] font-display mb-2">Description</h2>
            <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--theme-text-primary)] font-display mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-[var(--theme-card-bg)] border border-[var(--theme-border)] text-sm text-[var(--theme-text-secondary)] rounded-lg shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.projectUrl && project.projectUrl !== '#' && (
            <div 
              className="animate-fadeInUp"
              style={{ animationDelay: `${isEven ? 400 : 300}ms` }} // Adjusted delay
            >
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[var(--brand-primary)] text-white font-semibold rounded-lg text-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Visit Live Site
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Navigation between projects */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-[var(--theme-border)] animate-fadeInUp" style={{animationDelay: '400ms'}}>
        {hasPrevProject && prevProjectId ? (
          <Link 
            to={`/portfolio/${prevProjectId}`} 
            className="inline-flex items-center px-6 py-3 border border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-semibold rounded-lg text-md hover:bg-[var(--brand-secondary)] hover:text-white transition-all duration-300 group"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Previous Project
          </Link>
        ) : <div className="w-auto md:w-1/3"></div> /* Placeholder for spacing, adjusted for flexbox */}
        
        {hasNextProject && nextProjectId ? (
          <Link 
            to={`/portfolio/${nextProjectId}`} 
            className="inline-flex items-center px-6 py-3 border border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-semibold rounded-lg text-md hover:bg-[var(--brand-secondary)] hover:text-white transition-all duration-300 group"
          >
            Next Project
            <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ) : <div className="w-auto md:w-1/3"></div> /* Placeholder for spacing, adjusted for flexbox */}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
