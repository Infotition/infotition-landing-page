FROM node:14

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --only=prod

COPY public /usr/src/app/public

COPY dist /usr/src/app/dist

EXPOSE 3000

CMD ["npm", "start"]
