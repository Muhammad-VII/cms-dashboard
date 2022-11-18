import { IsArray, IsNotEmptyObject } from 'class-validator';

export class CreateHomePageDto {
  @IsNotEmptyObject()
  categories: {
    shoppingAres: {
      malls: number;
      gorceries: number;
      stores: number;
    };
    food: {
      resturants: number;
      cafes: number;
      foodCars: number;
    };
    services: {
      homeCare: number;
      carRepaier: number;
    };
    entertainment: {
      gardens: number;
      parks: number;
      cinemas: number;
    };
    medical: {
      hospitals: number;
      clinics: number;
    };
  };

  @IsArray()
  offers: [
    {
      offerId: number;
      offerPercentage: number;
      image: string;
      offerTitle: string;
      offerDescription: string;
      rate: number;
    },
  ];

  @IsArray()
  places: [
    {
      placeId:number;
      image: string;
      placeTitle: string;
      placeDescription: string;
      rate: number;
    },
  ];

  @IsArray()
  news: [
    {
      newsId:number,
      image: string;
      newsTitle: string;
      newsDescreption: string;
      link: string;
      date: Date;
    },
  ];
}
