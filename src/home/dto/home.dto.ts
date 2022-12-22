import { IsArray, IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import { Media } from '../model/home.model'
export class homePageDto {
  @IsObject() @IsOptional()
  due: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  @IsObject() @IsOptional()
  ar: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  @IsObject() @IsOptional()
  en: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  @IsString() @IsOptional()
  image: string;
  @IsArray() @IsOptional()
  media: Media[];
  @IsBoolean() @IsOptional()
  hidden: boolean;
  @IsBoolean() @IsOptional()
  btnHidden: boolean;
}