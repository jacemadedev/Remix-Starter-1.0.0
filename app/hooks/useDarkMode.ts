import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(prev => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', String(newValue));
        document.documentElement.classList.toggle('dark', newValue);
      }
      return newValue;
    });
  };

  return { isDark, toggleDarkMode };
};