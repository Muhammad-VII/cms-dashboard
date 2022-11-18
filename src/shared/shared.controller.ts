import { Body, Controller, Delete, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { createNewsDto, CreateOfferDto, createPlaceDto, createContactUsDto } from './dto/common.dto';
import { newsDocument, placeDocument, offerDocument } from './model/common.model';
import { PaginationParams } from './dto/pagination-params';
import { SharedService } from './shared.service';

@Controller('shared')
export class SharedController {
  constructor(private _SharedService: SharedService) {}

  //Search Places
  @Get('search')
  async searchOffers(@Query('term') term: string, @Res() res:Response) {
    try {
      const places:placeDocument | any = await this._SharedService.searchPlaces(term);
      res.status(200).json(places);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }
  
  @Get("getAllOffers")
  async findAllOffers(@Query() {skip, limit}: PaginationParams) {
    const allOffers: offerDocument | any = await this._SharedService.getAllOffers(skip, limit);
    return {
      data: allOffers
    }
  }

  @Get("getAllPlaces")
  async findAllPlaces(@Query() {skip, limit}: PaginationParams) {
    const allPlaces: placeDocument | any = await this._SharedService.getAllPlaces(skip, limit);
    return {
      data: allPlaces
    }
  }

  @Get("getAllNews")
  async findAllNews(@Query() {skip, limit}: PaginationParams) {
    const allNews: placeDocument | any = await this._SharedService.getAllNews(skip, limit);
    return {
      data: allNews
    }
  }

  @Get("getOneOffer")
  async findOneOffer(@Query('id') id: string) {
    const oneOffer: offerDocument | any = await this._SharedService.getOneOffer(id);
    return {
      data: oneOffer
    }
  }

  @Get("getOnePlace")
  async findOnePlace(@Query('id') id: string) {
    const onePlace: placeDocument | any = await this._SharedService.getOnePlace(id);
    return {
      data: onePlace
    }
  }

  @Get("getOneNews")
  async findOneNews(@Query('id') id: string) {
    const oneNews: newsDocument | any = await this._SharedService.getOneNews(id);
    return {
      data: oneNews
    }
  }

  @Post("addNewOffer")
  async createOffer(@Body() CreateOfferDto: CreateOfferDto, @Res() res:Response) {
    try {
      const data: offerDocument = await this._SharedService.addNewOffer(CreateOfferDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { offers: data };
    } catch (error) {
    return error;
      
    }
  }

  @Post("addNewPlace")
  async createNewPlace(@Body() createPlaceDto: createPlaceDto, @Res() res:Response) {
    try {
      const data: placeDocument = await this._SharedService.addNewPlace(createPlaceDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { places: data };
    } catch (error) {
    return error;
      
    }
  }

  @Post("addNewNews")
  async createNewNews(@Body() createNewsDto: createNewsDto, @Res() res:Response) {
    try {
      const data: newsDocument = await this._SharedService.addNewNews(createNewsDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { places: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deleteOffer")
  async deleteOffer(@Query('id') id: string, @Res() res:Response) {
    try {
      const data: offerDocument = await this._SharedService.deleteOffer(id);
      res.status(200).send({
        message: 'Offer Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deletePlace")
  async deletePlace(@Query('id') id: string, @Res() res:Response) {
    try {
      const data: offerDocument = await this._SharedService.deletePlace(id);
      res.status(200).send({
        message: 'Place Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deleteNews")
  async deleteNews(@Query('id') id: string, @Res() res:Response) {
    try {
      const data: offerDocument = await this._SharedService.deleteNews(id);
      res.status(200).send({
        message: 'News Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deleteAllOffers")
  async deleteAllOffers(@Res() res:Response) {
    try {
      const data: any = await this._SharedService.deleteAllOffers();
      res.status(200).send({
        message: 'All Offers Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deleteAllPlaces")
  async deleteAllPlaces(@Res() res:Response) {
    try {
      const data: any = await this._SharedService.deleteAllPlaces();
      res.status(200).send({
        message: 'All Places Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Delete("deleteAllNews")
  async deleteAllNews(@Res() res:Response) {
    try {
      const data: any = await this._SharedService.deleteAllNews();
      res.status(200).send({
        message: 'All News Deleted Successfully',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

  @Post('contactUs')
  async contactUs(@Body() contactUsDto: createContactUsDto, @Res() res:Response) {
    try {
      const data: any = await this._SharedService.addContact(contactUsDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { offers: data };
    } catch (error) {
      return error;
    }
  }

}
