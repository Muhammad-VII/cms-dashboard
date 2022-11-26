import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class createContactUsDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  subject: string;
  @IsString()
  message: string;
}

export class addSectionDto {
  @IsString()
  title: string;
  @IsString() @IsOptional()
  subTitle: string;
  @IsString() @IsOptional()
  extraTitle: string;
  @IsString() @IsOptional()
  description: string;
  @IsString() @IsOptional()
  image: string;
  @IsArray() @IsOptional()
  images: string[];
  @IsBoolean() @IsOptional()
  hidden: boolean;
  @IsString() @IsOptional()
  dir: string;
}