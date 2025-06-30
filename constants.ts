
import { NavLinkItem, SocialLink, ProjectItem } from './types';
import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  ArtStationIcon,
  DribbbleIcon
} from './components/icons/SocialIcons';

// Navigation links for the header menu
export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
];

// Social media links with corresponding icon components
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/artistname', Icon: LinkedInIcon },
  { name: 'GitHub', url: 'https://github.com/artistname', Icon: GithubIcon },
  { name: 'ArtStation', url: 'https://artstation.com/artistname', Icon: ArtStationIcon },
  { name: 'Dribbble', url: 'https://dribbble.com/artistname', Icon: DribbbleIcon },
  { name: 'Email', url: 'mailto:artist@example.com', Icon: EmailIcon }
];
 
// Artist profile info
export const ARTIST_NAME = "Umang Kumar";
export const ARTIST_TAGLINE = "Graphic Designer";

// Portfolio project data
export const portfolioData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Cybernetic Sentinel',
    description:
      'A futuristic character design exploring the fusion of organic and mechanical elements. Modeled in Blender, detailed in ZBrush, textured in Substance Painter.',
    imageUrl: 'https://picsum.photos/seed/cybersentinel/600/400',
    tags: ['Character Design', 'Sci-Fi', '3D Modeling', 'ZBrush'],
    projectUrl: '#'
  },
  {
    id: 'p2',
    title: 'Whispering Woods Shrine',
    description:
      'An atmospheric environment piece depicting an ancient shrine hidden deep within a mystical forest. Focus on lighting and mood.',
    imageUrl: 'https://picsum.photos/seed/woodsshrine/600/400',
    tags: ['Environment Art', 'Fantasy', 'Blender', 'Unreal Engine'],
    projectUrl: '#'
  },
  {
    id: 'p3',
    title: 'Cosmic Leviathan',
    description:
      'An illustrative piece showcasing a colossal space creature drifting through a nebula. Emphasis on scale and vibrant colors.',
    imageUrl: 'https://picsum.photos/seed/cosmicleviathan/600/400',
    tags: ['Illustration', 'Space Art', 'Photoshop', 'Creature Design']
  },
  {
    id: 'p4',
    title: 'Steampunk Explorer Gear',
    description:
      'A collection of intricately detailed props for a steampunk-themed adventurer. Focus on material definition and mechanical complexity.',
    imageUrl: 'https://picsum.photos/seed/steampunkgear/600/400',
    tags: ['Prop Design', 'Steampunk', 'Hard Surface', 'Substance Painter'],
    projectUrl: '#'
  },
  {
    id: 'p5',
    title: 'Dream Weaver',
    description:
      'A surreal portrait blending realistic features with fantastical elements, exploring themes of dreams and subconsciousness.',
    imageUrl: 'https://picsum.photos/seed/dreamweaver/600/400',
    tags: ['Portrait', 'Surrealism', 'Digital Painting', 'ZBrush']
  },
  {
    id: 'p6',
    title: 'Neo-Tokyo Alleyway',
    description:
      'A detailed cyberpunk environment with a focus on emissive lighting, reflections, and a gritty atmosphere.',
    imageUrl: 'https://picsum.photos/seed/neotokyo/600/400',
    tags: ['Environment Art', 'Cyberpunk', 'Blender', 'Cycles'],
    projectUrl: '#'
  },
  {
    id: 'p7',
    title: 'Neo-Tokyo Alleyway',
    description:
      'A detailed cyberpunk environment with a focus on emissive lighting, reflections, and a gritty atmosphere.',
    imageUrl: 'https://picsum.photos/seed/neotokyo/600/400',
    tags: ['Environment Art', 'Cyberpunk', 'Blender', 'Cycles'],
    projectUrl: '#'
  },
  {
    id: 'p8',
    title: 'Neo-Tokyo Alleyway',
    description:
      'A detailed cyberpunk environment with a focus on emissive lighting, reflections, and a gritty atmosphere.',
    imageUrl: 'https://picsum.photos/seed/neotokyo/600/400',
    tags: ['Environment Art', 'Cyberpunk', 'Blender', 'Cycles'],
    projectUrl: '#'
  },
  {
    id: 'p9',
    title: 'Neo-Tokyo Alleyway',
    description:
      'A detailed cyberpunk environment with a focus on emissive lighting, reflections, and a gritty atmosphere.',
    imageUrl: 'https://picsum.photos/seed/neotokyo/600/400',
    tags: ['Environment Art', 'Cyberpunk', 'Blender', 'Cycles'],
    projectUrl: '#'
  },
];