// src/components/Home.tsx
export function Home() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">🛠️ Developer Tools Portal</h1>
        <p className="mb-2">
          Welcome! This is a lightweight collection of handy tools for developers:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Base64 Encoder/Decoder:</strong> Encode and decode Base64 strings.</li>
          <li><strong>Timezone Converter:</strong> Convert date/time between timezones.</li>
          <li><strong>Epoch ↔ Human Date:</strong> Convert epoch timestamps to readable dates and vice versa.</li>
          <li><strong>JSON Formatter:</strong> Beautify and validate JSON input.</li>
          <li><strong>Hash Generator:</strong> Generate MD5, SHA256, etc.</li>
          <li><strong>UUID Generator:</strong> Generate one or multiple UUIDs (v4).</li>
        </ul>
        <p className="mt-4">Click a tool from the left menu to get started.</p>
      </div>
    );
  }