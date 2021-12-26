export class Cell {
  isRevealed: boolean = false;
  hasMine: boolean = false;
  place: [number, number] = [0, 0];
  numberOfTouchedBombs?: number = 0;
}

export class Board {
  rows: number;
  columns: number;
  totalNumOfSquares: number;
  board: Cell[][];
  relationalIndicesMap: { row: number; col: number }[];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.totalNumOfSquares = this.rows * this.columns;
    this.board = this.generateBoard();

    this.relationalIndicesMap = [
      { row: -1, col: -1 },
      { row: -1, col: 0 },
      { row: -1, col: 1 },
      { row: 0, col: -1 },
      { row: 0, col: 1 },
      { row: 1, col: -1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
    ];
  }

  generateBoard(): Cell[][] {
    return Array.from({ length: this.rows }, (_, x) =>
      Array.from({ length: this.columns }, (_, y) => {
        const cell = new Cell();
        cell.place = [x, y];
        return cell;
      })
    );
  }

  isInBounds(row: number, col: number) {
    let rowInBounds = row >= 0 && row < this.rows ? true : false;
    let colInBounds = col >= 0 && col < this.columns ? true : false;
    return rowInBounds && colInBounds;
  }
}

export class MineSweeper extends Board {
  difficulty: "1" | "2" | "3" = "1";
  numberOfMines: number;
  mineBoard: Cell[][];

  constructor(
    rows: number,
    columns: number,
    difficulty: "1" | "2" | "3" = "1"
  ) {
    super(rows, columns);
    this.difficulty = difficulty;
    this.numberOfMines = this.determineNumberOfMines();
    this.mineBoard = this.placeMinesOnBoard();
  }

  determineNumberOfMines() {
    let { difficulty, totalNumOfSquares } = this;
    switch (difficulty) {
      case "1":
        return Math.floor(totalNumOfSquares * 0.075);
      case "2":
        return Math.floor(totalNumOfSquares * 0.125);
      case "3":
        return Math.floor(totalNumOfSquares * 0.25);
    }
  }

  placeMinesOnBoard(): Cell[][] {
    let { rows, columns, numberOfMines } = this;
    let board = this.generateBoard();

    // Generate random mine placement
    for (let i = 0; i < numberOfMines; i++) {
      let row = Math.floor(Math.random() * rows);
      let column = Math.floor(Math.random() * columns);
      // If no mine at indices, place mine
      if (board[row][column].hasMine === false) {
        board[row][column].hasMine = true;
      } else {
        i--;
      }
    }
    //Generate proximity numbers
    this.determineMineProximityNumbers(board);

    return board;
  }

  determineMineProximityNumbers(board: Cell[][]) {
    let { rows, columns } = this;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        // Skip over mines
        if (board[row][column].hasMine) {
          continue;
        }

        // Keep track of number of bombs adjacent to current indices
        let numOfBombsInVicinity = 0;

        // Iterate over 8 surround squares
        this.relationalIndicesMap.forEach((relIndex) => {
          let rowToCheck = row + relIndex.row;
          let colToCheck = column + relIndex.col;
          if (!this.isInBounds(rowToCheck, colToCheck)) return;
          if (board[rowToCheck][colToCheck].hasMine) {
            numOfBombsInVicinity++;
          }
        }, this);
        board[row][column].numberOfTouchedBombs = numOfBombsInVicinity;
      }
    }
  }

  getStringrepesntationForTheCell(cell: Cell, showResult: boolean) {
    if (!showResult) {
      if (cell.isRevealed) {
        if (cell.hasMine) return String.fromCharCode(9762);
        return cell.numberOfTouchedBombs;
      }
      return "x";
    }

    if (cell.hasMine) return String.fromCharCode(9762);
    return cell.numberOfTouchedBombs;
  }

  printCurrentGame(showResult: boolean = false) {
    let mineBoardToPrint = ``;
    for (let row of this.mineBoard) {
      const rowToPrint = row.map((cell) =>
        this.getStringrepesntationForTheCell(cell, showResult)
      );
      mineBoardToPrint += rowToPrint.join(" ") + "\n";
    }
    return mineBoardToPrint.trim();
  }

  flatMinesweeperCells(): Cell[] {
    return this.mineBoard.flat();
  }

  static unFlatMineSweeperCells(
    flatMinesweeperCells: any[],
    columns: number
  ): any[][] {
    let nestedMineSweeperCells: any[][] = [];
    let start = 0;
    let end = columns;
    while (end <= flatMinesweeperCells.length) {
      nestedMineSweeperCells.push(flatMinesweeperCells.slice(start, end));
      start += columns;
      end += columns;
    }
    return nestedMineSweeperCells;
  }
}

export class Game {
  id: string;
  status: string;
  board: any;
  constructor(game: any) {
    this.board = {
      columns: game.board.columns,
      rows: game.board.rows,
      cells: MineSweeper.unFlatMineSweeperCells(
        game.board.cells,
        game.board.columns
      ),
    };
    this.status = game.status;
    this.id = game.id;
  }

  isGameWinned(): boolean {
    const { rows, columns, cells } = this.board;
    const requiredNumberToWin =
      columns * rows -
      cells
        .flat()
        .reduce((acc: number, cell: any) => acc + Number(cell.hasMine), 0);
    const revealedCells = cells
      .flat()
      .reduce((acc: number, cell: any) => acc + Number(cell.isRevealed), 0);
    return requiredNumberToWin === revealedCells;
  }
}
