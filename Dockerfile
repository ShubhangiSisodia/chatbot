FROM node:14-alpine
MAINTAINER label="Rohan Rustagi"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]