FROM node:latest

mkdir /server/

COPY server /server/

RUN npm install

EXPOSE 1234

CMD npm start
