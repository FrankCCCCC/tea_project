# TAG: node_react_nginx_pre_build
FROM nginx
RUN apt-get update
RUN apt-get install curl sudo -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt install nodejs -y
RUN npm install react-scripts -g