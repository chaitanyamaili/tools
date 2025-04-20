# Use an official Node.js LTS image
FROM node:lts-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose the default port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]