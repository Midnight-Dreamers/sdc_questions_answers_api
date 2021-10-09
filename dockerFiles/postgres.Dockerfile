FROM postgres:latest

run mkdir /CSVs/

COPY CSVs/*.csv /CSVs/

RUN chmod a+rx /CSVs

COPY schema.sql /docker-entrypoint-initdb.d
