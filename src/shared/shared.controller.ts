import { contactDocument, addSectionDocument } from './model/common.model';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { addSectionDto, createContactUsDto } from './dto/common.dto';
import { PaginationParams } from './dto/pagination-params';
import { SharedService } from './shared.service';
import { MailService } from 'src/mail/mail.service';

@Controller('shared')
export class SharedController {
  constructor(private _SharedService: SharedService, private mailService: MailService) {}

  @Post('contactUs')
  async contactUs(@Body() contactUsDto: createContactUsDto, @Res() res:Response) {
    try {
      const data: any = await this._SharedService.addContact(contactUsDto);
      await this.mailService.sendContactUsEmail(data);
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

  @Post('addSection')
  async addSection(@Body() addSectionDto: addSectionDto, @Res() res:Response) {
    try {
      const data: any = await this._SharedService.addSection(addSectionDto);
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

}
