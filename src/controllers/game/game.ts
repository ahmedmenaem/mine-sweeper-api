import { NextFunction, Request, Response } from "express";
import { MineSweeper, Game } from "../../types/game";
import { BoardModel, CellModel, GameModel } from "@models";
import { Types } from "mongoose";
import {
  NewGameRequestBodySchema,
  MoveCellRequestBodySChema,
} from "./game.schema";

export const newGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = NewGameRequestBodySchema.validate(req.body);
    if (!error) {
      const { rows, columns } = value;

      const newMineSweeperBoard = new MineSweeper(rows, columns, "3");
      const mineBoardCells = newMineSweeperBoard.flatMinesweeperCells();

      const cells = await CellModel.insertMany(mineBoardCells);

      const cellsIds = cells.map((cell) => cell._id);
      const board = new BoardModel({
        columns: columns,
        rows: rows,
        cells: cellsIds,
      });
      await board.save();

      const game = new GameModel({
        board: board._id,
      });
      await game.save();

      res.status(201).json({
        code: 201,
        message: "board created successfully!",
        data: {
          game: {
            _id: game._id,
            statue: game.status,
            board: {
              columns,
              rows,
              cells: MineSweeper.unFlatMineSweeperCells(cells, columns),
            },
          },
        },
      });
    } else {
      res.status(400).json({
        code: 400,
        message: error?.details[0].message,
      });
    }
  } catch (ex) {}
};

export const listGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let games = await GameModel.find().populate({
      path: "board",
      populate: {
        path: "cells",
        model: "Cell",
      },
    });
    games = games.map((game) => new Game(game));
    res.status(200).json({
      code: 200,
      data: { games },
    });
  } catch (ex) {}
};

export const getGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (Types.ObjectId.isValid(id)) {
      const game = await GameModel.findOne({ _id: id }).populate({
        path: "board",
        populate: {
          path: "cells",
          model: "Cell",
        },
      });
      res.status(200).json({
        code: 200,
        data: { game },
        message: "",
      });
    } else {
    }
  } catch (ex) {}
};

export const moveCell = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { value, error } = MoveCellRequestBodySChema.validate(req.body);
    if (!error) {
      const { x, y } = value;
      if (Types.ObjectId.isValid(id)) {
        let game = new Game(
          await GameModel.findOne({ _id: id }).populate({
            path: "board",
            populate: {
              path: "cells",
              model: "Cell",
            },
          })
        );
        if (game && (game.status === "CREATED" || game.status === "ACTIVE")) {
          const { cells, columns, rows } = game.board;
          // check if this is inbound.
          if (rows > x && columns > y) {
            // check if it's a mine
            if (cells[x][y].hasMine) {
              await GameModel.findByIdAndUpdate(id, { status: "LOST" });
              res.status(200).json({
                code: 200,
                message: `Game is over!`,
              });
            }

            cells[x][y].isRevealed = true;

            await CellModel.findByIdAndUpdate(cells[x][y]._id, {
              isRevealed: true,
            });
            if (game.isGameWinned()) {
              await GameModel.findByIdAndUpdate(id, { status: "WINNED" });
              res.status(200).json({
                code: 200,
                message: "Congratulations you wonned!",
              });
            }

            // set game to active mode
            if (game.status === "ACTIVE") {
              await GameModel.findByIdAndUpdate(id, { status: "ACTTIVE" });
            }

            res.status(200).json({
              code: 200,
              data: game,
            });
          } else {
            res.status(400).json({
              code: 400,
              message: "Cell not found!",
            });
          }
        } else {
          res.status(400).json({
            code: 400,
            message: "Game not found!",
          });
        }
      } else {
        res.status(400).json({
          code: 400,
          message: "Invalid game id!",
        });
      }
    } else {
      res.status(400).json({
        code: 400,
        message: error?.details[0].message,
      });
    }
  } catch (ex) {
    next("error");
  }
};
