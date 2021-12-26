import { Schema, model } from "mongoose";

const gameSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["CREATED", "WINNED", "LOST", "ACTVIE"],
      default: "CREATED",
    },
    board: { type: Schema.Types.ObjectId, ref: "Board" },
  },
  { timestamps: true }
);

export const GameModel = model("Game", gameSchema);
