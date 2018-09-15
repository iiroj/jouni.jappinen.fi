FROM node:10-alpine

WORKDIR /app

RUN apk add --no-cache tini \
    && npm i -g serve

COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm run lint \
    && npm run build \
    && npm run prune

ENV NODE_ENV=production

ENTRYPOINT ["tini", "--"]

CMD ["serve", "public"]
