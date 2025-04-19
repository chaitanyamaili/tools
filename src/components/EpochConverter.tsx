import { useState } from 'react';

export const EpochConverter = () => {
  const [epoch, setEpoch] = useState('');
  const [humanDate, setHumanDate] = useState('');

  const toHuman = () => {
    const timestamp = parseInt(epoch);
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp * 1000);
      setHumanDate(date.toLocaleString());
    } else {
      setHumanDate('❌ Invalid epoch time');
    }
  };

  const toEpoch = () => {
    const date = new Date(humanDate);
    if (!isNaN(date.getTime())) {
      setEpoch(Math.floor(date.getTime() / 1000).toString());
    } else {
      setEpoch('❌ Invalid date');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">📅 Epoch ↔ Human Date Converter</h2>
      <div className="mb-2">
        <input
          type="text"
          value={epoch}
          onChange={(e) => setEpoch(e.target.value)}
          placeholder="Enter epoch seconds"
          className="w-full p-2 border rounded"
        />
        <button onClick={toHuman} className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">To Human Date</button>
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={humanDate}
          onChange={(e) => setHumanDate(e.target.value)}
          placeholder="Enter human-readable date (e.g., 2025-04-18 12:00)"
          className="w-full p-2 border rounded"
        />
        <button onClick={toEpoch} className="mt-2 bg-green-600 text-white px-4 py-1 rounded">To Epoch</button>
      </div>
    </div>
  );
};