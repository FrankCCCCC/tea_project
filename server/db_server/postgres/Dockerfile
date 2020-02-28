# TAG: postgres
FROM postgres
RUN apt-get update
RUN apt-get install curl sudo -y

ENV POSTGRES_DB playdb
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 0910shc

COPY install.sh /docker-entrypoint-initdb.d/
WORKDIR /

EXPOSE 5432
# ENTRYPOINT ["npm", "run", "start"]