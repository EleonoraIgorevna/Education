
FROM node:lts-alpine3.17 
WORKDIR /opt/test-project
COPY .npmrc ./front/front-server.js ./front/package*.json ./
RUN npm install
COPY ./front/public ./public
EXPOSE 8888
CMD ["node","front-server.js"]


