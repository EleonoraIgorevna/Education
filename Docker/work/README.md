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


СЕРТИФИКАТЫ:
Скрипт для получения сертификатов, запускать в паgке, гле лежит этот скрипт с наименование файла для сервиса:
urp-rating-test.sh - это скрипт
s_e.i.pogorelova@ds-upr-form6s01156:/home/idm$ cd 
s_e.i.pogorelova@ds-upr-form6s01156:~$ ls
urp-rating-test.sh  urp-tasks-cert.sh
s_e.i.pogorelova@ds-upr-forms601156:~$ ./urp-rating-test1.sh 
Проверяем наличие файла - dh.pem 
s_e.i.pogorelova@:/etc/nginx/ssl/urp-rating-test1$ ls
server.crt  server.key  trustchain.pem
s_e.i.pogorelova@:/etc/nginx/ssl/urp-rating-test$ sudo openssl dhparam -out dh.pem 2048
Создаем новый конфиг в nginx для нового домена - urp-rating-test1.
NGINX:
Конфигурацию для проксирования можно прописать или через 
Папки Sites
sites-enabled - тут прописаны все работающие  в данный момент сервисы
sites-available - тут сервисы , которые мне доступны для запуска
Или через conf.d
-nginx -t
-p пробрасываем порты
-nginx -s reload
apt install nginx
certbot
python3-certbot-nginx
certbot --nginx -d mattermost.itexp.me
config nginx - искали затем конфигурационный файл nginx
cd /etc/nginx


КОМАНДЫ ДОКЕРА:
-docker search nginx -ищет образы в докерхабе
-docker pull nginx - добавляет эти образы
sudo docker container prune - удаляет все остановленные контейнеры
sudo docker images
sudo docker image rm 9f
sudo docker build -t eva_image .
sudo docker build -t eva_image . -f app/Dockerfile
docker exec -it mongo /bin/bash
docker container run mongo - качаем образ из докер хаба реджистри
docker pull выкачивает докер образ из докер хаба
локально на машину
docker image rm 45 -f
При запуске контейнера у нас запускается команда из CMD
Выполняем из 
docker build -t app_image .
docker build -t main_image .
docker container run -d -p 4002:4001 app_image
docker build -t app_image . -f ./service/Dockerfile 
docker build -t main_image . -f ./data-collection/Dockerfile
docker compose up -d
docker container logs d0
- docker-compose up -d
- docker-compose stop
- docker-compose star/rastart/reload/down
- docker logs api
- docker logs api(имя контейнера) - для просмотра логов контейнера, тут будут видны ошибки
sudo usermod -aG docker $USER
sudo docker container run  main_test
sudo docker exec -it magical_hellman /bin/sh
sudo docker exec -it magical_hellman /bin/bash
sudo docker container run -p 6000:4001 -d 863
. и ./
./ - докер файл сейчас лежит в той же папке, что и я нахожусь
sudo docker build -t main_test ./Dockerfile
docker pull nginx:stable-alpine
docker build -t eva/tinkoff-app-express . -f app/Dockerfile
docker exec -it mongo(имя твоей бд)  mongosh - заходить внутрь контейнера в БД
нашел в канале как билдить контейнеры на локальной машине, нужно запускать docker build с флагом --network=host
USER_DB='mongodb://127.0.0.1:6000/UserDB'
   ports:
      - 6000:27017

docker exec -it a47 /bin/sh
docker rmi