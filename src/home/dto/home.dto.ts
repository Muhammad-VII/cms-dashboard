import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class homePageDto {
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