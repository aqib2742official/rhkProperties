'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      return stored;
    }
  }
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize with the actual theme from localStorage (or default to light)
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme class and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add transitioning class to disable transitions during theme change
    root.classList.add('transitioning');
    
    // Remove old theme and add new theme
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    
    // Remove transitioning class after a brief delay to re-enable transitions
    setTimeout(() => {
      root.classList.remove('transitioning');
    }, 50);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
