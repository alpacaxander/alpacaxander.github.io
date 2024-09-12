FROM node:alpine AS build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install
ADD public public
ADD src src
ENTRYPOINT ["npm", "run", "start"]
