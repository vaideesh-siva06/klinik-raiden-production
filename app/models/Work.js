import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const { Schema } = mongoose;

const workSchema = new Schema({
  // unique string id for front-end or other stable lookup (generated if not provided)
  id: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
  },

  newRelease: {
    type: Boolean,
    required: false, // optional — only include if true
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
  bookCoverImg : {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // optional: adds createdAt and updatedAt
});

export default mongoose.models.Work || mongoose.model("Work", workSchema);
