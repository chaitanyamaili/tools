# 🛠 Developer Tools Portal

A lightweight web app offering essential tools for developers. Built with **React**, **Tailwind CSS**, and deployed via **GitHub Pages**.

### ✨ Features

- 🕒 Timezone Converter
- 📅 Epoch ↔️ Human Date Converter
- 📦 JSON Formatter / Validator
- 🔢 Base64 Encode/Decode
- 🔐 Hash Generators (MD5, SHA256)
- 🆔 UUID Generator (coming soon)

### 🚀 Live Demo

👉 [Visit the Portal](https://chaitanyamaili.in/tools)

### 🧑‍💻 Local Development

#### Prerequisites

- Node.js (LTS)
- Docker (optional)

#### Run locally

```bash
npm install
npm start
```
👉 [Visit the local version](http://localhost:3000)

#### 🐳 Run using docker

```bash
docker build -t dev-tools-portal .
docker run -p 3000:3000 dev-tools-portal
```

### 🛠 GitHub Pages Deployment

Handled via GitHub Actions. On push to main, the app is built and deployed automatically

### 📂 Project Structure

```bash
.
├── Dockerfile
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Base64Tool.tsx
│   │   ├── EpochConverter.tsx
│   │   ├── HashGenerator.tsx
│   │   ├── JSONFormatter.tsx
│   │   └── TimezoneConverter.tsx
│   ├── index.tsx
│   └── styles
│       └── index.css
├── tailwind.config.js
└── tsconfig.json
```
