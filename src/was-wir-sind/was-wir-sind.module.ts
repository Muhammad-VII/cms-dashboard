import { WasWirSindController } from './was-wir-sind.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wasWirSindPageSchema } from './model/was-wir-sind.model';
import { WasWirSindService } from './war-wir-sind.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'was-wir-sind', collection: 'was-wir-sind', schema: wasWirSindPageSchema}])],
  controllers: [WasWirSindController],
  providers: [WasWirSindService]
})
export class WasWirSindModule {}
