#FROM node:16-alpine
#WORKDIR /app
#COPY ./package.json ./package.json
#RUN #mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
#RUN npm install
#COPY . .
## Install `serve` to run the application
#RUN npm install -g serve
#
#
## Build for production
#RUN npm run build --omit=dev
#
#RUN ls -la
## Run application
#CMD ["serve", "-s", "build"]
#RUN ["npm", "run","start"]
FROM node:alpine AS build
WORKDIR /client
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /client/build /usr/share/nginx/html
