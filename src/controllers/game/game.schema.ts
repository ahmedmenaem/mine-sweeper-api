import * as Joi from "joi";

export const NewGameRequestBodySchema = Joi.object({
  rows: Joi.number().integer().required(),
  columns: Joi.number().integer().required(),
});

export const MoveCellRequestBodySChema = Joi.object({
  x: Joi.number().integer().required(),
  y: Joi.number().integer().required(),
});
