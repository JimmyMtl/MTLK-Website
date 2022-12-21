FROM node:16-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

# Build for production
RUN npm run build --omit=dev
RUN ls -la ./build
# Install `serve` to run the application
RUN npm install -g serve

#EXPOSE 5000

# Run application
CMD ["serve","-s","build"]
#CMD ["npm", "run","start"]