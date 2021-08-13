FROM node:latest

RUN apt-get update \
  && apt-get install -y \
  && mkdir code

COPY backend/package.json /code/package.json

RUN cd code \
  && npm install \
  && npm run build

EXPOSE 8080

CMD cd code/backend && npm run start 