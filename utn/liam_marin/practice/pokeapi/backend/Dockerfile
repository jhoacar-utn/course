FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig*.json ./
COPY src src
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app
RUN chown node:node .
USER node
COPY --chown=node:node package*.json ./
RUN npm install --omit=dev
COPY --from=builder --chown=node:node /usr/src/app/dist dist
CMD npm start
