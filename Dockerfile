# Build the Angular app
FROM node:20-alpine as build

WORKDIR /app

# Set the legacy OpenSSL option for Node.js
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# Serve the Angular app with Nginx
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/my-app .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
