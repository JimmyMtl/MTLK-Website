FROM node:16-alpine
WORKDIR /app
COPY ./package.json ./
RUN apt install xsel
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .


# Install `serve` to run the application
RUN npm install -g serve


# Build for production
RUN npm run build --omit=dev
#EXPOSE 5000

RUN ls -la ./build

# Run application
CMD ["serve", "-s", "build"]
#CMD ["npm", "run","start"]