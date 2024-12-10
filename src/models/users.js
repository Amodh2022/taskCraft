import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      required: true,
      type: String,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const user = mongoose.model("UserSchema", userSchema);
