FROM node:22.15.0-alpine AS builder

WORKDIR /app

# It's good practice to copy only the necessary files first to leverage Docker's cache
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runner Stage ---
FROM node:22.15.0-alpine AS runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Copy production dependencies from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8080

ENV NODE_ENV=production

# The CMD is correct and will use the PORT variable provided by Cloud Run
CMD ["sh", "-c", "npm run start"]