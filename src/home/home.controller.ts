import { homePageDocument } from './model/home.model';
import { HomeService } from './home.service';
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
import { homePageDto } from './dto/home.dto';
import { Response } from 'express';

@Controller('home')
export class HomeController {
  constructor(private _HomeService: HomeService) {}

  // Start of Due language
  @UseGuards(JwtAuthGuard)
  @Post('addSection-due')
  async addSection(@Body() homePageDto: homePageDto, @Res() res: Response, @Query() { lang }: { lang: string }) {
    try {
      const data: any = await this._HomeService.addHomePageSection(homePageDto);
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
  @Get('getSectionById-due/:id')
  async getSectionById(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._HomeService.getSectionById(id);
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
  @Patch('updateSectionById-due/:id')
  async updateSectionById(
    @Param('id') id: string,
    @Body() homePageDto: homePageDto,
    @Res() res: Response,
  ) {
    try {
      const data: homePageDocument | any =
        await this._HomeService.updateHomePageSection(id, homePageDto);
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
  @Get('getAllSections-due')
  async getAllSections(
    @Query() { skip, limit }: { skip: number; limit: number },
    @Res() res: Response,
  ) {
    try {
      const data: any = await this._HomeService.getAllSections(skip, limit);
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
  @Delete('deleteSectionById-due/:id')
  async deleteSectionById(@Param('id') id: string, @Res() res: Response) {
    try {
      const data: any = await this._HomeService.deleteHomePageSection(id);
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
  @Delete('deleteAllSections-due')
  async deleteAllSections(@Res() res: Response) {
    try {
      const data: any = await this._HomeService.deleteAllSections();
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
  // End of Due language

  // Start of En language
  @UseGuards(JwtAuthGuard)
  @Post('addSection-en')
  async addSectionEn(@Body() homePageDto: homePageDto, @Res() res: Response) {
    try {
      const data: any = await this._HomeService.addHomePageSectionEn(
        homePageDto,
      );
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
      const data: any = await this._HomeService.getSectionByIdEn(id);
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
    @Body() homePageDto: homePageDto,
    @Res() res: Response,
  ) {
    try {
      const data: homePageDocument | any =
        await this._HomeService.updateHomePageSectionEn(id, homePageDto);
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
      const data: any = await this._HomeService.getAllSectionsEn(skip, limit);
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
      const data: any = await this._HomeService.deleteHomePageSectionEn(id);
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
      const data: any = await this._HomeService.deleteAllSectionsEn();
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
  // End of En language

  // Start of Ar language
  @UseGuards(JwtAuthGuard)
  @Post('addSection-ar')
  async addSectionAr(@Body() homePageDto: homePageDto, @Res() res: Response) {
    try {
      const data: any = await this._HomeService.addHomePageSectionAr(
        homePageDto,
      );
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
      const data: any = await this._HomeService.getSectionByIdAr(id);
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
    @Body() homePageDto: homePageDto,
    @Res() res: Response,
  ) {
    try {
      const data: homePageDocument | any =
        await this._HomeService.updateHomePageSectionAr(id, homePageDto);
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
      const data: any = await this._HomeService.getAllSectionsAr(skip, limit);
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
      const data: any = await this._HomeService.deleteHomePageSectionAr(id);
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
      const data: any = await this._HomeService.deleteAllSectionsAr();
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
  // End of Ar language
}
