# Step 1: Builder image
FROM node:22.15.0-alpine AS builder
WORKDIR /dsewebsite

# Install build dependencies (for node-gyp, if needed)
RUN apk add --no-cache libc6-compat

# Install dependencies
COPY dsewebsite/package*.json ./
RUN npm ci

# Copy all source files
COPY dsewebsite .

# Build the production app
RUN npm run build

# Step 2: Production image (using nginx)
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy built static files from builder
COPY --from=builder /dsewebsite/dist .      # For Vite
# COPY --from=builder /dsewebsite/build .   # For CRA, uncomment if using CRA

# Copy nginx config (optional but recommended)
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
