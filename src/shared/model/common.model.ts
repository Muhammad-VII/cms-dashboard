import { Schema, Document } from 'mongoose';

export const offerSchema = new Schema(
  {
    offerPercentage: { type: Number, required: true },
    image: { type: String, required: true },
    offerTitle: { type: String, required: true },
    offerDescription: { type: String, required: true },
    price: {type: Number, required: true}
  },
  {
    timestamps: true,
  },
);

export const placesSchema = new Schema(
  {
    image: { type: String, required: true },
    placeTitle: { type: String, required: true },
    placeDescription: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export const newsSchema = new Schema(
  {
    image: { type: String, required: true },
    newsTitle: { type: String, required: true },
    newsDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface offerDocument extends Document {
  offerPercentage: number;
  image: string;
  offerTitle: string;
  offerDescription: string;
  price: number;
}

export interface placeDocument extends Document {
  image: string;
  placeTitle: string;
  placeDescription: string;
  rate: number;
}

export interface newsDocument extends Document {
  image: string;
  newsTitle: string;
  newsDescreption: string;
}

export interface contactDocument extends Document {
  name: string;
  email: string;
  message: string;
}
