import { application, Express } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

export const setMiddlewares = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan("combined"));
};
