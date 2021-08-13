FROM node:16

RUN apt-get update \
  && apt-get install -y 

EXPOSE 8080

CMD cd code/backend && npm run start