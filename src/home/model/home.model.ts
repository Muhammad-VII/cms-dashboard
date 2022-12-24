import { Schema, Document } from 'mongoose';
export interface Media {
  image: string,
  title?: string,
  subTitle?: string,
  description?: string,
}

export const homePageSchema = new Schema(
  {
    title: { type: String, required: false },
    subTitle: { type: String, required: false },
    extraTitle: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    media: { type: Array, required: false },
    hidden: { type: Boolean, required: false, default: false },
    btnHidden: { type: Boolean, required: false, default: false },
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
  media: Media[];
  hidden: boolean;
  btnHidden: boolean;
}
