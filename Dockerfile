FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm install -g sequelize-cli

RUN sequelize db:migrate

RUN sequelize db:seed:all

EXPOSE 3000


