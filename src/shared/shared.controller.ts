import { contactDocument } from './model/common.model';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { createContactUsDto } from './dto/common.dto';
import { PaginationParams } from './dto/pagination-params';
import { SharedService } from './shared.service';

@Controller('shared')
export class SharedController {
  constructor(private _SharedService: SharedService) {}

  @Post('contactUs')
  async contactUs(@Body() contactUsDto: createContactUsDto, @Res() res:Response) {
    try {
      const data: any = await this._SharedService.addContact(contactUsDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { results: data };
    } catch (error) {
      res.status(404).send({
        message: 'error',
        error,
      })
      return error;
    }
  }

  @Get("getAllContactMessages")
  async findAllNews(@Query() {skip, limit}: PaginationParams) {
    const allContact: contactDocument | any = await this._SharedService.getAllContactMessages(skip, limit);
    return {
      data: allContact
    }
  }

}
