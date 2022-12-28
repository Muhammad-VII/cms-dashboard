import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { languegeDto } from './dto/settings.dto';
import { languegeDocument } from './model/settings.model';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel('languege')
    private readonly languageModel: Model<languegeDocument>,
  ) {}

  async addLanguege(languegeDto: languegeDto) {
    try {
      const newLanguegeData = new this.languageModel({
        name: languegeDto.name,
        code: languegeDto.code,
        hidden: languegeDto.hidden,
        flag: languegeDto.flag,
      });
      await newLanguegeData.save();
      const allSections = await this.languageModel.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateLanguege(id: string, languegeDto: languegeDto) {
    try {
      const results = await this.languageModel.findById(id);
      if (results) {
        results.name = languegeDto.name;
        results.code = languegeDto.code;
        results.hidden = languegeDto.hidden;
        results.flag = languegeDto.flag;
        await results.save();
        const allSections = await this.languageModel.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteLanguegeById(id: string) {
    try {
      const deleteSection = await this.languageModel.findByIdAndDelete(id);
      console.log(deleteSection);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.languageModel.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }
  
  async getAllLangueges(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.languageModel
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    if (query.length == 0) {
      return 'No languege found';
    } else {
      return query;
    }
  }
}
