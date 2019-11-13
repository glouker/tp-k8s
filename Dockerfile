FROM node:lts-alpine

WORKDIR /app
ADD . /app/

RUN npm install

CMD node index.js