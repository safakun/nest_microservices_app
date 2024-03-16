import { Module } from '@nestjs/common';

import { SharedModule } from '@app/shared';

import { AppController } from './app.controller';

@Module({
  imports: [
    SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
    SharedModule.registerRmq(
      'PRESENCE_SERVICE',
      process.env.RABBITMQ_PRESENCE_QUEUE,
    ),
  ],
  controllers: [AppController],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ClientProxyFactory, Transport } from '@nestjs/microservices';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: './.env',
//     })
//   ],
//   controllers: [AppController],
//   providers: [
//     AppService, 
//     {
//       provide: 'AUTH_SERVICE',
//       useFactory: (configService: ConfigService) => {
//         const USER = configService.get('RABBITMQ_USER');
//         const PASSWORD = configService.get('RABBITMQ_PASS');
//         const HOST = configService.get('RABBITMQ_HOST');
//         const QUEUE = configService.get('RABBITMQ_AUTH_QUEUE');

//         return ClientProxyFactory.create({
//           transport: Transport.RMQ,
//           options: {
//             urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
//             queue: QUEUE,
//             queueOptions: {
//               durable: true
//             }
//           }
//         });
//       },
//       inject: [ConfigService],
//       }
//   ],
// })
// export class AppModule {}
