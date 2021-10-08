FROM node:latest

run mkdir /server/

COPY . /server/

WORKDIR /server

RUN npm install

EXPOSE 1234

CMD npm start
