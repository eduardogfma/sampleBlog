# Dockerfile PostgreSQL example for local development
# Author: Eduardo A.
# Date: 18/10/2020

FROM postgres
#ENV POSTGRES_USER postgres
#ENV POSTGRES_PASSWORD example
ENV POSTGRES_DB testDb
ADD CreateTable.sql /docker-entrypoint-initdb.d/