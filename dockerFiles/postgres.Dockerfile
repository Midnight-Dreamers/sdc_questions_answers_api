run mkdir /CSVs/

COPY *.csv /CSVs/

RUN chmod a+rx /CSVs

COPY schema.sql /docker-entrypoint-initdb.d

