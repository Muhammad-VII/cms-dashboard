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
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
 
@Controller()
export class AppController {
  constructor(private _UserService: UsersService, private httpService: HttpService) {
    // setInterval(() => {
    //   this.findAll().subscribe()
    // }, 1750000)
  }

  findAll(): Observable<any> {
    try {
      return this.httpService.get('https://ng-cms-dashboard.herokuapp.com/users/getAllUsers')
    } catch (error) {
      return error
    }
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
