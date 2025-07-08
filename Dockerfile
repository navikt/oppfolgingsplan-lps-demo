FROM gcr.io/distroless/nodejs22-debian12@sha256:35c86c2d05ab83c58c02721cc7df586a7d4aedd9c18c5bd30181c21f1b94102c
WORKDIR /app

COPY package.json /app/
COPY .next/standalone /app/
COPY public /app/public/
COPY /.next/static ./.next/static

EXPOSE 3000

ENV NODE_ENV=production

CMD ["server.js"]
