
import React from 'react';
import { ResumeEntry } from '../types';
import SectionTitle from '../components/SectionTitle';

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);


const mockResumeData: ResumeEntry[] = [
  {
    id: 'exp1',
    title: 'Senior 3D Artist',
    institution: 'PixelForge Studios',
    period: '2021 - Present',
    description: 'Led character design and environment modeling for several AAA game titles. Mentored junior artists and contributed to pipeline optimization.',
    type: 'experience',
  },
  {
    id: 'exp2',
    title: 'Freelance 3D Illustrator',
    institution: 'Self-Employed',
    period: '2019 - 2021',
    description: 'Collaborated with various clients on projects ranging from advertising visuals to short animated films. Specialized in surreal and fantasy themes.',
    type: 'experience',
  },
  {
    id: 'edu1',
    title: 'Master of Fine Arts in Digital Media',
    institution: 'Art & Design University',
    period: '2017 - 2019',
    description: 'Focused on advanced 3D modeling, animation, and interactive media. Thesis project on procedural environment generation.',
    type: 'education',
  },
  {
    id: 'edu2',
    title: 'Bachelor of Arts in Illustration',
    institution: 'Creative College',
    period: '2013 - 2017',
    description: 'Developed strong foundational skills in drawing, composition, and color theory.',
    type: 'education',
  },
   {
    id: 'awd1',
    title: 'Best Digital Artwork Award',
    institution: 'Global Art Contest',
    period: '2022',
    description: 'Awarded for the piece "Celestial Dreams" for its innovative use of lighting and composition.',
    type: 'award'
  }
];

const ResumeCard: React.FC<{ entry: ResumeEntry, index: number }> = ({ entry, index }) => {
  let iconPath;
  switch(entry.type) {
    case 'experience': 
      iconPath = "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"; 
      break;
    case 'education': 
      iconPath = "M12 14l9-5-9-5-9 5 9 5zm0 0v7.5m0-7.5L6.16 7.08a1 1 0 00-1.338 1.414L12 14l7.178-3.506a1 1 0 00-1.338-1.414L12 14zM3 21v-9a9 9 0 0118 0v9";
      break; 
    case 'award':
      iconPath = "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z";
      break;
    default: iconPath = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  }
  
  return (
    <div
      className="bg-[var(--theme-card-bg)] p-6 rounded-lg shadow-lg mb-6 border border-[var(--theme-border)] animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--brand-primary)]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-[var(--brand-primary)]">{entry.title}</h3>
            <p className="text-md font-semibold text-[var(--theme-text-primary)]">{entry.institution}</p>
            <p className="text-sm text-[var(--theme-text-secondary)] mb-2">{entry.period}</p>
            <p className="text-sm text-[var(--theme-text-primary)] leading-relaxed">{entry.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const ResumePage: React.FC = () => {
  const experiences = mockResumeData.filter(e => e.type === 'experience');
  const education = mockResumeData.filter(e => e.type === 'education');
  const awards = mockResumeData.filter(e => e.type === 'award');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionTitle title="My Journey" subtitle="Experience, Education, and Accolades" />
      
      <div className="text-center mb-12 animate-fadeInUp" style={{animationDelay: '100ms'}}>
        <a 
          href="/resume_placeholder.pdf" 
          download
          className="inline-flex items-center px-6 py-3 bg-[var(--brand-secondary)] text-white font-semibold rounded-lg text-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download Full CV
        </a>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <h2 className="text-3xl font-display font-semibold text-[var(--brand-secondary)] mb-6 border-b-2 border-[var(--brand-secondary)]/50 pb-2">Experience</h2>
          </div>
          {experiences.map((entry, index) => (
            <ResumeCard key={entry.id} entry={entry} index={index + 2} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="animate-fadeInUp" style={{animationDelay: '300ms'}}>
            <h2 className="text-3xl font-display font-semibold text-[var(--brand-secondary)] mb-6 border-b-2 border-[var(--brand-secondary)]/50 pb-2">Education</h2>
          </div>
          {education.map((entry, index) => (
            <ResumeCard key={entry.id} entry={entry} index={index + experiences.length + 3} />
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <h2 className="text-3xl font-display font-semibold text-[var(--brand-secondary)] mb-6 border-b-2 border-[var(--brand-secondary)]/50 pb-2">Awards</h2>
          </div>
          {awards.map((entry, index) => (
            <ResumeCard key={entry.id} entry={entry} index={index + experiences.length + education.length + 4} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;