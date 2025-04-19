FROM node:22-alpine AS frontend

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the WASM binary
FROM golang:1.23-alpine AS wasm
WORKDIR /wasm
COPY main.go ./
RUN GOOS=js GOARCH=wasm go build -o main.wasm main.go

# Copy wasm_exec.js
RUN cp $(go env GOROOT)/misc/wasm/wasm_exec.js ./

# Final build with built wasm and React dev server
FROM node:22-alpine

WORKDIR /app

# Copy frontend and WASM build output
COPY --from=frontend /app /app
COPY --from=wasm /wasm/main.wasm /app/public/
COPY --from=wasm /wasm/wasm_exec.js /app/public/

EXPOSE 3000

CMD ["npm", "start"]
