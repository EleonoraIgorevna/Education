# Education

docker build . --network=host -t front -f front/Dockerfile 
docker build .  -t front -f front/Dockerfile 

docker build . --network=host -t front -f front/Dockerfile 

# ARG FRONTEND_PORT
# FROM docker-proxy.artifactory.tcsbank.ru/node:lts-alpine3.17 as build
# WORKDIR - рабочая директория внутри контейнера
# пишет путь от корневой папки, где будем запускать docker-compose
#  COPY копируем файлы внутрь контейнера
# CMD ['npm','start']
# RUN npm start