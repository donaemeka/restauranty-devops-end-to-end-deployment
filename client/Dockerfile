# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci               # ✅ Clean install (faster, more reliable)
COPY . .
RUN npm run build        # ✅ Creates optimized production build

# Stage 2: Serve with nginx (production web server)
FROM nginx:alpine
# Copy built React app to nginx serving directory
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]  # ✅ Production server