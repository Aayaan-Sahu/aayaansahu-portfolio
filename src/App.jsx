import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Update the <html> element when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen px-8 py-12 transition-colors duration-300">
      {/* Header / Navigation bar */}
      <header className="w-full flex items-center justify-between max-w-6xl mx-auto mb-24">
        <span className="text-lg font-semibold">
          aayaan sahu
        </span>
        <nav className="hidden sm:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:underline">
            home
          </a>
          <a href="/projects" className="hover:underline">
            projects
          </a>
        </nav>
        <button
          // className="border rounded px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5 transition-transform transition-opacity duration-200 text-gray-800 dark:text-gray-100" />
          ) : (
            <MoonIcon className="w-5 h-5 transition-transform transition-opacity duration-200 text-gray-800 dark:text-gray-100" />
          )}
        </button>
      </header>

      {/* Hero section */}
      <main className="
  flex-1 flex flex-col justify-start
  max-w-full md:max-w-3xl
  ml-4 sm:ml-8 md:ml-8 lg:ml-80
  mr-4 sm:mr-8 md:mr-24 
  mt-16 md:mt-24 lg:mt-64
  text-gray-800 dark:text-gray-100
        ">
        <h1 className="text-4xl font-bold mb-4">
          hi, I&rsquo;m aayaan sahu
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          CS + Econ @ UIUC
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          I&rsquo;m a CS + Economics student who&rsquo;s super interested in building things to improve quality of life.
        </p>
        <div className="flex space-x-6 text-sm">
          <a
            href="https://github.com/Aayaan-Sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary dark:hover:text-primary"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/aayaan-sahu-078676305/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary dark:hover:text-primary"
          >
            linkedin
          </a>
        </div>
      </main>
    </div>
  );
}

