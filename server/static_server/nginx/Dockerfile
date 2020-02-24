FROM ubuntu
RUN apt-get update
RUN apt-get install curl sudo -y
RUN sudo apt-get install nginx -y

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
WORKDIR /
EXPOSE 80
ENTRYPOINT [ "sudo", "service", "nginx", "start" ]