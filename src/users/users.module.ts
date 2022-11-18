import { AuthModule } from './../auth/auth.module';
import { AuthService } from './../auth/auth.service';
import { LocalAuthGuard } from './../auth/local-auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersControllers } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from './model/users.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  controllers: [UsersControllers],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
