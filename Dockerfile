FROM node:lts-alpine

RUN npm install

CMD node index.js