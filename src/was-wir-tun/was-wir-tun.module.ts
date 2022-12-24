import { WasWirTunController } from './was-wir-tun.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wasWirTunPageSchema } from './model/was-wir-tun.model';
import { WasWirTunService } from './war-wir-tun.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'was-wir-tun_due',
        collection: 'was-wir-tun_due',
        schema: wasWirTunPageSchema,
      },
      {
        name: 'was-wir-tun_en',
        collection: 'was-wir-tun_en',
        schema: wasWirTunPageSchema,
      },
      {
        name: 'was-wir-tun_ar',
        collection: 'was-wir-tun_ar',
        schema: wasWirTunPageSchema,
      },
    ]),
  ],
  controllers: [WasWirTunController],
  providers: [WasWirTunService],
})
export class WasWirTunModule {}
