FROM gcr.io/distroless/nodejs:18 as runtime

ENV NODE_ENV production

COPY /next.config.js ./
COPY /.next ./.next
COPY /public ./public
COPY /node_modules ./node_modules

ENV PORT=8080

CMD ["./node_modules/next/dist/bin/next", "start"]
