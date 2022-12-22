import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { homePageDto } from './dto/home.dto';
import { homePageDocument } from './model/home.model';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel('home') private readonly homeModel: Model<homePageDocument>,
  ) {}

  async addHomePageSection(homePageDto: homePageDto) {
    try {
      const newSectionData = new this.homeModel({
        due: homePageDto.due,
        ar: homePageDto.ar,
        en: homePageDto.en,
        image: homePageDto.image,
        media: homePageDto.media,
        hidden: homePageDto.hidden,
        btnHidden: homePageDto.btnHidden,
      })
      await newSectionData.save();
      const allSections = await this.homeModel.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, homePageDto: homePageDto) {
    try {
      const results = await this.homeModel.findById(id);
      if (results) {
        results.due = homePageDto.due;
        results.ar = homePageDto.ar;
        results.en = homePageDto.en;
        results.image = homePageDto.image;
        results.media = homePageDto.media;
        results.hidden = homePageDto.hidden;
        results.btnHidden = homePageDto.btnHidden;
        await results.save();
        const allSections = await this.homeModel.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.homeModel.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.homeModel.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.homeModel.deleteMany({});
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
      const results = await this.homeModel.findById
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
    const query = await this.homeModel
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments)
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }
}