ARG ARCH=
ARG IMAGE_BASE=20-alpine

#FROM ${ARCH}node:$IMAGE_BASE
FROM solengeu.jfrog.io/joern-docker-remote/${ARCH}node:$IMAGE_BASE
LABEL Name="Node.js Demo App" Version=4.9.9
LABEL org.opencontainers.image.source="https://github.com/benc-uk/nodejs-demoapp"
ENV NODE_ENV=production
WORKDIR /app

# For Docker layer caching, install dependencies BEFORE copying in the rest of the app
COPY package*.json ./
RUN npm install --production

# NPM is done, now copy in the rest of the project to the workdir
COPY / ./

# Port 3000 for our Express server
EXPOSE 3000
ENTRYPOINT ["npm", "start"]