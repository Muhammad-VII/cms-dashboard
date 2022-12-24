import { WasWirTunService } from './war-wir-tun.service';
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
import { wasWirTunDto } from './dto/was-wir-tun.dto';
import { Response } from 'express';

@Controller('war-wir-tun')
export class WasWirTunController {
  constructor(private _WasWirTunService: WasWirTunService) {}

  @UseGuards(JwtAuthGuard)
  @Post('addSection')
  async addSection(@Body() wasWirTunDto: wasWirTunDto, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.addHomePageSection(wasWirTunDto);
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
      const data: any = await this._WasWirTunService.getSectionById(id);
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
    @Body() wasWirTunDto: wasWirTunDto,
    @Res() res: Response,
  ) {
    try {
      const data: wasWirTunDto | any =
        await this._WasWirTunService.updateHomePageSection(id, wasWirTunDto);
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
      const data: any = await this._WasWirTunService.getAllSections(skip, limit);
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
      const data: any = await this._WasWirTunService.deleteHomePageSection(id);
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
      const data: any = await this._WasWirTunService.deleteAllSections();
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


  @UseGuards(JwtAuthGuard)
  @Post('addSection-en')
  async addSectionEn(@Body() wasWirTunDto: wasWirTunDto, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.addHomePageSectionEn(wasWirTunDto);
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
  @Get('getSectionById-en/:id')
  async getSectionByIdEn(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.getSectionByIdEn(id);
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
  @Patch('updateSectionById-en/:id')
  async updateSectionByIdEn(
    @Param('id') id: string,
    @Body() wasWirTunDto: wasWirTunDto,
    @Res() res: Response,
  ) {
    try {
      const data: wasWirTunDto | any =
        await this._WasWirTunService.updateHomePageSectionEn(id, wasWirTunDto);
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
  @Get('getAllSections-en')
  async getAllSectionsEn(
    @Query() { skip, limit }: { skip: number; limit: number },
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._WasWirTunService.getAllSectionsEn(skip, limit);
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
  @Delete('deleteSectionById-en/:id')
  async deleteSectionByIdEn(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.deleteHomePageSectionEn(id);
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
  @Delete('deleteAllSections-en')
  async deleteAllSectionsEn(@Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.deleteAllSectionsEn();
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

  @UseGuards(JwtAuthGuard)
  @Post('addSection-ar')
  async addSectionAr(@Body() wasWirTunDto: wasWirTunDto, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.addHomePageSectionAr(wasWirTunDto);
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
  @Get('getSectionById-ar/:id')
  async getSectionByIdAr(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.getSectionByIdAr(id);
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
  @Patch('updateSectionById-ar/:id')
  async updateSectionByIdAr(
    @Param('id') id: string,
    @Body() wasWirTunDto: wasWirTunDto,
    @Res() res: Response,
  ) {
    try {
      const data: wasWirTunDto | any =
        await this._WasWirTunService.updateHomePageSectionAr(id, wasWirTunDto);
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
  @Get('getAllSections-ar')
  async getAllSectionsAr(
    @Query() { skip, limit }: { skip: number; limit: number },
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._WasWirTunService.getAllSectionsAr(skip, limit);
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
  @Delete('deleteSectionById-ar/:id')
  async deleteSectionByIdAr(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.deleteHomePageSectionAr(id);
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
  @Delete('deleteAllSections-ar')
  async deleteAllSectionsAr(@Res() res: Response) {
    try {
      const data: any = await this._WasWirTunService.deleteAllSectionsAr();
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
