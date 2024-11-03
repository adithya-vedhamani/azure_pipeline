FROM node:20
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm i
EXPOSE 80
CMD ["node", "app.js"]
