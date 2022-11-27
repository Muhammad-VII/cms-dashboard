import { LoginUser } from './dto/login-users';
import { CreateUserDto } from './dto/add-users';
import { addUserDocument, updateUserDocument } from './model/users.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<addUserDocument>,
  ) {}

  // Update User
  async updateUser(id: string, userDto: updateUserDocument) {
    try {
      const hashPassword = await bcrypt.hash(userDto.password, 10);
      const user = await this.userModel.findOneAndUpdate(
        { _id: id },
        {
          fullName: userDto.fullName,
          mobileNumber: userDto.mobileNumber,
          isVerified: userDto.isVerified,
          email: userDto.email,
          password: hashPassword,
        },
      ).exec();
      return {
        fullName: user.fullName,
        mobileNumber: user.mobileNumber,
        isVerified: user.isVerified,
        email: user.email,
      }
    } catch (error) {
      return error;
    }
  }

  async registerUser(
    userDto: CreateUserDto,
  ): Promise<addUserDocument | string> | undefined {
    const user = await this.userModel.findOne({ email: userDto.email }).exec();
    const newUser = new this.userModel({ ...userDto });
    try {
      if (user) {
        return `${userDto.email} already exists`;
      } else {
        await newUser.save();
        return newUser;
      }
    } catch (error) {
      return error;
    }
  }

  async getAllUsers(): Promise<addUserDocument | any> | undefined {
    try {
      const users = await this.userModel.find({}).exec();
      return users.map((user) => ({
        id: user.id,
        full_name: user.fullName,
        phoneNumber: Number(user.mobileNumber),
        isVerified: user.isVerified,
      }));
    } catch (error) {
      return error;
    }
  }

  async findOne(email: string): Promise<addUserDocument> {
    const user = await this.userModel.findOne({ email: email }).exec();
    return user;
  }

}
