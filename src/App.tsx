import React from 'react';
import { useEffect } from 'react';
import { Base64Tool } from './components/Base64Tool';

function App() {
  useEffect(() => {
    const loadWasm = async () => {
      // @ts-ignore
      const go = new Go();
      const result = await WebAssembly.instantiateStreaming(
        fetch('main.wasm'),
        go.importObject
      );
      go.run(result.instance);
    };
    loadWasm();
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">Dev Tools</h1>
      <Base64Tool />
    </div>
  );
}

export default App;