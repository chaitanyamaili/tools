# 🛠️ Tools Portal

A lightweight, browser-based developer portal built using **React**, **Go (WASM)**, and deployed via **GitHub Pages**. It features essential day-to-day developer utilities packed into a single UI.

## ✨ Features

- 🕒 Timezone Converter
- 🔢 Base64 Encode / Decode
- 📦 JSON Formatter / Validator
- 🔐 Hash Generators (MD5, SHA256)
- 📅 Epoch ↔ Human Date Converter

## ⚙️ Tech Stack

- **Frontend:** React + TailwindCSS
- **Logic:** Go (compiled to WebAssembly)
- **Deployment:** GitHub Pages (via GitHub Actions)

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/chaitanyamaili/tools.git
cd tools
```

### 2. Install Node dependencies

```bash
npm install
```

### 3. Build the Go WASM binary

```bash
GOOS=js GOARCH=wasm go build -o public/main.wasm main.go
cp $(go env GOROOT)/misc/wasm/wasm_exec.js public/
```

### 4. Run the app locally

```bash
npm start
```

---

## 🚢 Deployment

Push to `main` branch and GitHub Actions will auto-deploy to GitHub Pages.

> Ensure `package.json` has this:
>
> ```json
> "homepage": "https://chaitanyamaili.github.io/tools"
> ```

---

## 🧪 Add Your Own Tools

To add new tools:
1. Create a Go function in `main.go`
2. Expose it via `js.Global().Set(...)`
3. Add a new React component that calls the WASM-bound function

---

## 📄 License

[MIT](LICENSE)

---

Made with ❤️ by [@chaitanyamaili](https://github.com/chaitanyamaili)

