FROM node:slim

WORKDIR /app
RUN npm install -g npm@8.3.0
COPY ./app/package*.json ./
RUN npm install
