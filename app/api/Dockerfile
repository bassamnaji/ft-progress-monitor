FROM node:19

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY . .

RUN chown -R node:node ./

USER node

RUN npm i

RUN npm run build


