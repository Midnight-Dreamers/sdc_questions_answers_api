FROM postgres:latest

run mkdir /CSVs/

COPY *.csv /CSVs/

COPY ../schema.sql /docker-entrypoint-initdb.d
