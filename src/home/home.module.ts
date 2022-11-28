import { HomeController } from './home.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { homePageSchema } from './model/home.model';
import { HomeService } from './home.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'home', schema: homePageSchema}])],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
