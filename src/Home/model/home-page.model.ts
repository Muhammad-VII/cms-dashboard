import { Schema, Document } from 'mongoose';

export const homePageSchema = new Schema(
  {
    categories: { type: Object, required: true },
    offers: { type: Object, required: true },
    places: { type: Object, required: true },
    news: { type: Object, required: true },
  },
  {
    timestamps: true,
  },
);
export interface homePageSchema extends Document {
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
  places: [
    {
      placeId: number;
      image: string;
      placeTitle: number;
      placeDescription: string;
      rate: number;
    },
  ];
  news: [
    newsId: string,
    image: string,
    newsTitle: string,
    newsDescreption: string,
    link: string,
    date: Date,
  ];
}