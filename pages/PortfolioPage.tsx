
import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../constants';

const PortfolioPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Categories');

  const uniqueTags = useMemo(() => {
    const allTags = portfolioData.flatMap(p => p.tags);
    return ['All Categories', ...Array.from(new Set(allTags)).sort()];
  }, []);

  const displayedProjects = useMemo(() => {
    return portfolioData.filter(project => {
      const matchesTag = selectedTag === 'All Categories' || project.tags.includes(selectedTag);
      
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearchTerm = 
        project.title.toLowerCase().includes(searchTermLower) ||
        project.description.toLowerCase().includes(searchTermLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTermLower));
        
      return matchesTag && matchesSearchTerm;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionTitle title="My Creations" subtitle="A Showcase of Digital Dreams and Designs" />
      
      <div 
        className="mb-10 flex flex-col md:flex-row gap-6 items-center p-6 bg-[var(--theme-card-bg)]/50 rounded-xl shadow-lg border border-[var(--theme-border)] animate-fadeInUp"
        style={{animationDelay: '100ms'}}
      >
        <div className="w-full md:w-2/3">
          <label htmlFor="search-portfolio" className="sr-only">Search projects</label>
          <input
            type="text"
            id="search-portfolio"
            placeholder="Search by name, description, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--input-text)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] p-3 transition-colors duration-300 placeholder-[var(--theme-text-secondary)]"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label htmlFor="category-filter" className="sr-only">Filter by category</label>
          <select
            id="category-filter"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--input-text)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] p-3 transition-colors duration-300 cursor-pointer appearance-none"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='${encodeURIComponent("var(--dropdown-arrow-color)")}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right 0.75rem center', 
              backgroundSize: '1.25em' 
            }}
          >
            {uniqueTags.map(tag => (
              <option key={tag} value={tag} className="bg-[var(--theme-card-bg)] text-[var(--theme-text-primary)]">
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div 
            className="text-center py-16 animate-fadeInUp"
            style={{animationDelay: '200ms'}}
        >
          <svg className="mx-auto h-16 w-16 text-[var(--brand-secondary)] opacity-70 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-2xl font-semibold text-[var(--theme-text-primary)] mb-2">No Projects Found</h3>
          <p className="text-lg text-[var(--theme-text-secondary)]">
            Try adjusting your search term or category filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;