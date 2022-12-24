import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wasWirSindDto } from './dto/was-wir-sind.dto';
import { wasWirSindPageDocument } from './model/was-wir-sind.model';

@Injectable()
export class WasWirSindService {
  constructor(
    @InjectModel('was-wir-sind_due') private readonly wasWirSindDue: Model<wasWirSindPageDocument>,
    @InjectModel('was-wir-sind_en') private readonly wasWirSindEn: Model<wasWirSindPageDocument>,
    @InjectModel('was-wir-sind_ar') private readonly wasWirSindAr: Model<wasWirSindPageDocument>,
  ) {}

  async addHomePageSection(wasWirSindDto: wasWirSindDto) {
    try {
      const newSectionData = new this.wasWirSindDue({
        title: wasWirSindDto.title,
        subTitle: wasWirSindDto.subTitle,
        extraTitle: wasWirSindDto.extraTitle,
        description: wasWirSindDto.description,
        image: wasWirSindDto.image,
        media: wasWirSindDto.media,
        hidden: wasWirSindDto.hidden,
        btnHidden: wasWirSindDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirSindDue.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, wasWirSindDto: wasWirSindDto) {
    try {
      const results = await this.wasWirSindDue.findById(id);
      if (results) {
        results.title = wasWirSindDto.title;
        results.subTitle = wasWirSindDto.subTitle;
        results.extraTitle = wasWirSindDto.extraTitle;
        results.description = wasWirSindDto.description;
        results.image = wasWirSindDto.image;
        results.media = wasWirSindDto.media;
        results.hidden = wasWirSindDto.hidden;
        results.btnHidden = wasWirSindDto.btnHidden;
        await results.save();
        const allSections = await this.wasWirSindDue.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.wasWirSindDue.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirSindDue.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.wasWirSindDue.deleteMany({});
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
      const results = await this.wasWirSindDue.findById
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
    const query = await this.wasWirSindDue
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }


  async addHomePageSectionEn(wasWirSindDto: wasWirSindDto) {
    try {
      const newSectionData = new this.wasWirSindEn({
        title: wasWirSindDto.title,
        subTitle: wasWirSindDto.subTitle,
        extraTitle: wasWirSindDto.extraTitle,
        description: wasWirSindDto.description,
        image: wasWirSindDto.image,
        media: wasWirSindDto.media,
        hidden: wasWirSindDto.hidden,
        btnHidden: wasWirSindDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirSindEn.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionEn(id: string, wasWirSindDto: wasWirSindDto) {
    try {
      const results = await this.wasWirSindEn.findById(id);
      if (results) {
        results.title = wasWirSindDto.title;
        results.subTitle = wasWirSindDto.subTitle;
        results.extraTitle = wasWirSindDto.extraTitle;
        results.description = wasWirSindDto.description;
        results.image = wasWirSindDto.image;
        results.media = wasWirSindDto.media;
        results.hidden = wasWirSindDto.hidden;
        results.btnHidden = wasWirSindDto.btnHidden;
        await results.save();
        const allSections = await this.wasWirSindEn.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSectionEn(id: string) {
    try {
      const deleteSection = await this.wasWirSindEn.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirSindEn.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsEn() {
    try {
      const results = await this.wasWirSindEn.deleteMany({});
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
      const results = await this.wasWirSindEn.findById
      (id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsEn(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.wasWirSindEn
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }


  async addHomePageSectionAr(wasWirSindDto: wasWirSindDto) {
    try {
      const newSectionData = new this.wasWirSindAr({
        title: wasWirSindDto.title,
        subTitle: wasWirSindDto.subTitle,
        extraTitle: wasWirSindDto.extraTitle,
        description: wasWirSindDto.description,
        image: wasWirSindDto.image,
        media: wasWirSindDto.media,
        hidden: wasWirSindDto.hidden,
        btnHidden: wasWirSindDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirSindAr.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionAr(id: string, wasWirSindDto: wasWirSindDto) {
    try {
      const results = await this.wasWirSindAr.findById(id);
      if (results) {
        results.title = wasWirSindDto.title;
        results.subTitle = wasWirSindDto.subTitle;
        results.extraTitle = wasWirSindDto.extraTitle;
        results.description = wasWirSindDto.description;
        results.image = wasWirSindDto.image;
        results.media = wasWirSindDto.media;
        results.hidden = wasWirSindDto.hidden;
        results.btnHidden = wasWirSindDto.btnHidden;
        await results.save();
        const allSections = await this.wasWirSindAr.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSectionAr(id: string) {
    try {
      const deleteSection = await this.wasWirSindAr.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirSindAr.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsAr() {
    try {
      const results = await this.wasWirSindAr.deleteMany({});
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
      const results = await this.wasWirSindAr.findById
      (id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsAr(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.wasWirSindAr
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