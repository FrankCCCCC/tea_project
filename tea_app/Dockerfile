# TAG: db_server
FROM nginx
RUN apt-get update
RUN apt-get install curl sudo -y

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./files /tea_app
WORKDIR /tea_app

EXPOSE 80
# ENTRYPOINT ["service", "nginx", "start"]