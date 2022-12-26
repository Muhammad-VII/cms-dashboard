import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { contactPageDto } from './dto/contact-page.dto';
import { contactPageDocument } from './model/contact-page.model';

@Injectable()
export class ContactPageService {
  constructor(
    @InjectModel('contact_page_due')
    private readonly contactModelDue: Model<contactPageDocument>,
    @InjectModel('contact_page_en')
    private readonly contactModelEn: Model<contactPageDocument>,
    @InjectModel('contact_page_ar')
    private readonly contactModelAr: Model<contactPageDocument>,
  ) {}

  // Start of Due language
  async addHomePageSection(contactPageDto: contactPageDto) {
    try {
      const newSectionData = new this.contactModelDue({
        title: contactPageDto.title,
        subTitle: contactPageDto.subTitle,
        extraTitle: contactPageDto.extraTitle,
        description: contactPageDto.description,
        image: contactPageDto.image,
        media: contactPageDto.media,
        hidden: contactPageDto.hidden,
        btnHidden: contactPageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.contactModelDue.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSection(id: string, contactPageDto: contactPageDto) {
    try {
      const results = await this.contactModelDue.findById(id);
      if (results) {
        results.title = contactPageDto.title;
        results.subTitle = contactPageDto.subTitle;
        results.extraTitle = contactPageDto.extraTitle;
        results.description = contactPageDto.description;
        results.image = contactPageDto.image;
        results.media = contactPageDto.media;
        results.hidden = contactPageDto.hidden;
        results.btnHidden = contactPageDto.btnHidden;
        await results.save();
        const allSections = await this.contactModelDue.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSection(id: string) {
    try {
      const deleteSection = await this.contactModelDue.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.contactModelDue.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSections() {
    try {
      const results = await this.contactModelDue.deleteMany({});
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
      const results = await this.contactModelDue.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSections(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.contactModelDue
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
  async addHomePageSectionEn(contactPageDto: contactPageDto) {
    try {
      const newSectionData = new this.contactModelEn({
        title: contactPageDto.title,
        subTitle: contactPageDto.subTitle,
        extraTitle: contactPageDto.extraTitle,
        description: contactPageDto.description,
        image: contactPageDto.image,
        media: contactPageDto.media,
        hidden: contactPageDto.hidden,
        btnHidden: contactPageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.contactModelEn.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionEn(id: string, contactPageDto: contactPageDto) {
    try {
      const results = await this.contactModelEn.findById(id);
      if (results) {
        results.title = contactPageDto.title;
        results.subTitle = contactPageDto.subTitle;
        results.extraTitle = contactPageDto.extraTitle;
        results.description = contactPageDto.description;
        results.image = contactPageDto.image;
        results.media = contactPageDto.media;
        results.hidden = contactPageDto.hidden;
        results.btnHidden = contactPageDto.btnHidden;
        await results.save();
        const allSections = await this.contactModelEn.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSectionEn(id: string) {
    try {
      const deleteSection = await this.contactModelEn.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.contactModelEn.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsEn() {
    try {
      const results = await this.contactModelEn.deleteMany({});
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
      const results = await this.contactModelEn.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsEn(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.contactModelEn
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
  async addHomePageSectionAr(contactPageDto: contactPageDto) {
    try {
      const newSectionData = new this.contactModelAr({
        title: contactPageDto.title,
        subTitle: contactPageDto.subTitle,
        extraTitle: contactPageDto.extraTitle,
        description: contactPageDto.description,
        image: contactPageDto.image,
        media: contactPageDto.media,
        hidden: contactPageDto.hidden,
        btnHidden: contactPageDto.btnHidden,
      });
      await newSectionData.save();
      const allSections = await this.contactModelAr.find({});
      return allSections;
    } catch (error) {
      return error;
    }
  }

  async updateHomePageSectionAr(id: string, contactPageDto: contactPageDto) {
    try {
      const results = await this.contactModelAr.findById(id);
      if (results) {
        results.title = contactPageDto.title;
        results.subTitle = contactPageDto.subTitle;
        results.extraTitle = contactPageDto.extraTitle;
        results.description = contactPageDto.description;
        results.image = contactPageDto.image;
        results.media = contactPageDto.media;
        results.hidden = contactPageDto.hidden;
        results.btnHidden = contactPageDto.btnHidden;
        await results.save();
        const allSections = await this.contactModelAr.find({});
        return allSections;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteHomePageSectionAr(id: string) {
    try {
      const deleteSection = await this.contactModelAr.findByIdAndDelete(id);
      if (!deleteSection) {
        return 'Section not found';
      } else {
        const results = await this.contactModelAr.find({});
        return results;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteAllSectionsAr() {
    try {
      const results = await this.contactModelAr.deleteMany({});
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
      const results = await this.contactModelAr.findById(id);
      if (!results) {
        return 'Section not found';
      }
      return results;
    } catch (error) {
      return error;
    }
  }

  async getAllSectionsAr(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.contactModelAr
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
