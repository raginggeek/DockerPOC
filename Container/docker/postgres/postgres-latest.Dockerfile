FROM postgres:latest
COPY database/* /docker-entrypoint-initdb.d/