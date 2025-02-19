FROM node:20-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN npm install --global pnpm@latest
RUN npm install --global turbo@latest
COPY . .
RUN pnpm turbo prune docs --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
RUN npm install --global pnpm@latest

WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN pnpm install

COPY --from=builder /app/out/full/ .
RUN pnpm turbo build


FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Ref: reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/docs/.next/static ./apps/docs/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/docs/public ./apps/docs/public

CMD node apps/docs/server.js