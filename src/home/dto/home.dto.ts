import { IsArray, IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import { Media } from '../model/home.model'
export class homePageDto {
  @IsString() @IsOptional()
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
  media: Media[];
  @IsBoolean() @IsOptional()
  hidden: boolean;
  @IsBoolean() @IsOptional()
  btnHidden: boolean;
}