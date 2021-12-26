import { Schema, model } from "mongoose";

const cellSchema = new Schema(
  {
    hasMine: {
      type: Boolean,
      default: false,
    },
    numberOfTouchedBombs: {
      type: Number,
      default: 0,
    },
    place: [Number],
    isRevealed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const CellModel = model("Cell", cellSchema);
