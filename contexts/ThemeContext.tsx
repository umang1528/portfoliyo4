import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Theme, AVAILABLE_THEMES } from '../types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: typeof AVAILABLE_THEMES;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme && AVAILABLE_THEMES.some(t => t.value === storedTheme) ? storedTheme : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    AVAILABLE_THEMES.forEach(t => root.classList.remove(`theme-${t.value}`));
    root.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    if (AVAILABLE_THEMES.some(t => t.value === newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(`Attempted to set an invalid theme: ${newTheme}`);
      setThemeState('light'); // Fallback to default
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: AVAILABLE_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
