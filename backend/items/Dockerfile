# Use Node.js for backend service
FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Items service runs on port 3003
EXPOSE 3003

# Start the Node.js server (not npm start)
CMD ["node", "server.js"]