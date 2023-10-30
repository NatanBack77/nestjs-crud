FROM node:alpine AS cori

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY  . .

FROM node:alpine


WORKDIR /app

COPY --from=cori /app /app

EXPOSE 3000

CMD [ "npm" ,"start"]



