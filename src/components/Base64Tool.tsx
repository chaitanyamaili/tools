import { useState } from 'react';

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
    <div>
      <h2>🔢 Base64 Encoder</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleEncode}>Encode</button>
      <p>Result: {encoded}</p>
    </div>
  );
};