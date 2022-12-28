import { IsBoolean, IsOptional, IsString } from 'class-validator';
export class languegeDto {
  @IsString()
  name: string;
  @IsString() @IsOptional()
  code: string;
  @IsBoolean()
  hidden: boolean;
  @IsString() @IsOptional()
  flag: string;
}