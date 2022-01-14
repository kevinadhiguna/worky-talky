FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY server.js .
COPY views/ views/
COPY models/ models/
COPY controllers/ controllers/

EXPOSE 4000

CMD [ "yarn", "start" ]
