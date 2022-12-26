import { ContactPageController } from './contact-page.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { contactPageSchema } from './model/contact-page.model';
import { ContactPageService } from './contact-page.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'contact_page_due', collection: 'contact_page_due', schema: contactPageSchema },
      { name: 'contact_page_en', collection: 'contact_page_en', schema: contactPageSchema },
      { name: 'contact_page_ar', collection: 'contact_page_ar', schema: contactPageSchema },
    ]),
  ],
  controllers: [ContactPageController],
  providers: [ContactPageService],
})
export class ContactPageModule {}
