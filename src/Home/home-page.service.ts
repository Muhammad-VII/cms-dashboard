import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { CreateHomePageDto } from './dto/create-home-page-content.dto';
import { homePageSchema } from './model/home-page.model';

@Injectable()
export class homePageService {
  homePageContent: homePageSchema[] = [];

  constructor(
    @InjectModel('HomePage') private readonly homePageModel: Model<homePageSchema>,
  ) {}

  async insertContent(createHomePageDto: CreateHomePageDto) {
    
    try {
      const newHomePageContent = new this.homePageModel({
        categories: createHomePageDto.categories,
        offers: createHomePageDto.offers,
        places: createHomePageDto.places,
        news: createHomePageDto.news,
      });
      const results = await newHomePageContent.save();
      return results;
    } catch (error) {
      return error; 
    }
  }

  async getAllProducts() {
    const results = await this.homePageModel
      .find({}).exec();
    return results as homePageSchema[];
  }

  // async getOneProduct(productId: string): Promise<homePageSchema> {
  //   // let product: homePageSchema;
  //   // try {
  //   //   product = await this.homePageModel.findById(productId);
  //   // } catch (error) {
  //   //   throw new NotFoundException('Could not find product.');
  //   // }
  //   // if (!product) {
  //   //   throw new NotFoundException('Could not find product.');
  //   // }
  //   // return {
  //   //   id: product.id,
  //   //   title: product.title,
  //   //   describtion: product.describtion,
  //   //   price: product.price,
  //   // } as Product;
  // }

  async updateProduct(_id: string, title: string, describtion: string, price: number) {
    try {
      const results = await this.homePageModel.findOneAndUpdate({_id}, {
        title,
        describtion,
        price
      })
      return results
    } catch (error) {
      return [...error]
    }
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
