import mongoose, { Schema, Document } from "mongoose";

export interface ITraining extends Document {
  title: string;
  description: string;
  providedBy: string;
  infoUrl: string;
  category: string;
  lengthInHour: number;
  completedSince: string;
  certificateUrl: string;
  badgeUrl: string;
  tags: string[];
}

const trainingSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, "Please input the training title"],
    trim: true,
    maxLength: [300, "Training title cannot exceed 300 characters"],
  },
  description: {
    type: String,
    required: [true, "Please input training description"],
  },
  providedBy: {
    type: String,
    required: [true, "Please input the training provider"],
  },
  infoUrl: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: [true, "Please input the training category"],
  },
  lengthInHour: {
    type: Number,
    required: [true, "Please input the training time in hour"],
  },
  completedSince: {
    type: String,
    required: [true, "Please input the completion date"],
  },
  certificateUrl: {
    type: String,
    required: false,
  },
  badgeUrl: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: [true, "Please input at least one tag"],
  },
});

export default mongoose.models.Training ||
  mongoose.model<ITraining>("Training", trainingSchema);
