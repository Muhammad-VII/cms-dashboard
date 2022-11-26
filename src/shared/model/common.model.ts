import { Schema, Document } from 'mongoose';

export const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const addSectionSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: false },
    extraTitle: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export interface contactDocument extends Document {
  name: string;
  email: string;
  message: string;
}

export interface addSectionDocument extends Document {
  title: string;
  subTitle: string;
  extraTitle: string;
  description: string;
  image: string;
}