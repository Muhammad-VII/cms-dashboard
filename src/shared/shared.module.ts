import { contactSchema } from './model/common.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'contact', schema: contactSchema}])],
  controllers: [SharedController],
  providers: [SharedService]
})
export class SharedModule {}
