import { Schema, Document } from 'mongoose';


export const homePageSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: false },
    extraTitle: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    images: { type: Array, required: false },
    hidden: { type: Boolean, required: false, default: false },
    dir: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export interface homePageDocument extends Document {
  title: string;
  subTitle: string;
  extraTitle: string;
  description: string;
  image: string;
  images: string[];
  hidden: boolean;
  dir: string;
}