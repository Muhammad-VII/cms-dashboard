import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateHomePageDto } from './dto/create-home-page-content.dto';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { homePageService } from './home-page.service';
import { homePageSchema } from './model/home-page.model';
import { ThrottlerBehindProxyGuard } from '../auth/throttler-behind-proxy.guard';
import { Request, Response } from 'express';
@UseGuards(ThrottlerBehindProxyGuard)
@Controller('homePage')
export class HomeController {
  constructor(private readonly homePageService: homePageService) {}

  @Post('add')
  async create(
    @Body() CreateHomePageDto: CreateHomePageDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data: homePageSchema = await this.homePageService.insertContent(CreateHomePageDto);
      res.status(200).send({
        message: 'success',
        data,
      });
      return { data: data };
    } catch (error) {
      return error;
    }
  }

  @Get("getOne")
  async findAll() {
    const homePage: homePageSchema | any = await this.homePageService.getAllProducts();
    return {
      data: homePage
    }
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.homePageService.getOneProduct(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.homePageService.updateProduct(
      id,
      dto.title,
      dto.describtion,
      dto.price,
    );
  }
}
