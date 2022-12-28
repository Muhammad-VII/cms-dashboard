import { Schema, Document } from 'mongoose';

export const languegesSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    hidden: { type: Boolean, required: true },
    flag: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface languegeDocument extends Document {
  name: string;
  code: string;
  hidden: boolean;
  flag: string;
}
