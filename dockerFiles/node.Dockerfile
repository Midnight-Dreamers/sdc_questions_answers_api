FROM node:latest

WORKDIR /sdc_questions_answers_api

run mkdir /server/

COPY server /server/

RUN npm install

EXPOSE 1234

CMD npm start
