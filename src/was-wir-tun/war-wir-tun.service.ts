import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wasWirTunDto } from './dto/was-wir-tun.dto';
import { wasWirTunPageDocument } from './model/was-wir-tun.model';

@Injectable()
export class WasWirTunService {
  constructor(
    @InjectModel('was-wir-tun_due') private readonly wasWirTunDue: Model<wasWirTunPageDocument>,
    @InjectModel('was-wir-tun_en') private readonly wasWirTunEn: Model<wasWirTunPageDocument>,
    @InjectModel('was-wir-tun_ar') private readonly wasWirTunAr: Model<wasWirTunPageDocument>,
  ) {}

  async addHomePageSection(wasWirTunDto: wasWirTunDto) {
    try {
      const newSectionData = new this.wasWirTunDue({
        title: wasWirTunDto.title,
        subTitle: wasWirTunDto.subTitle,
        extraTitle: wasWirTunDto.extraTitle,
        description: wasWirTunDto.description,
        image: wasWirTunDto.image,
        media: wasWirTunDto.media,
        hidden: wasWirTunDto.hidden,
        btnHidden: wasWirTunDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirTunDue.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, wasWirTunDto: wasWirTunDto) {
    try {
      const results = await this.wasWirTunDue.findById(id);
      if (results) {
        results.title = wasWirTunDto.title;
        results.subTitle = wasWirTunDto.subTitle;
        results.extraTitle = wasWirTunDto.extraTitle;
        results.description = wasWirTunDto.description;
        results.image = wasWirTunDto.image;
        results.media = wasWirTunDto.media;
        results.hidden = wasWirTunDto.hidden;
        results.btnHidden = wasWirTunDto.btnHidden;
        await results.save();
        const allSection = await this.wasWirTunDue.find({});
        return allSection;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.wasWirTunDue.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirTunDue.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.wasWirTunDue.deleteMany({});
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
      const results = await this.wasWirTunDue.findById
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
    const query = await this.wasWirTunDue
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }

  async addHomePageSectionEn(wasWirTunDto: wasWirTunDto) {
    try {
      const newSectionData = new this.wasWirTunEn({
        title: wasWirTunDto.title,
        subTitle: wasWirTunDto.subTitle,
        extraTitle: wasWirTunDto.extraTitle,
        description: wasWirTunDto.description,
        image: wasWirTunDto.image,
        media: wasWirTunDto.media,
        hidden: wasWirTunDto.hidden,
        btnHidden: wasWirTunDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirTunEn.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionEn(id: string, wasWirTunDto: wasWirTunDto) {
    try {
      const results = await this.wasWirTunEn.findById(id);
      if (results) {
        results.title = wasWirTunDto.title;
        results.subTitle = wasWirTunDto.subTitle;
        results.extraTitle = wasWirTunDto.extraTitle;
        results.description = wasWirTunDto.description;
        results.image = wasWirTunDto.image;
        results.media = wasWirTunDto.media;
        results.hidden = wasWirTunDto.hidden;
        results.btnHidden = wasWirTunDto.btnHidden;
        await results.save();
        const allSection = await this.wasWirTunEn.find({});
        return allSection;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSectionEn(id: string) {
    try {
      const deleteSection = await this.wasWirTunEn.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirTunEn.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsEn() {
    try {
      const results = await this.wasWirTunEn.deleteMany({});
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
      const results = await this.wasWirTunEn.findById
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
    const query = await this.wasWirTunEn
      .find({})
      .skip(documentsToSkip)
      .limit(limitToDocuments);
      if (query.length == 0) {
        return 'No sections found';
      } else {
        return query;
      }
  }

  async addHomePageSectionAr(wasWirTunDto: wasWirTunDto) {
    try {
      const newSectionData = new this.wasWirTunAr({
        title: wasWirTunDto.title,
        subTitle: wasWirTunDto.subTitle,
        extraTitle: wasWirTunDto.extraTitle,
        description: wasWirTunDto.description,
        image: wasWirTunDto.image,
        media: wasWirTunDto.media,
        hidden: wasWirTunDto.hidden,
        btnHidden: wasWirTunDto.btnHidden
      })
      await newSectionData.save();
      const allSections = await this.wasWirTunAr.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionAr(id: string, wasWirTunDto: wasWirTunDto) {
    try {
      const results = await this.wasWirTunAr.findById(id);
      if (results) {
        results.title = wasWirTunDto.title;
        results.subTitle = wasWirTunDto.subTitle;
        results.extraTitle = wasWirTunDto.extraTitle;
        results.description = wasWirTunDto.description;
        results.image = wasWirTunDto.image;
        results.media = wasWirTunDto.media;
        results.hidden = wasWirTunDto.hidden;
        results.btnHidden = wasWirTunDto.btnHidden;
        await results.save();
        const allSection = await this.wasWirTunAr.find({});
        return allSection;
      }
    } catch (error) {
      return error;
    }
  }
  
  async deleteHomePageSectionAr(id: string) {
    try {
      const deleteSection = await this.wasWirTunAr.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.wasWirTunAr.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsAr() {
    try {
      const results = await this.wasWirTunAr.deleteMany({});
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
      const results = await this.wasWirTunAr.findById
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
    const query = await this.wasWirTunAr
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