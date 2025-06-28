FROM node:22.2.0-slim as BUILD_STAGE

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@8

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:alpine

WORKDIR /app

# Install pnpm in production stage
RUN npm install -g pnpm@8

COPY --from=BUILD_STAGE /app/package.json ./package.json
COPY --from=BUILD_STAGE /app/node_modules ./node_modules
COPY --from=BUILD_STAGE /app/.next ./.next
COPY --from=BUILD_STAGE /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]