import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Set 'light' as the default theme
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    // Check if the user has a saved preference
    const savedTheme = localStorage.getItem('themeName');
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme) {
      // Use saved preference if available
      setThemeName(savedTheme);
    } else if (darkMediaQuery.matches) {
      // If no saved preference, use system preference
      setThemeName('dark');
    }

    // Listen for system preference changes
    const mediaQueryListener = (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };

    darkMediaQuery.addEventListener('change', mediaQueryListener);

    return () => {
      darkMediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);

  const toggleTheme = () => {
    const newThemeName = themeName === 'light' ? 'dark' : 'light';
    localStorage.setItem('themeName', newThemeName);
    setThemeName(newThemeName);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
