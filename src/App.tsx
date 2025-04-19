import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Base64Tool } from './components/Base64Tool';
import { TimezoneConverter } from './components/TimezoneConverter';
import { EpochConverter } from './components/EpochConverter';
import { JSONFormatter } from './components/JSONFormatter';
import { HashGenerator } from './components/HashGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <nav className="mb-6 space-x-4">
          <Link to="/" className="text-blue-600">Base64</Link>
          <Link to="/timezone" className="text-blue-600">Timezone</Link>
          <Link to="/epoch" className="text-blue-600">Epoch</Link>
          <Link to="/json" className="text-blue-600">JSON</Link>
          <Link to="/hash" className="text-blue-600">Hash</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Base64Tool />} />
          <Route path="/timezone" element={<TimezoneConverter />} />
          <Route path="/epoch" element={<EpochConverter />} />
          <Route path="/json" element={<JSONFormatter />} />
          <Route path="/hash" element={<HashGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;