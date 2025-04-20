import { useState } from 'react';
import md5 from 'crypto-js/md5';
import sha256 from 'crypto-js/sha256';

export const HashGenerator = () => {
  const [input, setInput] = useState('');
  const [md5Hash, setMd5Hash] = useState('');
  const [sha256Hash, setSha256Hash] = useState('');

  const generate = () => {
    setMd5Hash(md5(input).toString());
    setSha256Hash(sha256(input).toString());
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">🔐 Hash Generator (MD5 / SHA256)</h2>
      <textarea
        className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to hash"
      ></textarea>
      <button onClick={generate} className="bg-blue-600 text-white px-4 py-1 rounded">Generate Hashes</button>
      <div className="mt-4">
        <div className="mb-2">
          <strong>MD5:</strong>
          <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded break-words">{md5Hash}</pre>
        </div>
        <div>
          <strong>SHA256:</strong>
          <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded break-words">{sha256Hash}</pre>
        </div>
      </div>
    </div>
  );
};
