# DEPENDENCY STAGE
FROM node:alpine
COPY package.json package-lock.json tsconfig.json ./
RUN npm install
# START STAGE
ADD public public
ADD src src
ADD .env.development /
ADD tailwind.config.js /
ENTRYPOINT ["npm", "run", "start"]
