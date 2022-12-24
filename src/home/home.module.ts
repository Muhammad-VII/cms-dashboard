import { HomeController } from './home.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { homePageSchema } from './model/home.model';
import { HomeService } from './home.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'home_due', collection: 'home_due', schema: homePageSchema },
      { name: 'home_en', collection: 'home_en', schema: homePageSchema },
      { name: 'home_ar', collection: 'home_ar', schema: homePageSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
