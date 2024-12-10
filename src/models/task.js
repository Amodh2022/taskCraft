import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "ProjectSchema",
    },
    assigneId: {
      type: Schema.Types.ObjectId,
      ref: "UserSchema",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
    },
    priority: {
      type: String,
    },
    dueDate: {
      type: String,
    },
  },
  { timestamps: true }
);

export const task=mongoose.model("taskSchema",taskSchema);
