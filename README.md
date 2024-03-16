# Nest microservices RabbitMQ Postgres Redis

Part 1
https://www.youtube.com/watch?app=desktop&v=LJwZxSD1QOM 


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
nest g library shared
npm i @nestjs/config @nestjs/microservices amqplib amqp-connection-manager
``` 

```bash
npm run start:dev auth
npm run start:dev api

```