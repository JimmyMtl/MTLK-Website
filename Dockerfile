FROM node:16-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

# Build for production
RUN npm run build --omit=dev
# Install `serve` to run the application
RUN npm install -g serve

#EXPOSE 5000

RUN ls -la ./build

# Run application
#CMD ["npx", "serve", "-s", "build"]
#CMD ["npm", "run","start"]