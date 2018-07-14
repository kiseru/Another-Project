FROM node:9.11.2

COPY . .
RUN node install

EXPOSE 8080
CMD node server.js  
