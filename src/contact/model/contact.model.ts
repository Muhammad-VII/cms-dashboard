import { Schema, Document } from 'mongoose';

export const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    subject: { type: String, required: false },
    message: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export interface contactDocument extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}
