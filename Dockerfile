# Stage 1: Build the Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire application code
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Stage 2: Serve the Angular app with NGINX
FROM nginx:1.23-alpine

# Remove the default NGINX contents
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/my-app .  # Ensure 'my-app' matches the output path from angular.json

# Expose the port that NGINX is serving on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
