import { JwtAuthGuard } from './../auth/jwt-auth.guard';

import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/add-users';
import { updateUserDocument } from './model/users.model';
import { Response } from 'express';

@Controller('users')
export class UsersControllers {
  constructor(private readonly _UserService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('getAllUsers')
  getAllUser() {
    return this._UserService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('updateUser')
  updateUser(
    @Query('id') id: string,
    @Body() userDto: updateUserDocument,
    @Res() res: Response,
  ) {
    const results = this._UserService.updateUser(id, userDto);
    results.then((user) => {
      if (user.name != 'CastError') {
        res.status(200).json({
          message: 'User updated successfully',
          user,
        });
      } else {
        res.status(400).json({
          message: 'User not found',
        });
      }
    });
  }
}
