import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { languegesSchema } from './model/settings.model';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'languege', schema: languegesSchema }
    ]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule {}
