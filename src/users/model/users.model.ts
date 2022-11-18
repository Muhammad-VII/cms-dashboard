import { Schema, Document } from 'mongoose';
import * as bcrypt from 'bcrypt'
export const UsersSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false },
    mobileNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface addUserDocument extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  mobileNumber: string;
}

export interface updateUserDocument extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  mobileNumber: string;
}

UsersSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 7)
  next()
})
