import {
  offerDocument,
  placeDocument,
  newsDocument,
  contactDocument,
} from './model/common.model';
import { Injectable, Query } from '@nestjs/common';
import { query } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateOfferDto,
  createPlaceDto,
  createNewsDto,
  createContactUsDto,
} from './dto/common.dto';

@Injectable()
export class SharedService {
  constructor(
    @InjectModel('offers') private readonly offersModel: Model<offerDocument>,
    @InjectModel('places') private readonly placesModel: Model<placeDocument>,
    @InjectModel('news') private readonly newsModel: Model<newsDocument>,
    @InjectModel('contact')
    private readonly contactModel: Model<contactDocument>,
  ) {}

  async getAllOffers(
    documentsToSkip = 0,
    limitToDocuments?: number,
  ): Promise<any> {
    const query = await this.offersModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }

  async getAllPlaces(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.placesModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }

  async getAllNews(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.newsModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }

  async getAllContacts(documentsToSkip = 0, limitToDocuments?: number) {
    const query = await this.contactModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip)
      .limit(limitToDocuments);
    return query;
  }

  getOneOffer(id: string) {
    return this.offersModel.findById(id);
  }

  getOnePlace(id: string) {
    return this.placesModel.findById(id);
  }

  getOneNews(id: string) {
    return this.newsModel.findById(id);
  }

  // Create Data Methods
  async addNewOffer(addNewOfferDto: CreateOfferDto) {
    try {
      const newSharedData = new this.offersModel({
        offerPercentage: addNewOfferDto.offerPercentage,
        image: addNewOfferDto.image,
        offerTitle: addNewOfferDto.offerTitle,
        offerDescription: addNewOfferDto.offerDescription,
        price: addNewOfferDto.price,
      });
      const results = await newSharedData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async addNewPlace(createPlaceDto: createPlaceDto) {
    try {
      const newPlaceData = new this.placesModel({
        image: createPlaceDto.image,
        placeTitle: createPlaceDto.placeTitle,
        placeDescription: createPlaceDto.placeDescription,
        rate: createPlaceDto.rate,
      });
      const results = await newPlaceData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async addNewNews(createNewsDto: createNewsDto) {
    try {
      const newNewsData = new this.newsModel({
        image: createNewsDto.image,
        newsTitle: createNewsDto.newsTitle,
        newsDescription: createNewsDto.newsDescription,
      });
      const results = await newNewsData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async addContact(createContactUsDto: createContactUsDto) {
    try {
      const newContactData = new this.contactModel({
        name: createContactUsDto.name,
        email: createContactUsDto.email,
        message: createContactUsDto.message,
      });
      const results = await newContactData.save();
      return results;
    } catch (error) {
      return error;
    }
  }

  async deleteOffer(id: string) {
    try {
      const results = await this.offersModel.findByIdAndDelete(id);
      return results;
    } catch (error) {
      return error;
    }
  }

  async deletePlace(id: string) {
    try {
      const results = await this.placesModel.findByIdAndDelete(id);
      return results;
    } catch (error) {
      return error;
    }
  }

  async deleteNews(id: string) {
    try {
      const results = await this.newsModel.findByIdAndDelete(id);
      return results;
    } catch (error) {
      return error;
    }
  }

  deleteAllOffers() {
    return this.offersModel.deleteMany({});
  }

  deleteAllPlaces() {
    return this.placesModel.deleteMany({});
  }

  deleteAllNews() {
    return this.newsModel.deleteMany({});
  }

  searchPlaces(searchTerm: string) {
    return this.placesModel.find({
      $or: [{ placeTitle: { $regex: new RegExp("^" + searchTerm, "i") } }],
    });
  }
}
