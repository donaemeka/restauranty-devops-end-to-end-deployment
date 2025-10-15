# Same base image for consistency
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

# This service runs on port 3002
EXPOSE 3002

CMD ["node", "server.js"]