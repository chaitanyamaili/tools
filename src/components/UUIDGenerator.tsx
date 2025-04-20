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
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">🔑 UUID Generator</h2>

      <div className="mb-4 flex items-center space-x-2">
        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-20 border px-2 py-1 rounded"
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
            className="p-2 bg-gray-100 border rounded flex justify-between items-center text-sm break-all"
          >
            <span>{uuid}</span>
            <button
              onClick={() => copyToClipboard(uuid)}
              className="text-blue-600 text-xs ml-4"
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
