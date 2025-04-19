import { useEffect } from 'react';
import React from 'react';
import { Base64Tool } from './components/Base64Tool';

function App() {
  useEffect(() => {
    const loadWasm = async () => {
      // First load wasm_exec.js dynamically
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './wasm_exec.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

      // @ts-ignore
      const go = new Go();
      const result = await WebAssembly.instantiateStreaming(
        fetch('main.wasm'),
        go.importObject
      );
      go.run(result.instance);
    };
    loadWasm().catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Welcome to dev tools portal</h1>
      <Base64Tool />
    </div>
  );
}

export default App;