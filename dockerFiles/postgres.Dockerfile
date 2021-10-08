FROM postgres:latest

COPY *.csv

COPY ../schema.sql /docker-entrypoint-initdb.d
