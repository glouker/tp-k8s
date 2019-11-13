FROM node:lst-alpine

RUN npm install

CMD node index.js