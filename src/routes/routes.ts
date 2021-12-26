import { Express } from "express";
import gameRouter from "./game";

export const setRoutes = (app: Express) => {
  app.use(gameRouter);
};
