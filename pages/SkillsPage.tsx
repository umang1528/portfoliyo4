
import React from 'react';
import { SkillItem } from '../types';
import SkillCard from '../components/SkillCard';
import SectionTitle from '../components/SectionTitle';
import { BlenderIcon, PhotoshopIcon, ZBrushIcon, UnrealEngineIcon, SubstancePainterIcon } from '../components/icons/TechIcons';

const skillsData: SkillItem[] = [
  { id: 's1', name: '3D Modeling (Blender)', level: 95, icon: BlenderIcon, description: 'High/Low poly, hard surface, organic modeling.' },
  { id: 's2', name: 'Digital Sculpting (ZBrush)', level: 90, icon: ZBrushIcon, description: 'Character/creature sculpting, intricate details.' },
  { id: 's3', name: 'Texturing (Substance Painter)', level: 88, icon: SubstancePainterIcon, description: 'PBR workflows, procedural and hand-painted textures.' },
  { id: 's4', name: 'Rendering (Cycles/Eevee/Arnold)', level: 85, description: 'Photorealistic and stylized rendering techniques.' },
  { id: 's5', name: 'Game Engines (Unreal Engine)', level: 75, icon: UnrealEngineIcon, description: 'Asset integration, material creation, basic Blueprints.' },
  { id: 's6', name: 'Concept Art & Illustration', level: 92, description: 'Character design, environment concepts, storytelling.' },
  { id: 's7', name: 'Adobe Photoshop', level: 90, icon: PhotoshopIcon, description: 'Post-processing, digital painting, texture editing.' },
  { id: 's8', name: 'Adobe Illustrator', level: 70, description: 'Vector graphics, UI elements, logo design.' },
  { id: 's9', name: 'Lighting & Composition', level: 93, description: 'Creating mood and visual hierarchy.' },
  { id: 's10', name: 'Animation (Basic)', level: 65, description: 'Character rigging and simple animations.' }
];

const SkillsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionTitle title="My Arsenal" subtitle="The Tools and Techniques I Master" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>

      <div className="mt-16 md:mt-24"> {/* Added margin top for separation */}
        <SectionTitle title="Creative Strengths" subtitle="Beyond the Software" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          {title: "Visual Storytelling", desc: "Crafting narratives that resonate and engage through compelling visuals."},
          {title: "Problem Solving", desc: "Finding innovative solutions to technical and artistic challenges."},
          {title: "Attention to Detail", desc: "Meticulously refining every aspect of a design to achieve perfection."},
          {title: "Adaptability", desc: "Quickly learning new tools and workflows to stay at the cutting edge."},
          {title: "Collaboration", desc: "Working effectively in team environments to bring collective visions to life."},
          {title: "Time Management", desc: "Efficiently managing projects to meet deadlines without compromising quality."}
        ].map((strength, index) => (
          // Re-using SkillCard for strengths; ensure SkillCard styles use CSS variables
          <SkillCard 
            key={strength.title} 
            skill={{id: `str-${index}`, name: strength.title, level: 100, description: strength.desc}} 
            index={skillsData.length + index} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;