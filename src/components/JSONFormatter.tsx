import { useState } from 'react';

export const JSONFormatter = () => {
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setFormatted(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setFormatted('❌ Invalid JSON');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">📦 JSON Formatter / Validator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full p-2 border rounded mb-2"
        placeholder='Paste your JSON here...'
      ></textarea>
      <button onClick={formatJSON} className="bg-blue-600 text-white px-4 py-1 rounded">Format & Validate</button>
      <pre className="mt-4 bg-gray-100 p-2 rounded whitespace-pre-wrap break-words">{formatted}</pre>
    </div>
  );
};