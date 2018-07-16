FROM node:8.10.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build

EXPOSE 8080
CMD node server.js  
