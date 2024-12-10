import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    projectname: {
      type: String,
      required: true,
    },

    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "UserSchema",
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);


export const project=mongoose.model("ProjectSchema",projectSchema)