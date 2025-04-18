import { useEffect } from 'react';

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
      <h1>Dev Tools Portal</h1>
      <Base64Tool />
      {/* Add more components: TimezoneTool, EpochTool, etc. */}
    </div>
  );
}

export default App;