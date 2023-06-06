
FROM node:lts-alpine3.17 
WORKDIR /opt/test-project
COPY .npmrc ./back/back-server.js ./back/package*.json ./
RUN npm install
EXPOSE 9999
CMD ["node","back-server.js"]
