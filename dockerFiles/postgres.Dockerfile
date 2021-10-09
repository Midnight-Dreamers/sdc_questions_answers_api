FROM postgres:latest

run mkdir /CSVs/

COPY dockerFiles/*.csv /CSVs/

RUN chmod a+rx /CSVs

COPY schema.sql /docker-entrypoint-initdb.d
