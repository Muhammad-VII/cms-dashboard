import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { Media } from '../model/was-wir-tun.model'
export class wasWirTunDto {
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
  media: Media[];
  @IsBoolean() @IsOptional()
  hidden: boolean;
  @IsString() @IsOptional()
  dir: string;
}