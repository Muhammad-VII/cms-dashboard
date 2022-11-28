import { wasWirSindPageDocument } from './model/was-wir-sind.model';
import { WasWirSindService } from './war-wir-sind.service';
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
import { wasWirSindDto } from './dto/was-wir-sind.dto';
import { Response } from 'express';

@Controller('war-wir-sind')
export class WasWirSindController {
  constructor(private _WasWirSindService: WasWirSindService) {}

  @UseGuards(JwtAuthGuard)
  @Post('addSection')
  async addSection(@Body() wasWirSindDto: wasWirSindDto, @Res() res: Response) {
    try {
      const data: any = await this._WasWirSindService.addHomePageSection(wasWirSindDto);
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
  @Get('getSectionById/:id')
  async getSectionById(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirSindService.getSectionById(id);
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

  @UseGuards(JwtAuthGuard)
  @Patch('updateSectionById/:id')
  async updateSectionById(
    @Param('id') id: string,
    @Body() wasWirSindDto: wasWirSindDto,
    @Res() res: Response,
  ) {
    try {
      const data: wasWirSindDto | any =
        await this._WasWirSindService.updateHomePageSection(id, wasWirSindDto);
      if (data.errors) {
        res.status(400).send({
          message: 'error',
          error: data.errors,
        });
        return data.errors;
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
  @Get('getAllSections')
  async getAllSections(
    @Query() { skip, limit }: { skip: number; limit: number },
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._WasWirSindService.getAllSections(skip, limit);
      if (data == 'No sections found') {
        res.status(404).send({
          message: 'No sections found',
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
  @Delete('deleteSectionById/:id')
  async deleteSectionById(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirSindService.deleteHomePageSection(id);
      if (data == 'Section not found') {
        res.status(404).send({
          message: 'Section not found',
          error: data.data,
        });
        return data.data;
      } else {
        res.status(200).send({
          message: 'Deleted successfully',
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
  @Delete('deleteAllSections')
  async deleteAllSections(@Res() res: Response) {
    try {
      const data: any = await this._WasWirSindService.deleteAllSections();
      if (data == 'Something went wrong') {
        res.status(404).send({
          message: 'No sections found',
          error: data.data,
        });
        return data.data;
      } else {
        res.status(200).send({
          message: 'Deleted successfully',
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
