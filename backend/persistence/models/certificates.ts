import mongoose, { Schema, Document } from "mongoose";

export interface ICertificate extends Document {
  title: string;
  description: string;
  certifiedBy: string;
  certifiedSince: string;
  certificateUrl: string;
  badgeUrl: string;
  tags: string[];
  // relatedTrainingId: []string
  // relatedProjectId: []string
}

const certificateSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, "Please input the certificate title"],
    trim: true,
    maxLength: [300, "Certificate title cannot exceed 300 characters"],
  },
  description: {
    type: String,
    required: [true, "Please input certificate details"],
  },
  certifiedBy: {
    type: String,
    required: [true, "Please input the organization to grant the certificate"],
  },
  certifiedSince: {
    type: String,
    required: [true, "Please input the date certified in format YYYY-MM"],
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
    required: [true, "Please input at lease one tag"],
  },
});

export default mongoose.models.Certificate ||
  mongoose.model<ICertificate>("Certificate", certificateSchema);
