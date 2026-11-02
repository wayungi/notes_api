FROM node:24-bookworm-slim AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY ./src ./src

COPY tsconfig.json .

RUN npm run build


FROM node:24-bookworm-slim AS production

WORKDIR /app

COPY package*.json .

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

USER node

CMD ["node", "dist/index.js"]








