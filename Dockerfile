# Stage 1: Build the app
FROM node:22.15.0-alpine AS builder

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Install dependencies and build the app
COPY package*.json ./
RUN npm ci

# Copy the rest of the app sources
COPY . .

# Build static files using vite
RUN npm run build

# Stage 2: Run the app with Vite Preview
FROM node:22.15.0-alpine AS runner

WORKDIR /app

# Install only 'vite' to run vite preview (doesn't need full node_modules)
RUN npm install -g vite@5.4.1

# Copy built static files and any necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/vite.config.* ./

# Expose the preview port
EXPOSE 8080

# Set production environment
ENV NODE_ENV=production

# Run preview server (per your package.json)
CMD ["vite", "preview", "--port", "8080", "--host", "0.0.0.0"]
