import {
  contactDocument,
} from './model/common.model';
import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  createContactUsDto,
} from './dto/common.dto';

@Injectable()
export class SharedService {
  constructor(
    @InjectModel('contact') private readonly contactModel: Model<contactDocument>,
  ) {}

  async addContact(createContactUsDto: createContactUsDto) {
    try {
      const newContactData = new this.contactModel({
        name: createContactUsDto.name,
        email: createContactUsDto.email,
        subject: createContactUsDto.subject,
        message: createContactUsDto.message
      });
      const results = await newContactData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllContactMessages(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.contactModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }
}