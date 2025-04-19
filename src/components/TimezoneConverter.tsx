import { DateTime } from 'luxon';
import { useState } from 'react';

export const TimezoneConverter = () => {
  const [inputTime, setInputTime] = useState('');
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('Asia/Kolkata');
  const [converted, setConverted] = useState('');

  const convert = () => {
    try {
      const dt = DateTime.fromISO(inputTime, { zone: fromZone });
      const convertedTime = dt.setZone(toZone);
      setConverted(convertedTime.toFormat("yyyy-LL-dd HH:mm:ss ZZZZ"));
    } catch {
      setConverted('❌ Invalid time or timezone');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">🕒 Timezone Converter</h2>
      <input
        type="datetime-local"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <div className="flex gap-2 mb-2">
        <input
          value={fromZone}
          onChange={(e) => setFromZone(e.target.value)}
          placeholder="From (e.g., UTC)"
          className="flex-1 p-2 border rounded"
        />
        <input
          value={toZone}
          onChange={(e) => setToZone(e.target.value)}
          placeholder="To (e.g., Asia/Kolkata)"
          className="flex-1 p-2 border rounded"
        />
      </div>
      <button onClick={convert} className="bg-blue-600 text-white px-4 py-1 rounded">Convert</button>
      <div className="mt-4 p-2 bg-gray-100 rounded">{converted}</div>
    </div>
  );
};
