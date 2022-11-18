import { SharedController } from './shared/shared.controller';
import { ValidateRequestMiddleware } from './validate-request.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ChatGateway } from './gateways/event.gateway';
import { HttpModule } from '@nestjs/axios';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin-akmal:hTzJL0z6If4dm02w@cluster0.1wzfb4h.mongodb.net/cms-dashboard?retryWrites=true&w=majority`,
    ),
    AuthModule,
    UsersModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 5,
      limit: 5
    }),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateRequestMiddleware).forRoutes(SharedController);
  }
}
