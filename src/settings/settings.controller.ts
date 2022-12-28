import { SettingsService } from './settings.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { languegeDto } from './dto/settings.dto';
import { Response } from 'express';

@Controller('settings')
export class SettingsController {
  constructor(private _SettingsService: SettingsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('addLanguege')
  async addLanguege(@Body() dto: languegeDto, @Res() res: Response) {
    try {
      const data: any = await this._SettingsService.addLanguege(dto);
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
  @Patch('updateLanguegeById/:id')
  async updateLanguegeById(
    @Param('id') id: string,
    @Body() dto: languegeDto,
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._SettingsService.updateLanguege(id, dto);
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

  @Get('getAllLangueges')
  async getAllLangueges(
    @Query() { skip, limit }: { skip: number; limit: number },
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._SettingsService.getAllLangueges(skip, limit);
      if (data == 'No languege found') {
        res.status(404).send({
          message: 'No languege found',
          error: data.data,
        });
        return data.data;
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

  @UseGuards(JwtAuthGuard)
  @Delete('deleteLanguegeById/:id')
  async deleteLanguegeById(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._SettingsService.deleteLanguegeById(id);
      if (data == 'Section not found') {
        res.status(404).send({
          message: 'Section not found',
          error: data.data,
        });
        return data.data;
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
}
