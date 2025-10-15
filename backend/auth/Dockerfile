# Start with Node.js 18 on Alpine Linux (small and fast)
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of our application code
COPY . .

# Tell Docker this container uses port 3001
EXPOSE 3001

# Command to start the application
CMD ["node", "server.js"]