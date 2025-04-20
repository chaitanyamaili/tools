import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Base64Tool } from './components/Base64Tool';
import { TimezoneConverter } from './components/TimezoneConverter';
import { EpochConverter } from './components/EpochConverter';
import { JSONFormatter } from './components/JSONFormatter';
import { HashGenerator } from './components/HashGenerator';
import { UUIDGenerator } from './components/UUIDGenerator';
import { Home } from './components/Home';

const tools = [
  { path: '/base64', name: 'Base64' },
  { path: '/timezone', name: 'Timezone' },
  { path: '/epoch', name: 'Epoch' },
  { path: '/json', name: 'JSON' },
  { path: '/hash', name: 'Hash' },
  { path: '/uuid', name: 'UUID' },
];

function App() {
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');

    // Add event listener for keydown
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'd') setDark(prev => !prev);
      if (e.ctrlKey && e.key === '1') window.location.pathname = '/base64';
      if (e.ctrlKey && e.key === '2') window.location.pathname = '/timezone';
      if (e.ctrlKey && e.key === '3') window.location.pathname = '/epoch';
      if (e.ctrlKey && e.key === '4') window.location.pathname = '/json';
      if (e.ctrlKey && e.key === '5') window.location.pathname = '/hash';
      if (e.ctrlKey && e.key === '6') window.location.pathname = '/uuid';
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [dark]);

  const filtered = tools.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        className="md:hidden p-2 m-2 text-gray-700 dark:text-white"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        ☰ Menu
      </button>
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r dark:border-gray-700"> */}
      <aside className={`fixed md:static z-50 bg-gray-100 dark:bg-gray-800 p-4 h-full w-64 transform transition-transform ${
        isMobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <h2 className="text-lg font-semibold mb-4">🛠️ Tools</h2>

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
        />

        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:underline text-blue-600 dark:text-blue-400">
            Home
          </Link>
          {filtered.map(tool => (
            <Link
              key={tool.path}
              to={tool.path}
              className={`hover:underline ${
                location.pathname === tool.path ? 'font-bold text-blue-700 dark:text-blue-300' : 'text-blue-600 dark:text-blue-400'
              }`}
            >
              {tool.name}
            </Link>
          ))}
        </nav>

        <div className="mt-6">
          <button
            onClick={() => setDark(!dark)}
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            Toggle {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base64" element={<Base64Tool />} />
          <Route path="/timezone" element={<TimezoneConverter />} />
          <Route path="/epoch" element={<EpochConverter />} />
          <Route path="/json" element={<JSONFormatter />} />
          <Route path="/hash" element={<HashGenerator />} />
          <Route path="/uuid" element={<UUIDGenerator />} />
        </Routes>

        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/chaitanyamaili/tools"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            ⭐ Star this project on GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}

export default App;