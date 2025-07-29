FROM node:22.15.0-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:22.15.0-alpine AS runner

WORKDIR /app

RUN npm install -g vite@5.4.1

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/vite.config.* ./

EXPOSE 8080

ENV NODE_ENV=production

CMD ["sh", "-c", "vite preview --host 0.0.0.0 --port ${PORT:-4173}"]
