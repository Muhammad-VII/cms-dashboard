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

export interface contactDocument extends Document {
  name: string;
  email: string;
  message: string;
}
