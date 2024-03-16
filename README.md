# Nest microservices RabbitMQ Postgres Redis
https://github.com/Jon-Peppinck/messenger-api 

Part 1
https://www.youtube.com/watch?app=desktop&v=LJwZxSD1QOM 

Part 2
https://www.youtube.com/watch?v=m_1ZoJSi0kI 

Part 3
https://www.youtube.com/watch?v=rPkupXmPAR4


Client -> API -> Auth -> PG 
            | -> CHAT -> Presense service -> Call
             Redis (For caching)
RabbitMQ as message broker 

1. Setting up microserrvice with NestJs
```bash
npm i -g @nestjs/cli 
nest -v
```

2. Run rabbitMQ in docker
```bash
cd api
sudo docker compose up
``` 
http://localhost:15672/
- user
- pass

3. Creating new nestjs API service
```bash
nest new api
cd api
nest generate app auth 
nest generate app chat
nest generate app presence
nest g library shared
npm i @nestjs/config @nestjs/microservices amqplib amqp-connection-manager 

npm install --save @nestjs/typeorm typeorm pg
``` 

```bash
npm run start:dev auth
npm run start:dev api

``` 

- add .env file to api folder
```bash
RABBITMQ_DEFAULT_USER=user
RABBITMQ_DEFAULT_PASS=pass 

RABBITMQ_USER=user
RABBITMQ_PASS=pass
RABBITMQ_HOST=rabbitmq:5672

RABBITMQ_AUTH_QUEUE=auth_queue
RABBITMQ_PRESENCE_QUEUE=presence_queue
RABBITMQ_CHAT_QUEUE=chat_queue

POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=messenger

POSTGRES_URI=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB}

PGADMIN_DEFAULT_EMAIL=jon@gmail.com
PGADMIN_DEFAULT_PASSWORD=password

JWT_SECRET=secret

REDIS_PASS=password
REDIS_URI=redis://default:${REDIS_PASS}@redis:6379 

``` 

