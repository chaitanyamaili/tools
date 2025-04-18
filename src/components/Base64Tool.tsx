import React, { useState } from 'react';

declare global {
  interface Window {
    encodeBase64: (input: string) => string;
  }
}

export const Base64Tool = () => {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');

  const handleEncode = () => {
    const result = window.encodeBase64(input);
    setEncoded(result);
  };

  return (
    <div className="p-4 border rounded-xl shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">🔢 Base64 Encoder</h2>
      <input
        className="border p-2 rounded w-full mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to encode"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleEncode}
      >
        Encode
      </button>
      <p className="mt-2 break-all">Result: {encoded}</p>
    </div>
  );
};
