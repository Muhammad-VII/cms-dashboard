import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { contactDto } from './dto/contact.dto';
import { Response } from 'express';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private _ContactService: ContactService) {}

  @Post('addMessage')
  async createMessage(@Body() contactDto: contactDto, @Res() res: Response) {
    try {
      const data: any = await this._ContactService.addNewMessage(contactDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { results: data };
    } catch (error) {
      res.status(404).send({
        message: 'error',
        error,
      });
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('getAllMessages')
  async getAllMessages(@Res() res: Response) {
    try {
      const data: any = await this._ContactService.getAllMessages();
      res.status(200).send({
        message: 'success',
        data,
      });
      return { results: data };
    } catch (error) {
      res.status(404).send({
        message: 'error',
        error,
      });
      return error;
    }
  }

}
