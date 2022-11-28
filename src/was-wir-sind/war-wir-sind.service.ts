import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wasWirSindDto } from './dto/was-wir-sind.dto';
import { wasWirSindPageDocument } from './model/was-wir-sind.model';

@Injectable()
export class WasWirSindService {
  constructor(
    @InjectModel('was-wir-sind') private readonly wasWirSind: Model<wasWirSindPageDocument>,
  ) {}

  async addHomePageSection(wasWirSindDto: wasWirSindDto) {
    try {
      const newSectionData = new this.wasWirSind({
        title: wasWirSindDto.title,
        subTitle: wasWirSindDto.subTitle,
        extraTitle: wasWirSindDto.extraTitle,
        description: wasWirSindDto.description,
        image: wasWirSindDto.image,
        media: wasWirSindDto.media,
        hidden: wasWirSindDto.hidden,
        dir: wasWirSindDto.dir
      })
      await newSectionData.save();
      const allSections = await this.wasWirSind.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, wasWirSindDto: wasWirSindDto) {
    try {
      const results = await this.wasWirSind.findById(id);
      if (results) {
        results.title = wasWirSindDto.title;
        results.subTitle = wasWirSindDto.subTitle;
        results.extraTitle = wasWirSindDto.extraTitle;
        results.description = wasWirSindDto.description;
        results.image = wasWirSindDto.image;
        results.media = wasWirSindDto.media;
        results.hidden = wasWirSindDto.hidden;
        results.dir = wasWirSindDto.dir;
        await results.save();
      }
      return results;
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.wasWirSind.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirSind.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.wasWirSind.deleteMany({});
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
    try {
      const results = await this.wasWirSind.findById
      (id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSections(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.wasWirSind
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }
}