FROM node:lts-alpine

ADD .

RUN npm install

CMD node index.js