import { useState } from 'react';

export const JSONFormatter = () => {
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setFormatted(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setFormatted('❌ Invalid JSON');
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError('');
    } catch (err) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">📦 JSON Formatter / Validator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        placeholder='Paste your JSON here...'
      ></textarea>
      <button onClick={formatJSON} className="bg-blue-600 text-white px-4 py-1 rounded">Format & Validate</button>
      <pre className="mt-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded whitespace-pre-wrap break-words">{formatted}</pre>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4" onClick={handleMinify}>Minify</button>
      {error && <div className="text-red-500">{error}</div>}
      {output && (
        <div>
          <label className="block mb-1 font-medium">Minified JSON:</label>
          <pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 rounded whitespace-pre-wrap break-words">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};