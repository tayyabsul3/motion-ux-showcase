import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  // Always default to dark mode active
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  return { isDarkMode, setIsDarkMode };
};
