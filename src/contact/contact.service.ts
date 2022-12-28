import { MailService } from './../mail/mail.service';
import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { contactDto } from './dto/contact.dto';
import { contactDocument } from './model/contact.model';


@Injectable()
export class ContactService {
  constructor(
    @InjectModel('contact') private readonly contact: Model<contactDocument>, private _MailService: MailService
  ) {}

  async addNewMessage(contactDto: contactDto) {
    try {
      const newMessage = new this.contact({
        name: contactDto.name,
        email: contactDto.email,
        subject: contactDto.subject,
        message: contactDto.message
      })
      await newMessage.save();
      this._MailService.sendContactUsEmail(contactDto);
      return newMessage;
    } catch (error) {
      return error;
    }
  }

  async getAllMessages() {
    try {
      const allMessages = await this.contact.find({});
      return allMessages;
    } catch (error) {
      return error;
    }
  }

  async deleteMessage(id: string) {
    try {
      const deletedData = await this.contact.findByIdAndDelete(id);
      if (deletedData == null) {
        return { message: 'No data found' };
      } else {
        const allMessages = await this.contact.find({});
        return allMessages;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllMessages() {
    try {
      const deletedData = await this.contact.deleteMany({});
      if (deletedData.deletedCount == 0) {
        return { message: 'No data found' };
      } else {
        const allMessages = await this.contact.find({});
        return allMessages;
      }
    } catch (error) {
      return error;
    }
  }
}