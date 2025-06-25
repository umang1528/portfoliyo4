
export interface NavLinkItem {
  name: string;
  path: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // Percentage 0-100
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
}

export interface ResumeEntry {
  id:string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: 'experience' | 'education' | 'award';
}

export interface SocialLink {
  name: string;
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type Theme = 'light' | 'dark' | 'sunset' | 'minty' | 'royal';

export interface ThemeOption {
  value: Theme;
  label: string;
}

export const AVAILABLE_THEMES: ThemeOption[] = [
  { value: 'light', label: 'Light Mode' },
  { value: 'dark', label: 'Dark Mode' },
  { value: 'sunset', label: 'Sunset Glow' },
  { value: 'minty', label: 'Minty Fresh' },
  { value: 'royal', label: 'Royal Purple' }
];