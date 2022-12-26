import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
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

  @UseGuards(JwtAuthGuard)
  @Delete('deleteMessage')
  async deleteMessage(@Res() res: Response, @Query('id') id: string) {
    try {
      const data: any = await this._ContactService.deleteMessage(id);
      if (data.message == 'No data found') {
        res.status(404).send({
          message: 'error',
          error: 'No message found',
        });
        return { results: 'No message found' };
      } else {
        res.status(200).send({
          message: 'success',
          data,
        });
        return { results: data };
      }
    } catch (error) {
      res.status(404).send({
        message: 'error',
        error,
      });
      return error;
    }
  }

  @Delete('deleteAllMessages')
  async deleteAllMessages(@Res() res: Response) {
    try {
      const data: any = await this._ContactService.deleteAllMessages();
      if (data.message == 'No data found') {
        res.status(404).send({
          message: 'No messages found'
        });
        return { results: 'No message found' };
      } else {
        res.status(200).send({
          message: 'All messages deleted successfully',
          data,
        });
        return { results: data };
      }
    } catch (error) {
      res.status(404).send({
        message: 'error',
        error,
      });
      return error;
    }
  }
}
