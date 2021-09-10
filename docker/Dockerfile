# Base Docker
FROM node:alpine3.14 AS builder

WORKDIR /project
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

CMD ["yarn", "start"]
