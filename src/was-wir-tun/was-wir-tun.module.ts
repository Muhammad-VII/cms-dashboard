import { WasWirTunController } from './was-wir-tun.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wasWirTunPageSchema } from './model/was-wir-tun.model';
import { WasWirTunService } from './war-wir-tun.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'was-wir-tun', collection: 'was-wir-tun', schema: wasWirTunPageSchema}])],
  controllers: [WasWirTunController],
  providers: [WasWirTunService]
})
export class WasWirTunModule {}
