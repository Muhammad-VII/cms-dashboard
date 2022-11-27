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
        image: addSectionDto.image,
        images: addSectionDto.images,
        hidden: addSectionDto.hidden,
        dir: addSectionDto.dir
      })
      await newSectionData.save();
      const allSections = await this.sectionModel.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateSection(id: string, addSectionDto: addSectionDto) {
    try {
      const results = await this.sectionModel.findById(id);
      if (results) {
        results.title = addSectionDto.title;
        results.subTitle = addSectionDto.subTitle;
        results.extraTitle = addSectionDto.extraTitle;
        results.description = addSectionDto.description;
        results.image = addSectionDto.image;
        results.images = addSectionDto.images;
        results.hidden = addSectionDto.hidden;
        results.dir = addSectionDto.dir;
        await results.save();
      }
      return results;
    } catch (error) {
      return error;
    }
  }
  
  async deleteSection(id: string) {
    try {
      const deleteSection = await this.sectionModel.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.sectionModel.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.sectionModel.deleteMany({});
      console.log(results);
      if (results.deletedCount != 0) {
        return `${results.deletedCount} section deleted`;
      } else {
        return 'Something went wrong';
      }
    } catch (error) {
      return error;
    }
  }

  async getSectionById(id: string) {
    const query = await this.sectionModel.findById(id);
    return query;
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