# Base image
FROM node:22.15.0-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /dsewebsite
RUN apk add --no-cache libc6-compat

COPY dsewebsite/package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /dsewebsite
COPY --from=deps /dsewebsite/node_modules ./node_modules
COPY dsewebsite .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /dsewebsite

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /dsewebsite/public ./public
COPY --from=builder --chown=nextjs:nodejs /dsewebsite/.next ./.next
COPY --from=builder /dsewebsite/node_modules ./node_modules
COPY --from=builder /dsewebsite/package.json ./package.json

USER nextjs

EXPOSE 8080
ENV PORT 8080

CMD ["npm", "start"]
