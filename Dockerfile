FROM node:16-alpine
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .


# Install `serve` to run the application
RUN npm install -g serve


# Build for production
RUN npm run build --omit=dev
#EXPOSE 3000

RUN ls -la
#COPY ./build ./build
# Run application
CMD ["serve", "-s", "build"]
#RUN ["npm", "run","start"]