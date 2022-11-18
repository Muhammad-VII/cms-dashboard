import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  mobileNumber: string;
}

export class updateUserDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  mobileNumber: string;
  
  @IsBoolean()
  isVerified: boolean;
}