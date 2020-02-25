# TAG: db_server
FROM ubuntu
RUN apt-get update
# RUN apt-get install curl sudo iputils-ping net-tools -y
RUN apt-get install curl sudo -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt install nodejs -y

COPY ./files /static_server
WORKDIR /static_server
RUN npm install
RUN npm install mocha -g

EXPOSE 5000
ENTRYPOINT ["npm", "run", "start"]