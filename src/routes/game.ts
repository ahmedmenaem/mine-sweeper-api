import { Router } from "express";
import { newGame, listGames, moveCell, getGame } from "@controllers";

const router = Router();

router
  .post("/api/v1/games", newGame)
  .get("/api/v1/games", listGames)
  .get("/api/v1/games/:id", getGame)
  .put("/api/v1/games/:id/move", moveCell);

export default router;
