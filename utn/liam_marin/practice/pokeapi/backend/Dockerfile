FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json tsconfig*.json src ./
RUN npm install && npm run build

FROM node:18-alpine
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder package*.json dist ./
USER node
RUN npm install --production
CMD npm start
