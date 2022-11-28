import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wasWirTunDto } from './dto/was-wir-tun.dto';
import { wasWirTunPageDocument } from './model/was-wir-tun.model';

@Injectable()
export class WasWirTunService {
  constructor(
    @InjectModel('was-wir-tun') private readonly wasWirTun: Model<wasWirTunPageDocument>,
  ) {}

  async addHomePageSection(wasWirTunDto: wasWirTunDto) {
    try {
      const newSectionData = new this.wasWirTun({
        title: wasWirTunDto.title,
        subTitle: wasWirTunDto.subTitle,
        extraTitle: wasWirTunDto.extraTitle,
        description: wasWirTunDto.description,
        image: wasWirTunDto.image,
        media: wasWirTunDto.media,
        hidden: wasWirTunDto.hidden,
        dir: wasWirTunDto.dir
      })
      await newSectionData.save();
      const allSections = await this.wasWirTun.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, wasWirTunDto: wasWirTunDto) {
    try {
      const results = await this.wasWirTun.findById(id);
      if (results) {
        results.title = wasWirTunDto.title;
        results.subTitle = wasWirTunDto.subTitle;
        results.extraTitle = wasWirTunDto.extraTitle;
        results.description = wasWirTunDto.description;
        results.image = wasWirTunDto.image;
        results.media = wasWirTunDto.media;
        results.hidden = wasWirTunDto.hidden;
        results.dir = wasWirTunDto.dir;
        await results.save();
      }
      return results;
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.wasWirTun.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirTun.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.wasWirTun.deleteMany({});
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
      const results = await this.wasWirTun.findById
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
    const query = await this.wasWirTun
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