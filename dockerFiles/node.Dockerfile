FROM node:latest

COPY server

RUN npm install

EXPOSE 1234

CMD npm start
