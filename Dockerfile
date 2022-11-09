FROM node:14.17.4 as build
WORKDIR /src
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
CMD yarn start
