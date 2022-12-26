import { IsString } from 'class-validator';
export class contactDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  subject: string;
  @IsString()
  message: string;
}