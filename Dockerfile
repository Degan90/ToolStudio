# Base Docker
FROM node:alpine3.14 AS builder

COPY . .

RUN npm install
RUN npm run build

# Dashboard
FROM alpine:latest AS dashboard
WORKDIR /opt/toolstudio
