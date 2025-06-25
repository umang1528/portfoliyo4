import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className }) => {
  const { theme, setTheme, availableThemes } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as typeof theme);
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="theme-selector" className="sr-only">Select Theme</label>
      <select
        id="theme-selector"
        value={theme}
        onChange={handleThemeChange}
        className="block w-full appearance-none bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--theme-text-secondary)] py-2 px-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus-ring)] text-sm cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='${encodeURIComponent("var(--dropdown-arrow-color)")}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1.25em',
        }}
      >
        {availableThemes.map(option => (
          <option key={option.value} value={option.value} className="bg-[var(--theme-card-bg)] text-[var(--theme-text-primary)]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
