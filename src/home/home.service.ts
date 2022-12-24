import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { homePageDto } from './dto/home.dto';
import { homePageDocument } from './model/home.model';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel('home_due')
    private readonly homeModelDue: Model<homePageDocument>,
    @InjectModel('home_en')
    private readonly homeModelEn: Model<homePageDocument>,
    @InjectModel('home_ar')
    private readonly homeModelAr: Model<homePageDocument>,
  ) {}

  // Start of Due language
  async addHomePageSection(homePageDto: homePageDto) {
    try {
      const newSectionData = new this.homeModelDue({
        title: homePageDto.title,
        subTitle: homePageDto.subTitle,
        extraTitle: homePageDto.extraTitle,
        description: homePageDto.description,
        image: homePageDto.image,
        media: homePageDto.media,
        hidden: homePageDto.hidden,
        btnHidden: homePageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.homeModelDue.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, homePageDto: homePageDto) {
    try {
      const results = await this.homeModelDue.findById(id);
      if (results) {
        results.title = homePageDto.title;
        results.subTitle = homePageDto.subTitle;
        results.extraTitle = homePageDto.extraTitle;
        results.description = homePageDto.description;
        results.image = homePageDto.image;
        results.media = homePageDto.media;
        results.hidden = homePageDto.hidden;
        results.btnHidden = homePageDto.btnHidden;
        await results.save();
        const allSections = await this.homeModelDue.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.homeModelDue.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.homeModelDue.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.homeModelDue.deleteMany({});
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
      const results = await this.homeModelDue.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSections(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.homeModelDue
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    if (query.length == 0) {
      return 'No sections found';
    } else {
      return query;
    }
  }
  // End of Due language

  // Start of En language
  async addHomePageSectionEn(homePageDto: homePageDto) {
    try {
      const newSectionData = new this.homeModelEn({
        title: homePageDto.title,
        subTitle: homePageDto.subTitle,
        extraTitle: homePageDto.extraTitle,
        description: homePageDto.description,
        image: homePageDto.image,
        media: homePageDto.media,
        hidden: homePageDto.hidden,
        btnHidden: homePageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.homeModelEn.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionEn(id: string, homePageDto: homePageDto) {
    try {
      const results = await this.homeModelEn.findById(id);
      if (results) {
        results.title = homePageDto.title;
        results.subTitle = homePageDto.subTitle;
        results.extraTitle = homePageDto.extraTitle;
        results.description = homePageDto.description;
        results.image = homePageDto.image;
        results.media = homePageDto.media;
        results.hidden = homePageDto.hidden;
        results.btnHidden = homePageDto.btnHidden;
        await results.save();
        const allSections = await this.homeModelEn.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSectionEn(id: string) {
    try {
      const deleteSection = await this.homeModelEn.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.homeModelEn.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsEn() {
    try {
      const results = await this.homeModelEn.deleteMany({});
      if (results.deletedCount != 0) {
        return `${results.deletedCount} section deleted`;
      } else {
        return 'Something went wrong';
      }
    } catch (error) {
      return error;
    }
  }

  async getSectionByIdEn(id: string) {
    try {
      const results = await this.homeModelEn.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsEn(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.homeModelEn
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    if (query.length == 0) {
      return 'No sections found';
    } else {
      return query;
    }
  }
  // End of En language

  // Start of Ar language
  async addHomePageSectionAr(homePageDto: homePageDto) {
    try {
      const newSectionData = new this.homeModelAr({
        title: homePageDto.title,
        subTitle: homePageDto.subTitle,
        extraTitle: homePageDto.extraTitle,
        description: homePageDto.description,
        image: homePageDto.image,
        media: homePageDto.media,
        hidden: homePageDto.hidden,
        btnHidden: homePageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.homeModelAr.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionAr(id: string, homePageDto: homePageDto) {
    try {
      const results = await this.homeModelAr.findById(id);
      if (results) {
        results.title = homePageDto.title;
        results.subTitle = homePageDto.subTitle;
        results.extraTitle = homePageDto.extraTitle;
        results.description = homePageDto.description;
        results.image = homePageDto.image;
        results.media = homePageDto.media;
        results.hidden = homePageDto.hidden;
        results.btnHidden = homePageDto.btnHidden;
        await results.save();
        const allSections = await this.homeModelAr.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSectionAr(id: string) {
    try {
      const deleteSection = await this.homeModelAr.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.homeModelAr.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsAr() {
    try {
      const results = await this.homeModelAr.deleteMany({});
      if (results.deletedCount != 0) {
        return `${results.deletedCount} section deleted`;
      } else {
        return 'Something went wrong';
      }
    } catch (error) {
      return error;
    }
  }

  async getSectionByIdAr(id: string) {
    try {
      const results = await this.homeModelAr.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsAr(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.homeModelAr
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    if (query.length == 0) {
      return 'No sections found';
    } else {
      return query;
    }
  }
  // End of Ar language
}
