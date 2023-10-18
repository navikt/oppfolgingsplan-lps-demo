FROM gcr.io/distroless/nodejs18-debian11@sha256:61bda9d564bf1a64a6108dc3e318cae214a3b732cf413cc32e10c7fa2dfcc828

ENV NODE_ENV production

COPY /next.config.js ./
COPY /.next ./.next
COPY /public ./public
COPY /node_modules ./node_modules

ENV PORT=8080

CMD ["./node_modules/next/dist/bin/next", "start"]
