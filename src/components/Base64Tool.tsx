import { useState } from 'react';

export const Base64Tool = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput('❌ Invalid input');
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput('❌ Invalid Base64');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">🔢 Base64 Encode / Decode</h2>
      <textarea
        className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to encode or decode"
      />
      <div className="flex gap-2 my-2">
        <button onClick={encode} className="bg-blue-600 text-white px-4 py-1 rounded">Encode</button>
        <button onClick={decode} className="bg-green-600 text-white px-4 py-1 rounded">Decode</button>
      </div>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded whitespace-pre-wrap break-words">{output}</pre>
    </div>
  );
};
