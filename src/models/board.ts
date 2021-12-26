import { model, Schema } from "mongoose";

export const boardSchema = new Schema(
  {
    rows: {
      type: Number,
      required: true,
    },
    columns: {
      type: Number,
      required: true,
    },
    cells: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cell",
      },
    ],
  },
  { timestamps: true }
);

export const BoardModel = model("Board", boardSchema);
