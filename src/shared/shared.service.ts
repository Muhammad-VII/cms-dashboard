import {
  addSectionDocument,
  contactDocument,
} from './model/common.model';
import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  addSectionDto,
  createContactUsDto,
} from './dto/common.dto';

@Injectable()
export class SharedService {
  constructor(
    @InjectModel('contact') private readonly contactModel: Model<contactDocument>,
    @InjectModel('section') private readonly sectionModel: Model<addSectionDocument>,
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

  async addSection(addSectionDto: addSectionDto) {
    try {
      const newSectionData = new this.sectionModel({
        title: addSectionDto.title,
        subTitle: addSectionDto.subTitle,
        extraTitle: addSectionDto.extraTitle,
        description: addSectionDto.description,
        image: addSectionDto.image
      });
      const results = await newSectionData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSections(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.sectionModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }
}