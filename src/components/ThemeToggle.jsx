import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // optional

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark'); 
    } else {
      root.classList.remove('light');
      root.classList.add('dark'); 
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

    // useEffect(() => {
    //     const root = document.documentElement;
    
    //     if (theme === 'dark') {
    //     root.classList.add('dark');
    //     } else {
    //     root.classList.remove('dark');
    //     }
    
    //     localStorage.setItem('theme', theme);
    // }, [theme]);
  

  const toggle = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-gray-800/30 hover:bg-gray-800/40 transition"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-gray-100" />
      ) : (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      )}
    </button>

        // <button
        // onClick={toggle}
        // aria-label="Toggle theme"
        // className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        // >
        // {theme === 'light' ? (
        //     <MoonIcon className="w-5 h-5 text-gray-900" />
        // ) : (
        //     <SunIcon className="w-5 h-5 text-yellow-300" />
        // )}
        // </button>

  );
};

export default ThemeToggle;
