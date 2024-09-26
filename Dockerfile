# Build stage
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Angular CLI locally
RUN npm install @angular/cli --save-dev

# Copy the rest of the application code
COPY . .

# Set NODE_OPTIONS to use legacy OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the Angular app
RUN npm run build

# Serve the Angular app with NGINX
FROM nginx:1.23-alpine

# Set working directory for NGINX
WORKDIR /usr/share/nginx/html

# Remove existing content in the NGINX directory
RUN rm -rf *

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/angular-app/browser .

# Expose port 80
EXPOSE 80

# Start NGINX server
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
