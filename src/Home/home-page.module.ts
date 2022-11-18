import { homePageSchema } from './model/home-page.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { homePageService } from './home-page.service';
import { HomeController } from './home-page.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'HomePage', schema: homePageSchema}])],
  controllers: [HomeController],
  providers: [homePageService],
})
export class HomeModule {}
