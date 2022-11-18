import { IsNumber, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsNumber()
  offerPercentage: number;
  @IsString()
  image: string;
  @IsString()
  offerTitle: string;
  @IsString()
  offerDescription: string;
  @IsNumber()
  price: number;
}

export class createPlaceDto {
  @IsString()
  image: string;
  @IsString()
  placeTitle: string;
  @IsString()
  placeDescription: string;
  @IsNumber()
  rate: number;
}

export class createNewsDto {
  @IsString()
  image: string;
  @IsString()
  newsTitle: string;
  @IsString()
  newsDescription: string;
}

export class createContactUsDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  message: string;
}