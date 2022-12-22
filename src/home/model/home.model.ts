import { Schema, Document } from 'mongoose';
export interface Media {
  image: string,
  title: string,
  description?: string,
}

export const homePageSchema = new Schema(
  {
    due: { type: {
      title: { type: String, required: false },
      subTitle: { type: String, required: false },
      extraTitle: { type: String, required: false },
      description: { type: String, required: false },
    }, required: false },
    ar: { type: {
      title: { type: String, required: false },
      subTitle: { type: String, required: false },
      extraTitle: { type: String, required: false },
      description: { type: String, required: false },
    }, required: false },
    en: { type: {
      title: { type: String, required: false },
      subTitle: { type: String, required: false },
      extraTitle: { type: String, required: false },
      description: { type: String, required: false },
    }, required: false },
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
  due: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  ar: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  en: {
    title: string;
    subTitle: string;
    extraTitle: string;
    description: string;
  };
  image: string;
  media: Media[];
  hidden: boolean;
  btnHidden: boolean;
}