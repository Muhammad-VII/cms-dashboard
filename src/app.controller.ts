import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/add-users';
import { addUserDocument } from './users/model/users.model';
import { LocalAuthGuard } from './auth/local-auth.guard';

import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private _UserService: UsersService) {

  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Request | any): Promise<addUserDocument | string | any> {
    // no need to take data from the body passport-local-srategy takes care of that just be careful about naming
    return {
      data: req.user,
    };
  }

  @Post('register')
  registerUser(@Body() dto: CreateUserDto) {
    return this._UserService.registerUser(dto);
  }
}
