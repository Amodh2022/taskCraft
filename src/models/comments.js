import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
  taskId: {
    type: Schema.Types.ObjectId,
    ref: "taskSchema",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userSchema",
  },
  comment: {
    type: String,
  },
});

export const comments = mongoose.model("commentsSchema", commentsSchema);
