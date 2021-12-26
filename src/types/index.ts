interface ICell {
  id: string;
  hasMine: boolean;
  place: [number, number];
  numberOfTouchedBombs?: number;
  isRevealed: boolean;
}

interface IBoard {
  id: string;
  rows: number;
  columns: number;
  cells: ICell[][];
}

interface IGame {
  id: string;
  status: "CREATED" | "WINNED" | "LOST" | "ACTVIE";
  board: IBoard;
}
