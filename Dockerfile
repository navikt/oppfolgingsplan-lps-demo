FROM gcr.io/distroless/nodejs:18 as runtime

WORKDIR /app

COPY package.json /app/
COPY .next /app/
COPY public /app/public/

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "npm", "start" ]
