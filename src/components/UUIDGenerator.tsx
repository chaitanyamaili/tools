import React, { useState } from 'react';

export function UUIDGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5); // default number of UUIDs

  const generateUUIDs = () => {
    const newUUIDs = Array.from({ length: count }, () => crypto.randomUUID());
    setUuids(newUUIDs);
  };

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'));
  };

  const exportToTxt = () => {
    const blob = new Blob([uuids.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uuids.txt';
    a.click();
    URL.revokeObjectURL(url);
  };  

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">🔑 UUID Generator</h2>

      <div className="mb-4 flex items-center space-x-2">
      <input
        type="number"
        min={1}
        max={100}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        />
        <button
          onClick={generateUUIDs}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate {count} UUIDs
        </button>
        {uuids.length > 0 && (
          <button
            onClick={copyAll}
            className="text-sm text-gray-600 underline"
          >
            Copy All
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {uuids.map((uuid, idx) => (
            <li
            key={idx}
            className="p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center text-sm break-all"
            >
            <span className="text-gray-800 dark:text-gray-100">{uuid}</span>
            <button
                onClick={() => copyToClipboard(uuid)}
                className="text-blue-600 dark:text-blue-400 text-xs ml-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                title="Copy UUID to clipboard"
            >
                Copy
            </button>
            </li>
        ))}
      </ul>
      <button onClick={exportToTxt} className="btn">Export .txt</button>
    </div>
  );
}
