import { ContactController } from './contact.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { contactSchema } from './model/contact.model';
import { ContactService } from './contact.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'contact',
        collection: 'contact',
        schema: contactSchema,
      },
    ]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
